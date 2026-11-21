import {
  getEmDashCollection,
  getEmDashEntry,
  getTaxonomyTerms,
  decodeSlug,
  type CacheHint,
  type PortableTextBlock,
  type ImageValue,
  type TaxonomyTerm,
} from 'emdash';
import { newsList } from '../data/news';

export interface ArticleMediaCoverage {
  media: string;
  url: string;
}

export interface ArticleCategory {
  slug: string;
  label: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  publishedAtIso: string;
  location?: string;
  author: string;
  category: ArticleCategory;
  tags: ArticleCategory[];
  featuredImage?: ImageValue | string | null;
  imageUrl: string;
  contentBlocks?: PortableTextBlock[] | null;
  legacyParagraphs: string[];
  mediaCoverage: ArticleMediaCoverage[];
  readingMinutes: number;
  source: 'emdash' | 'seed-fallback';
  edit?: unknown;
  seo?: {
    title?: string | null;
    description?: string | null;
    ogImage?: string | null;
    canonical?: string | null;
    robots?: string | null;
  };
}

const INDONESIAN_MONTHS: Record<string, number> = {
  januari: 0,
  februari: 1,
  maret: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  agustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  desember: 11,
};

const KNOWN_CATEGORY_LABELS: Record<string, string> = {
  'kegiatan-konsolidasi': 'Kegiatan & Konsolidasi',
  'kegiatan-sinergi': 'Kegiatan & Sinergi',
  'event-summit': 'Event & Summit',
  'sinergi-kemitraan': 'Sinergi & Kemitraan',
  'siaran-pers': 'Siaran Pers',
  'opini-edukasi': 'Opini & Edukasi',
};

export function toCategorySlug(labelOrSlug: string): string {
  return labelOrSlug
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function parseIndonesianDate(value: unknown): Date {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }
  if (typeof value === 'string' && value.trim()) {
    const trimmed = value.trim();
    const parts = trimmed.toLowerCase().split(/\s+/);
    if (parts.length === 3 && parts[1] in INDONESIAN_MONTHS) {
      const day = Number.parseInt(parts[0], 10);
      const month = INDONESIAN_MONTHS[parts[1]];
      const year = Number.parseInt(parts[2], 10);
      if (!Number.isNaN(day) && !Number.isNaN(year)) {
        return new Date(Date.UTC(year, month, day, 2, 0, 0));
      }
    }
    const parsed = new Date(trimmed);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  return new Date('2024-01-01T02:00:00.000Z');
}

export function formatIndonesianDate(value: unknown): string {
  if (typeof value === 'string' && /^\d{1,2}\s+[A-Za-z]+\s+\d{4}$/.test(value.trim())) {
    return value.trim();
  }
  const date = parseIndonesianDate(value);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  }).format(date);
}

export function resolveMediaUrl(media: unknown, fallback = '/og-image.jpg'): string {
  if (!media) return fallback;
  if (typeof media === 'string') return media.trim() || fallback;
  if (typeof media === 'object') {
    const record = media as Record<string, unknown>;
    if (typeof record.src === 'string' && record.src.trim()) return record.src;
    if (typeof record.previewUrl === 'string' && record.previewUrl.trim()) return record.previewUrl;
    if (record.meta && typeof record.meta === 'object') {
      const metaUrl = (record.meta as Record<string, unknown>).url;
      if (typeof metaUrl === 'string' && metaUrl.trim()) return metaUrl;
    }
    if (typeof record.id === 'string' && record.id.trim()) {
      return `/_emdash/api/media/file/${encodeURIComponent(record.id)}`;
    }
  }
  return fallback;
}

function extractTextFromBlocks(blocks: unknown): string {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .map((block) => {
      if (!block || typeof block !== 'object') return '';
      const record = block as Record<string, unknown>;
      if (Array.isArray(record.children)) {
        return record.children
          .map((child) => (child && typeof child === 'object' ? String((child as Record<string, unknown>).text ?? '') : ''))
          .join(' ');
      }
      if (typeof record.text === 'string') return record.text;
      if (typeof record.caption === 'string') return record.caption;
      return '';
    })
    .join(' ');
}

export function estimateReadingMinutes(
  blocks?: unknown,
  legacyParagraphs?: string[],
): number {
  const blockText = extractTextFromBlocks(blocks);
  const combined = `${blockText} ${(legacyParagraphs ?? []).join(' ')}`.trim();
  const words = combined ? combined.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 190));
}

function safeDecodeSlug(rawSlug: string): string {
  try {
    return decodeSlug(rawSlug);
  } catch {
    return rawSlug;
  }
}

function getPostAuthor(data: Record<string, unknown>): string {
  const bylines = data.bylines;
  if (Array.isArray(bylines) && bylines.length > 0) {
    const first = bylines[0] as Record<string, unknown> | undefined;
    const nested = first?.byline as Record<string, unknown> | undefined;
    if (typeof nested?.displayName === 'string' && nested.displayName.trim()) {
      return nested.displayName;
    }
    if (typeof first?.displayName === 'string' && first.displayName.trim()) {
      return first.displayName;
    }
  }
  const byline = data.byline as Record<string, unknown> | undefined;
  if (typeof byline?.displayName === 'string' && byline.displayName.trim()) {
    return byline.displayName;
  }
  if (typeof data.author === 'string' && data.author.trim()) {
    return data.author;
  }
  return 'Tim Redaksi FWP';
}

function getHydratedTerms(
  data: Record<string, unknown>,
  taxonomyName: 'category' | 'tag',
): ArticleCategory[] {
  const termsMap = data.terms as Record<string, unknown> | undefined;
  const rawList = termsMap?.[taxonomyName];
  if (!Array.isArray(rawList)) return [];
  return rawList
    .filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'))
    .map((term) => ({
      slug: String(term.slug ?? ''),
      label: String(term.label ?? term.name ?? term.slug ?? ''),
    }))
    .filter((term) => term.slug.length > 0);
}

function sanitizeMediaCoverage(raw: unknown): ArticleMediaCoverage[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => Boolean(item && typeof item === 'object'))
    .map((item) => ({
      media: String(item.media ?? '').trim(),
      url: String(item.url ?? '').trim(),
    }))
    .filter((item) => item.media.length > 0 && /^https?:\/\//i.test(item.url));
}

function normalizeEmDashPost(entry: {
  id: string;
  data: Record<string, unknown>;
  edit?: unknown;
}): ArticleItem {
  const data = entry.data ?? {};
  const slug = safeDecodeSlug(String(data.slug ?? entry.id));
  const rawDate = data.published_date ?? data.publishedAt ?? data.createdAt;
  const parsedDate = parseIndonesianDate(rawDate);
  const categories = getHydratedTerms(data, 'category');
  const category = categories[0] ?? {
    slug: 'siaran-pers',
    label: KNOWN_CATEGORY_LABELS['siaran-pers'],
  };
  const tags = getHydratedTerms(data, 'tag');
  const contentBlocks = Array.isArray(data.content)
    ? (data.content as PortableTextBlock[])
    : null;
  const fallbackBody =
    typeof data.content === 'string'
      ? data.content.split('\n\n').map((p) => p.trim()).filter(Boolean)
      : [];
  const featuredImage = (data.featured_image as ImageValue | string | undefined) ?? null;
  const imageUrl = resolveMediaUrl(featuredImage, '/og-image.jpg');
  const seoRaw = (data.seo && typeof data.seo === 'object' ? data.seo : undefined) as
    | Record<string, unknown>
    | undefined;

  return {
    id: String(data.id ?? entry.id),
    slug,
    title: String(data.title ?? 'Artikel Forum Wakaf Produktif'),
    excerpt: String(data.excerpt ?? ''),
    dateLabel: formatIndonesianDate(parsedDate),
    publishedAtIso: parsedDate.toISOString(),
    location: typeof data.location === 'string' && data.location.trim() ? data.location.trim() : undefined,
    author: getPostAuthor(data),
    category,
    tags,
    featuredImage,
    imageUrl,
    contentBlocks,
    legacyParagraphs: fallbackBody,
    mediaCoverage: sanitizeMediaCoverage(data.media_coverage),
    readingMinutes: estimateReadingMinutes(contentBlocks, fallbackBody),
    source: 'emdash',
    edit: entry.edit,
    seo: seoRaw
      ? {
          title: typeof seoRaw.title === 'string' ? seoRaw.title : null,
          description: typeof seoRaw.description === 'string' ? seoRaw.description : null,
          ogImage: typeof seoRaw.ogImage === 'string' ? seoRaw.ogImage : null,
          canonical: typeof seoRaw.canonical === 'string' ? seoRaw.canonical : null,
          robots: typeof seoRaw.robots === 'string' ? seoRaw.robots : null,
        }
      : undefined,
  };
}

function normalizeFallbackPost(raw: (typeof newsList)[number]): ArticleItem {
  const parsedDate = parseIndonesianDate(raw.date);
  const catSlug = toCategorySlug(raw.category || 'siaran-pers');
  const legacyParagraphs = (raw.content ?? '')
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return {
    id: raw.id,
    slug: raw.id,
    title: raw.title,
    excerpt: raw.excerpt,
    dateLabel: raw.date,
    publishedAtIso: parsedDate.toISOString(),
    author: raw.author || 'Admin FWP',
    category: {
      slug: catSlug,
      label: KNOWN_CATEGORY_LABELS[catSlug] ?? raw.category,
    },
    tags: [],
    featuredImage: raw.imageUrl || '/og-image.jpg',
    imageUrl: raw.imageUrl || '/og-image.jpg',
    contentBlocks: null,
    legacyParagraphs,
    mediaCoverage: sanitizeMediaCoverage(raw.mediaCoverage),
    readingMinutes: estimateReadingMinutes(null, legacyParagraphs),
    source: 'seed-fallback',
  };
}

export async function getAllArticles(options?: {
  categorySlug?: string;
  searchQuery?: string;
  limit?: number;
}): Promise<{
  articles: ArticleItem[];
  categories: Array<{ slug: string; label: string; count: number }>;
  cacheHint?: CacheHint;
  usingFallback: boolean;
}> {
  let cmsEntries: ArticleItem[] = [];
  let cacheHint: CacheHint | undefined;
  let cmsCategories: Array<{ slug: string; label: string }> = [];

  try {
    const [collectionRes, termsRes] = await Promise.all([
      getEmDashCollection('posts', { status: 'published', limit: 100 }),
      getTaxonomyTerms('category', { includeCounts: false }).catch((): TaxonomyTerm[] => []),
    ]);

    if (!collectionRes.error && Array.isArray(collectionRes.entries)) {
      cmsEntries = collectionRes.entries.map((entry) =>
        normalizeEmDashPost({
          id: entry.id,
          data: (entry.data ?? {}) as Record<string, unknown>,
          edit: entry.edit,
        }),
      );
      cacheHint = collectionRes.cacheHint;
    }

    if (Array.isArray(termsRes)) {
      cmsCategories = termsRes.map((t) => ({ slug: t.slug, label: t.label }));
    }
  } catch {
    // Database might not be initialized yet (before EmDash Setup Wizard runs); fall back cleanly.
  }

  const seenSlugs = new Set(cmsEntries.map((item) => item.slug));
  const fallbackEntries = newsList
    .filter((item) => !seenSlugs.has(item.id))
    .map(normalizeFallbackPost);

  const mergedAll = [...cmsEntries, ...fallbackEntries].sort(
    (a, b) => new Date(b.publishedAtIso).getTime() - new Date(a.publishedAtIso).getTime(),
  );

  // Build category pill list with counts from unfiltered merged items
  const categoryCountMap = new Map<string, { slug: string; label: string; count: number }>();
  for (const cat of cmsCategories) {
    categoryCountMap.set(cat.slug, { slug: cat.slug, label: cat.label, count: 0 });
  }
  for (const item of mergedAll) {
    const existing = categoryCountMap.get(item.category.slug);
    if (existing) {
      existing.count += 1;
    } else {
      categoryCountMap.set(item.category.slug, {
        slug: item.category.slug,
        label: item.category.label,
        count: 1,
      });
    }
  }
  const categories = [...categoryCountMap.values()].filter((c) => c.count > 0);

  let filtered = mergedAll;
  const requestedCategory = options?.categorySlug?.trim().toLowerCase();
  if (requestedCategory && requestedCategory !== 'semua') {
    filtered = filtered.filter((item) => item.category.slug.toLowerCase() === requestedCategory);
  }

  const query = options?.searchQuery?.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter((item) => {
      const haystack = [
        item.title,
        item.excerpt,
        item.category.label,
        item.location ?? '',
        item.author,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(query);
    });
  }

  const articles =
    typeof options?.limit === 'number' && options.limit > 0
      ? filtered.slice(0, options.limit)
      : filtered;

  return {
    articles,
    categories,
    cacheHint,
    usingFallback: cmsEntries.length === 0,
  };
}

export async function getArticleBySlug(slug: string): Promise<{
  article: ArticleItem | null;
  isPreview: boolean;
  cacheHint?: CacheHint;
}> {
  try {
    const result = await getEmDashEntry('posts', slug);
    if (!result.error && result.entry) {
      const normalized = normalizeEmDashPost({
        id: result.entry.id,
        data: (result.entry.data ?? {}) as Record<string, unknown>,
        edit: result.entry.edit,
      });
      return {
        article: normalized,
        isPreview: result.isPreview,
        cacheHint: result.cacheHint,
      };
    }
  } catch {
    // Fall through to static seed fallback if EmDash DB is not initialized yet.
  }

  const fallbackMatch = newsList.find((item) => item.id === slug);
  if (fallbackMatch) {
    return {
      article: normalizeFallbackPost(fallbackMatch),
      isPreview: false,
    };
  }

  return {
    article: null,
    isPreview: false,
  };
}

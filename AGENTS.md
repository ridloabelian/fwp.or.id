# fwp.or.id

Forum Wakaf Produktif — Official Portal.

## Purpose

Portal resmi multi-halaman (SSR + CMS) untuk Forum Wakaf Produktif (FWP). Memimpin transformasi nasional wakaf tunai, direktori nazhir, prospektus proyek, serta portal berita/publikasi redaksi menuju Indonesia Emas 2045.

## Tech Stack

- **Framework:** Astro 7 (`output: "server"`), React 19 Islands, TypeScript / ES Modules
- **CMS:** EmDash CMS (`emdash@1.5.0` + `@emdash-cms/cloudflare@1.5.0`)
- **Styling:** Vanilla CSS3 (`src/styles/tokens.css`, `src/styles/global.css`, `src/styles/prose.css`) — **tanpa TailwindCSS**
- **Animation & Icons:** Framer Motion (React islands), Lucide React
- **Hosting & Storage:** Cloudflare Workers (`@astrojs/cloudflare`), D1 (`DB`), R2 (`MEDIA`), KV (`SESSION`), Cloudflare Images (`IMAGES`), Durable Objects (`EMDASH_ROOMS`)

## Key Features

- **EmDash CMS Redaksi (`/admin` -> `/_emdash/admin`):** Manajemen artikel berita/publikasi (`posts`), halaman dinamis (`pages`), kategori/tag, media library R2, preview draf, multi-user admin/pengurus dengan Passkey auth, serta SEO & JSON-LD otomatis (`<EmDashHead>`).
- **Portal Berita & Redaksi (`/berita`, `/berita/[slug]`):** Kueri server live dari EmDash D1 dengan deduplicated fallback ke `src/data/news.js`, filter kategori, pencarian, share bar, dan liputan media terkait.
- **Direktori Pusat Nazhir & Prospektus:** 49 lembaga nazhir berizin STBPN BWI, business matching prospektus, transparansi & sebaran wilayah, keanggotaan kelembagaan, serta hub Waqf Leaders Summit 2026.

## Commands

```bash
npm install                               # Install dependencies
npm run dev                               # Start Astro + EmDash dev server
npm run typecheck                         # Run astro check (TypeScript)
npm run lint                              # Run ESLint across src/
npm run build                             # Build SSR Worker bundle + assets
npx emdash seed seed/seed.json --validate # Validate EmDash seed schema & content
npx wrangler deploy                       # Deploy Worker + assets to Cloudflare
```

## Key Conventions

- Gunakan **Vanilla CSS3 design tokens** (`tokens.css` / `global.css`); **jangan menambahkan TailwindCSS**.
- Semua kueri EmDash (`getEmDashCollection`, `getEmDashEntry`, `getTaxonomyTerms`) diakses melalui layer `src/lib/articles.ts` (aman dengan `try/catch` sebelum inisialisasi awal D1).
- Jangan pernah meng-commit `.env`, `.env.local`, `.dev.vars`, `.wrangler/`, `data.db*`, atau `uploads/` ke Git.

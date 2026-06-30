const HOME = {
  title: 'Forum Wakaf Produktif — Transformasi Wakaf Produktif Indonesia',
  description:
    'Forum Wakaf Produktif mengorkestrasi ekosistem wakaf produktif nasional menuju Indonesia Emas 2045. Advokasi, sertifikasi, dan business matching nazhir.',
  url: 'https://fwp.or.id/',
  image: 'https://fwp.or.id/og-image.jpg',
  imageAlt: 'Forum Wakaf Produktif',
};

const WLS2026 = {
  title: 'WLS 2026 — Waqf Leaders Summit | Forum Wakaf Produktif',
  description:
    'Waqf Leaders Summit 2026: 22–23 Juli 2026 di Holiday Inn Bandung. Forum strategis pemimpin wakaf, regulator, akademisi, dan praktisi.',
  url: 'https://fwp.or.id/wls2026',
  image: 'https://fwp.or.id/og-wls2026.jpg',
  imageAlt: 'Waqf Leaders Summit 2026',
};

function pickMeta(pathname) {
  if (pathname === '/wls2026' || pathname.startsWith('/wls2026/')) return WLS2026;
  return HOME;
}

function upsertMeta(html, meta) {
  const tags = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}">
    <link rel="canonical" href="${meta.url}">
    <meta property="og:site_name" content="Forum Wakaf Produktif">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${meta.url}">
    <meta property="og:image" content="${meta.image}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:alt" content="${meta.imageAlt}">
    <meta property="og:locale" content="id_ID">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${meta.url}">
    <meta name="twitter:title" content="${meta.title}">
    <meta name="twitter:description" content="${meta.description}">
    <meta name="twitter:image" content="${meta.image}">
    <meta name="twitter:image:alt" content="${meta.imageAlt}">
  `;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, '');
  html = html.replace(/<meta\s+name="description"[\s\S]*?>/gi, '');
  html = html.replace(/<link\s+rel="canonical"[\s\S]*?>/gi, '');
  html = html.replace(/<meta\s+(property|name)="(?:og|twitter):[^\"]+"[\s\S]*?>/gi, '');
  html = html.replace('</head>', `${tags}\n  </head>`);
  return html;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get('content-type') || '';

    if (!contentType.includes('text/html')) return response;

    const html = await response.text();
    const meta = pickMeta(url.pathname);
    const updated = upsertMeta(html, meta);
    return new Response(updated, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  },
};

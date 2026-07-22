import { promises as fs } from 'fs';
import path from 'path';

const newsArticles = [
  {
    id: 'wls-2026-satukan-pemimpin-nazhir',
    title: 'Waqf Leaders Summit 2026 Satukan Pemimpin Nazhir untuk Memperbesar Dampak Wakaf Produktif | Forum Wakaf Produktif',
    excerpt: 'Forum Wakaf Produktif menggelar WLS 2026 di Bandung dengan menghadirkan 53 delegasi untuk memperkuat kolaborasi dan dampak wakaf produktif nasional.',
    imageUrl: 'https://fwp.or.id/og-image.jpg'
  },
  {
    id: 'fwp-oic-youth-d8-expo-2026',
    title: 'Dorong Kolaborasi Talenta & Inovasi Berkelanjutan di D-8 Halal Expo 2026, FWP dan OIC Youth Indonesia Siapkan Mesin Baru Pembangunan | Forum Wakaf Produktif',
    excerpt: 'Forum Wakaf Produktif (FWP) bersama OIC Youth Indonesia menyepakati kolaborasi strategis dalam pengembangan talenta muda dan inovasi keuangan sosial Islam pada D-8 Halal Expo Indonesia 2026.',
    imageUrl: 'https://i0.wp.com/faktanesia.id/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-14-at-16.55.39.jpeg?w=1032&ssl=1'
  },
  {
    id: 'wls-2026-pendaftaran-ditutup',
    title: 'Resmi Ditutup! Pendaftaran Waqf Leaders Summit 2026 Capai Target 53 Peserta Nasional | Forum Wakaf Produktif',
    excerpt: 'Pendaftaran Waqf Leaders Summit 2026 resmi ditutup dengan total 53 peserta dari berbagai lembaga nazhir, regulator, dan BSI.',
    imageUrl: 'https://i0.wp.com/faktanesia.id/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-17-at-10.31.33-1.jpeg?w=1280&ssl=1'
  }
];

async function generateStaticFiles() {
  const distDir = path.resolve('dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  try {
    const htmlContent = await fs.readFile(indexHtmlPath, 'utf8');

    // 1. Generate /wls2026
    const wlsDir = path.join(distDir, 'wls2026');
    let wlsHtml = htmlContent
      .replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="Waqf Leaders Summit 2026 | Forum Wakaf Produktif">')
      .replace(/<title>[^<]*<\/title>/, '<title>Waqf Leaders Summit 2026 | Forum Wakaf Produktif</title>')
      .replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="Waqf Leaders Summit 2026: Forum strategis pimpinan lembaga nazhir nasional untuk mengeskalasi dampak wakaf produktif. 22-23 Juli 2026, Holiday Inn Pasteur, Bandung.">')
      .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Waqf Leaders Summit 2026: Forum strategis pimpinan lembaga nazhir nasional untuk mengeskalasi dampak wakaf produktif. 22-23 Juli 2026, Holiday Inn Pasteur, Bandung.">')
      .replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="https://fwp.or.id/wls2026">')
      .replace(/<meta property="og:image" content="[^"]*">/, '<meta property="og:image" content="https://fwp.or.id/og-image.jpg">');

    await fs.mkdir(wlsDir, { recursive: true });
    await fs.writeFile(path.join(wlsDir, 'index.html'), wlsHtml, 'utf8');
    console.log('Successfully generated static index.html for /wls2026');

    // 2. Generate /publikasi (List View fallback)
    const publicationsDir = path.join(distDir, 'publikasi');
    await fs.mkdir(publicationsDir, { recursive: true });
    await fs.writeFile(path.join(publicationsDir, 'index.html'), htmlContent, 'utf8');
    console.log('Successfully generated static index.html for /publikasi');

    // 2b. Generate /berita + article routes (mirror of /publikasi)
    const beritaDir = path.join(distDir, 'berita');
    await fs.mkdir(beritaDir, { recursive: true });
    await fs.writeFile(path.join(beritaDir, 'index.html'), htmlContent, 'utf8');
    console.log('Successfully generated static index.html for /berita');

    // 2c. Generate simple static fallbacks for new top-level routes
    const simpleRoutes = [

      'keanggotaan',
      'daftar-anggota',
      'tentang-kami',
      'tentang-kami/sejarah',
      'tentang-kami/legalitas',
      'tentang-kami/struktur',
    ];
    for (const route of simpleRoutes) {
      const routeDir = path.join(distDir, route);
      await fs.mkdir(routeDir, { recursive: true });
      await fs.writeFile(path.join(routeDir, 'index.html'), htmlContent, 'utf8');
      console.log(`Successfully generated static index.html for /${route}`);
    }

    // 3. Generate News Static Dirs (for Social Sharing Crawlers)
    for (const article of newsArticles) {
      for (const prefix of ['publikasi', 'berita']) {
        const articleDir = path.join(distDir, prefix, article.id);
      let articleHtml = htmlContent
        .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${article.title}">`)
        .replace(/<title>[^<]*<\/title>/, `<title>${article.title}</title>`)
        .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${article.excerpt}">`)
        .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${article.excerpt}">`)
        .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="https://fwp.or.id/${prefix}/${article.id}">`)
        .replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${article.imageUrl}">`);

      await fs.mkdir(articleDir, { recursive: true });
      await fs.writeFile(path.join(articleDir, 'index.html'), articleHtml, 'utf8');
      console.log(`Successfully generated static index.html for /${prefix}/${article.id}`);
      }
    }

  } catch (err) {
    console.error('Error generating static files:', err);
    process.exit(1);
  }
}

generateStaticFiles();

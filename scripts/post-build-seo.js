import { promises as fs } from 'fs';
import path from 'path';

async function generateStaticFiles() {
  const distDir = path.resolve('dist');
  const indexHtmlPath = path.join(distDir, 'index.html');
  const targetDir = path.join(distDir, 'wls2026');

  try {
    const htmlContent = await fs.readFile(indexHtmlPath, 'utf8');

    // Update index.html meta tags inside head for the root index
    // But keep it default for normal homepage.
    // For /wls2026, we create a subdirectory 'wls2026' and put modified 'index.html' there.
    
    let wlsHtml = htmlContent;
    
    // Replace OpenGraph title
    wlsHtml = wlsHtml.replace(
      /<meta property="og:title" content="[^"]*">/,
      '<meta property="og:title" content="Waqf Leaders Summit 2026 | Forum Wakaf Produktif">'
    );
    wlsHtml = wlsHtml.replace(
      /<title>[^<]*<\/title>/,
      '<title>Waqf Leaders Summit 2026 | Forum Wakaf Produktif</title>'
    );
    
    // Replace OpenGraph description
    wlsHtml = wlsHtml.replace(
      /<meta property="og:description" content="[^"]*">/,
      '<meta property="og:description" content="Waqf Leaders Summit 2026: Forum strategis pimpinan lembaga nazhir nasional untuk mengeskalasi dampak wakaf produktif. 22-23 Juli 2026, Holiday Inn Pasteur, Bandung.">'
    );
    wlsHtml = wlsHtml.replace(
      /<meta name="description" content="[^"]*">/,
      '<meta name="description" content="Waqf Leaders Summit 2026: Forum strategis pimpinan lembaga nazhir nasional untuk mengeskalasi dampak wakaf produktif. 22-23 Juli 2026, Holiday Inn Pasteur, Bandung.">'
    );

    // Replace OpenGraph URL
    wlsHtml = wlsHtml.replace(
      /<meta property="og:url" content="[^"]*">/,
      '<meta property="og:url" content="https://fwp.or.id/wls2026">'
    );

    // Replace OpenGraph Image (ensure it points to the specific OG image for WLS if any, otherwise default og-image.jpg)
    wlsHtml = wlsHtml.replace(
      /<meta property="og:image" content="[^"]*">/,
      '<meta property="og:image" content="https://fwp.or.id/og-image.jpg">'
    );

    // Create target dir and write index.html inside it
    await fs.mkdir(targetDir, { recursive: true });
    await fs.writeFile(path.join(targetDir, 'index.html'), wlsHtml, 'utf8');

    console.log('Successfully generated static index.html for /wls2026 with correct meta tags.');
  } catch (err) {
    console.error('Error generating static files:', err);
    process.exit(1);
  }
}

generateStaticFiles();

import fs from 'node:fs/promises';
import path from 'node:path';

const ROUTES = ['/', '/privacidad', '/terminos'];

const getBaseUrl = () => {
  const direct =
    process.env.VITE_SITE_URL ||
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    process.env.NETLIFY_URL;

  if (direct) return direct;

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return '';
};

const normalizeBaseUrl = (raw) => {
  if (!raw) return '';
  const trimmed = raw.trim();
  if (!trimmed) return '';
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return withScheme.replace(/\/+$/, '');
};

const toAbsoluteUrl = (baseUrl, route) => {
  if (route === '/') return `${baseUrl}/`;
  return `${baseUrl}${route}`;
};

const formatIsoDate = (date) => date.toISOString().slice(0, 10);

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, 'public');

const main = async () => {
  const baseUrl = normalizeBaseUrl(getBaseUrl());
  const today = formatIsoDate(new Date());

  await fs.mkdir(publicDir, { recursive: true });

  const robotsLines = ['User-agent: *', 'Allow: /'];
  if (baseUrl) robotsLines.push('', `Sitemap: ${baseUrl}/sitemap.xml`);
  robotsLines.push('');
  await fs.writeFile(path.join(publicDir, 'robots.txt'), robotsLines.join('\n'), 'utf8');

  if (!baseUrl) {
    return;
  }

  const urls = ROUTES.map((route) => {
    const loc = toAbsoluteUrl(baseUrl, route);
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      '    <changefreq>weekly</changefreq>',
      '    <priority>0.8</priority>',
      '  </url>',
    ].join('\n');
  }).join('\n');

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  await fs.writeFile(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
};

main();


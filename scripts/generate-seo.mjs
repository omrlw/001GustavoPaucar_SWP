import fs from 'node:fs/promises';
import path from 'node:path';
import { SEO_PAGES } from '../src/data/seoPages.js';

const ROUTES = ['/', '/privacidad', '/terminos', ...SEO_PAGES.map((page) => page.path)];
const CANONICAL_HOST = 'www.galenesalud.com';
const FALLBACK_BASE_URL = `https://${CANONICAL_HOST}`;

const getBaseUrl = () => {
  const direct =
    process.env.VITE_SITE_URL ||
    process.env.PUBLIC_SITE_URL ||
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

const canonicalizeBaseUrl = (baseUrl) => {
  if (!baseUrl) return '';
  try {
    const url = new URL(baseUrl);
    if (url.hostname === 'galenesalud.com') {
      url.hostname = CANONICAL_HOST;
    }
    if (url.hostname === CANONICAL_HOST) {
      url.protocol = 'https:';
    }
    return url.toString().replace(/\/$/, '');
  } catch {
    return baseUrl;
  }
};

const toAbsoluteUrl = (baseUrl, route) => {
  if (route === '/') return `${baseUrl}/`;
  return `${baseUrl}${route}`;
};

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, 'public');

const main = async () => {
  const baseUrl = canonicalizeBaseUrl(normalizeBaseUrl(getBaseUrl() || FALLBACK_BASE_URL));

  await fs.mkdir(publicDir, { recursive: true });

  const robotsLines = ['User-agent: *', 'Allow: /'];
  if (baseUrl) robotsLines.push(`Sitemap: ${baseUrl}/sitemap.xml`);
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

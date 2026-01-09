import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = (process.env.VITE_SITE_URL || process.env.PUBLIC_SITE_URL || 'https://www.galenesalud.com')
  .replace(/\/+$/, '');

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  site: siteUrl,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

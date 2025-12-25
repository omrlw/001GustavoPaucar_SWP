import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  site: process.env.VITE_SITE_URL,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

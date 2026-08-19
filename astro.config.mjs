import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Org Pages site: served from the DOMAIN ROOT, unlike fetiai/magic-cube, which lives
  // at the /magic-cube subpath and needs a base. Every asset path here is root-absolute.
  site: 'https://fetiai.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});

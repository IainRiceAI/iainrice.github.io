import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://YOUR-GITHUB-USERNAME.github.io',
  integrations: [sitemap()],
});

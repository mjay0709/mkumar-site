// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mkumar.xyz',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Keep test/utility pages out of the sitemap
      filter: (page) => !page.includes('/book-demo'),
    }),
  ]
});
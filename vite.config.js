import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { buildStaticSeoHtml, SEO_DESCRIPTION, SEO_TITLE, SITE_URL, STRUCTURED_DATA_JSON } from './src/config/seo.js';

function injectSeoShell() {
  return {
    name: 'inject-seo-shell',
    transformIndexHtml(html) {
      const staticShell = buildStaticSeoHtml();
      let next = html.replace('<div id="root"></div>', `<div id="root">${staticShell}</div>`);
      next = next.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
        `<script type="application/ld+json">${STRUCTURED_DATA_JSON}</script>`,
      );
      return next;
    },
  };
}

export default defineConfig({
  plugins: [react(), injectSeoShell()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
          gsap: ['gsap'],
        },
      },
    },
  },
});

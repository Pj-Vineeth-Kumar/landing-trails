import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildStaticSeoHtml, SEO_DESCRIPTION, SEO_TITLE, SITE_URL, STRUCTURED_DATA_JSON } from './src/config/seo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

/** SPA fallback for static hosts: emit 404.html (GitHub Pages / many CDNs)
 *  and _redirects (Netlify) so deep links like /platform resolve to the app. */
function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const dist = path.resolve(__dirname, 'dist');
      const index = path.join(dist, 'index.html');
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.join(dist, '404.html'));
        fs.writeFileSync(path.join(dist, '_redirects'), '/*    /index.html   200\n');
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), injectSeoShell(), spaFallback()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
          gsap: ['gsap'],
          router: ['react-router-dom'],
        },
      },
    },
  },
});

import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; // ✅ root import

export default defineConfig({
  output: 'server',                 // SSR
  adapter: netlify({ mode: 'functions' }), // ✅ Netlify Functions
  // integrations: [ ... ]          // keep anything else you already have
});


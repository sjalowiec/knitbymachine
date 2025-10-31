// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: netlify(),
  server: {
    port: 5000,
    host: true
  },
  vite: {
    server: {
      host: true,
      strictPort: false,
      allowedHosts: [
        '.replit.dev',
        'localhost'
      ]
    }
  }
});

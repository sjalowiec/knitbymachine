// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
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

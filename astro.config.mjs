// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
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

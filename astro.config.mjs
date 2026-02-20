// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: process.env.SITE_URL || 'https://mariska-goebel-coaching.vercel.app',
  integrations: [sitemap()],
});

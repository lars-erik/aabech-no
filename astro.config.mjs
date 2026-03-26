import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';

export default defineConfig({
  site: 'https://lars-erik.github.io',
  base: '/aabech-no',
  integrations: [lit()],
  output: 'static',
});

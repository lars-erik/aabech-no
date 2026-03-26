import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';

export default defineConfig({
  site: 'https://lars-erik.github.io',
  integrations: [lit()],
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});

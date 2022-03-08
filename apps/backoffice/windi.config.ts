import { defineConfig } from 'windicss/helpers';

// https://windicss.org/guide/configuration.html
export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
  },
  presets: [import('../../windi.config')],
});

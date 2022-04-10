import { defineConfig } from 'windicss/helpers';
import defaultPreset from '../../windi.config';

// https://windicss.org/guide/configuration.html
export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
  },
  theme: { ...defaultPreset.theme },
});

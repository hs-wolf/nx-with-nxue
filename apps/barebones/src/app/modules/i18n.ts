import { createI18n } from 'vue-i18n';
import type { UserModule } from '@src/types';

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(
    ([key, value]) => {
      const yaml = key.endsWith('.yaml');
      return [key.slice(14, yaml ? -5 : -4), value.default];
    }
  )
);

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
});

export const install: UserModule = ({ app }) => {
  app.use(i18n);
  console.log('Installed i18n.');
};

export default i18n;

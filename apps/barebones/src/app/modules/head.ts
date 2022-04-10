import { createHead } from '@vueuse/head';
import { UserModule } from '@src/types';

export const install: UserModule = ({ app }) => {
  const head = createHead();
  app.use(head);
  console.log('Installed @vueuse/head.');
};

import { createPinia } from 'pinia';
import { UserModule } from '@src/types';

export const install: UserModule = ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
  console.log('Installed Pinia.');
};

import NProgress from 'nprogress';
import { UserModule } from '@src/types';

export const install: UserModule = ({ router }) => {
  router.beforeEach(() => {
    NProgress.start();
  });
  router.afterEach(() => {
    NProgress.done();
  });
  console.log('Installed nprogress.');
};

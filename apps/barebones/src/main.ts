import { createApp } from 'vue';
import App from './App.vue';
import { routes, router } from '@src/app/modules/router';
import 'virtual:windi.css';
import '@src/assets/css/nprogress.css';
import '@src/assets/css/style.css';

const app = createApp(App);

app.use(router);

const modules = import.meta.globEager('./app/modules/*.ts');
Object.values(modules).map((i) => {
  i.install?.({ app, router, routes });
});

app.mount('#app');

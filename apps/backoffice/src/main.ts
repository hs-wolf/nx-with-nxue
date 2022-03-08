import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import 'virtual:windi.css';
import '@src/assets/css/nprogress.css';
import '@src/assets/css/style.css';

const app = createApp(App);

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-green-500',
});
app.use(router);

const modules = import.meta.globEager('./app/modules/*.ts');
Object.values(modules).map((i) => {
  i.install?.({ app, router, routes });
});

app.mount('#app');

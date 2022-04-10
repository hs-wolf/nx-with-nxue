import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4001,
  },
  publicDir: path.resolve(__dirname, 'src/public'),
  resolve: {
    alias: {
      '@src/': `${path.resolve(__dirname, './src')}/`,
    },
  },
  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    Vue({
      include: [/\.vue$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
      dirs: 'src/app/pages',
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      defaultLayout: 'default',
      layoutsDirs: 'src/app/layouts',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [IconsResolver({ prefix: 'icon' })],
      dirs: ['src/app/components'],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'src/locales/**')],
    }),

    // https://github.com/windicss/vite-plugin-windicss
    WindiCSS({}),
  ],
});

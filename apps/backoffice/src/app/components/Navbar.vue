<script setup lang="ts">
import { useLocalesStore } from '@src/app/stores';

const localesStore = useLocalesStore();
const { locale, availableLocales } = useI18n();

const currentLocaleIndex = ref(0);

const changeLocale = () => {
  if (currentLocaleIndex.value + 1 > availableLocales.length - 1) {
    currentLocaleIndex.value = 0;
  } else {
    currentLocaleIndex.value += 1;
  }
  locale.value = availableLocales[currentLocaleIndex.value];
  if (locale.value === 'he') {
    localesStore.changeAppDirection('rtl');
    return;
  }
  localesStore.changeAppDirection('ltr');
};
</script>

<template>
  <div class="flex justify-center gap-4 text-gray-400 text-2xl">
    <router-link to="/">
      <icon-carbon:home />
    </router-link>
    <router-link :to="{ name: 'features' }">
      <icon-carbon:list-checked />
    </router-link>
    <button @click.prevent="changeLocale()">
      <icon-carbon:language />
    </button>
    <a href="https://github.com/josh-israel/nx-with-nxue" target="_blank">
      <icon-carbon:logo-github />
    </a>
  </div>
</template>

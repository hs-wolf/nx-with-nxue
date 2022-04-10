<script setup lang="ts">
import { useLocalesStore } from '@src/app/stores';

const localesStore = useLocalesStore();
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-4 h-screen justify-center items-center">
    <div class="flex gap-4 text-2xl">
      <button @click.prevent="localesStore.changeLocale('en')">
        <icon-emojione:flag-for-united-kingdom />
      </button>
      <button @click.prevent="localesStore.changeLocale('he')">
        <icon-emojione:flag-for-israel />
      </button>
    </div>
    <span>{{ t('hello-world') }}</span>
  </div>
</template>

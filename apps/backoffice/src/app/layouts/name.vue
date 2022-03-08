<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-8 p-8 md:(p-16)">
    <div class="flex flex-col gap-4">
      <div class="flex justify-center items-center gap-4">
        <icon-logos-vue />
        <icon-logos-nx class="text-2xl" />
        <icon-logos-vitejs />
        <h1 class="text-3xl font-bold">Nxue</h1>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text italic">{{ t('name-layout.title') }}</h1>
      </div>
      <span class="text-sm text-gray-600">{{ t('name-layout.layout') }}</span>
    </div>
    <router-view />
  </div>
</template>

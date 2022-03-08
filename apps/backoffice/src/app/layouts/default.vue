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
        <h1 class="text-3xl text-gray-400 font-bold">Nxue</h1>
      </div>
      <h1 class="text italic">
        {{ t('default-layout.title') }}
      </h1>
      <span class="text-sm text-gray-600">
        {{ t('default-layout.layout') }}
      </span>
    </div>
    <Navbar />
    <router-view />
  </div>
</template>

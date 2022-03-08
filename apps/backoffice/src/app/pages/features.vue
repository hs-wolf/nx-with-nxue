<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-8">
    <span class="text-sm text-gray-600">{{ t('features.title') }}</span>
    <div class="flex flex-col gap-2">
      <p><icon-logos-vitejs /> {{ t('features.vite') }}</p>
      <p><icon-logos-nx /> {{ t('features.nx') }}</p>
      <p>
        <icon-vscode-icons:file-type-typescript />
        {{ t('features.typescript') }}
      </p>
      <p><icon-logos-vue /> {{ t('features.vue') }}</p>
      <p><icon-fluent:arrow-routing-24-filled /> {{ t('features.routing') }}</p>
      <p><icon-dashicons:block-default /> {{ t('features.components') }}</p>
      <p><icon-simple-icons:iconify /> {{ t('features.icons') }}</p>
      <p><icon-ic:baseline-language /> {{ t('features.i18n') }}</p>
      <p><icon-noto:pineapple /> {{ t('features.pinia') }}</p>
      <p><icon-simple-icons:windicss /> {{ t('features.windicss') }}</p>
      <p><icon-eos-icons:loading /> {{ t('features.nprogress') }}</p>
    </div>
  </div>
</template>

<style>
p {
  @apply flex justify-center items-center gap-2;
}
</style>

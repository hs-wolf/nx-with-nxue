<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <span class="text-sm text-gray-600">{{ t('name.title') }}</span>
    <button
      class="py-2 px-4 bg-gray-400 text-gray-900 rounded"
      @click.prevent="$router.push('/')"
    >
      {{ t('all.back-to-home') }}
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>

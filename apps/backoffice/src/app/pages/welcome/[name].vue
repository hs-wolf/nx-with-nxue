<script setup lang="ts">
defineProps<{ name: string }>();

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <span class="text-sm text-gray-600">{{ t('name.title') }}</span>
    <h1
      class="flex items-center justify-center gap-2 text-xl text-gray-400 font-bold"
    >
      <icon-carbon:cloud-auditing />
      {{ t('home.welcome', { name: name }) }}
    </h1>
    <button
      class="py-2 px-4 bg-gray-400 text-gray-900 rounded"
      @click.prevent="$router.push('/')"
    >
      {{ t('name.back-to-home') }}
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: name
</route>

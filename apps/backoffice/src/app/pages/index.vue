<script setup lang="ts">
import { models } from '@models';
import { utils } from '@utils';

const { t } = useI18n();

const name = ref('');

const router = useRouter();

const go = () => {
  if (name.value) {
    router.push(`/welcome/${name.value}`);
  }
};
</script>

<template>
  <div class="flex flex-col gap-8">
    <span class="text-sm text-gray-600">{{ t('home.title') }}</span>
    <div class="flex flex-col md:(flex-row) justify-center gap-4 w-full">
      <input
        id="input"
        type="text"
        v-model="name"
        :placeholder="t('home.whats-your-name')"
        autocomplete="false"
        @keydown.enter="go"
        class="w-full md:(w-96) py-2 px-3 bg-transparent border border-gray-500 rounded text-gray-400 placeholder-gray-600 placeholder-shown:italic"
      />
      <button
        :disabled="!name"
        @click="go"
        class="py-2 px-4 bg-gray-400 text-gray-900 rounded"
      >
        {{ t('home.button-go') }}
      </button>
    </div>
    <div class="flex flex-col gap-2 text-sm">
      <div class="flex gap-2 justify-center items-center">
        <span>{{ t('home.models-check') }}</span>
        <icon-carbon:checkmark-filled v-if="models()" />
        <icon-carbon:error-filled v-else />
        <span>{{ models() ? t('home.working') : t('home.broken') }}</span>
      </div>
      <div class="flex gap-2 justify-center items-center">
        <span>{{ t('home.utils-check') }}</span>
        <icon-carbon:checkmark-filled v-if="utils()" />
        <icon-carbon:error-filled v-else />
        <span>{{ utils() ? t('home.working') : t('home.broken') }}</span>
      </div>
    </div>
  </div>
</template>

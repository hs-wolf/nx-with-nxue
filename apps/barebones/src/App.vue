<script setup lang="ts">
import { useLocalesStore } from '@src/app/stores';

const localesStore = useLocalesStore();
</script>

<template>
  <div :dir="localesStore.currentDirection">
    <router-view />
  </div>
</template>

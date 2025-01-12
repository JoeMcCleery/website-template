<template>
  <NuxtLink v-bind="$props"><slot /></NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: String,
  href: String,
  target: String,
  appearance: {
    type: String,
    default: 'default',
  },
})
</script>

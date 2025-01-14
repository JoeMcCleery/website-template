<template>
  <NuxtLink v-bind="$props" class="icon-fill-hover flex gap-0.5">
    <BaseIcon icon="home" />
    <slot />
  </NuxtLink>
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

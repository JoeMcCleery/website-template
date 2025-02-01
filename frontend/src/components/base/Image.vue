<template>
  <NuxtImg v-bind="imgProps" />
</template>

<script setup lang="ts">
const { src, width, height, alt } = defineProps({
  src: String,
  width: Number,
  height: Number,
  alt: String,
})

const imgProps = computed(() => ({
  src,
  width,
  height,
  alt,
  placeholder: width && height ? [width, height] : undefined,
}))
</script>

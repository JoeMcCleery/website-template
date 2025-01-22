<template>
  <span
    v-if="!!name"
    class="material-symbols-rounded"
    :class="{ filled }"
    :style="{ fontSize: sizePx, width: sizePx, height: sizePx }"
  >
    {{ name }}
  </span>
</template>

<script setup lang="ts">
const { size } = defineProps({
  name: String,
  filled: Boolean,
  size: {
    type: Number,
    default: 24,
  },
})

const sizePx = `${size}px`
</script>

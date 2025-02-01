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
const { size = 24 } = defineProps({
  name: String,
  filled: Boolean,
  size: Number,
})

const sizePx = computed(() => `${size}px`)
</script>

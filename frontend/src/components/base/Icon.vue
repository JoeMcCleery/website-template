<template>
  <span
    v-if="!!name"
    class="material-symbols-rounded"
    :class="{ filled }"
    :style="{ fontSize: size }"
  >
    {{ name }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  filled: Boolean,
  size: {
    type: Number,
    default: 24,
  },
})
</script>

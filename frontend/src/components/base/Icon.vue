<template>
  <span class="material-symbols-rounded" :class="{ filled }">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  filled: Boolean,
})
</script>

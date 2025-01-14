<template>
  <span class="material-symbols-rounded" :class="{ fill }">
    {{ icon }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  icon: String,
  fill: Boolean,
})
</script>

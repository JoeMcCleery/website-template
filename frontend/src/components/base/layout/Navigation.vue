<template>
  <nav class="flex items-center gap-4">
    <BaseLinkList :items="navItems" />
  </nav>
</template>

<script setup lang="ts">
const { data } = useGlobal('main-menu')
const navItems = computed(() => data.value?.navItems ?? [])
</script>

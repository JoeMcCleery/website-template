<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { favicon } = useSiteConfig()

const faviconUrl = computed(() => favicon.value?.url)

useFavicon(faviconUrl)
</script>

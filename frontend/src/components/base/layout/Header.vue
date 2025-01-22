<template>
  <header class="grid grid-cols-[auto_1fr_auto] gap-4 p-4">
    <h1 class="text-xl">
      {{ siteConfig?.settings.websiteTitle }}
    </h1>

    <BaseLayoutNavigation />
  </header>
</template>

<script setup lang="ts">
const { data: siteConfig } = useGlobal('site-config')
</script>

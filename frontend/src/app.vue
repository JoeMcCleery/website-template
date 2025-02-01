<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Media } from '@common/payload-types'

const { data: siteConfig } = useGlobal('site-config')

const favicon = computed(() => (siteConfig.value?.settings?.favicon as Media)?.url)
useFavicon(favicon)
</script>

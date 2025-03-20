<template>
  <div class="content min-h-screen">
    <h1 class="text-3xl">{{ currentPage?.title }}</h1>
    {{ currentPage }}
  </div>
</template>

<script setup lang="ts">
const currentPage = useCurrentPage()
const { websiteTitle } = useSiteConfig()

const pageMeta = computed(() => currentPage.value?.meta)
const seoTitle = computed(() =>
  !!pageMeta.value?.title ? pageMeta.value.title : websiteTitle.value,
)
const seoDescription = computed(() => pageMeta.value?.description)

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogDescription: seoDescription,
})
</script>

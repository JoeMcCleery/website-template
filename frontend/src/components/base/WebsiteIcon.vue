<template>
  <BaseInputLink v-bind="linkProps">
    <BaseImage v-if="websiteIcon" v-bind="imgProps" />
    <h1 v-else class="text-2xl">
      {{ websiteTitle }}
    </h1>
  </BaseInputLink>
</template>

<script setup lang="ts">
import type { Media, Page } from '@common/payload-types'

const {
  link = true,
  width = 'auto',
  height = '3rem',
} = defineProps({
  link: Boolean,
  width: String,
  height: String,
})

const { data: siteConfig } = useGlobal('site-config')

const websiteTitle = computed(() => siteConfig.value?.settings.websiteTitle)
const websiteIcon = computed(() => siteConfig.value?.settings.websiteIcon as Media | null)
const websiteHomepage = computed(
  () => (siteConfig.value?.settings.homePage?.value as Page | undefined)?.path ?? '/',
)

const linkProps = computed(() => ({
  to: link ? websiteHomepage.value : undefined,
  title: websiteTitle.value,
  appearance: 'default',
}))

const imgProps = computed(() => ({
  src: websiteIcon.value?.url ?? undefined,
  alt: websiteTitle.value,
  style: { width, height },
  width: websiteIcon.value?.width ?? undefined,
  height: websiteIcon.value?.height ?? undefined,
  class: tw('rounded-lg'),
}))
</script>

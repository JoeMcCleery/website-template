<template>
  <NuxtLink
    v-bind="linkProps"
    class="flex place-items-center gap-0.5"
    :class="{ 'icon-filled-hover': iconIsIcon }"
  >
    <template v-if="iconPos === 'before'">
      <BaseIcon v-if="iconIsIcon" v-bind="iconProps" />
      <BaseImage v-else-if="iconIsMedia" v-bind="mediaIconProps" class="rounded-full" />
    </template>

    <slot />

    <template v-if="iconPos === 'after'">
      <BaseIcon v-if="iconIsIcon" v-bind="iconProps" />
      <BaseImage v-else-if="iconIsMedia" v-bind="mediaIconProps" class="rounded-full" />
    </template>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Icon, Media } from '@common/payload-types'
import type { PropType } from 'vue'

const { to, href, target, icon } = defineProps({
  to: String,
  href: String,
  target: String,
  icon: Object as PropType<Icon>,
})

const linkProps = {
  to,
  href,
  target,
}

const iconIsIcon = icon?.type === 'icon'
const iconIsMedia = icon?.type === 'media'

const iconPos = icon?.position
const iconSize = icon?.size ?? undefined

const iconProps = {
  name: icon?.name ?? undefined,
  filled: icon?.filled ?? undefined,
  size: iconSize,
}

const iconMedia = icon?.media ? (icon?.media as Media) : undefined
const mediaIconProps = {
  src: iconMedia?.url ?? undefined,
  width: iconSize,
  height: iconSize,
  alt: iconMedia?.alt,
}
</script>

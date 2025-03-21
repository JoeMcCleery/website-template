<template>
  <NuxtLink v-bind="linkProps" class="flex place-items-center gap-2">
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
import type { Icon, Media } from 'backend/src/payload-types'
import type { ChangeFields } from 'common/utilities/types'
import type { PropType } from 'vue'

const { to, href, target, appearance, icon } = defineProps({
  to: String,
  href: String,
  target: String,
  appearance: String,
  icon: Object as PropType<
    ChangeFields<Icon, { media?: number | null | Omit<Media, 'id' | 'createdAt' | 'updatedAt'> }>
  >,
})

const iconIsIcon = computed(() => icon?.type === 'icon')
const iconIsMedia = computed(() => icon?.type === 'media')
const iconPos = computed(() => icon?.position ?? 'before')
const iconSize = computed(() => icon?.size ?? undefined)
const sizePx = computed(() => `${iconSize.value}px`)
const iconMedia = computed(() => (icon?.media as Media | null) ?? undefined)

const linkProps = computed(() => ({
  to,
  href,
  target,
  class: {
    btn: appearance === 'button',
    'btn-round': appearance === 'button-round',
    'icon-filled-hover': iconIsIcon.value,
  },
}))

const iconProps = computed(() => ({
  name: icon?.name ?? undefined,
  filled: icon?.filled ?? undefined,
  size: iconSize.value,
}))

const mediaIconProps = computed(() => ({
  src: iconMedia.value?.url ?? undefined,
  style: { width: sizePx.value, height: sizePx.value },
  width: iconSize.value,
  height: iconSize.value,
  alt: iconMedia.value?.alt,
}))
</script>

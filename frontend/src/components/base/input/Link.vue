<template>
  <NuxtLink
    v-bind="linkProps"
    class="flex place-items-center gap-2"
    :class="{ 'icon-filled-hover': iconIsIcon, icon: isButton && hasIcon && !$slots.default }"
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
import type { ChangeFields } from '@common/utility-types'
import type { PropType } from 'vue'

const {
  to,
  href,
  target,
  appearance = 'default',
  icon,
} = defineProps({
  to: String,
  href: String,
  target: String,
  appearance: String,
  icon: Object as PropType<
    ChangeFields<Icon, { media?: number | null | Omit<Media, 'id' | 'createdAt' | 'updatedAt'> }>
  >,
})

const isButton = appearance == 'button'

const linkProps = {
  to,
  href,
  target,
  class: isButton ? 'btn' : undefined,
}

const iconIsIcon = icon?.type === 'icon'
const iconIsMedia = icon?.type === 'media'
const hasIcon = iconIsIcon || iconIsMedia

const iconPos = icon?.position ?? 'before'
const iconSize = icon?.size ?? undefined

const iconProps = computed(() => ({
  name: icon?.name ?? undefined,
  filled: icon?.filled ?? undefined,
  size: iconSize,
}))

const sizePx = `${iconSize}px`
const iconMedia = (icon?.media as Media | null) ?? undefined
const mediaIconProps = computed(() => ({
  src: iconMedia?.url ?? undefined,
  style: { width: sizePx, height: sizePx },
  width: iconSize,
  height: iconSize,
  alt: iconMedia?.alt,
}))
</script>

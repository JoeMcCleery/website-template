<template>
  <NuxtLink v-bind="linkProps" class="flex gap-0.5" :class="{ 'icon-fill-hover': iconIsIcon }">
    <BaseIcon v-if="iconIsIcon && iconPos === 'before'" :icon="icon?.name" />
    <slot />
    <BaseIcon v-if="iconIsIcon && iconPos === 'after'" :icon="icon?.name" />
  </NuxtLink>
</template>

<script setup lang="ts">
const { to, href, target, icon } = defineProps({
  to: String,
  href: String,
  target: String,
  icon: Object,
})

const linkProps = {
  to,
  href,
  target,
}

const iconType = icon?.type
const iconIsIcon = iconType === 'icon'
const iconPos = icon?.position
</script>

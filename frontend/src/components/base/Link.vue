<template>
  <NuxtLink v-bind="linkProps" class="flex gap-0.5" :class="{ 'icon-filled-hover': iconIsIcon }">
    <BaseIcon v-if="iconIsIcon && iconPos === 'before'" :name="icon?.name" :filled="icon?.filled" />
    <slot />
    <BaseIcon v-if="iconIsIcon && iconPos === 'after'" :name="icon?.name" :filled="icon?.filled" />
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

const iconIsIcon = icon?.type === 'icon'
const iconPos = icon?.position
</script>

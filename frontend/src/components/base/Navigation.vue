<template>
  <nav class="flex gap-2">
    <BaseLink v-for="(item, i) in navItems" :key="item.id" v-bind="item.props">
      {{ item.label }}
    </BaseLink>
  </nav>
</template>

<script setup lang="ts">
import type { Page } from '@common/payload-types'

const { data, error } = await useMainMenu()

const navItems = computed(() =>
  data.value?.MainMenu.navItems?.map((item, i) => {
    const link = item.link
    return {
      id: item.id ?? i,
      label: link?.label,
      props: {
        to:
          link?.type === 'reference'
            ? ((link.reference?.value as Page).path ?? undefined)
            : undefined,
        href: link?.type === 'custom' ? (link.url ?? undefined) : undefined,
        target: link?.newTab ? '_blank' : undefined,
        icon: link?.icon,
      },
    }
  }),
)
</script>

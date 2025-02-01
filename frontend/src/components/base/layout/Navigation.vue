<template>
  <nav class="flex place-items-center gap-4">
    <BaseInputLink v-for="item in navItems" :key="item.id" v-bind="item.props">
      {{ item.label }}
    </BaseInputLink>
  </nav>
</template>

<script setup lang="ts">
import type { Page } from '@common/payload-types'

const { data: mainMenu } = useGlobal('main-menu')

const navItems = computed(() =>
  mainMenu.value?.navItems?.map((item, i) => {
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
        appearance: 'button',
      },
    }
  }),
)
</script>

<template>
  <BaseInputLink v-for="link in links" :key="link.id" v-bind="link.props">
    {{ link.label }}
  </BaseInputLink>
</template>

<script setup lang="ts">
import type { Link, Page } from '@common/payload-types'
import type { PropType } from 'vue'

const { items, appearance = 'button' } = defineProps({
  items: Array as PropType<{ id?: string | null; link?: Link }[]>,
  appearance: String,
})

const links = computed(() =>
  items?.map((item, i) => {
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
        appearance,
      },
    }
  }),
)
</script>

<template>
  <nav>
    <BaseLink v-for="item in navItems" :key="item.id" v-bind="item.props">
      {{ item.label }}
    </BaseLink>
  </nav>
</template>

<script setup lang="ts">
const { data, error } = await useMainMenu()

const navItems = computed(() => {
  return data.value?.MainMenu.navItems.map((item) => {
    const link = item.link
    return {
      id: item.id,
      label: link.label,
      props: {
        href: link.type === 'custom' ? link.url : undefined,
        to: link.type === 'reference' ? link.reference?.value.path : undefined,
        target: link.newTab ? '_blank' : undefined,
        appearance: 'button',
      },
    }
  })
})
</script>

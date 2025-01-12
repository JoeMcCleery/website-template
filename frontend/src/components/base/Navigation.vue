<template>
  <nav>
    <NuxtLink v-for="item in navItems" v-bind="item.props">{{ item.label }}</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const { data, error } = await useMainMenu()

const navItems = computed(() => {
  return data.value?.MainMenu.navItems.map((item) => {
    const link = item.link
    return {
      label: link.label,
      props: {
        key: item.id,
        href: link.type === 'custom' ? link.url : undefined,
        to: link.type === 'reference' ? link.reference.value.path : undefined,
        target: link.newTab ? '_blank' : undefined,
      },
    }
  })
})
</script>

<template>
  <BaseInputLink
    v-if="!mode.forced"
    appearance="button"
    :icon="{ type: 'icon', name: isDarkMode ? 'dark_mode' : 'light_mode' }"
    :title="isDarkMode ? 'Use light mode' : 'Use dark mode'"
    @click="toggleColourMode"
  />
</template>

<script setup lang="ts">
const mode = useColorMode()
const isDarkMode = computed(() => mode.value === 'dark')

const toggleColourMode = () => {
  mode.preference = isDarkMode.value ? 'light' : 'dark'
}
</script>

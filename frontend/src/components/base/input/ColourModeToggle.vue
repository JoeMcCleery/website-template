<template>
  <ClientOnly>
    <BaseInputLink
      v-if="!mode.forced"
      appearance="button-round"
      :title="isDarkMode ? 'Use light mode' : 'Use dark mode'"
      class="icon-filled-hover"
      @click="toggleColourMode"
    >
      <BaseTransitionSlideFade>
        <BaseIcon v-if="isDarkMode" name="dark_mode" />
        <BaseIcon v-else name="light_mode" />
      </BaseTransitionSlideFade>
    </BaseInputLink>
  </ClientOnly>
</template>

<script setup lang="ts">
const mode = useColorMode()

const isDarkMode = computed(() => mode.value === 'dark')

const toggleColourMode = () => {
  mode.preference = isDarkMode.value ? 'light' : 'dark'
}
</script>

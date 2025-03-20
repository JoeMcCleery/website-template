<template>
  <header ref="header" class="sticky p-4 transition-[top] duration-300">
    <div class="content rounded-xl bg-gray-200/50 p-4 backdrop-blur-lg">
      <BaseHeaderContent />
    </div>
  </header>
</template>

<script setup lang="ts">
const header = ref<InstanceType<typeof HTMLDivElement>>()

let scrollY = 0

const hideHeader = (header: HTMLDivElement) => {
  header.style.top = `-${header.clientHeight}px`
}

const showHeader = (header: HTMLDivElement) => {
  header.style.top = '0px'
}

const handleScroll = () => {
  if (!header.value) return
  const currentScrollY = window.scrollY
  if (scrollY < currentScrollY) {
    // Scroll down
    hideHeader(header.value)
  } else if (currentScrollY == 0) {
    // Reset
    hideHeader(header.value)
  } else if (scrollY > currentScrollY) {
    // Scroll up
    showHeader(header.value)
  }
  scrollY = currentScrollY
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

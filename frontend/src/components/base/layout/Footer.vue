<template>
  <footer class="bg-gray-50">
    <div class="content grid gap-8 p-8">
      <div class="flex items-center gap-4">
        <BaseLinkList :items="footerLinks" appearance="link" />
      </div>

      <div class="flex items-center justify-between gap-4">
        <p class="text-sm text-gray-900/20">&copy; Copyright {{ new Date().getFullYear() }}</p>

        <BaseFearIndigoLink />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { data } = useGlobal('footer')
const footerLinks = computed(() => data.value?.links ?? [])
</script>

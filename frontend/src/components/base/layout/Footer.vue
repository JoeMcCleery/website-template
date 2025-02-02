<template>
  <footer class="bg-gray-50">
    <div class="content grid gap-8 p-8">
      <div class="flex items-center gap-4">
        <BaseLinkList :items="footerLinks" appearance="link" />
      </div>

      <div v-if="showBottomRow" class="flex items-center justify-between gap-4">
        <div>
          <p v-if="copyright?.showCopyright" class="text-sm text-gray-900/20">
            &copy; {{ new Date().getFullYear() }} {{ copyright.entity }}
          </p>
        </div>

        <div>
          <BaseMadeByLink v-if="data?.showMadeByLink" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { data } = useGlobal('footer')
const footerLinks = computed(() => data.value?.links ?? [])
const copyright = computed(() => data.value?.copyright)
const showBottomRow = computed(() => data.value?.showMadeByLink || copyright.value?.showCopyright)
</script>

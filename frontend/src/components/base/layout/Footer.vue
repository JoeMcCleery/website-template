<template>
  <footer class="bg-gray-50">
    <div class="content grid gap-8 p-8">
      <div v-if="showAboutInfo" class="flex items-center gap-4">
        <BaseLinkList :items="links" appearance="link" />
      </div>

      <div v-if="showBottomRow" class="flex items-center justify-between gap-4">
        <div>
          <p v-if="copyright?.showCopyright" class="text-sm text-gray-900/20">
            &copy; {{ new Date().getFullYear() }} {{ copyright.entity }}
          </p>
        </div>

        <div>
          <BaseMadeByLink v-if="footer?.showMadeByLink" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { data: footer } = useGlobal('footer')
const { locations, openingHours, phones, emails, links } = useAboutInfo()

const showAboutInfo = computed(() => footer.value?.showAboutInfo)
const copyright = computed(() => footer.value?.copyright)
const showBottomRow = computed(() => footer.value?.showMadeByLink || copyright.value?.showCopyright)
</script>

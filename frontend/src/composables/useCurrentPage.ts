import type { Page } from '@common/payload-types'

export const useCurrentPage = () => {
  const route = useRoute()
  const pages = usePages({ where: { path: { equals: route.path } } })

  const currentPage = computed(() => {
    if (pages.value.length === 0) return null
    return pages.value[0] as Page
  })

  return currentPage
}

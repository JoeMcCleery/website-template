import type { Page } from '@common/payload-types'
import type { RestAPIOptions } from './useRestApi'

export const usePages = (options?: RestAPIOptions) => {
  const { data } = useRestApi<{ docs: Page[] }>('/pages', options)

  const pages = computed(() => (data.value?.docs as Page[]) ?? [])

  return pages
}

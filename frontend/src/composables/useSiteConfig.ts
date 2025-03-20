import type { Media, Page } from '@common/payload-types'
import type { RestAPIOptions } from './useRestApi'

export const useSiteConfig = (options?: RestAPIOptions) => {
  const { data: siteConfig } = useGlobal('site-config', options)

  const websiteTitle = computed(() => siteConfig.value?.settings.websiteTitle ?? 'Website Template')
  const websiteIcon = computed(() => siteConfig.value?.settings.websiteIcon as Media | null)
  const homePage = computed(() => siteConfig.value?.settings.homePage.value as Page | undefined)

  return { websiteTitle, websiteIcon, homePage }
}

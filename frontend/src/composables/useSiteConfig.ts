import type { Media, Page } from 'backend/src/payload-types'
import type { RestAPIOptions } from './useRestApi'

export const useSiteConfig = (options?: RestAPIOptions) => {
  const { data: siteConfig } = useGlobal('site-config', options)

  const websiteTitle = computed(() => siteConfig.value?.websiteTitle ?? 'Website Template')
  const websiteIcon = computed(() => siteConfig.value?.websiteIcon as Media | null)
  const homePage = computed(() => siteConfig.value?.homePage.value as Page | undefined)
  const favicon = computed(() => siteConfig.value?.favicon as Media | null)

  return { websiteTitle, websiteIcon, homePage, favicon }
}

import type { RestAPIOptions } from './useRestApi'

export const useAboutInfo = (options?: RestAPIOptions) => {
  const { data: aboutInfo } = useGlobal('about-info', options)

  const locations = computed(() => aboutInfo.value?.locations ?? [])
  const openingHours = computed(() => aboutInfo.value?.openingHours ?? [])
  const phones = computed(() => aboutInfo.value?.phones ?? [])
  const emails = computed(() => aboutInfo.value?.emails ?? [])
  const links = computed(() => aboutInfo.value?.links ?? [])

  return { locations, openingHours, phones, emails, links }
}

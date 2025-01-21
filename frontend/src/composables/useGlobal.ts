import type { Config } from '@common/payload-types'
import type { RestAPIOptions } from './useRestApi'

export const useGlobal = <S extends keyof Config['globals']>(
  slug: S,
  options?: RestAPIOptions<Config['globals'][S]>,
) => {
  return useRestApi<Config['globals'][S]>(`/globals/${slug}`, options)
}

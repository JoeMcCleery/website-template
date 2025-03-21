import type { Config } from 'backend/src/payload-types'
import type { RestAPIOptions } from './useRestApi'

export const useGlobal = <S extends keyof Config['globals']>(slug: S, options?: RestAPIOptions) => {
  return useRestApi<Config['globals'][S]>(`/globals/${slug}`, options)
}

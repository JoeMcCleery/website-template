import type { Where } from 'payload'
import { stringify } from 'qs-esm'

export type RestAPIOptions = {
  depth?: number
  where?: Where
}

export const useRestApi = <T>(path: string, options: RestAPIOptions = {}) => {
  const config = useRuntimeConfig()
  const baseURL = import.meta.server ? config.apiUrl : config.public.apiUrl

  const depth = options.depth ?? 1
  let where = stringify({ where: options.where }, { addQueryPrefix: true }) ?? undefined

  return useFetch<T>(`${path}${where}`, {
    key: `${path}-${depth}-${where}`,
    baseURL,
    query: {
      depth,
    },
    dedupe: 'defer',
  })
}

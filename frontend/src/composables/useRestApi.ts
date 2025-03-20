export type RestAPIOptions = {
  depth?: number
}

export const useRestApi = <T>(
  path: string,
  options: RestAPIOptions = {
    depth: 1,
  },
) => {
  const config = useRuntimeConfig()
  const baseURL = import.meta.server ? config.apiUrl : config.public.apiUrl

  return useFetch<T>(path, {
    key: `${path}-${options.depth}`,
    baseURL,
    query: {
      depth: options.depth,
    },
    dedupe: 'defer',
  })
}

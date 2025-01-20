export const useRestApi = <T>(path: string, depth: number = 1) => {
  const config = useRuntimeConfig()
  const baseURL = import.meta.server ? config.apiUrl : config.public.apiUrl

  return useFetch<T>(path, {
    key: `${path}-${depth}`,
    baseURL,
    query: {
      depth,
    },
  })
}

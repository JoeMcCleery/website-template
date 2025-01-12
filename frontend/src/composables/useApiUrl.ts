export const useApiUrl = () => {
  const config = useRuntimeConfig()
  return import.meta.server ? config.apiUrl : config.public.apiUrl
}

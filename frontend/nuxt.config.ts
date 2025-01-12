// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  runtimeConfig: {
    apiUrl: '',
    public: {
      apiUrl: '',
    },
  },
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.NUXT_API_URL}/graphql`,
        browserHttpEndpoint: `${process.env.NUXT_PUBLIC_API_URL}/graphql`,
      },
    },
  },
})

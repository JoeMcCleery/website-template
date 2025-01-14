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
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:FILL@0..1&display=block',
        },
      ],
    },
  },
  css: ['~/assets/css/material-symbols.css'],
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.NUXT_API_URL}/graphql`,
        browserHttpEndpoint: `${process.env.NUXT_PUBLIC_API_URL}/graphql`,
      },
    },
  },
  tailwindcss: {
    editorSupport: {
      autocompleteUtil: true,
    },
  },
})

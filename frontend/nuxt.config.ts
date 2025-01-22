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
  css: ['../../common/material-symbols.css'],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxtjs/fontaine',
  ],
  tailwindcss: {
    editorSupport: {
      autocompleteUtil: true,
    },
  },
  fontMetrics: {
    fonts: ['Roboto', 'Material Symbols Rounded'],
  },
})

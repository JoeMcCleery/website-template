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
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  tailwindcss: {
    editorSupport: {
      autocompleteUtil: true,
    },
  },
})
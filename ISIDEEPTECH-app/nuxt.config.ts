// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],
  content: {
    documentDriven: true
  }
})
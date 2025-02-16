// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],
  runtimeConfig: {
    public: {
      gtag: {
        id: 'G-XXXXXXXXXX',
        initMode: 'manual', // For GDPR compliance
        config: {
          page_title: 'Download More VRAM',
        }
      }
    }
  }
})

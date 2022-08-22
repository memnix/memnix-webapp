import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  ssr: true,
  head: {
    link: {
      rel: 'preconnect',
      href: 'https://api.memnix.app/v1/',
    },
  },

  modules: ['@nuxtjs/tailwindcss'],

  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    '@intlify/nuxt3',
    'unplugin-icons/nuxt',
    '@nuxt/image-edge',
    '@funken-studio/sitemap-nuxt-3',
    '@kevinmarrec/nuxt-pwa',
  ],

  tailwindcss: {
    // @ts-ignore
    jit: true,
  },
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      availableLocales: ['en', 'fr'],
      locale: 'en',
      fallbackLocale: 'en',
    },
  },

  sitemap: {
    hostname: 'https://memnix.app',
    cacheTime: 1,
    defaults: {
      lastmod: new Date().toISOString(),
    },
  },

  components: true,

  nitro: {
    minify: true,
    serveStatic: true,
  },

  pwa: {
    manifest: {
      name: 'Memnix App',
      short_name: 'Memnix',
      background_color: '#111827',
      theme_color: '#3B82F6',
    },
    meta: {
      name: 'Memnix App',
      author: 'CorentinGS',
      description: 'Memnix - A spaced repetition app',
      mobileAppIOS: true,
      ogHost: 'https://memnix.app',
      twitterCard: 'summary',
      twitterSite: '@memnixapp',
      twitterCreator: '@memnixapp',
    },
  },

  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  build: {
    transpile: ['@heroicons/vue', 'headlessui/vue'],
  },
})

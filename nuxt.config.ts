import { defineNuxtConfig } from 'nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import compress from 'vite-plugin-compress'
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

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],

  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    '@intlify/nuxt3',
    'unplugin-icons/nuxt',
  ],

  tailwindcss: {
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

  components: true,

  nitro: {
    minify: true,
    serveStatic: true,
  },

  vite: {
    plugins: [
      compress(),
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

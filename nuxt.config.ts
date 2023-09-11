// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxtjs/device",
  ],
  i18n: {
    /* module options */
    locales: [
      { code: "en", file: "en/translation.json", name: "English" },
      {
        code: "fr",
        file: "fr/translation.json",
        name: "Francais",
      },
      {
        code: "ro",
        file: "ro/translation.json",
        name: "Română",
      },
    ], // used in URL path prefix
    langDir: "lang",
    lazy: true,
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  routeRules: {
    "/": { prerender: true },
    "/auth": { ssr: true },
    "/dashboard": { ssr: true },
    "/decks": { ssr: true },
    "/deck/**": { swr: 3600 },
  },
  googleFonts: {
    families: {
      Inter: true,
      Syne: true,
      "Nunito+Sans": true,
    },
  },
});

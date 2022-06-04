import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],

    modules: ['@nuxtjs/tailwindcss'],

    buildModules: [
        // pinia plugin - https://pinia.esm.dev
        "@pinia/nuxt",

    ],

    tailwindcss: {
        jit: true,
    },

    build: {
        transpile: ['@heroicons/vue'],
    },

});
import {defineConfig} from "astro/config"

// Astro integration imports
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import compress from "astro-compress"
import astroI18next from "astro-i18next"
// Helper imports
import node from "@astrojs/node"
import prefetch from "@astrojs/prefetch"
import {seoConfig} from "./utils/seoConfig"
import compressor from "astro-compressor"

import react from "@astrojs/react"

import serviceWorker from "astrojs-service-worker"
// https://astro.build/config

export default defineConfig({
    site: seoConfig.baseURL, integrations: [tailwind({
        config: {
            path: "./tailwind.config.js"
        }
    }), prefetch(), solidJs(), react(), astroI18next(), sitemap({
        lastmod: new Date(), i18n: {
            defaultLocale: "en", locales: {
                en: "en-US", de: "de-DE", fr: "fr-FR", ro: "ro-RO",
            }
        }
    }), compress({
        CSS: false, HTML: false, JavaScript: false,
    }), compressor(), serviceWorker({})], output: "server", adapter: node({
        mode: "standalone"
    }),
})

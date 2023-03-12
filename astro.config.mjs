import { defineConfig } from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import solidJs from "@astrojs/solid-js"
import astroI18next from "astro-i18next"
import AstroPWA from "@vite-pwa/astro"
// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig"
import compressor from "astro-compressor"
import prefetch from "@astrojs/prefetch"
import node from "@astrojs/node"
import critters from "astro-critters"

import react from "@astrojs/react"

import serviceWorker from "astrojs-service-worker"
// https://astro.build/config
import preact from "@astrojs/preact"

require("newrelic")

export default defineConfig({
	site: seoConfig.baseURL,
	experimental: {
		assets: true
	},
	image: {
		service: "astro/assets/services/sharp"
	},
	integrations: [
		tailwind({
			config: {
				path: "./tailwind.config.js"
			}
		}),
		prefetch(),
		preact(),
		solidJs(),
		react(),
		astroI18next(),
		sitemap({
			lastmod: new Date(),
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en-US",
					de: "de-DE",
					fr: "fr-FR",
					ro: "ro-RO",
					it: "it-IT"
				}
			}
		}),
		critters(),
		compress(),
		compressor(),
		serviceWorker({})
	],
	output: "server",
	adapter: node({
		mode: "standalone"
	})
})

import { defineConfig } from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import solidJs from "@astrojs/solid-js"
import astroI18next from "astro-i18next"

// Helper imports
import { seoConfig } from "./utils/seoConfig"
import compressor from "astro-compressor"
import prefetch from "@astrojs/prefetch"
import node from "@astrojs/node"

import critters from "astro-critters"

// https://astro.build/config
// https://astro.build/config
import react from "@astrojs/react"

// https://astro.build/config
import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig({
	site: seoConfig.baseURL,
	experimental: {
		assets: true
	},
	image: {
		service: "astro/assets/services/sharp",
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
		compressor()
	],
	output: "server",
	adapter: node({ mode: "standalone" })
})

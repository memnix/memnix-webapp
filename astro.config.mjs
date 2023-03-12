import {defineConfig} from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import solidJs from "@astrojs/solid-js"
import astroI18next from "astro-i18next"
import AstroPWA from '@vite-pwa/astro'
// Helper imports
import {manifest, seoConfig} from "./utils/seoConfig"
import compressor from "astro-compressor"
import prefetch from "@astrojs/prefetch"
import node from "@astrojs/node"
import critters from "astro-critters"

import react from "@astrojs/react"

import purgeCSS from "astro-purgecss"

// https://astro.build/config
import preact from "@astrojs/preact"

// https://astro.build/config
// https://astro.build/config
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
		AstroPWA({
			registerType: "autoUpdate",
			manifest,
			workbox: {
				globDirectory: 'dist',
				globPatterns: [
					'**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
				],
				// Don't fallback on document based (e.g. `/some-page`) requests
				// This removes an errant console.log message from showing up.
				navigateFallback: null,
			},
		}),
		critters(),
		purgeCSS(),
		compress(),
		compressor()
	],
	output: "server",
	adapter: node({
		mode: "standalone"
	})
})

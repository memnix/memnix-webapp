import { defineConfig } from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { VitePWA } from "vite-plugin-pwa"

// https://astro.build/config
import image from "@astrojs/image"

// https://astro.build/config
import solidJs from "@astrojs/solid-js"
import astroI18next from "astro-i18next"

// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig"

// https://astro.build/config
import compressor from "astro-compressor"
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
import node from "@astrojs/node"

// https://astro.build/config
import critters from "astro-critters"
import purgecss from "astro-purgecss"

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [
		tailwind({
			config: {
				path: "./tailwind.config.js"
			}
		}),
		prefetch(),
		solidJs(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp"
		}),
		astroI18next(),
		sitemap(),
		critters(),
		purgecss(),
		compress(),
		compressor()
	],
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: "dist",
					globPatterns: [
						"**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"
					],
					// Don't fall back on document based (e.g. `/some-page`) requests
					// This removes an errant console.log message from showing up.
					navigateFallback: null
				}
			})
		]
	},
	output: "server",
	adapter: node({
		mode: "standalone"
	})
})

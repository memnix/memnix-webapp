/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: "en",
	locales: ["en", "fr", "de", "it", "ro"],
	fallbackLocale: "en",
	load: ["server"],
	defaultNS: "common",
	namespaces: ["common", "discover"]
}

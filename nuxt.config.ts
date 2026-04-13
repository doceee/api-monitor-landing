export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/eslint'],

	app: {
		head: {
			htmlAttrs: { lang: 'en' },
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
			link: [
				{
					rel: 'preload',
					as: 'font',
					type: 'font/woff2',
					href: '/fonts/ibm-plex-mono-v20-latin_latin-ext-regular.woff2',
					crossorigin: 'anonymous',
				},
			],
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	css: ['~/assets/css/main.css'],
	compatibilityDate: '2024-11-01',
});

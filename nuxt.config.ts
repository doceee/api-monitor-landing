const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 28 },
	visibleOnce: { opacity: 1, y: 0, transition: { duration: 750, ease, delay } },
});

const scaleIn = (delay = 0) => ({
	initial: { opacity: 0, scale: 0.94 },
	visibleOnce: {
		opacity: 1,
		scale: 1,
		transition: { duration: 600, ease, delay },
	},
});

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/eslint', '@vueuse/motion/nuxt'],

	motion: {
		directives: {
			'fade-up': fadeUp(),
			'fade-up-1': fadeUp(80),
			'fade-up-2': fadeUp(160),
			'fade-up-3': fadeUp(240),
			'fade-up-4': fadeUp(320),
			'fade-up-5': fadeUp(400),
			'fade-up-6': fadeUp(480),
			'fade-left': {
				initial: { opacity: 0, x: -32 },
				visibleOnce: { opacity: 1, x: 0, transition: { duration: 750, ease } },
			},
			'fade-right': {
				initial: { opacity: 0, x: 32 },
				visibleOnce: { opacity: 1, x: 0, transition: { duration: 750, ease } },
			},
			'scale-in': scaleIn(),
			'scale-in-1': scaleIn(80),
			'scale-in-2': scaleIn(160),
			'scale-in-3': scaleIn(240),
			'scale-in-4': scaleIn(320),
			'scale-in-5': scaleIn(400),
			'scale-in-6': scaleIn(480),
		},
	},

	vite: {
		build: {
			cssCodeSplit: false,
		},
	},

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

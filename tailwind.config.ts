import type { Config } from 'tailwindcss';

export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans', 'sans-serif'],
				mono: ['IBM Plex Mono', 'monospace'],
			},
			colors: {
				bg: { DEFAULT: '#080c14', 2: '#0d1220', 3: '#111827' },
				blue: {
					DEFAULT: '#3b82f6',
					dark: '#2563eb',
					dim: 'rgba(59,130,246,0.12)',
				},
				green: '#22c55e',
				red: '#ef4444',
				amber: '#f59e0b',
				border: {
					DEFAULT: 'rgba(255,255,255,0.06)',
					2: 'rgba(255,255,255,0.10)',
				},
				muted: '#64748b',
				ttext: '#e2e8f0',
			},
			animation: {
				'logo-pulse': 'logoPulse 2s ease-in-out infinite',
				'status-dot': 'statusDot 1.5s ease-in-out infinite',
				'fade-up': 'fadeUp 0.7s both',
				'fade-in': 'fadeIn 0.5s both',
				'grid-drift': 'gridDrift 20s linear infinite',
				'glow-breathe': 'glowBreathe 5s ease-in-out infinite',
				'border-flow': 'borderFlow 3s linear infinite',
				'ticker-flash': 'tickerFlash 0.4s ease-out',
				'slide-in-left':
					'slideInLeft 0.6s cubic-bezier(0.16,1,0.3,1) both',
				'slide-in-right':
					'slideInRight 0.6s cubic-bezier(0.16,1,0.3,1) both',
				'scale-in': 'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both',
				shimmer: 'shimmer 2.5s linear infinite',
				float: 'float 4s ease-in-out infinite',
				'scan-down': 'scanDown 3s linear infinite',
				'count-up': 'countUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
				'ping-slow': 'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
				'spin-slow': 'spin 8s linear infinite',
				'bar-grow': 'barGrow 1s cubic-bezier(0.16,1,0.3,1) both',
			},
			keyframes: {
				fadeUp: {
					from: { opacity: '0', transform: 'translateY(28px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
				slideInLeft: {
					from: { opacity: '0', transform: 'translateX(-32px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				slideInRight: {
					from: { opacity: '0', transform: 'translateX(32px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				scaleIn: {
					from: { opacity: '0', transform: 'scale(0.94)' },
					to: { opacity: '1', transform: 'scale(1)' },
				},
				logoPulse: {
					'0%,100%': { boxShadow: '0 0 6px rgba(59,130,246,0.6)' },
					'50%': {
						boxShadow:
							'0 0 20px rgba(59,130,246,1),0 0 40px rgba(59,130,246,0.4)',
					},
				},
				statusDot: {
					'0%,100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.4', transform: 'scale(0.85)' },
				},
				gridDrift: {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '50px 50px' },
				},
				glowBreathe: {
					'0%,100%': { opacity: '0.5', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.15)' },
				},
				borderFlow: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '200% 50%' },
				},
				tickerFlash: {
					'0%': { color: '#fff', transform: 'scale(1.08)' },
					'100%': { color: 'inherit', transform: 'scale(1)' },
				},
				countUp: {
					from: { opacity: '0', transform: 'translateY(12px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' },
				},
				float: {
					'0%,100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' },
				},
				scanDown: {
					'0%': { top: '-2px', opacity: '0' },
					'5%': { opacity: '1' },
					'90%': { opacity: '0.8' },
					'100%': { top: '100%', opacity: '0' },
				},
				barGrow: {
					from: { transform: 'scaleX(0)', transformOrigin: 'left' },
					to: { transform: 'scaleX(1)', transformOrigin: 'left' },
				},
			},
			transitionDelay: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'1000': '1000ms',
				'1200': '1200ms',
			},
		},
	},
} satisfies Config;

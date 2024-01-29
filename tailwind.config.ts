import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			transitionProperty: {
				sidebar: 'left',
			},
			colors: {
				'app-white': '#fff',
				'app-blue-800': '#1E2640',
				'app-blue-700': '#353C53',
				'app-blue-600': '#4a5064',
				'app-blue-500': '#146EB4',
				'app-gray-800': '#1A181E',
				'app-gray-700': '#4D4D4D',
				'app-gray-500': '#808080',
				'app-gray-150': '#D9D9D9',
				'app-gray-100': '#E6E6E6',
				'app-gray-50': '#F2F2F2',
				'app-gray-30': '#FAFAFA',
			},
			boxShadow: {
				'info-card': '0px 2px 6px 0px rgba(26, 24, 30, 0.04)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config

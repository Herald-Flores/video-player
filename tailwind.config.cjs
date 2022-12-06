/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1280px',
			'2xl': '1440px'
		},
		colors: {
			violet: {
				50: '#f5eeff',
				100: '#e9dcff',
				200: '#cbb2ff',
				300: '#986dff',
				400: '#6020ff',
				500: '#5800ff',
				600: '#5a00df',
				700: '#4b00b4',
				800: '#3b0094',
				900: '#06000f'
			},
			transparent: 'transparent'
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	},
	plugins: []
}

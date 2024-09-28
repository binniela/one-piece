/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#1D4ED8',
		  'primary-dark': '#1e40af',
		  background: '#f0f0f0',
		},
		borderRadius: {
		  '3xl': '2rem',
		},
	  },
	},
	plugins: [],
  }
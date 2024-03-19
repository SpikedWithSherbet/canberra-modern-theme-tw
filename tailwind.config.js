/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./templates/*.html',
		'./templates/*.twig',
		'./templates/partial/*.twig',
		'./templates/blocks/*.twig',
		// Add paths to your Twig templates or any files using Tailwind classes
	],
	theme: {
		extend: {
			colors: {
				primary: '#000000', // Add your custom primary color
				secondary: '#6574cd', // Add your custom secondary color
				debug: '#4ba791', // Just so you can see how this is powerful
				// Add more custom colors as needed
			},
			fontFamily: {
				//font files are declared in html-header.twig file e
				'sans': ['"Montserrat"', 'sans-serif'],
			},
			
		}
	},
	plugins: [],
}


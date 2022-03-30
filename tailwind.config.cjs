module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '320px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				1: '8px',
				2: '12px',
				3: '16px',
				4: '24px',
				5: '32px',
				6: '48px',
				'1/10': '10%',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			colors: {
				primary: '#054F77',
				darkPrimary: '#093954',
				darkestPrimary: '#052233',
				secondary: '#8CFF00',
				fontColor: '#F4FBFF',
			},
		},
	},
	plugins: [
		require('daisyui'),
		// require('@tailwindcss/typography'),
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/line-clamp'),
		// require('@tailwindcss/aspect-ratio'),
	],
};

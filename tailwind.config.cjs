const plugin = require('tailwindcss/plugin');

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
			nunito: ['nunito', 'sans-serif'],
			montserrat: ['montserrat', 'serif'],
			dmsans: ['DM Sans'], // Ensure fonts with spaces have " " surrounding it.
		},
		extend: {
			background: {
				stars:
					"url('https://upload.wikimedia.org/wikipedia/commons/3/3b/Night_sky_in_the_Alps_-_panoramio_%281%29.jpg')",
			},
			spacing: {
				1: '8px',
				2: '12px',
				3: '16px',
				4: '24px',
				5: '32px',
				6: '48px',
				'1/3': '33%',
				'1/10': '10%',
				'1/4': '25%',
				'3/4': '75%',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			colors: {
				blue: '#054F77',
				darkblue: '#093954',
				black: '#052233',
				green: '#8CFF00',
				white: '#F4FBFF',
			},
		},
	},
	//daisyui override starts here:
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				anagolay: {
					primary: '#054F77',
					secondary: '#093954',
					accent: '#052233',
					neutral: '#052233',
					'base-100': '#FFFFFF',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',
				},
			},
		],
	},
};

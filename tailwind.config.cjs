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
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
				around:
					'1px 0 3px var(--tw-shadow-color), -1px 0 3px var(--tw-shadow-color), 0 1px 3px var(--tw-shadow-color), 0 -1px 3px var(--tw-shadow-color);',
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
				150: '150%',
				200: '200%',
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
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			);
		}),
		require('daisyui'),
	],
	daisyui: {
		themes: [
			{
				anagolay: {
					primary: '#054F77',
					secondary: '#093954',
					accent: '#8CFF00',
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

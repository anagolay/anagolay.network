const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '10rem',
			},
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			nunito: ['nunito', 'sans-serif'],
			montserrat: ['montserrat', 'serif'],
			dmsans: ['DM Sans'], // Ensure fonts with spaces have " "surrounding it.
			mono: ['Roboto Mono'],
		},
		extend: {
			screens: {
				'3xl': '1700px',
			},
			backgroundImage: {
				sphere:
					'radial-gradient(60.62% 60.62% at 42.38% 19.2%, var(--tw-gradient-from), var(--tw-gradient-to));',
				light: 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-from), var(--tw-gradient-to));',
				//stars: 'radial-gradient(2px 2px at 20px 30px, #eeeeee, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)), radial-gradient(3px 3px at 50px 160px, #dddddd, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 160px 120px, #dddddd, rgba(0, 0, 0, 0));'
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
				around:
					'1px 0 3px var(--tw-shadow-color), -1px 0 3px var(--tw-shadow-color), 0 1px 3px var(--tw-shadow-color), 0 -1px 3px var(--tw-shadow-color);',
			},
			boxShadow: {
				button: '0px 4px 4px rgba(20, 31, 69, 0.5), inset 0px 2px 4px rgba(244, 251, 255, 0.5)',
				pressed:
					'0px 4px 4px rgba(20, 31, 69, 0.5), inset 0px -3px 5px rgba(244, 251, 255, 0.2), inset 4px 5px 10px #141f45',
				around:
					'7px 0 7px var(--tw-shadow-color), -7px 0 7px var(--tw-shadow-color), 0 7px 7px var(--tw-shadow-color), 0 -7px 7px var(--tw-shadow-color);',
				card: '0px 0px 4px var(--tw-shadow-color), inset 0px 0px 4px var(--tw-shadow-color)',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				blue: '#054F77',
				'blue-400': '#23ACF6',
				'blue-600': '#0772AB',
				darkblue: '#093954',
				anagolayBlack: '#052233',
				green: '#8CFF00',
				anagolayWhite: '#F4FBFF',
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

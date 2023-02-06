// const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
				'2xl': '6rem',
			},
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			nunito: ['nunito', 'sans-serif'],
			montserrat: ['montserrat', 'serif'],
			dmsans: ['DM Sans'], // Ensure fonts with spaces have " "surrounding it.
			mono: ['Roboto Mono'],
			firaMono: ['Fira Mono'],
		},
		extend: {
			backgroundImage: {
				sphere:
					'radial-gradient(60.62% 60.62% at 42.38% 19.2%, var(--tw-gradient-from), var(--tw-gradient-to));',
				light: 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-from), var(--tw-gradient-to));',
				radial66: 'radial-gradient(50% 55% at 50% 20%, var(--tw-gradient-from), var(--tw-gradient-to));',
				upperLight:
					'radial-gradient(5rem 4.5rem at 50% 20%, var(--tw-gradient-from), var(--tw-gradient-to));',
				stars:
					'radial-gradient(2px 2px at 20px 30px, #eeeeee, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)), radial-gradient(3px 3px at 50px 160px, #dddddd, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0, 0, 0, 0)), radial-gradient(2px 2px at 160px 120px, #dddddd, rgba(0, 0, 0, 0)),  radial-gradient(3px 3px at 100px 130px, #eeeeee, rgba(0, 0, 0, 0));',
			},
			// textShadow: {
			//     sm: '0 1px 2px var(--tw-shadow-color)',
			//     DEFAULT: '0 2px 4px var(--tw-shadow-color)',
			//     lg: '0 8px 16px var(--tw-shadow-color)',
			//     around:
			//         '1px 0 3px var(--tw-shadow-color), -1px 0 3px var(--tw-shadow-color), 0 1px 3px var(--tw-shadow-color), 0 -1px 3px var(--tw-shadow-color);',
			// },
			boxShadow: {
				button: '0px 4px 4px rgba(20, 31, 69, 0.5), inset 0px 2px 4px rgba(244, 251, 255, 0.5)',
				card: 'inset 0px 7px 12px -7px (--tw-shadow-color);',
				cardTop: 'inset 0px 8px 7px -7px var(--tw-shadow-color);',
				pressed:
					'0px 4px 4px rgba(20, 31, 69, 0.5), inset 0px -3px 5px rgba(244, 251, 255, 0.2), inset 4px 5px 10px #141f45',
				around:
					'7px 0 7px var(--tw-shadow-color), -7px 0 7px var(--tw-shadow-color), 0 7px 7px var(--tw-shadow-color), 0 -7px 7px var(--tw-shadow-color);',
				phrase: 'inset 0px 0px 100px 10px (--tw-shadow-color);',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-1%)' },
				},
				glowing: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0.85', transform: 'scale(.95)' },
				},
				pulsating: {
					'0%': { opacity: '0.8', transform: 'scale(1)' },
					'100%': { opacity: '0.3', transform: 'scale(.7)' },
				},
			},
			animation: {
				marquee: 'marquee 2s linear infinite',
				marqueeOne: 'marquee 2s linear infinite',
				marqueeRight: '2s linear infinite reverse marquee',
				glow: 'glowing ease-in-out 2s infinite alternate',
				pulse: 'pulsating 1s linear infinite alternate',
			},
			borderRadius: {
				'4xl': '2rem',
				cardLg: '20px',
			},
			colors: {
				transparent: 'transparent',
				//current: 'currentColor',
				darkSpaceBlue: '#00111B',
				spaceBlue: {
					50: '#F4FBFF',
					// '100': '#B6E3FC',
					// '200': '#85D1FA',
					// '300': '#54BEF8',
					400: '#23ACF6',
					// '500': '#0992DC',
					600: '#0772AB',
					700: '#054F77',
					800: '#093954',
					900: '#00111B',
				},
				neonGreen: {
					// '50': '#F3FFE5',
					// '100': '#DDFFB3',
					// '200': '#C6FF80',
					// '300': '#AFFF4D',
					400: '#8CFF00',
					500: '#7EE600',
					// '600': '#62B300',
					// '700': '#468000',
					// '800': '#2A4D00',
					// '900': '#0E1A00',
				},
				aquaTeal: {
					// '50': '#EBFAFA',
					// '100': '#C3EFEF',
					// '200': '#9BE4E4',
					300: '#83DDDD',
					400: '#4BCECE',
					// '500': '#31B4B4',
					600: '#268C8C',
					// '700': '#1B6464',
					// '800': '#103C3C',
					// '900': '#051414',
				},
				red: {
					// '50': '#FEF2F2',
					// '100': '#FEE2E2',
					// '200': '#FECACA',
					300: '#FCA5A5',
					// '400': '#F87171',
					// '500': '#EF4444',
					// '600': '#DC2626',
					// '700': '#B91C1C',
					// '800': '#991B1B',
					// '900': '#7F1D1D',
				},
			},
		},
	},
};

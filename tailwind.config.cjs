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
		colors: {
			'slate-navy': '#054F77',
			'mid-navy': '#093954',
			'almost-navy': '#052233',
			'light-green': '#8CFF00',
			'text-colors': '#F4FBFF',

			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			yellow: '#ffc82c',
			'gray-dark': '#273444',
			gray: '#8492a6',
			'gray-light': '#d3dce6',
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
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	// plugins: [
	//   require('@tailwindcss/typography'),
	//   require('@tailwindcss/forms'),
	//   require('@tailwindcss/line-clamp'),
	//   require('@tailwindcss/aspect-ratio'),
	// ],
};

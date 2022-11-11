import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		// adapter: adapter({
		// 	precompress: true,
		// }),
		serviceWorker: {
			register: false,
		},
		trailingSlash: 'always',
	},
};

export default config;

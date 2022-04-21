import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		amp: false,
		// csp: {
		// 	directives: {
		// 		'script-src': ['self'],
		// 	},
		// },
		serviceWorker: {
			register: false,
		},
		prerender: {
			default: true,
		},
		vite: {
			resolve: {
				alias: {
					$src: resolve('./src'),
				},
			},
		},
	},
};

export default config;

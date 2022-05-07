// import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from 'node:path';
import adapter_ipfs from 'sveltejs-adapter-ipfs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		// adapter: adapter(),
		adapter: adapter_ipfs({}),
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
		trailingSlash: 'never',
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

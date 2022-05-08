// import adapter from '@sveltejs/adapter-static';
import adapter from 'sveltejs-adapter-ipfs';
import preprocess from 'svelte-preprocess';
import { resolve } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			precompress: true,
		}),
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
		// trailingSlash: 'ignore',
	},
};

export default config;

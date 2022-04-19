import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from 'node:path';
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			paths: { base: '/' },
			fallback: null,
			precompress: false,
		}),
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

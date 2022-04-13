import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

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
	},
};

export default config;

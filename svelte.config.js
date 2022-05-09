import adapter from '@sveltejs/adapter-static';
// import adapterIpfs from 'sveltejs-adapter-ipfs';
import preprocess from 'svelte-preprocess';
import { resolve } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			precompress: true,
			// fallback: 'index.html',
		}),
		// adapter: adapterIpfs({
		// 	removeBuiltInServiceWorkerRegistration: true,
		// 	injectPagesInServiceWorker: true,
		// 	// injectDebugConsole: true,
		// 	precompress: true,
		// 	fallback: 'index.html',
		// }),
		prerender: {
			default: true,
			concurrency: 4,
		},
		vite: {
			resolve: {
				alias: {
					$src: resolve('./src'),
				},
			},
		},
		trailingSlash: 'always',
	},
};

export default config;

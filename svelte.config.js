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
				optimizeDeps: { include: ['lottie-web'] },
			},
			server: {
				// configure vite for HMR with Gitpod
				hmr: process.env.GITPOD_WORKSPACE_URL
					? {
							// removes the protocol and replaces it with the port we're connecting to
							host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '7776-'),
							protocol: 'wss',
							clientPort: 443,
					  }
					: true,
			},
		},
		serviceWorker: {
			register: false,
		},
		trailingSlash: 'always',
	},
};

export default config;

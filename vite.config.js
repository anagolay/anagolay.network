import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'node:path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: resolve('./src'),
		},
		optimizeDeps: { include: ['lottie-web'] },
	},
	// server: {
	// 	// configure vite for HMR with Gitpod
	// 	hmr: process.env.GITPOD_WORKSPACE_URL
	// 		? {
	// 				// removes the protocol and replaces it with the port we're connecting to
	// 				host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '7776-'),
	// 				protocol: 'wss',
	// 				clientPort: 443,
	// 		  }
	// 		: true,
	// },
};

export default config;

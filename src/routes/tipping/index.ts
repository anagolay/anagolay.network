import type { RequestHandlerOutput } from '@sveltejs/kit';

// export const get: RequestHandler = async (): Promise<RequestHandlerOutput> => {
export async function get(): Promise<RequestHandlerOutput> {
	const features = [
		{ feature: 'Transparency', img: { src: '/icon_transparency.svg', alt: 'transparency' } },
		{
			feature: 'Decentralization',
			img: { src: '/icon_decentralization.svg', alt: 'decentralization' },
		},
		{ feature: 'Interconnectivity', img: { src: '/icon_interconnectivity.svg', alt: 'interconnectivity' } },
		{ feature: 'No Custodial Wallet', img: { src: '/icon_wallet.svg', alt: 'wallet' } },
	];

	const body = {
		features,
	};

	return {
		status: 200,
		body,
	};
}

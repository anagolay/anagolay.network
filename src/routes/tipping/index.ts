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
	const steps = [
		{
			number: 1,
			title: 'Verify & connect your sources: domains & digital identities.',
			description:
				'With a PolkadotJS account, you can use the Anagolay App to claim your domains ownership or, you can just verify your digital identities such as Twitter or Github.',
			img: {
				src: '/tipping_sources.svg',
				alt: 'list of possible sources',
				height: 342,
				glow: false,
			},
		},
		{
			number: 2,
			title: 'Start receiving tips for your work in IDI, DOT, or KSM.',
			description:
				'Once verified, start receiving tips from your supporters. Until now, you can choose to receive IDI, DOT or KSM; ERC20 will be integrated next.',
			img: {
				src: '/tipping_tips.svg',
				alt: 'tips, tokens and like icons',
				height: 342,
				glow: true,
			},
		},
		{
			number: 3,
			title: 'Get ready to license your creative works. Directly from your sources, on your terms.',
			description:
				'Sell or license the creative content directly from the verified sources and choose from predefined Licenses or create your own!',
			img: {
				src: '/tipping_license.svg',
				alt: 'license with a lock and copyright icon',
				height: 342,
				glow: true,
			},
		},
	];

	const body = {
		features,
		steps,
	};

	return {
		status: 200,
		body,
	};
}

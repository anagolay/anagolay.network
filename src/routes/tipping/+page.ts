import type { FeatureData, TippingStep } from '$src/types';

export function load() {
	const features: FeatureData[] = [
		{ feature: 'Verified Creators Only', img: { src: '/icon_proof.svg', alt: 'verified' } },
		{ feature: 'Across plattforms', img: { src: '/icon_interconnectivity.svg', alt: 'interconnectivity' } },
		{
			feature: 'Decentralized',
			img: { src: '/icon_decentralization.svg', alt: 'decentralization' },
		},
		{ feature: 'No Custodial Wallet', img: { src: '/icon_wallet.svg', alt: 'wallet' } },
	];
	const steps: TippingStep[] = [
		{
			number: 1,
			title: 'Verify & connect your channels: domains and online identities.',
			description:
				'With Anagolay App & a PolkadotJS you can verify ownership of your website domains and connect your accounts on Twitter or Github by proving you are who you claim to be.',
			img: {
				src: '/tipping_sources.svg',
				alt: 'list of possible sources',
				height: 389,
				width: 672,
				glow: false,
			},
		},
		{
			number: 2,
			title: 'Start receiving tips for your work in IDI, DOT, or KSM.',
			description:
				'Once verified, start receiving tips from your supporters. From the get-go, tips are enabled in IDI, DOT, or KSM; ERC20 will be integrated next.',
			img: {
				src: '/tipping_tips.svg',
				alt: 'tips, tokens and like icons',
				height: 320,
				width: 371,
				glow: true,
			},
		},
		{
			number: 3,
			title: 'Get ready to license your creative works. Directly from your verified channels, on your terms.',
			description:
				'Receiving tips is just the first step! Coming next - enabling your audience to license your works directly, just in a few clicks. You’ll be able to choose a predefined License or create your own.',
			img: {
				src: '/tipping_license.svg',
				alt: 'license with a lock and copyright icon',
				height: 336,
				width: 443,
				glow: true,
			},
		},
	];

	return {
		features,
		steps,
	};
}

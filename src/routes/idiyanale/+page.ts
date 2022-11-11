import type { FeatureData } from '$src/types';

export function load() {
	const cardsContent: FeatureData[] = [
		{
			feature:
				'It’s a novel approach, yet it has tremendous potential as it brings the best of both: the web3 tech stack and content-addressability.',
			icon: 'lightbulb',
		},
		{
			feature:
				'Once the core features of the framework are well-tested and approved by the community, Anagolay Inherits the role of the main net from Idiyanale.',
			img: { src: '/icon_proof.svg', alt: 'verified' },
		},
		{
			feature:
				' Idiyanale gives all the relevant data & value to Anagolay as a kick-start capital, it will be in Anagolay genesis block.',
			icon: 'rocket_launch',
		},
	];

	const processCards: string[] = [
		'IDI Token Holders will be entitled to receive a number of AGY tokens,  respective to their IDI share. The % of IDI tokens holders included in the Anagolay genesis block.',
		'After the launch of Anagolay, Idiyanale will either become a testnet for the upcoming features, or take a different path voted by the community.',
		'IDI stakers can directly become nominated validators on Anagolay Network while keeping their role and stake on Idiyanale.',
	];

	return {
		processCards,
		cardsContent,
	};
}

import type { RequestHandlerOutput } from '@sveltejs/kit';

import type { FeatureData, TechnologyItem } from '$src/types';

export async function get(): Promise<RequestHandlerOutput> {
	const descriptionItems: FeatureData[] = [
		{
			feature:
				'Generates, validates and stores verifiable records of Rights (Copyright, Licenses, and Ownership), Restrictions, and Proofs of any digital content.',
			icon: 'copyright',
		},
		{
			feature:
				'Enables creation of workflows (processes) to establish the uniqueness of an asset outside of a given centralized platform. ',
			img: { src: '/icon_workflow.svg', alt: 'decentralized network' },
		},
		{
			feature:
				'Allows for transparent and efficient management of the bundle of rights attached to an asset - ensuring their correct attribution and (potentially) monetization.',
			icon: 'verified_user',
		},
	];
	const cases: TechnologyItem[] = [
		{
			title: 'Protect & Share Creative Works online (Kelp)',
			subtitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor feugiat facilisi mattis aliquet commodo viverra in eget. Arcu pretium.',
			contentLines: [
				"Kelp's decentralised application built on Anagolay will empower users to store, claim, sell, and rent their work with the correct transfer of Rights and usage of Licenses.",
				'Actual digital data is never stored on the chain, only its cryptographic or perceptual proof. As such, it acts as an identifier, verifiable by users who have access to that same data without disclosing it in the process.',
				'The use-cases go way beyond digital images and photography, could be similarly applied in the music industry and video production, disrupting these markets.',
			],
			image: {
				height: 560,
				source: '/use_case_share.png',
				altText: 'sharing protected work',
			},
			boxItems: [
				'Creating legally valid Statements of Copyright and Ownership',
				'On the fly image resizing on IPFS allows to serve images right away',
				'Users can choose from predefined Licenses and create their own, attach them to the digital asset, share and sell it online',
				'Percentage-based Copyrights and Ownerships, giving all the flexibility for complex rights',
			],
		},
		{
			title: 'P2P licensing & Intelectual Property management',
			subtitle:
				'A meaningful and straightforward way to monetize & buy digital art. From verified creators, with customized licensing options. Not just ‘as a collectible’.',
			contentLines: [
				'Before someone can buy a good, it has to be clear who has the right to sell it, and once someone does buy, you need to be able to transfer ownership from the seller to the buyer. NFTs claim to solve this problem by giving parties something they can agree represents ownership. It became apparent though, that there are multiple issues with this approach which limits its applications.',
				'While gaining huge popularity as collectibles NFTs should have been to boost the creative economy, a working alternative to NFTs Craze.',
				'What we are building is a way to determine the uniqueness of digital content. With Anagolay implemented, NFTs will become obsolete and either die out or evolve.',
				'We rely on the identifiers (the Proofs, as a plurality of indicators) of the content rather than on incrementing a single value which is obtained through the minting process. The third parties (including current NFT marketplaces) will instead be able to query Anagolay Network to see if these Proofs match any records with claimed Copyrights or Ownerships.',
			],
			image: {
				height: 560,
				source: '/use_case_property.png',
				altText: 'licensed intelectual property work',
			},
			boxItems: ['Deterministic Workflows for Rights Verification & Management', 'IP management in the Web3'],
		},
		{
			title: 'Monetization of community support for Creators (of any kind) ',
			subtitle:
				'Tipping Extension for the browsers. The proofs of domain variations are stored on Anagolay. Then they can do any of the following:',
			contentLines: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor feugiat facilisi mattis aliquet commodo viverra in eget. Arcu pretium, consectetur adipiscing elit. Consectetur tortor feugiat facilisi mattis aliquet commodo viverra in eget. Arcu pretium.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur tortor feugiat facilisi mattis aliquet commodo viverra in eget. Arcu pretium, consectetur adipiscing elit. Consectetur tortor feugiat facilisi mattis aliquet commodo viverra in eget. Arcu pretium.',
			],
			image: {
				height: 560,
				source: '/use_case_monetization.png',
				altText: 'community monetization',
			},
			boxItems: [
				'Receive the tips from end users for the content they create. Examples are tutorial websites, news and other kind of digital written contend',
				'Sell and or rent the multimedia content directly from the website and receive the payment',
				'P2P encrypted communication between the user and the owner of the domain',
			],
		},
		{
			title: 'Rights management for real-world objects',
			subtitle:
				'The challenge of connecting real-live objects (from photography equipment to real estate) with digital self-sovereign identities of the owners (and other subjects of associated rights) remains to be unresolved. ',
			contentLines: [
				'Anagolay workflows can help with that — establish relation between real world assets and claims of their ownership ',
			],
			image: {
				height: 560,
				source: '/use_case_management.png',
				altText: 'management around the world',
			},
			boxItems: [
				'Photography equipment rental and buying/selling',
				'Transfer of ownership, rights',
				'a workflow may transform a document from the original format to another given format',
			],
		},
	];

	const body = {
		descriptionItems,
		cases,
	} as any;

	return {
		status: 200,
		body,
	};
}

import type { RequestHandlerOutput } from '@sveltejs/kit';

// import type { FeatureData, TechnologyItem } from '$src/types';

export async function get(): Promise<RequestHandlerOutput> {
	const descriptionItems =
		// : FeatureData[]
		[
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
	const cases =
		// : TechnologyItem[]
		[
			{
				title: 'Protect & Share Creative Works online',
				contentLines: [
					'While creating & storing records of Rights, Restrictions, and Proofs Anagolay allows asset creators to establish how digital assets are used and owned.',
					'A hybrid decentralised application built on Anagolay empowers users to store, claim, sell, and rent their work with the correct transfer of Rights and usage of Licenses.',
					'A meaningful and straightforward way to monetize & buy digital art. From verified creators, with customized licensing options. Not just ‘as a collectible’.',
				],
				image: {
					height: 560,
					source: '/use_case_share.png',
					altText: 'sharing protected work',
				},
				boxItems: [
					'Create legally valid Statements of copyright and ownership',
					'Each statement contains the Claim (with bundle of Proofs) and Signatures',
					'Signatures are signed voluntarily by the holder and issuer',
					'On-the-fly image resizing on IPFS allows to serve images right away',
				],
			},
			{
				title: 'P2P licensing & Intelectual Property management',
				subtitle:
					'A meaningful and straightforward way to monetize & buy digital art. From verified creators, with customized licensing options. Not just ‘as a collectible’.',
				contentLines: [
					'Before someone can buy or rent (digital) good, it has to be clear who has the right to sell it. Then we need to be able to transfer the ownership / certain rights from the seller(s) to the buyer(s). ',
					'NFT solutions claimed to (partially) solve this problem by giving parties something they can agree represents ownership - a single value obtained through the minting process. There are multiple issues with this approach however, which limits its applications.',
					'Unlike NFT platforms, Anagolay Statements rely on multiple identifiers (Proofs, as a plurality of indicators) of the content. The third parties (inc. current NFT marketplaces) could query Anagolay to see if these Proofs match any records with claimed Copyrights or Ownerships.',
				],
				image: {
					height: 560,
					source: '/use_case_property.png',
					altText: 'licensed intelectual property work',
				},
				boxItems: [
					'Claims created & verified via transparent deterministic Workflow, no central entity to entrust',
					'Statements can be always verified without disclosing any private dataIP management in the Web3',
					'Owners can choose from predefined Licenses or create their own',
					'Percentage-based Copyrights and Ownerships give flexibility for complex rights management implementation',
				],
			},
			{
				title: 'Monetization of community support for Creators (of any kind) ',
				contentLines: [
					'Creator economy is on the rise, but creators still have to rely on a central entity (platforms) and abide by their rules. Anagolay enables community tipping & donations outside.',
					'A browser extension connected to Anagolay allows tipping functionality for verified domain/account owners. The proofs of domain or account variations are stored and verified on Anagolay. Verified creators can do any of the following:',
				],
				image: {
					height: 560,
					source: '/use_case_monetization.png',
					altText: 'community monetization',
				},
				boxItems: [
					'Receive tips from end users for virtually any type of content they create: blogposts, news coverage, tutorials, code repositories, etc.',
					'Sell or license the multimedia content directly from the verified website with payments in crypto or fiat',
					'Have P2P encrypted communication between the user and the owner of the domain',
					'Set up specific goals / couses to get community support',
				],
			},
			{
				title: 'Rights management for real-world objects',
				contentLines: [
					'The challenge of connecting real-live objects (from photography equipment to real estate) with digital self-sovereign identities of the owners (and other subjects of associated rights) remains to be unresolved.',
					'Anagolay workflows can help with establishing that — establish relation between real world assets and claims of their ownership.',
				],
				image: {
					height: 560,
					source: '/use_case_management.png',
					altText: 'management around the world',
				},
				boxItems: [
					'Valid digital ownership statements',
					'Traceability on how the statement was generated',
					'In-built p2p buying and rentals options',
					'Already implemented for photography equipment',
				],
			},
		];

	const body = {
		descriptionItems,
		cases,
	};
	//  as any;

	return {
		status: 200,
		body,
	};
}

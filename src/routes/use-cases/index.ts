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
				title: 'Protect & Share Creative Works Online',
				contentLines: [
					'While creating & storing records of Rights, Restrictions, and Proofs Anagolay allows content creators to establish how their digital assets are used and owned.',
					'A Dapp built on Anagolay empowers users to store, claim, sell, and rent their works with the correct transfer of Rights and usage of Licenses.',
					'Anagolay provides a meaningful and straightforward way to monetize & buy digital art. From verified creators, with customized licensing options. Not just ‘as a collectible’.',
				],
				image: {
					class: '',
					source: '/use_case_share.svg',
					altText: 'sharing protected work',
				},
				boxItems: [
					'Create legally valid Statements of copyright and ownership',
					'Each statement contains the Claim (a bundle of Proofs) and Signatures',
					'Claims are signed voluntarily by the holder and issuer, making it legally valid in most jurisdictions',
					'On-the-fly image resizing on IPFS allows serving images right away',
				],
			},
			{
				title: 'P2P Licensing & Intellectual Property Management',
				contentLines: [
					'Before someone can buy or rent (digital) goods, it has to be clear who has the right to sell them. Then we need to be able to transfer the ownership / certain rights from the seller(s) to the buyer(s).',
					'NFT solutions claimed to (partially) solve this problem by giving parties something they can agree represents ownership - a single value obtained through the minting process. However, this approach has multiple issues, which limits its applications.',
					'Unlike NFT platforms, Anagolay Statements rely on multiple identifiers (Proofs) of the content. The third parties (inc. current NFT marketplaces) can use Anagolay to verify if these Proofs match any records with claimed Copyrights or Ownerships on their network.',
				],
				image: {
					class: '',
					source: '/use_case_property.svg',
					altText: 'licensed intelectual property work',
				},
				boxItems: [
					'Claims are created & verified via transparent deterministic Workflow, with no central entity to entrust',
					'Statements can always be verified without disclosing any private data',
					'Owners can choose from predefined Licenses or create their own',
					'Percentage-based Copyrights and Ownerships give flexibility for complex rights management implementation',
				],
			},
			{
				title: 'Monetization of Community Support for Creators (of any kind)',
				contentLines: [
					'The Creator economy is on the rise, but creators still have to rely on a central entity (platforms) and abide by their rules. Anagolay enables community support for creators, decentralized.',
					'A browser extension connected to Anagolay allows tipping functionality for verified domain/account owners. The proofs of domain or account variations are stored and verified on Anagolay. Verified creators can do any of the following:',
				],
				image: {
					class: 'm-10',
					source: '/use_case_monetization.svg',
					altText: 'community monetization',
				},
				boxItems: [
					'Receive tips from end-users for virtually any type of content they create: blog posts, news coverage, tutorials, code repositories, etc.',
					'Sell or license the multimedia content directly from the verified website with payments in crypto or fiat',
					'Have P2P encrypted communication between the user and the owner of the domain',
					'Set up specific goals/causes to get community support',
				],
			},
			{
				title: 'Rights Management for Real-World Objects',
				contentLines: [
					'The challenge of connecting real-live objects (from real estate to photography gear) with the digital self-sovereign identities of the owners (and other subjects of associated rights) remains unresolved.',
					'Anagolay workflows can help with establishing that connection. A transparent deterministic process is used to create and verify an ownership claim. Once proofs behind the claim are validated, the owner and the issuer sign the Ownership Statement with their GPG keys or substrate-based addresses.',
				],
				image: {
					class: 'py-8 -mt-4',
					source: '/use_case_management.svg',
					altText: 'management around the world',
				},
				boxItems: [
					'Valid & verifiable digital ownership statements',
					'Traceability of how the claim & proofs were generated',
					'Built-in p2p buying and rentals options',
					'Has been already implemented & tested for photography equipment',
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

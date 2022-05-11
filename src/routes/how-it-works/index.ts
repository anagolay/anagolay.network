import type { RequestHandler, RequestHandlerOutput } from '@sveltejs/kit';

import type { TechnologyItem, ArchitectureItem, WebLayerIcon } from '$src/types';

export const get: RequestHandler = async (): Promise<RequestHandlerOutput> => {
	const technologyItems: TechnologyItem[] = [
		{
			id: 'statements',
			title: 'Statements & Claims',
			subtitle:
				'Statements guarantee the rightfulness of a claim: Copyright, Ownership or any other data that can be presented as a semantic triple',
			contentLines: [
				'Statement is a record stored on the chain that proves the truthfulness of a Claim using the cryptographic signatures of a Holder and an Issuer. On Anagolay every claim is backed up by a bundle of Proofs.',
				'At this time, we support two types of statements: Copyright and Ownership.',
				'More will be added when we see the need for it and a practical use case.',
			],
			image: {
				class: '-my-[10%] md:-my-[15%] scale-110 md:scale-100 md:ml-0 md:-mb-[40%] 2xl:w-11/12',
				source: '/how_it_works_statements.png',
				altText: 'Statements',
			},
		},
		{
			id: 'proofs',
			title: 'Proofs',
			subtitle: 'The proof is sufficient evidence or a sufficient argument for the truth of a proposition.',
			contentLines: [
				'Anagolay associates several identifiers of authenticity (we call them Proofs) and allows to verify the correctness of a claim against such identifiers.',
				'Computing the identifiers is a repeatable process that always returns the same output no matter where or when the computation executes as long as the user provides the same input data.',
				'The execution consists of a number of tasks, called Operations. When connected together, they make up a Workflow.',
			],
			image: {
				class: '-my-4 scale-110 ml-[5%] 2xl:ml-[10%] md:-mt-[10%] md:mx-0 md:-mb-[40%] lg:-mt-[15%]',
				source: '/how_it_works_proofs.png',
				altText: 'Process proofs',
			},
		},
		{
			id: 'workflow',
			title: 'Workflow & Operations',
			subtitle:
				'Operation is a basic building block of a transparent and verifiable proof generation process. Stored Operations must be permanent.',
			contentLines: [
				'Operation is a well-structured library with standardized input and output signatures, written in Rust and compiled to WASM. All Operations must be versatile, easy to integrate, and can be used in almost any environment.',
				'Connected together, like lego pieces, Operations form a Workflow - a graph that has a single Operation entry-point. Once executed, a Workflow produces the list of strings that act as the input data identifiers - Proofs.',
			],
			image: {
				class:
					'-ml-[10%] -my-[5%] md:-mt-[20%] scale-125 md:-mt-[5%] lg:-mt-[15%] 2xl:-mt-[20%] md:ml-0 md:-mb-[30%]',
				source: '/how_it_works_workflow.png',
				altText: 'Process workflow',
			},
		},
		{
			title: 'Decentralized Storage',
			subtitle:
				'Anagolay requirements for decentralized storage are:  IPFS based (content addressability), permanency, high durability',
			contentLines: [
				'All the source code and compiled code is stored on IPFS nodes aiming for permanent storage. The default storage layer is Anagolay IPFS node, users can opt in to store their data on any IPFS powered systems of their choice.',
				'The challenge is to have Workflows & Operations Artifacts stored on IPFS permanently. ',
			],
			image: {
				class: '-my-[15%] md:-mt-[10%] md:-mt-[20%] lg:-mt-[25%] md:-mb-[20%]',
				source: '/how_it_works_storage.png',
				altText: 'Storage',
			},
		},
	];

	const webLayerIcons: WebLayerIcon[] = [
		{ title: 'Typescript', source: '/icon_typescript.svg' },
		{ title: 'Svelte', source: '/icon_svelte.svg' },
		{ title: 'Polka', source: '/icon_polka.svg' },
		{ title: 'WASM', source: '/icon_wasm.svg' },
		{ title: 'Tailwind css', source: '/icon_tailwind.svg' },
	];

	const architectureItems: ArchitectureItem[] = [
		{
			image: { source: '/icon_sdk.svg', altText: 'SDK icon' },
			title: 'SDK Layer',
			description: 'Typescript - Rust - Operations - Workflows - WASM - Workflow execution',
		},
		{
			image: { source: '/icon_ipfs.svg', altText: 'IPFS icon' },
			title: 'Storage Layer',
			description: 'Operations - Build Artifacts - Workflows - WASM - Source code',
		},
		{
			image: { source: '/icon_blockchain.svg', altText: 'blockchain icon' },
			title: 'Blockchain Layer',
			subtitle: 'Substrate with our pallets',
			description: 'Operations - Workflows - PoE - Statements - Artifacts',
		},
	];

	const body = {
		technologyItems,
		webLayerIcons,
		architectureItems,
	} as any;

	return {
		status: 200,
		body,
	};
};

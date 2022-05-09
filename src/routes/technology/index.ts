import type { RequestHandler, RequestHandlerOutput } from '@sveltejs/kit';

export interface technologySectionItem {
	id?: string;
	title: string;
	subtitle: string;
	contentLines: string[];
	image: {
		class: string;
		source: string;
		alt: string;
	};
}

interface architectureItem {
	title: string;
	subtitle?: string;
	description: string;
	img: {
		source: string;
		alt: string;
	};
}

export const get: RequestHandler = async (): Promise<RequestHandlerOutput> => {
	const technologySectionItems: technologySectionItem[] = [
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
				class: '-ml-32 -mr-8 -mb-12 -mt-16',
				source: '/hiw_statements.png',
				alt: 'statements',
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
				class: '-ml-12 md:-ml-8 -mt-40 -mb-4 -mr-40  md:-mt-32',
				source: '/hiw_proofs.png',
				alt: 'proofs',
			},
		},
		{
			id: 'workflow',
			title: 'Workflow & Operations',
			subtitle:
				'Operation is a basic building block of a transparent and verifiable proof generation process. Stored Operations must be permanent.',
			contentLines: [
				'Operation is a well-structured library with standardized input and output signatures, written in Rust and compiled to WASM. All Operations must be versatile, easy to integrate, and can be used in almost any environment.',
				'Connected together, like lego pieces, Operations form a Workflow - a graph that has a single Operation entry-point. Once executed, a Workflow produces the list of strings that act as the input data identifiers - Proofs.',
			],
			image: {
				class: '-ml-36 -mr-16 -mb-8 -mt-32',
				source: '/hiw_workflow.png',
				alt: 'workflow',
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
				class: '-mx-32 -mt-36 -mb-8 md:-mr-48 md:-mt-60',
				source: '/hiw_storage.png',
				alt: 'storage',
			},
		},
	];

	const architectureItems: architectureItem[] = [
		{
			img: { source: '/hiw_arch_sdk.svg', alt: 'sdk icon' },
			title: 'SDK Layer',
			description: 'Typescript - Rust - Operations - Workflows - WASM - Workflow execution',
		},
		{
			img: { source: '/hiw_arch_storage.svg', alt: 'sdk icon' },
			title: 'Storage Layer',
			description: 'Operations - Build Artifacts - Workflows - WASM - Source code',
		},
		{
			img: { source: '/hiw_arch_blockchain.svg', alt: 'sdk icon' },
			title: 'Blockchain Layer',
			subtitle: 'Substrate with our pallets',
			description: 'Operations - Workflows - PoE - Statements - Artifacts',
		},
	];

	const webLayerIcons: { title: string; source: string }[] = [
		{ title: 'Typescript', source: '/hiw_typescript.svg' },
		{ title: 'Svelte', source: '/hiw_svelte.svg' },
		{ title: 'Polka', source: '/hiw_polka.svg' },
		{ title: 'WASM', source: '/hiw_wasm.svg' },
		{ title: 'Tailwind css', source: '/hiw_tailwind.svg' },
	];

	const body = {
		technologySectionItems,
		architectureItems,
		webLayerIcons,
	} as any;

	return {
		status: 200,
		body,
	};
};

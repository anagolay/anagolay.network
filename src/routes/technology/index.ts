import type { RequestHandler, RequestHandlerOutput } from '@sveltejs/kit';

export interface SerialSectonItem {
	title: string;
	subtitle: string;
	contentLines: string[];
	image: {
		class: string;
		source: string;
		alt: string;
	};
	finalLink?: {
		url: string;
		text: string;
	};
}

export const get: RequestHandler = async (): Promise<RequestHandlerOutput> => {
	const sectionData: SerialSectonItem[] = [
		{
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
			finalLink: {
				url: '/',
				text: 'See technical info',
			},
		},
		{
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
	const body = {
		serialSection: sectionData,
		architectureSection: [],
	} as any;

	return {
		status: 200,
		body,
	};
};

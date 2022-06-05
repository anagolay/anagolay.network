import type { RequestHandlerOutput } from '@sveltejs/kit';

import type { TechnologyItem, ArchitectureItem, WebLayerIcon } from '$src/types';
const lineSize = '[2px]';

// export const get: RequestHandler = async (): Promise<RequestHandlerOutput> => {
export async function get(): Promise<RequestHandlerOutput> {
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
				width: 773,
				height: 770,
				class: '-my-[10%] md:-my-[30%] md:-mb-[75%] md:-ml-[10%] md:-mr-[5%]',
				source: '/how_it_works_statements.png',
				altText: 'Statements',
			},
			line2: `w-1/2 mx-auto h-1/4 xl:h-1/6 mt-auto flex justify-end items-start bg-gradient-to-bl from-neonGreen-400 to-spaceBlue-700 rounded-r-3xl rounded-t-none`,
			inner2: `rounded-r-3xl rounded-t-none -translate-x-${lineSize} -translate-y-${lineSize}`,
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
				width: 806,
				height: 750,
				class: '-ml-5 -my-10 md:-my-[15%] md:-mx-[10%] lg:-my-[30%] md:-mb-[50%] ',
				source: '/how_it_works_proofs.png',
				altText: 'Process proofs',
			},
			line1: `w-1/4 h-[40%] lg:h-1/4 flex justify-start items-start bg-gradient-to-b from-spaceBlue-700 to-neonGreen-400 rounded-l-3xl rounded-b-none -mt-${lineSize}`,
			inner1: `rounded-l-3xl rounded-b-none translate-x-${lineSize} translate-y-${lineSize}`,
			line2: `w-2/5 mx-[40%] md:h-1/4 xl:h-[10%] mt-auto flex justify-end items-start bg-gradient-to-br from-spaceBlue-700 to-neonGreen-400 rounded-b-3xl rounded-r-none`,
			inner2: `rounded-b-3xl rounded-r-none translate-x-${lineSize} -translate-y-${lineSize}`,
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
				width: 874,
				height: 787,
				class: '-ml-5 -mr-5 -my-[10%] md:-ml-[25%] md:-mr-[5%] md:-mt-[35%] md:-mb-[50%]',
				source: '/how_it_works_workflow.png',
				altText: 'Process workflow',
			},
			line1: `w-1/5 ml-[80%] h-[30%] flex justify-start items-start bg-gradient-to-b from-neonGreen-400 to-spaceBlue-700 rounded-r-3xl rounded-b-none -mt-${lineSize}`,
			inner1: `rounded-r-3xl rounded-b-none -translate-x-${lineSize} translate-y-${lineSize}`,
			line2: `w-2/5 mx-[40%] md:h-[20%] xl:h-[10%] mt-auto flex justify-end items-start bg-gradient-to-bl from-spaceBlue-700 to-neonGreen-400 rounded-b-3xl rounded-l-none`,
			inner2: `rounded-b-3xl rounded-l-none -translate-x-${lineSize} -translate-y-${lineSize}`,
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
				width: 806,
				height: 726,
				class: '-my-[15%] -mx-5 md:-mt-[35%] md:-mx-[10%] md:-mb-[30%]',
				source: '/how_it_works_storage.png',
				altText: 'Storage',
			},
			line1: `w-2/5 h-[40%] flex justify-start items-start bg-gradient-to-bl from-neonGreen-400 to-spaceBlue-700 rounded-l-3xl rounded-b-none -mt-${lineSize}`,
			inner1: `rounded-l-3xl rounded-b-none translate-x-${lineSize} translate-y-${lineSize}`,
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
			image: { source: '/icon_ipfs.svg', altText: 'IPFS icon' },
			title: 'Storage Layer',
			subtitle: 'IPFS',
			description: ['Git repositories', 'Documentation', 'WASM artifacts', 'Source code'],
		},
		{
			image: { source: '/icon_blockchain.svg', altText: 'blockchain icon' },
			title: 'Blockchain Layer',
			subtitle: 'Substrate with our pallets',
			description: ['Operations', 'Workflows', 'PoE', 'Artifacts'],
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
}

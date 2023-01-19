import type { FeatureData, TrustProcessItem, UseCase, TeamMember, RoadmapItem } from '$src/types';
import { STATUS } from '$src/types';
// import type { PageLoad } from './$types';

export function load() {
	const beastFeatures: FeatureData[] = [
		{
			feature: 'Each stored proof on the Anagolay chain can be verified',
			icon: 'verified_user',
		},
		{
			feature: 'Each Workflow executes 100% the same code on each run',
			icon: 'code',
		},
		{
			feature: 'Stored proofs are contextual and well structured',
			icon: 'folder',
		},
		{ feature: 'Created Statements are legally valid', icon: 'copyright' },
		{
			feature: 'Developed with a mindset that every drop of energy matters',
			icon: 'bolt',
		},
		{
			feature: 'Can work on Mars or any other isolated environment',
			icon: 'rocket_launch',
		},
		{ feature: 'Community verified source code', icon: 'handshake' },
		{
			feature: 'Privacy by default, users’ data is not stored on-chain',
			icon: 'private_connectivity',
		},
		{
			feature: 'All stored data structures are content addressable',
			img: { src: '/icon_decentralized.svg', alt: 'decentralized network' },
		},
	];

	const trustProcessItems: TrustProcessItem[] = [
		{
			src: '/trust_security.svg',
			alt: 'Secure process',
			text: 'The power of Anagolay is in creating application-agnostic processes (or Workflows) that everyone can trust.',
			linkText: 'Anagolay workflows',
			link: '/how-it-works/#how_it_works_workflow',
		},
		{
			src: '/trust_world.svg',
			alt: 'World Validation',
			text: 'Anagolay Workflow and its building blocks — Operations can be run anywhere in any environment (even on Mars!) and always produce the same results (Proofs) for the same (or similar) sets of data.',
			linkText: 'Anagolay proofs',
			link: '/how-it-works/#how_it_works_proofs',
		},
		{
			src: '/trust_print.svg',
			alt: 'Proofs',
			text: 'Anagolay Proofs, combined with cryptographic signatures, verify the rightfulness of a claim and generate Verifiable Statements.',
			linkText: 'Anagolay statements',
			link: '/how-it-works/#how_it_works_statements',
		},
	];

	const useCases: UseCase[] = [
		{
			src: '/case_code.svg',
			alt: 'Source code',
			title: 'Source code availability & trustworthiness',
			text: 'Highly available storage for source code built with the new ContentVersioning approach gives assurance and trustworthiness by design to developers and users alike.',
		},
		{
			src: '/case_ip.svg',
			alt: 'Ip management',
			title: 'IP management in the Web3',
			text: 'While creating & storing records of Rights, Restrictions, and Proofs Anagolay allows asset creators to establish how digital assets are used and owned.',
		},
		{
			src: '/case_p2p.svg',
			alt: 'Digital art',
			title: 'Digital Art P2P Licensing',
			text: 'A meaningful and straightforward way to monetize & buy digital art. From verified creators, with customized licensing options. Not just ‘as a collectible’.',
		},
	];

	const teamMembers: TeamMember[] = [
		{
			name: 'Daniel Maricic',
			title: 'Founder & Chief-Architect',
			img: '/team_daniel.png',
			bio: 'Daniel is the main brain behind Anagolay and a CTO of Kelp Digital OÜ, the company that develops Anagolay. A full-stack software engineer with over 13 years of experience in different business domains, from Fintech to real-time auctions and image management software. He is also a long-time photographer, passionate chief, and windsurfer.',
			links: ['https://www.linkedin.com/in/danielmaricic/', 'https://github.com/woss'],
			opacity: 'opacity-100',
		},
		{
			name: 'Adriano Dalpane',
			title: 'Senior Engineer',
			img: '/team_adriano.png',
			bio: 'Adriano Dalpane is a senior engineer with 11 years of experience and a vast portfolio ranging from Monte Carlo Tree Search AI for a game to a Bayesian classifier that performs match-making on a marketplace platform. For the last 2 years Adriano has been working with Rust and Substrate and now drives Anagolay implementation. On weekends he spends playing guitar, hiking, or cycling.',
			links: ['https://www.linkedin.com/in/adriano-dalpane/', 'https://github.com/digitalillusion'],
			opacity: 'opacity-40',
		},
		{
			name: 'Leonardo Monay',
			title: 'Front-End Engineer',
			img: '/team_leonardo.png',
			bio: 'Leonardo is a junior full-stack javascript developer specializing in decentralized solutions with 2+ years of experience. Before making a career switch, he dedicated 10 years to industrial engineering, data analysis and processing. A man of many talents, Leo also brews his own beer, dances salsa, enjoys a good gaming night and a moto ride.',
			links: ['https://www.linkedin.com/in/leomonay/', 'https://github.com/Leomonay'],
			opacity: 'opacity-40',
		},
		{
			name: 'Carla Pezzo',
			title: 'Art Director & UI/UX',
			img: '/team_carla.png',
			bio: 'Carla is a graphic designer, illustrator, and UX designer from Buenos Aires. Before joining the team, she worked for several years as a freelancer while also tutoring UX/UI lessons. Carla is passionate about everything that has to do with creativity, design, arts, and technology. She loves cats, nature, and doing yoga.',
			links: ['https://www.linkedin.com/in/carla-pezzo/'],
			opacity: 'opacity-40',
		},
		{
			name: 'Leila Iruzun',
			title: 'Business Operations',
			img: '/team_leila.png',
			bio: 'Leila’s background is in management and finance. Before joining Kelp, she has worked as a business consultant for several projects. Her research subject is digital art, NFTs, and digital copyright. MSc Management and Business Economics. Massachusetts Institute of Technology: Digital Transformation Program. Leila flies kites, enjoys origami, and is currently learning Chinese.',
			links: ['https://www.linkedin.com/in/leilairuzun/'],
			opacity: 'opacity-40',
		},
		{
			name: 'Elena Tairova',
			title: 'Founder',
			img: '/team_elena.png',
			bio: 'Elena is the CEO of Kelp Digital OÜ and Founder of Anagolay. With 9+ years of experience in digital strategy, media, & policy, since 2017 she has been working with DLT projects. MS Economics & Management. Global Media Industries, Data Regulation & Policy at LSE. EMBA at Quantic School of Business & Technology. To clear up her mind, Elena enjoys painting, windsurfing, and jogging.',
			links: ['https://www.linkedin.com/in/elena-tairova/'],
			opacity: 'opacity-40',
		},
	];

	const roadMapItems: RoadmapItem[] = [
		{
			title: 'Q1',
			year: 2021,
			instances: [
				{ goal: 'Concept Design ready', status: STATUS.done },
				{ goal: 'Key Technologies Validation', status: STATUS.done },
			],
		},
		{
			title: 'Q2',
			year: 2021,
			instances: [
				{ goal: 'Protocol Design', status: STATUS.done },
				{ goal: 'Anagolay Chain Prototype', status: STATUS.done },
			],
		},
		{
			title: 'Q3',
			year: 2021,
			instances: [
				{
					goal: 'Initial Version of Anagolay Chain Implementation',
					status: STATUS.done,
				},
				{ goal: 'Initial Documentation Version', status: STATUS.done },
			],
		},
		{
			title: 'Q4',
			year: 2021,
			instances: [
				{
					goal: 'Self-hosted service for rehosting git repositories on IPFS',
					description:
						'An important milestone for Anagolay, as building the provable process for proof generation must always execute the same code.\nDetails and results are [presented here](https://dev.to/woss/part-1-rehosting-git-repositories-on-ipfs-23bf)',
					status: STATUS.done,
				},
				{
					goal: 'Anagolay Publishing Service (1st iteration)',
					status: STATUS.done,
				},
			],
		},
		{
			title: 'Q1',
			year: 2022,
			instances: [
				{
					goal: 'Idiyanale Phase 1/2 (Web3 Foundation Grant)',
					status: STATUS.done,
				},
				{
					goal: 'Most common (generic) Operations & Workflows implemented',
					description:
						'Most common (generic) Operations that will be used in almost any Workflow. This includes features from QRCode generation, Multimedia extraction, calculation of Cryptographic hashes, and a multitude of perceptual and Locally sensitive hashes.',
					status: STATUS.done,
				},
			],
		},
		{
			title: 'Q2',
			year: 2022,
			instances: [
				{ goal: ' Anagolay rebrand and new website', status: STATUS.done },
				{
					goal: 'Idiyanale Phase 2/2 (Web3 Foundation Grant)',
					status: STATUS.done,
				},
				{
					goal: 'PoE & Statement of Ownership and Copyright',
					description:
						'Improve and re-design the workflows specific for Proofs-of-Exitance & Statement of Ownership and Copyright. Where blockchain is not the central technology, but a facilitator of transparency & freedom for the build architecture.',
					status: STATUS.done,
				},
			],
		},
		{
			title: 'Q3',
			year: 2022,
			instances: [
				{
					goal: 'Domain Verification & Macula  PoC',
					status: STATUS.done,
				},
				{
					goal: 'Anagolay Workflow Builder',
					status: STATUS.done,
				},
				{
					goal: 'Anagolay SDK',
					description:
						'While building SDK we will focus on the features for our JS/TS SDK, because the Anagolay interaction will come mostly from the Web Browser, Smart phones and Desktop environments. Our goal is to design SDK as intuitive and developer-friendly as possible.',
					status: STATUS.done,
				},
			],
		},
		{
			title: 'Q4',
			year: 2022,
			instances: [
				{ goal: 'Multi-token community contributions for verified creators.', status: STATUS.done },
				{ goal: 'Macula Image & Hosting (IPFS layer)', status: STATUS.done },
				{
					goal: 'Verifications Pallet: domains',
					status: STATUS.done,
				},
			],
		},
		{
			title: 'Q1',
			year: 2023,
			instances: [
				{
					goal: 'Tipping Pallet ',
					status: STATUS.doing,
				},
				{
					goal: 'Anagolay App & Extension (MVP)',
					status: STATUS.doing,
				},
				{
					goal: '1st Private Round',
					status: STATUS.doing,
				},
			],
		},
		{
			title: 'Q2',
			year: 2023,
			instances: [
				{
					goal: 'Idiyanale genesis block, IDI Token launch',
					status: STATUS.pending,
				},
				{
					goal: 'Anagolay App: creators’ dashboard',
					status: STATUS.pending,
				},
				{
					goal: 'Partner integrations',
					status: STATUS.pending,
				},
			],
		},
		{
			title: 'Q3',
			year: 2023,
			instances: [
				{
					goal: 'Additional verification strategies',
					status: STATUS.pending,
				},
				{
					goal: 'User Acquisition & Growth',
					status: STATUS.pending,
				},
			],
		},
		{
			title: 'Q4',
			year: 2023,
			instances: [
				{
					goal: 'New workflows & integrations: audio',
					status: STATUS.pending,
				},
				{
					goal: 'Enabling tips in ERC20',
					status: STATUS.pending,
				},
			],
		},
		{
			title: 'Q1',
			year: 2024,
			instances: [
				{
					goal: 'P2P Licensing Marketplace Beta ',
					status: STATUS.pending,
				},
				{
					goal: 'Enabling tips in fiat',
					status: STATUS.pending,
				},
			],
		},
	];

	return {
		beastFeatures,
		trustProcessItems,
		useCases,
		teamMembers,
		roadMapItems,
	};
}

import type { RequestHandlerOutput } from '@sveltejs/kit';

// import type { FeatureData, TechnologyItem } from '$src/types';

export async function get(): Promise<RequestHandlerOutput> {
	// const steps =
	// 	// : TechnologyItem[]
	// 	[
	// 		{
	// 			title: 'Succession principle',
	// 			contentLines: [
	// 				'In Anagolay Framework the two main chains are delivered consecutively under the succession principle.',
	//                 'It’s a novel approach, yet it has tremendous potential as it brings the best of both: the web3 technologies and content-addressable approach.',
	//                 'Once the core features of the framework are well-tested and approved by the community, Anagolay Inherits the role of the main net from Idiyanale,',
	//                 'Idiyanale gives all the relevant data & value to Anagolay as a kick-start capital, it will be in Anagolay genesis block.'
	// 			],
	// 			image: {
	// 				class: 'w-3/4 lg:w-2/3',
	// 				source: '/use_case_management.svg',
	// 				altText: 'management around the world',
	// 			},
	// 		},
	//         {
	// 			title: 'After Anagolay launch ',
	// 			contentLines: [
	// 				'After the launch of Anagolay, Idiyanale will either become a testnet for the upcoming features, or take a different path voted by the community.',
	//                 'IDI stakers can directly become nominated validators on Anagolay Network while keeping their role and stake on Idiyanale'
	// 			],
	// 			image: {
	// 				class: 'w-3/4 lg:w-2/3',
	// 				source: '/use_case_management.svg',
	// 				altText: 'management around the world',
	// 			},
	// 		},

	// 	];

	const cardsContent = [
		{
			feature:
				'It’s a novel approach, yet it has tremendous potential as it brings the best of both: the web3 technologies and content-addressable approach.',
			icon: 'lightbulb',
		},
		{
			feature:
				'Once the core features of the framework are well-tested and approved by the community, Anagolay Inherits the role of the main net from Idiyanale.',
			icon: 'check_circle_outline',
		},
		{
			feature:
				' Idiyanale gives all the relevant data & value to Anagolay as a kick-start capital, it will be in Anagolay genesis block.',
			icon: 'rocket_launch',
		},
	];

	const boxItems = [
		'After the launch of Anagolay, Idiyanale will either become a testnet for the upcoming features, or take a different path voted by the community.',
		'IDI stakers can directly become nominated validators on Anagolay Network while keeping their role and stake on Idiyanale.',
	];

	const body = {
		boxItems,
		cardsContent,
	};
	//  as any;

	return {
		status: 200,
		body,
	};
}

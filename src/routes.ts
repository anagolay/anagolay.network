import type { MenuOption, MediaIcon, LinkData } from '$src/types';

export const home: LinkData = {
	text: 'Home',
	url: '/',
	external: false,
	//  inNavBar: false
};
export const howItWorks: LinkData = { text: 'How it works', url: '/how-it-works/', external: false };
export const useCases: LinkData = { text: 'Use cases', url: '/use-cases/', external: false };
export const discover: MenuOption = {
	title: 'Discover',
	options: [
		{
			text: 'FAQ',
			url: 'https://www.notion.so/Anagolay-FAQ-530c3d1de6784e7eb0c842c7b9bedfa9',
			external: true,
		},
		{ text: 'Blog', url: 'https://blog.anagolay.network/', external: true },
		{
			text: 'Careers',
			url: 'https://www.notion.so/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6',
			external: true,
		},
	],
};
export const wiki = { text: 'Wiki', url: 'https://anagolay.dev/', external: true, color: '' };

// The following are routes for the footer
export const menuOptions: MenuOption[] = [
	{
		title: 'Discover',
		options: [
			{
				text: 'About',
				url: 'https://bit.ly/Anagolay_Deck_v1',
			},
			{ text: 'Blog', url: 'https://blog.anagolay.network' },
			{ text: 'FAQ', url: 'https://www.notion.so/Anagolay-FAQ-530c3d1de6784e7eb0c842c7b9bedfa9' },
			{
				text: 'Careers',
				url: 'https://www.notion.so/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6',
			},
		],
	},
	{
		title: 'For developers',
		options: [
			{ text: 'Wiki', url: 'https://anagolay.dev' },
			{ text: 'Github', url: 'https://github.com/anagolay' },
			{ text: 'Gitlab', url: 'https://gitlab.com/anagolay' },
		],
	},
];

export const media: MediaIcon[] = [
	{ name: 'Discord', url: 'https://discordapp.com/invite/WHe4EuY', image: '/discord.svg' },
	{ name: 'Twitter', url: 'https://twitter.com/AnagolayNet', image: '/twitter.svg' },
	{
		name: 'Matrix',
		url: 'https://matrix.to/#/#anagolay-general:matrix.org',
		image: '/matrix.svg',
	},
];

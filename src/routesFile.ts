import type { MenuOption, MediaIcon, LinkData } from '$src/types';

export const whitePaperUrl = 'https://bit.ly/Anagolay_WhitePaper_wip';

export const idiyanale: LinkData = { text: 'Idiyanale', url: '/idiyanale/', external: false };
export const howItWorks: LinkData = { text: 'How it works', url: '/how-it-works/', external: false };
// export const useCases: LinkData = { text: 'Use cases', url: '/use-cases/', external: false };
export const useCases: MenuOption = {
	title: 'Use Cases',
	options: [
		{
			text: 'Use Cases & Applications',
			url: '/use-cases/',
			external: false,
		},
		{
			text: 'Tipping',
			url: '/tipping/',
			external: false,
		},
	],
};

export const discover: MenuOption = {
	title: 'Discover',
	options: [
		{
			text: 'White Paper',
			url: whitePaperUrl,
			external: true,
		},
		{
			text: 'FAQ',
			url: 'https://www.notion.so/Anagolay-FAQ-530c3d1de6784e7eb0c842c7b9bedfa9',
			external: true,
		},
		{ text: 'Blog', url: 'https://anagolay.dev/blog/', external: true },
		{
			text: 'Careers',
			url: 'https://www.notion.so/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6',
			external: true,
		},
	],
};
export const deck = { text: 'Deck', url: 'https://bit.ly/Anagolay_Deck_202301', external: true, color: '' };

// The following are routes for the footer
export const menuOptions: MenuOption[] = [
	{
		title: 'Discover',
		options: [
			{
				text: 'White Paper',
				url: whitePaperUrl,
			},
			// {
			// 	text: 'Wiki',
			// 	url: 'https://anagolay.dev/',
			// },
			{ text: 'Blog', url: 'https://anagolay.dev/blog/' },
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
			{ text: 'Status', url: 'https://status.kelp.digital/status/main-services' },
		],
	},
];

export const media: MediaIcon[] = [
	{
		name: 'Discord',
		url: 'https://discordapp.com/invite/WHe4EuY',
		image: '/discord.svg',
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/AnagolayNet',
		image: '/twitter.svg',
	},
	{
		name: 'Matrix',
		url: 'https://matrix.to/#/#anagolay-general:matrix.org',
		image: '/matrix.svg',
	},
	{ name: 'Mastodon', url: 'https://mastodon.social/@anagolay', image: '/mastodon.svg', rel: 'me' },
];

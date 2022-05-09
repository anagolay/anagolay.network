<script lang="ts">
	interface menuOption {
		title: string;
		options?: {
			text: string;
			link: string;
		}[];
	}

	let menuOptions: menuOption[] = [
		{
			title: 'Discover',
			options: [
				{
					text: 'About',
					link: '/https://www.notion.so/kelp/Kelp-PitchDeck-b421d596ffca4d188d2144fe977e6c0d',
				},
				{ text: 'Blog', link: 'https://blog.anagolay.network' },
				{ text: 'FAQ', link: 'https://www.notion.so/Anagolay-FAQ-530c3d1de6784e7eb0c842c7b9bedfa9' },
				{
					text: 'Careers',
					link: 'https://www.notion.so/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6',
				},
			],
		},
		{
			title: 'For developers',
			options: [
				{ text: 'Wiki', link: 'https://anagolay.dev' },
				{ text: 'Github', link: 'https://github.com/anagolay' },
				{ text: 'Gitlab', link: 'https://gitlab.com/anagolay' },
			],
		},
	];

	const media = [
		{ name: 'discord', link: 'https://discordapp.com/invite/WHe4EuY', img: '/discord.svg' },
		{ name: 'twitter', link: 'https://twitter.com/AnagolayNet', img: '/twitter.svg' },
		{
			name: 'matrix',
			link: 'https://matrix.to/#/!FJvAuDoWRoMVuOFYwL:matrix.org?via=matrix.org',
			img: '/matrix.svg',
		},
	];
</script>

<div class="font-montserrat">
	<hr class="mb-6 -mx-6 xl:-mx-12 opacity-50 color-white" />
	<div class="flex flex-col md:flex-row items-center md:items-start text-center md:mx-auto text-base">
		<div class="w-36 md:w-[unset] md:my-0 md:-mr-8">
			<img
				class="md:object-contain md:-translate-y-[20%] md:-translate-x-[20%]"
				src="/green_logo.svg"
				alt="Anagolay logo"
			/>
		</div>
		<div class="flex w-full ml-2 md:w-fit justify-evenly text-left">
			{#each menuOptions as item}
				<div class="flex mx-3 lg:mx-6 md:py-0 flex-col">
					<div class="mb-4 md:mb-0 min-w-fit">{item.title}</div>
					{#each item.options as option}
						<a
							href={option.link}
							class="opacity-30 text-[90%] mb-2 md:mb-0"
							target="_blank"
							rel="noopener noreferrer"
						>
							{option.text}
						</a>
					{/each}
				</div>
			{/each}
		</div>
		<div
			class="w-60 md:w-[unset] md:max-w-[15rem] flex flex-col flex-grow py-12 md:py-0 md:ml-auto md:mr-1/10"
		>
			<div class="flex w-full justify-center mb-5">Join the community</div>
			<div class="flex flex-grow items-center justify-between mb-4">
				{#each media as item}
					<a
						href={item.link}
						class="flex justify-center items-center shadow-button h-12 w-12 rounded-full bg-darkblue text-white active:shadow-pressed"
						aria-label="social-media-{item.name}"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img class="max-h-5 max-w-[20px]" src={item.img} alt="{item.name} logo" />
					</a>
				{/each}
			</div>
		</div>
	</div>

	<div class="w-full text-xs text-center pb-16 font-light opacity-50 md:py-8">
		<p class="mb-1">Product of KELP DIGITAL OÜ</p>
		<p>Copyright © 2021-present Kelp Digital – All Rights Reserved</p>
	</div>
</div>

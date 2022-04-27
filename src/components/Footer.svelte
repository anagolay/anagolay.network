<script lang="ts">
	import Twitter from 'svelte-material-icons/Twitter.svelte';

	let options: { title: string; options?: { text: string; link: string }[] }[] = [
		{
			title: 'Discover',
			options: [
				{ text: 'About', link: '/' },
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
		{ name: 'discord', link: 'https://discordapp.com/invite/WHe4EuY', icon: 'discord' },
		{ name: 'twitter', link: 'https://twitter.com/AnagolayNet', img: 'twitter.svg' },
		{
			name: 'matrix',
			link: 'https://matrix.to/#/!FJvAuDoWRoMVuOFYwL:matrix.org?via=matrix.org',
			img: 'matrix.svg',
		},
	];
</script>

<div class="font-montserrat">
	<hr class="mb-6 w-full mx-auto opacity-50 color-white" />
	<div
		class="mx-[5%] flex flex-col md:flex-row items-center md:items-start text-center md:px-1/10 text-base md:text-lg"
	>
		<div class="w-36 md:w-[unset] md:my-0 md:-mr-8">
			<img
				class="md:object-contain md:-translate-y-[20%] md:-translate-x-[20%]"
				src="green_logo.svg"
				alt="Anagolay logo"
			/>
		</div>
		<div class="flex w-full ml-2 md:w-fit justify-evenly text-left">
			{#each options as item}
				<div class="flex mx-6 md:py-0 flex-col">
					<div class="mb-4 md:mb-0">{item.title}</div>
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
		<div class="flex flex-col py-12 md:py-0 w-60 md:ml-auto md:mr-1/10">
			<div class="flex w-full justify-center mb-5">Join the community</div>
			<div class="flex flex-grow items-center justify-between mb-4">
				{#each media as item}
					<button
						class="flex justify-center items-center shadow-button h-12 w-12 rounded-full bg-darkblue text-white active:shadow-pressed"
						aria-label="social-media-{item.name}"
					>
						{#if item.icon}
							<span class="material-icons">{item.icon}</span>
						{:else if item.img}
							<img class="max-h-5 max-w-[20px]" src={item.img} alt="{item.name} logo" />
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<div class="w-full text-xs text-center pb-16 font-light opacity-50 md:py-8">
		<p class="mb-1">Product of KELP DIGITAL OÜ</p>
		<p>Copyright © 2021-present Kelp Digital – All Rights Reserved</p>
	</div>
</div>

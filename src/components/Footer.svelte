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
		{ name: 'twitter', link: 'https://twitter.com/AnagolayNet', img: 'twitter.png' },
		{
			name: 'matrix',
			link: 'https://matrix.to/#/!FJvAuDoWRoMVuOFYwL:matrix.org?via=matrix.org',
			img: 'matrix.png',
		},
	];
</script>

<hr class="mb-6 w-full mx-auto opacity-50 color-white" />
<div
	class="mx-[5%] flex flex-col md:flex-row items-center md:items-start text-center md:px-1/10 text-base md:text-lg"
>
	<img
		class="w-28 md:w-[unset] md:object-contain my-5 md:my-0 md:mr-5"
		src="green_logo.webp"
		alt="Anagolay logo"
	/>
	<div class="flex w-full md:w-fit justify-evenly text-left">
		{#each options as item}
			<div class="flex py-2 md:py-0 flex-col md:px-2">
				<div>{item.title}</div>
				{#each item.options as option}
					<a href={option.link} class="opacity-30 text-[90%]" target="_blank" rel="noopener noreferrer">
						{option.text}
					</a>
				{/each}
			</div>
		{/each}
	</div>
	<div class="flex flex-col py-12 md:py-0 w-60 md:ml-auto md:mr-1/10">
		<div class="flex w-full justify-center">Join the community</div>
		<div class="flex flex-grow py-4 items-center justify-between">
			{#each media as item}
				<button
					class="flex justify-center items-center shadow-button h-12 w-12 rounded-full text-white active:shadow-pressed"
					aria-label="social-media-{item.name}"
				>
					{#if item.icon}
						<span class="material-icons">{item.icon}</span>
					{:else if item.img}
						<img class="h-5" src={item.img} alt="{item.name} logo" />
					{/if}
				</button>
			{/each}
		</div>
	</div>
</div>

<div class="w-full text-xs text-center py-16 font-light opacity-50">
	<p class="mb-1">Build by KELP DIGITAL OÜ</p>
	<p>Copyright © 2021-present Kelp Digital – All Rights Reserved</p>
</div>

<script lang="ts">
	import Twitter from 'svelte-material-icons/Twitter.svelte';

	let options: { title: string; options?: { caption: string; link: string }[] }[] = [
		{
			title: 'Discover',
			options: [
				{ caption: 'About', link: '/' },
				{ caption: 'Blog', link: '/' },
				{ caption: 'FAQ', link: '/' },
				{ caption: 'Careers', link: '/' },
			],
		},
		{
			title: 'For developers',
			options: [
				{ caption: 'Wiki', link: '/' },
				{ caption: 'Github', link: '/' },
				{ caption: 'Gitlab', link: '/' },
			],
		},
	];
</script>

<hr class="mb-6 w-full mx-auto opacity-50 color-white" />
<div
	class="mx-[5%] flex flex-col md:flex-row items-center md:items-start text-center md:px-1/10 text-base md:text-lg"
>
	<img
		class="w-28 md:w-[unset] md:object-contain my-5 md:my-0 md:mr-5"
		src="green_logo.png"
		alt="Anagolay logo"
	/>
	<div class="flex w-full md:w-fit justify-evenly text-left">
		{#each options as item}
			<div class="flex py-2 md:py-0 flex-col md:px-2">
				<div>{item.title}</div>
				{#each item.options as option}
					<a href={option.link} class="opacity-30 text-[90%]">{option.caption}</a>
				{/each}
			</div>
		{/each}
	</div>
	<div class="flex flex-col py-12 md:py-0 w-60 md:ml-auto md:mr-1/10">
		<div class="flex w-full justify-center">Join the community</div>
		<div class="flex flex-grow py-4 items-center justify-between">
			<button
				class="shadow-button h-12 w-12 rounded-full p-3 text-white active:shadow-pressed"
				aria-label="social-media-discord"
			>
				<span class="material-icons">discord</span>
			</button>
			<button
				class="shadow-button h-12 w-12 rounded-full p-3 text-white active:shadow-pressed"
				aria-label="social-media-matrix"
			>
				<!-- Search right Matrix icon and metod to insert -->
				<span class="material-icons text-base">M</span>
			</button>
			<button
				class="shadow-button h-12 w-12 rounded-full p-3 text-white active:shadow-pressed"
				aria-label="social-media-twitter"
			>
				<!-- Search right icon and metod to insert -->
				<Twitter size="1.2rem" /></button
			>
		</div>
	</div>
</div>

<div class="w-full text-xs text-center py-16 font-light opacity-50">
	<p class="mb-1">Build by KELP DIGITAL OÜ</p>
	<p>Copyright © 2021-present Kelp Digital – All Rights Reserved</p>
</div>

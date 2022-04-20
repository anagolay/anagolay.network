<script lang="ts">
	import Instagram from 'svelte-material-icons/Instagram.svelte';
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

<hr class="mb-[1.5rem] w-5/6 mx-auto opacity-50 color-white" />
<div class="flex flex-col md:flex-row items-center md:items-start w-full text-center md:px-1/10 text-[90%]">
	<img
		class="w-[6rem] md:w-[8rem] mix-blend-lighten my-5 md:my-0 md:mx-5"
		src="green_logo.png"
		alt="Anagolay logo"
	/>

	{#each options as item}
		<div class="py-2 md:py-0 flex-col md:px-2 md:text-left">
			<div>{item.title}</div>
			{#each item.options as option}
				<a href={option.link} class="hidden md:block opacity-30 text-[90%]">{option.caption}</a>
			{/each}
		</div>
	{/each}
	<div class="flex flex-col py-20 md:py-0 w-[15rem] md:ml-auto md:mr-1/10">
		<div class="flex w-full justify-center">Join the community</div>
		<div class="flex flex-grow py-[1rem] items-center justify-between">
			<button class="shadow-button rounded-full p-[1rem] text-white active:shadow-pressed">
				<span class="material-icons">discord</span>
			</button>
			<button class="shadow-button rounded-full p-[1rem] text-white active:shadow-pressed">
				<Instagram size="1.2rem" />
			</button>
			<button class="shadow-button rounded-full p-[1rem] text-white active:shadow-pressed"
				><Twitter size="1.2rem" /></button
			>
		</div>
	</div>
</div>

<div class="w-full text-xs text-center py-[4rem] font-light opacity-50">
	<p class="mb-1">Build by KELP DIGITAL OÜ</p>
	<p>Copyright © 2021-present Kelp Digital – All Rights Reserved</p>
</div>

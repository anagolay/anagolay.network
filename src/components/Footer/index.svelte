<script lang="ts">
	import Discord from 'svelte-material-icons/Discord.svelte';
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

<hr class="mb-5 w-5/6 mx-auto opacity-50 color-white" />
<div class="flex flex-col md:flex-row items-center md:items-start w-full text-center md:px-1/10 pb-[3rem]">
	<img
		class="w-[6rem] md:w-[8rem] mix-blend-lighten my-5 md:my-0 md:mx-5"
		src="green_logo.png"
		alt="Anagolay logo"
	/>

	{#each options as item}
		<div class="py-2 md:py-0 flex-col md:px-2">
			<div>{item.title}</div>
			{#each item.options as option}
				<a href={option.link} class="hidden md:block opacity-70  ">{option.caption}</a>
			{/each}
		</div>
	{/each}
	<div class="py-20 md:py-0 flex-col w-[20rem] md:ml-auto md:mr-1/10">
		<div class="mb-2">Join the community</div>
		<div class="flex justify-between">
			<button class="btn rounded-full p-3 text-white"><Discord size="1.2rem" /></button>
			<button class="btn rounded-full p-3 text-white"><Instagram size="1.2rem" /></button>
			<button class="btn rounded-full p-3 text-white"><Twitter size="1.2rem" /></button>
		</div>
	</div>
</div>

<div class="w-full text-xs text-center pb-[2rem]">
	<p class="mb-1">Build by KELP DIGITAL OÜ</p>
	<p>Copyright © 2021-present Kelp Digital – All Rights Reserved</p>
</div>

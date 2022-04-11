<script lang="ts">
	import Discord from 'svelte-material-icons/Discord.svelte';
	import Instagram from 'svelte-material-icons/Instagram.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	let options: { title: string; options?: string[] }[] = [
		{
			title: 'How it works',
			options: ['How it works', 'How it works'],
		},
		{
			title: 'Use cases',
			options: ['Use cases', 'Use cases'],
		},
		{
			title: 'The Team',
		},
	];
</script>

<div
	class="flex flex-col md:flex-row items-center md:items-start justify-evenly text-base w-full font-montserrat pb-[5rem] border-t-2 border-white border-opacity-30 pt-[2rem]"
>
	<div class="flex-col ">
		<img class="w-[8rem] mix-blend-lighten" src="square_bb_gl2.jpg" alt="Anagolay logo" />
	</div>
	<div class="flex flex-col-reverse text-center md:w-full md:flex-row px-3">
		<div class="md:flex md:justify-evenly w-full">
			{#each options as item}
				<div class="py-2 md:py-0 flex-col">
					<div>{item.title}</div>
					{#if item.options}{#each item.options as content}
							<div class="hidden md:block opacity-70 text-sm">{content}</div>
						{/each}
					{/if}
				</div>
			{/each}
			<div class="hidden md:block py-2 md:py-0 flex-col">
				<div>Community</div>
				<div class="opacity-70 text-sm">Discord</div>
				<div class="opacity-70 text-sm">Instagram</div>
				<div class="opacity-70 text-sm">Twitter</div>
			</div>
			<div class="py-2 md:py-0 flex-col">
				<div>FAQ</div>
			</div>
		</div>

		<div class="flex-col">
			<div>Subscribe to our newsletter</div>
			<form class="flex mt-3">
				<input class="bg-darkblue px-1" placeholder="Enter your email" />
				<button class="btn rounded-none text-green px-1" type="submit">&#10230;</button>
			</form>
		</div>
	</div>
	<div class="flex w-full justify-evenly pt-4 md:hidden">
		<button class="btn rounded-full p-3 text-white"><Discord size="1.2rem" /></button>
		<button class="btn rounded-full p-3 text-white"><Instagram size="1.2rem" /></button>
		<button class="btn rounded-full p-3 text-white"><Twitter size="1.2rem" /></button>
	</div>
</div>

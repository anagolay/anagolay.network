<script lang="ts">
	import { page } from '$app/stores';
	import Button from './Button.svelte';

	let toggleMenu = false;
	function toggleSideBar() {
		toggleMenu = !toggleMenu;
	}
	let links: { caption: string; url: string }[] = [
		{ caption: 'How it works', url: '/how' },
		{ caption: 'Use cases', url: '/use' },
		{ caption: 'The team', url: '/team' },
		{ caption: 'Community', url: '/community' },
	];
</script>

<nav
	class="flex items-center justify-center bg-darkestPrimary w-full text-sm py-3 pl-1 text-fontColor h-15 md:px-1/10 md:justify-between"
>
	<button class={`absolute text-inherit p-1 text-lg left-1 md:hidden`} on:click={toggleSideBar}>
		<i class={`fas fa-bars ${toggleMenu ? 'text-secondary' : ''}`} />
	</button>
	<a href="/">
		<img class="object-contain h-8 md:h-10" src="horizontal_white1.svg" alt="Anagolay logo" />
	</a>
	<div class="flex">
		<div
			class={`flex flex-col absolute top-16 bottom-0 bg-darkestPrimary  ${
				toggleMenu ? 'w-full py-auto translate-x-full duration-300' : ''
			} py-5  text-center right-full bg-main mx-auto
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-0 md:right-auto md:left-auto md:w-fit md:translate-x-0`}
		>
			{#each links as link}
				<a
					href={link.url}
					class={`p-2 min-w-fit hover:bg-darkPrimary border-b border-solid border-secondary ${
						$page.url.pathname === link.url ? 'text-secondary' : ''
					} md:hover:underline md:border-0 md:my-auto md:hover:bg-transparent`}
					on:click={toggleSideBar}
				>
					{link.caption}
				</a>
			{/each}
			<Button
				addClass="bg-darkPrimary w-2/4 my-2 mx-auto md:ml-2 md:my-auto md:w-24"
				text="FAQ"
				onClick={toggleSideBar}
			/>
		</div>
	</div>
</nav>

<style></style>

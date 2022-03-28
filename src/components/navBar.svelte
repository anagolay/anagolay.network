<script lang="ts">
	import { page } from '$app/stores';

	let toggleMenu = false;
	function toggleSideBar() {
		toggleMenu = !toggleMenu;
	}
	let links: { caption: string; url: string }[] = [
		{ caption: 'Technology', url: '/technology' },
		{ caption: 'How it works', url: '/how' },
		{ caption: 'The team', url: '/team' },
		{ caption: 'Community', url: '/community' },
	];
</script>

<nav class="flex items-center justify-between bg-main w-full text-sm py-3">
	<button class="md:hidden p-1 mx-2 top-0 left-0 bg-secondary rounded-md" on:click={toggleSideBar}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>
	<div class="flex justify-center items-center h-10 w-3/4 md:w-2/6">
		<img class="object-contain h-full" src="horizontal_white1.svg" alt="Anagolay logo" />
	</div>
	<div class="flex">
		<div
			class={`flex flex-col absolute top-16 bottom-0  ${
				toggleMenu ? 'w-full py-auto translate-x-full duration-300' : ''
			} py-5  text-center right-full bg-main mx-auto
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-0 md:right-auto md:left-auto md:w-fit md:translate-x-0`}
		>
			{#each links as link}
				<a
					href={link.url}
					class="px-2 my-2 md:my-auto min-w-fit hover:underline"
					class:active={$page.url.pathname === link.url}
					on:click={toggleSideBar}
				>
					{link.caption}
				</a>
			{/each}
			<button
				class="bg-secondary px-6 my-2 p-2 w-2/4 mx-auto rounded-full flex items-center justify-center
                md:my-1 md:py-1 md:w-24 md:mx-5"
				on:click={toggleSideBar}
			>
				FAQ
			</button>
		</div>
	</div>
</nav>

<style>
	.active {
		color: var(--primary);
	}
</style>

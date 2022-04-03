<script lang="ts">
	import NavLink from './NavLink.svelte';
	import NavButton from './NavButton.svelte';

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
	class="z-10 fixed flex items-center bg-opacity-95 justify-center bg-black w-screen text-sm py-3 pl-1 text-white h-15 md:px-1/10 md:justify-between"
>
	<button class={`absolute text-inherit p-1 text-lg left-1 md:hidden`} on:click={toggleSideBar}>
		<i class={`fas fa-bars ${toggleMenu ? 'text-green' : ''}`} />
	</button>
	<a href="/">
		<img class="object-contain h-8 md:h-10" src="horizontal_white1.svg" alt="Anagolay logo" />
	</a>
	<div
		class={`z-10 flex flex-col absolute top-16 bottom-0 bg-black md:bg-transparent h-screen bg-opacity-95
			  ${toggleMenu ? 'w-full py-auto translate-x-full duration-300' : ''} py-0  text-center right-full mx-auto
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-0 md:right-auto md:left-auto md:w-fit md:translate-x-0`}
	>
		{#each links as link}
			<NavLink caption={link.caption} url={link.url} onClick={toggleSideBar} />
		{/each}
		<NavButton caption="FAQ" url="faq" onClick={toggleSideBar} />
	</div>
</nav>

<style></style>

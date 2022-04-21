<script lang="ts">
	import { page } from '$app/stores';

	let toggleMenu = false;
	let menuIconColor = 'text-white';
	let menuTransition = '';

	//all links in sidebar have same styling
	let sidebarLinkClasses = 'h-14 m-0 border-b border-solid border-green py-2 w-full';

	//toggleSideBar will open sidebar if it is closed or close it if opened.
	function toggleSideBar() {
		if (toggleMenu) {
			closeSideBar();
		} else {
			toggleMenu = true;
			menuIconColor = 'text-green';
			menuTransition = 'w-full py-auto translate-x-full duration-300';
		}
	}

	//closes sidebar after clicking an option
	function closeSideBar() {
		toggleMenu = false;
		menuIconColor = 'text-white';
		menuTransition = '';
	}

	//navlinks
	let links: { text: string; url: string; color: string }[] = [
		{ text: 'How it works', url: '/how-it-works', color: '' },
		{ text: 'Use cases', url: '/use', color: '' },
		{ text: 'The team', url: '#team', color: '' },
		{ text: 'FAQ', url: '/faq', color: '' },
	];

	//whitepaper is a different link.
	let whitePaper = { text: 'Whitepaper', url: '/' };

	//this function sets color for navlinks when current path changes.
	function setColor(currentPath: string) {
		for (let link of links) {
			link.color = link.url === currentPath ? 'text-green' : '';
		}
	}

	$: setColor($page.url.pathname);
</script>

<nav
	class="z-10 fixed p-4 flex items-center bg-opacity-95 justify-center bg-anagolayBlack w-full text-sm p8 text-white h-15 md:px-1/10 md:justify-between"
>
	<button class="absolute text-inherit p-1 text-lg left-1 md:hidden" on:click={toggleSideBar}>
		<span class="material-icons {menuIconColor}"> menu </span>
	</button>

	<!-- The on:click in <a/> tag executes closeSidebar function -->
	<a href="/" on:click={closeSideBar}>
		<img class="object-contain h-8 md:h-10" src="horizontal_white1.svg" alt="Anagolay logo" />
	</a>

	<div
		class="z-10 flex flex-col absolute top-16 bottom-0 bg-black md:bg-transparent h-screen bg-opacity-95
			  py-0  text-center right-full mx-auto font-montserrat
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-0 md:right-auto md:left-auto md:w-fit md:translate-x-0 {menuTransition}"
	>
		{#each links as link}
			<a
				class="{sidebarLinkClasses} md:h-fit md:m-2 md:hover:underline md:border-0 md:my-auto md:hover:bg-transparent md:py-0 md:w-fit {link.color}"
				href={link.url}
				on:click={closeSideBar}
			>
				{link.text}
			</a>
		{/each}

		<a
			class="{sidebarLinkClasses} md:text-white md:w-fit md:h-fit md:ml-2 md:rounded-full md:bg-darkblue md:shadow-button md:btn-secondary md:text-base md:py-1.5 md:px-8 md:active:shadow-pressed"
			href={whitePaper.url}
			on:click={closeSideBar}
		>
			{whitePaper.text}
		</a>
	</div>
</nav>

<script lang="ts">
	import { page } from '$app/stores';
	import NavDropdown from './NavDropdown.svelte';

	let toggleMenu = false;
	let menuIconColor = 'text-white';
	let menuTransition = '';

	let discover = {
		title: 'Discover',
		options: [
			{ text: 'Use Cases', link: '#useCases', external: false },
			{ text: 'Blog', link: 'https://blog.anagolay.network/', external: true },
			{
				text: 'FAQ',
				link: 'https://www.notion.so/Anagolay-FAQ-530c3d1de6784e7eb0c842c7b9bedfa9',
				external: true,
			},
			{ text: 'Team', link: '#team', external: false },
		],
	};

	let community = {
		title: 'Community',
		options: [
			{ text: 'Discord', link: 'https://discordapp.com/invite/WHe4EuY', external: true },
			{ text: 'Twitter', link: 'https://twitter.com/AnagolayNet', external: true },
			{
				text: 'Matrix',
				link: 'https://matrix.to/#/!FJvAuDoWRoMVuOFYwL:matrix.org?via=matrix.org',
				external: true,
			},
		],
	};

	//all links in sidebar have same styling
	let sidebarLinkClasses = 'h-14 m-0 border-b border-solid border-green py-4 w-full';

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
	let links: { text: string; url: string; color: string }[] = [{ text: 'FAQ', url: '/faq', color: '' }];

	//this function sets color for navlinks when current path changes.
	function setColor(currentPath: string) {
		for (let link of links) {
			link.color = link.url === currentPath ? 'text-green' : '';
		}
	}

	$: setColor($page.url.pathname);
</script>

<nav
	class="z-10 fixed py-4 lg:py-6 items-center bg-opacity-95 justify-center bg-anagolayBlack w-full text-sm md:text-base p8 text-white h-15 md:justify-between"
>
	<div class="lg:container mx-auto w-5/6 flex justify-center md:justify-between">
		<button class="absolute px-3 py-1 left-1 md:hidden" on:click={toggleSideBar}>
			<span class="material-icons text-2xl {menuIconColor}"> menu </span>
		</button>

		<a href="/" on:click={closeSideBar}>
			<img class="object-contain h-10 lg:h-12" src="horizontal_white1.svg" alt="Anagolay logo" />
		</a>

		<div
			class="z-10 flex flex-col absolute top-16 bottom-0 bg-anagolayBlack md:bg-transparent h-screen bg-opacity-95
			  py-0  text-center right-full mx-auto font-montserrat
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-2 md:right-auto md:left-auto md:w-fit md:translate-x-0 {menuTransition}"
		>
			<NavDropdown id="community" data={community} />
			<NavDropdown id="discover" data={discover} />
		</div>
	</div>
</nav>

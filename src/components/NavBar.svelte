<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import NavDropdown from './NavDropdown.svelte';

	let toggleMenu = false;
	let menuIconColor = 'text-white';
	let menuTransition = '';
	const linkClass = 'px-2 py-2 rounded-sm md:w-fit hover:text-green';

	let menus = [
		{
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
		},
		{
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
		},
	];
	let noMenuLinks = [
		{ text: 'Wiki', url: 'https://anagolay.dev/' },
		{ text: 'Careers', url: 'https://www.notion.so/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6' },
	];

	let solid = false;

	//this function turns navbar from transparent to solid when not at top of the website.
	onMount(
		() =>
			(window.onscroll = () => {
				solid = document.body.scrollTop > 5 || document.documentElement.scrollTop > 5;
			})
	);

	//all links in sidebar have same styling
	// let sidebarLinkClasses = 'h-14 m-0 border-b border-solid border-green py-4 w-full';

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
	class="z-10 fixed py-2 items-center bg-opacity-100 justify-center bg-anagolayBlack w-full text-sm md:text-base p8 text-white h-15 md:justify-between"
>
	<div class="lg:container mx-auto w-5/6">
		<div class="flex justify-center md:justify-between xl:w-11/12 xl:mx-auto">
			<button class="absolute px-3 py-1 left-1 md:hidden" on:click={toggleSideBar}>
				<span class="material-icons text-2xl {menuIconColor}"> menu </span>
			</button>
			<div class="h-10 lg:h-12 my-auto">
				<a href="/" on:click={closeSideBar}>
					<img class="object-contain h-full" src="horizontal_white1.svg" alt="Anagolay logo" />
				</a>
			</div>

			<div
				class="z-10 flex flex-col absolute top-14 bottom-0 bg-anagolayBlack md:bg-transparent h-screen bg-opacity-100
			  py-0  text-center right-full mx-auto font-montserrat
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-2 md:right-auto md:left-auto md:w-fit md:translate-x-0 {menuTransition}"
			>
				<div class="hidden md:flex w-full md:w-fit justify-evenly">
					{#each menus as menu}
						<NavDropdown id={menu.title.toLowerCase()} data={menu} {linkClass} />
					{/each}
				</div>

				<div class="md:hidden text-center justify-evenly">
					{#each menus as menu}
						<div class="pt-6 pb-2">
							<div class="font-extrabold py-2">{menu.title}</div>
							<div class="flex font-light flex-col ">
								{#each menu.options as option}
									<a
										class={linkClass}
										href={option.link}
										on:click={closeSideBar}
										target="_blank"
										rel="noopener noreferrer">{option.text}</a
									>
								{/each}
							</div>
						</div>
					{/each}
				</div>
				{#each noMenuLinks as link}
					<div class="pt-6 pb-2 md:py-2">
						<a
							class="w-full font-extrabold {linkClass}"
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{link.text}
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</nav>

<script lang="ts">
	import { page } from '$app/stores';
	import NavDropdown from './NavDropdown.svelte';
	import NavLink from './NavLink.svelte';

	let toggleMenu = false;
	let menuIconColor = 'text-white';
	let menuTransition = '';
	const linkClass = 'px-2 py-2 rounded-sm md:w-fit hover:text-green';

	const technology = { text: 'Technology', url: 'technology', external: false };
	const useCases = { text: 'Use cases', url: '/#useCases', external: false };
	const discover = {
		title: 'Discover',
		options: [
			{
				text: 'FAQ',
				url: 'https://www.notion.so/Anagolay-FAQ-530c3d1de6784e7eb0c842c7b9bedfa9',
				external: true,
			},
			{ text: 'Blog', url: 'https://blog.anagolay.network/', external: true },
			{
				text: 'Careers',
				url: 'https://www.notion.so/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6',
				external: true,
			},
		],
	};
	const wiki = { text: 'Wiki', url: 'https://anagolay.dev/', external: true };

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
	function closeSideBar(): void {
		toggleMenu = false;
		menuIconColor = 'text-white';
		menuTransition = '';
	}
</script>

<nav
	class="z-10 fixed py-2 items-center justify-center bg-anagolayBlack w-full text-sm md:text-base p8 text-white h-15 md:justify-between"
>
	<div class="lg:container mx-auto w-5/6">
		<div class="flex justify-center md:justify-between">
			<button class="absolute px-3 py-1 left-1 md:hidden" on:click={toggleSideBar}>
				<span class="material-icons text-2xl {menuIconColor}"> menu </span>
			</button>
			<div class="h-10 lg:h-12 my-auto">
				<a href="/" on:click={closeSideBar}>
					<img
						loading="lazy"
						class="object-contain h-full"
						width="193"
						height="48"
						src="horizontal_white1.svg"
						alt="Anagolay logo"
					/>
				</a>
			</div>

			<div
				class="z-10 flex flex-col absolute top-14 bottom-0 bg-anagolayBlack md:bg-transparent h-screen bg-opacity-100
			  py-0  text-center right-full mx-auto font-montserrat
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-2 md:right-auto md:left-auto md:w-fit md:translate-x-0 {menuTransition}"
			>
				<div class="flex flex-col md:flex-row w-full md:w-fit justify-evenly">
					<NavLink class="font-bold my-3 md:my-0" option={technology} onClick={closeSideBar} />
					<NavLink class="font-bold my-3 md:my-0" option={useCases} onClick={closeSideBar} />
					<NavDropdown
						class="hidden md:block"
						id={discover.title.toLowerCase()}
						data={discover}
						{linkClass}
					/>
					<div class="flex flex-col md:hidden my-3">
						<b>Discover</b>
						{#each discover.options as link}
							<NavLink option={link} onClick={closeSideBar} />
						{/each}
					</div>
					<NavLink class="font-bold my-3 md:my-0" option={wiki} onClick={closeSideBar} />
				</div>
			</div>
		</div>
	</div>
</nav>

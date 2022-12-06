<script lang="ts">
	import { discover, idiyanale, howItWorks, useCases, deck } from '$src/routesFile';
	import Hamburguer from './Hamburguer.svelte';
	import NavDropdown from './NavDropdown.svelte';
	import NavLink from './NavLink.svelte';

	let toggleMenu = false;
	let menuTransition = '';

	//toggleSideBar will open sidebar if it is closed or close it if opened.
	function toggleSideBar(): void {
		if (toggleMenu) {
			closeSideBar();
		} else {
			toggleMenu = true;
			menuTransition = 'translate-x-full duration-300';
		}
	}

	//closes sidebar after clicking an option
	function closeSideBar(): void {
		toggleMenu = false;
		menuTransition = '';
	}
</script>

<nav
	data-sveltekit-prefetch
	class="sticky top-0 z-20 py-2 items-center justify-center bg-spaceBlue-900 text-sm md:text-base text-white h-16 md:h-20 md:justify-between border-b border-spaceBlue-50/50"
>
	<div class="md:container">
		<div class="flex justify-center md:justify-between">
			<button
				class="absolute top-3 p-2 left-3 md:hidden cursor-pointer"
				on:click={toggleSideBar}
				aria-label="menu"
			>
				<Hamburguer open={toggleMenu} />
			</button>
			<div class="h-8 my-1 md:h-12">
				<a href="/" on:click={closeSideBar}>
					<img
						class="object-contain h-full"
						width="193"
						height="48"
						src="/nav_logo_white.svg"
						alt="Anagolay logo"
					/>
				</a>
			</div>

			<div
				class="z-10 flex flex-col absolute top-14 bottom-0 bg-spaceBlue-900 md:bg-transparent h-screen bg-opacity-100
			  text-center right-full font-montserrat transition-transform duration-300 w-full {menuTransition}

            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-2 md:right-auto md:left-auto md:w-fit md:translate-x-0 "
			>
				<div class="flex flex-col md:flex-row w-full md:w-fit justify-evenly">
					<NavLink class="my-3 md:my-0" option={idiyanale} onClick={closeSideBar} />
					<NavLink class="my-3 md:my-0" option={howItWorks} onClick={closeSideBar} />

					<NavDropdown data={useCases} accordionHeightClass="h-28" onSelect={closeSideBar} />
					<NavDropdown data={discover} accordionHeightClass="h-44" onSelect={closeSideBar} />

					<NavLink class="my-3 md:my-0" option={deck} onClick={closeSideBar} />
				</div>
			</div>
		</div>
	</div>
</nav>

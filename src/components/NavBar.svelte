<script lang="ts">
	import { discover, idiyanale, howItWorks, useCases, deck } from '$src/routesFile';
	import Hamburguer from './Hamburguer.svelte';
	import NavDropdown from './NavDropdown.svelte';
	import NavLink from './NavLink.svelte';

	let toggleMenu = false;
	let menuTransition = '';
	let bgColor = 'bg-spaceBlue-900';

	let scrollY = 0;

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

	$: bgColor = scrollY ? 'bg-navBarBg' : 'bg-spaceBlue-900';
</script>

<svelte:window bind:scrollY />

<nav class="fixed w-full top-0 md:top-4 z-20">
	<div class="md:container">
		<div
			class="relative text-sm md:text-base {bgColor} shadow-black/50 transition-colors duration-300  md:rounded-cardLg md:-mx-8 md:px-8"
			class:shadow-navBar={scrollY > 0}
			class:text-white={scrollY > 0}
		>
			<div class="flex w-full h-16 md:h-20 justify-center items-center md:justify-between">
				<button
					class="absolute top-3 p-2 left-3 md:hidden cursor-pointer"
					on:click={toggleSideBar}
					aria-label="menu"
				>
					<Hamburguer open={toggleMenu} />
				</button>
				<div class="h-8 my-1 lg:h-10 ">
					<a href="/" on:click={closeSideBar}>
						<img
							class="object-contain h-full w-fit"
							width="193"
							height="48"
							src="/nav_logo_white.svg"
							alt="Anagolay logo"
						/>
					</a>
				</div>

				<div
					class="z-10 flex flex-col absolute top-16 bottom-0 {bgColor} md:bg-transparent h-screen bg-opacity-100 pt-4
			  text-center right-full font-firaMono transition-all duration-300 w-full 
				border-t border-spaceBlue-700
				{menuTransition}
				md:border-0 md:pt-0
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-2 md:right-auto md:left-auto md:w-fit md:translate-x-0 "
				>
					<div
						class="flex items-center flex-col md:flex-row md:gap-4 lg:gap-8 w-full md:w-fit justify-evenly md:text-sm lg:text-base"
					>
						<NavLink class="my-3 md:my-0" option={idiyanale} onClick={closeSideBar} />
						<NavLink class="my-3 md:my-0" option={howItWorks} onClick={closeSideBar} />

						<NavDropdown data={useCases} {bgColor} accordionHeightClass="h-28" onSelect={closeSideBar} />
						<NavDropdown data={discover} {bgColor} accordionHeightClass="h-44" onSelect={closeSideBar} />

						<NavLink class="my-3 md:my-0" option={deck} onClick={closeSideBar} />
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

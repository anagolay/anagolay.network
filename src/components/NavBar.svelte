<script lang="ts">
	import { discover, home, howItWorks, useCases, wiki } from '$src/routes';
	import NavDropdown from './NavDropdown.svelte';
	import NavLink from './NavLink.svelte';

	let toggleMenu = false;
	let menuIconColor = 'text-white';
	let menuTransition = '';
	let icon = 'menu';
	let accordionOpen = false;
	const linkClass = 'px-2 py-2 rounded-sm md:w-fit hover:text-neonGreen-400';

	//toggleSideBar will open sidebar if it is closed or close it if opened.
	function toggleSideBar(): void {
		if (toggleMenu) {
			closeSideBar();
		} else {
			icon = 'close';
			toggleMenu = true;
			menuIconColor = 'text-neonGreen-400 rotate-[360deg]';
			menuTransition = 'w-full py-auto translate-x-full';
		}
	}

	//closes sidebar after clicking an option
	function closeSideBar(): void {
		toggleMenu = false;
		menuIconColor = 'text-white rotate-0';
		menuTransition = '';
		icon = 'menu';
	}
</script>

<nav
	class="sticky top-0 z-20 py-2 items-center justify-center bg-spaceBlue-900 text-sm md:text-base text-white h-16 md:h-20 md:justify-between border-b border-spaceBlue-50/50"
>
	<div class="md:container">
		<div class="flex justify-center md:justify-between">
			<button class="absolute px-3 py-1 left-1 md:hidden" on:click={toggleSideBar}>
				<span class="material-icons text-2xl {menuIconColor} transition-all duration-300 ">
					{icon}
				</span>
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
			  py-0  text-center right-full mx-auto font-montserrat
            md:flex-row md:mx-0 md:relative md:top-auto md:h-full md:py-2 md:right-auto md:left-auto md:w-fit md:translate-x-0 {menuTransition}"
			>
				<div class="flex flex-col md:flex-row w-full md:w-fit justify-evenly">
					<NavLink class="font-bold my-3 md:my-0" option={home} onClick={closeSideBar} />
					<NavLink class="font-bold my-3 md:my-0" option={howItWorks} onClick={closeSideBar} />
					<NavLink class="font-bold my-3 md:my-0" option={useCases} onClick={closeSideBar} />
					<NavDropdown
						class="hidden md:block"
						id={discover.title.toLowerCase()}
						data={discover}
						{linkClass}
					/>
					<div
						class="flex px-4 flex-col md:hidden my-3 transition-all duration-500 rounded-lg overflow-hidden"
						class:h-6={!accordionOpen}
						class:h-36={accordionOpen}
					>
						<div class="flex justify-center">
							<p class="font-bold mb-2" on:click={() => (accordionOpen = !accordionOpen)}>Discover</p>
							{#if accordionOpen}
								<span class="material-icons"> expand_less </span>
							{:else}
								<span class="material-icons"> expand_more </span>
							{/if}
						</div>
						<div class="bg-spaceBlue-900">
							{#each discover.options as link}
								<NavLink class="py-1" option={link} onClick={closeSideBar} />
							{/each}
						</div>
					</div>
					<NavLink class="font-bold my-3 md:my-0" option={wiki} onClick={closeSideBar} />
				</div>
			</div>
		</div>
	</div>
</nav>

<script lang="ts">
	import { onMount } from 'svelte';
	import type { RoadmapItem } from '$src/types';
	import SectionButton from '$src/components/SectionButton.svelte';
	import Section from '$src/components/Section.svelte';

	// RoadmapItem component is split in two in order to let the line pass through
	import RoadmapElement from '$src/components/RoadmapElement.svelte';
	export let roadMapItems: RoadmapItem[];

	let gridClass = `grid w-full text-center grid-flow-col gap-36 auto-cols-fit`;
	let roadMap: HTMLDivElement;
	let roadWidth: number;
	let windowWidth: number;

	function scrollTo(left: number) {
		roadMap.scrollLeft = left;
	}

	//This functions always sets the fifth event in the middle of Roadmap, but it is not in function of the current event.
	//Check the position function.
	onMount(() => (roadMap.scrollLeft = 0.55 * roadWidth - 0.5 * windowWidth));
</script>

<Section>
	<div class="w-80 max-w-full sm:w-full mx-auto pt-40">
		<div class="flex justify-between items-center w-full text-xs md:text-base pb-16">
			<button
				class="flex items-center text-left w-1/3 opacity-60 cursor-pointer hover:opacity-100"
				on:click={() => scrollTo(0)}
			>
				<span class="material-icons mr-2 text-sm  md:text-base">west</span>
				<p class="hover:underline">Completed</p>
			</button>
			<h2 class="w-1/3 text-center text-xl md:text-3xl pb-8 sm:pb-0">Roadmap</h2>
			<button
				class="flex items-center justify-end w-1/3 opacity-60 cursor-pointer hover:opacity-100"
				on:click={() => scrollTo(roadWidth)}
			>
				<p class="hover:underline">Coming next</p>
				<span class="material-icons ml-2 text-sm md:text-base hover:no-underline">east</span>
			</button>
		</div>
		<div class="text-sm md:text-base">
			<div
				class="overflow-x-scroll scroll-smooth snap-x snap-mandatory"
				bind:this={roadMap}
				bind:clientWidth={windowWidth}
			>
				<div class="w-fit">
					<div class="w-full h-[.2rem] bg-gradient-to-r from-spaceBlue-700 to-neonGreen-400 mt-28 -mb-28" />
					<div class="w-fit" bind:clientWidth={roadWidth}>
						<div class={gridClass}>
							{#each roadMapItems as roadMapItem}
								<RoadmapElement {roadMapItem} />
							{/each}
						</div>
					</div>
				</div>
			</div>

			<div class="flex items-center justify-center text-white opacity-50 italic mt-16 mb-12">
				<span class="material-icons mr-2">west</span>
				<p class="md:hidden">Swipe to see</p>
				<p class="hidden md:block">Scroll to see</p>
				<span class="material-icons ml-2">east</span>
			</div>
			<div class="flex flex-col items-center">
				<a
					href="https://kelp.notion.site/060679a84bb34e949b0c23acea4e2700?v=e92d208977204ca6bcb80f5d63f22ff9"
					class="text-neonGreen-400 hover:underline">See the full roadmap</a
				>
				<SectionButton url="https://discordapp.com/invite/WHe4EuY" class="flex justify-center my-32">
					<span class="material-icons">discord</span>
					<p class="ml-[.3rem]">Join the community</p>
				</SectionButton>
			</div>
		</div>
	</div>
</Section>

<style>
	/*This class is here because Tailwind does not have a standard class for text-shadow.
	This class uses the tailwind shadow color variable*/
	.text-shadow-around {
		text-shadow: 1px 0 3px var(--tw-shadow-color), -1px 0 3px var(--tw-shadow-color),
			0 1px 3px var(--tw-shadow-color), 0 -1px 3px var(--tw-shadow-color);
	}
</style>

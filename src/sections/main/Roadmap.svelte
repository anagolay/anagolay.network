<script lang="ts">
	import { onMount } from 'svelte';
	import type { RoadmapItem } from '$src/types';
	import SectionButton from '$src/components/SectionButton.svelte';
	import Section from '$src/components/Section.svelte';

	// RoadmapItem component is split in two in order to let the line pass through
	import RoadmapElement from '$src/components/RoadmapElement.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
	export let roadMapItems: RoadmapItem[];

	let roadMap: HTMLDivElement = null;
	let roadmapWidth = 0;
	let windowWidth = 0;

	function scrollTo(left: number) {
		roadMap.scrollLeft = left;
	}

	//This functions always sets the fifth event in the middle of Roadmap, but it is not in function of the current event.
	onMount(() => {
		// first find the higlighted item
		const activeItem = roadMapItems.findIndex((item) =>
			item.instances.find((instance) => instance.status === 'doing')
		);
		// then, set the amount of items and the percentage position of the higlighted item
		const size = roadMapItems.length;
		const percentagePosition = (activeItem + 1) / size;
		// finally multiply percentage position and the roadmap width and substract the average between the element width and the window width
		roadMap.scrollLeft = percentagePosition * roadmapWidth - (roadmapWidth / size + windowWidth) / 2;
	});
</script>

<Section id="home_roadmap">
	<div class="w-80 max-w-full sm:w-full mx-auto">
		<SectionTitle class="pb-24 sm:pb-16">Roadmap</SectionTitle>
		<div class="text-sm md:text-base">
			<div class="overflow-x-scroll scroll-smooth" bind:this={roadMap} bind:clientWidth={windowWidth}>
				<div class="w-fit">
					<div class="w-full h-[.2rem] bg-gradient-to-r from-aquaTeal-300 to-neonGreen-400 mt-28 -mb-28" />
					<div class="w-fit pb-6" bind:clientWidth={roadmapWidth}>
						<div class="grid w-full text-center grid-flow-col auto-cols-fit">
							{#each roadMapItems as roadMapItem}
								<RoadmapElement {roadMapItem} />
							{/each}
						</div>
					</div>
				</div>
			</div>

			<div
				class="w-full flex flex-col items-center p-3 mt-16 mb-12 rounded-lg text-white bg-spaceBlue-50/10 opacity-50 italic"
			>
				<div class="flex md:hidden mb-2">
					<span class="material-icons mr-2">west</span>
					<p class="">Swipe to see</p>
					<span class="material-icons ml-2">east</span>
				</div>
				<div class="w-full flex items-center justify-between">
					<button
						class="flex items-center text-left w-1/3 opacity-60 cursor-pointer hover:opacity-100"
						on:click={() => scrollTo(0)}
					>
						<span class="material-icons mr-2 text-sm  md:text-base">west</span>
						<p class="hover:underline">Completed</p>
					</button>
					<div class="hidden md:flex">
						<span class="material-icons mr-2">west</span>
						<p>Scroll to see</p>
						<span class="material-icons ml-2">east</span>
					</div>
					<button
						class="flex items-center justify-end w-1/3 opacity-60 cursor-pointer hover:opacity-100"
						on:click={() => scrollTo(roadmapWidth)}
					>
						<p class="hover:underline whitespace-nowrap">Coming next</p>
						<span class="material-icons ml-2 text-sm md:text-base hover:no-underline">east</span>
					</button>
				</div>
			</div>
			<div class="flex flex-col items-center max">
				<a
					href="https://kelp.notion.site/060679a84bb34e949b0c23acea4e2700?v=e92d208977204ca6bcb80f5d63f22ff9"
					class="text-neonGreen-400 hover:underline">See the full roadmap</a
				>
				<SectionButton
					url="https://discordapp.com/invite/WHe4EuY"
					class="flex justify-center my-32"
					sizeClasses="max-w-full sm:max-w-md w-full py-8 text-base md:text-xl"
				>
					<span class="material-icons">discord</span>
					<p class="ml-[.3rem]">Join the community</p>
				</SectionButton>
			</div>
		</div>
	</div>
</Section>

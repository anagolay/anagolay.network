<script lang="ts">
	import { onMount } from 'svelte';
	import type { RoadmapItem } from '$src/types';
	import SectionButton from '$src/components/SectionButton.svelte';
	import { status } from '$src/routes/index';

	export let roadMapItems: RoadmapItem[];

	// Steps are roadMapItems that have global status, blur and opacity set for the timeline.
	const items = roadMapItems.map((item: RoadmapItem): RoadmapItem => {
		let state = status.done;
		let pointBlur = '';
		let pointOpacity = '';
		let factStatus = item.instances.map((f) => {
			let cardShadow =
				f.status === status.doing ? 'shadow-card shadow-green border border-green' : 'shadow-button';
			let cardOpacity = f.status === status.pending ? 'opacity-80' : 'bg-opacity-80';
			f.cardStyling = `${cardShadow} ${cardOpacity}`;
			return f.status;
		});
		let titleOpacity = 'opacity-70';
		let titleShadow = 'shadow-white';

		if (factStatus.includes(status.doing)) {
			state = status.doing;
			pointBlur = 'blur-[2px]';
			pointOpacity = 'opacity-90';
			titleShadow = 'shadow-green';
		} else if (factStatus.includes(status.pending)) {
			state = status.pending;
			pointBlur = 'blur-[5px]';
			pointOpacity = 'opacity-75';
			titleOpacity = 'opacity-30';
		}
		return {
			...item,
			status: state,
			pointBlur,
			pointOpacity,
			titleStyling: `${titleOpacity} ${titleShadow}`,
			yearOpacity: state === status.pending ? 'opacity-50' : '',
		};
	});

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

<div class="mx-auto pt-40">
	<div class="flex justify-between items-center w-full text-xs md:text-base pb-16">
		<button
			class="flex items-center text-left w-1/3 opacity-60 cursor-pointer hover:opacity-100"
			on:click={() => scrollTo(0)}
		>
			<span class="material-icons mr-2 text-sm  md:text-base">west</span>
			<p class="hover:underline">Completed</p>
		</button>
		<h2 class="w-1/3 text-center text-xl md:text-3xl">Roadmap</h2>
		<button
			class="flex items-center justify-end w-1/3 opacity-60 cursor-pointer hover:opacity-100"
			on:click={() => scrollTo(roadWidth)}
		>
			<p class="hover:underline">Coming next</p>
			<span class="material-icons ml-2 text-sm md:text-base hover:no-underline">east</span>
		</button>
	</div>
	<div class="text-sm md:text-base">
		<div class="overflow-x-scroll scroll-smooth" bind:this={roadMap} bind:clientWidth={windowWidth}>
			<div class="w-fit">
				<div>
					<div class={gridClass} bind:clientWidth={roadWidth}>
						{#each items as roadMapItem}
							<div class="mx-auto">
								<div class="text-7xl {roadMapItem.titleStyling} blur-[2px] text-darkblue text-shadow-around">
									{roadMapItem.title}
								</div>
								<div
									class="flex justify-end blur-0 text-xl pr-[1rem] -mt-[4rem] mb-[4rem] w-1/2 {roadMapItem.yearOpacity}"
								>
									{roadMapItem.year}
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="w-fit">
					<div class="w-full h-[.2rem] mt-2 bg-gradient-to-r from-blue to-green " />
					<div class={gridClass}>
						{#each items as roadMapItem}
							<div class="flex flex-col items-center mx-auto -mt-[1.1rem]">
								<div
									class="mb-4 relative w-8 h-8 bg-sphere from-green to-blue rounded-full -rotate-[25deg] {roadMapItem.pointBlur} {roadMapItem.pointOpacity}"
								/>
								{#each roadMapItem.instances as instance}
									<div
										class="w-56 p-7 mb-4  h-fit bg-blue italic {instance.cardStyling} mb-2 rounded-xl mx-auto text-anagolayWhite font-light"
									>
										{instance.goal}
									</div>
								{/each}
							</div>
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
			<a href="/" class="text-green hover:underline">See the full roadmap</a>
			<SectionButton url="https://discordapp.com/invite/WHe4EuY" class="flex justify-center my-32">
				<span class="material-icons">discord</span>
				<p class="ml-[.3rem]">Join the community</p>
			</SectionButton>
		</div>
	</div>
</div>

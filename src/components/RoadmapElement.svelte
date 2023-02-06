<script lang="ts">
	import type { RoadmapItem } from '$src/types';
	import { STATUS } from '$src/types';

	export let roadMapItem: RoadmapItem;

	// default classes
	let titleOpacity = 'opacity-70';
	let titleShadow = 'shadow-spaceBlue-50';
	let yearOpacity = '';
	let pointBlur = '';
	let pointOpacity = '';

	const instanceStatuses = roadMapItem.instances.map((i) => {
		//this function sets classes for each instance card.
		i.cardStyling = `${
			i.status === STATUS.doing ? 'bg-gradient-to-b from-aquaTeal-300 to-neonGreen-400 p-[1px]' : ''
		} ${i.status === STATUS.pending ? 'opacity-50' : 'bg-opacity-80'}`;
		return i.status;
	});

	// this sentence sets the blur and opacity of each point in timeline.
	if (instanceStatuses.includes(STATUS.doing)) {
		pointBlur = 'blur-[2px]';
		pointOpacity = 'opacity-90';
		titleShadow = 'shadow-neonGreen-400';
	} else if (instanceStatuses.includes(STATUS.pending)) {
		pointBlur = 'blur-[5px]';
		pointOpacity = 'opacity-75';
		titleOpacity = 'opacity-30';
		yearOpacity = 'opacity-50';
	}
</script>

<div class="flex flex-col items-center snap-center snap-always mx-16">
	<div class="text-7xl {titleOpacity} {titleShadow} blur-[2px] text-spaceBlue-800 text-shadow-around">
		{roadMapItem.title}
	</div>
	<div class="flex justify-start blur-0 text-xl -ml-4 -mt-[4rem] mb-[4rem] w-1/2 {yearOpacity}">
		{roadMapItem.year}
	</div>
	<div
		class="mb-4 -mt-1 relative w-8 h-8 bg-sphere from-neonGreen-400 to-spaceBlue-700 rounded-full -rotate-[25deg] {pointBlur} {pointOpacity}"
	/>
	{#each roadMapItem.instances as instance}
		<div class="{instance.cardStyling} my-2 rounded-lg mx-auto">
			<div class="bg-spaceBlue-900 rounded-lg">
				<div class="w-56 p-7 h-fit italic bg-spaceBlue-50/5 rounded-lg text-spaceBlue-50 font-light">
					{instance.goal}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	/*Tailwind does not have a standard class for text-shadow.
	This class works and uses the tailwind shadow color variable*/
	.text-shadow-around {
		text-shadow: 1px 0 3px var(--tw-shadow-color), -1px 0 3px var(--tw-shadow-color),
			0 1px 3px var(--tw-shadow-color), 0 -1px 3px var(--tw-shadow-color);
	}
</style>

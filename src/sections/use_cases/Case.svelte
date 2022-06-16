<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import type { TechnologyItem } from '$src/types';
	export let caseItem: TechnologyItem;
	export let i: number;
</script>

<Section class="py-20">
	<div class="flex flex-col items-center w-5/6 mx-auto">
		<h3 class="text-center text-2xl md:text-4xl lg:text-4xl text-neonGreen-400 mb-6 md:mb-8">
			{caseItem.title}
		</h3>
		<p class="text-base md:text-xl 2xl:text-2xl text-center">
			{caseItem.subtitle}
		</p>
	</div>
	<div class="flex flex-col md:flex-row w-5/6 mx-auto py-12" class:md:flex-row-reverse={i % 2 === 1}>
		<div class="basis-1/2 flex flex-col justify-center">
			{#each caseItem.contentLines as contentLine}
				<p class="my-2">
					{contentLine}
				</p>
			{/each}
		</div>
		<div class="basis-1/2 h-60 flex flex-col justify-center">
			<div class="w-80 h-80 mx-auto bg-light from-neonGreen-400/60 to to-transparent" />
			<!-- <img
				class="w-full bg-light from-neonGreen-400/60 to to-transparent"
				width={caseItem.image.width}
				height={caseItem.image.height}
				src={caseItem.image.source}
				alt={caseItem.image.altText}
			/> -->
		</div>
	</div>
	<div class="md:grid md:grid-cols-2 md:gap-8">
		{#each caseItem.boxItems as boxItem}
			<div
				class="shadow-cardTop shadow-aquaTeal-300 rounded-2xl bg-gradient-to-b from-spaceBlue-50/10 to-transparent my-2 md:my-4"
			>
				<div
					class="flex flex-col items-center bg-gradient-to-t from-spaceBlue-800/10 to-transparent p-2 md:p-4 rounded-2xl"
				>
					<div class="w-8 h-1 bg-neonGreen-400 my-4" />
					<p class="w-3/4 text-center text-sm md:text-base 2xl:text-lg">{boxItem}</p>
				</div>
			</div>
		{/each}
	</div>
</Section>

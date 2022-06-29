<script lang="ts">
	import GlowingLight from '$src/components/GlowingLight.svelte';

	import Section from '$src/components/Section.svelte';
	import type { TechnologyItem } from '$src/types';
	export let caseItem: TechnologyItem;
	export let i: number;
</script>

<Section class="py-12 md:py-20">
	<div class="flex flex-col lg:flex-row md:pb-12" class:lg:flex-row-reverse={i % 2 === 1}>
		<div
			class="basis-2/3 lg:basis-1/2 flex flex-col justify-center"
			class:md:pr-8={i % 2 === 0}
			class:md:pl-8={i % 2 === 1}
		>
			<h3 class="text-center md:text-left text-2xl md:text-3xl xl:text-4xl text-neonGreen-400 mb-6 md:mb-8">
				{caseItem.title}
			</h3>
			{#each caseItem.contentLines as contentLine}
				<p class="my-2 text-sm md:text-base 2xl:text-xl">
					{contentLine}
				</p>
			{/each}
		</div>
		<div class="basis-1/3 lg:basis-1/2 md:flex md:items-center">
			<GlowingLight class=" h-full from-neonGreen-400/40">
				<img
					class="object-contain relative mx-auto {caseItem.image.class}"
					src={caseItem.image.source}
					alt={caseItem.image.altText}
					height={caseItem.image.height}
				/>
			</GlowingLight>
		</div>
	</div>
	<div class="md:grid md:grid-cols-2 md:gap-x-8">
		{#each caseItem.boxItems as boxItem}
			<div
				class="shadow-cardTop shadow-aquaTeal-300 rounded-2xl bg-gradient-to-b from-spaceBlue-50/10 to-transparent my-6 md:my-4"
			>
				<div
					class="flex flex-col items-center bg-gradient-to-t from-spaceBlue-800/10 to-transparent p-2 md:p-4 rounded-2xl"
				>
					<div class="w-8 h-[2px] bg-neonGreen-400 my-4" />
					<p class="w-3/4 text-center text-sm md:text-base 2xl:text-lg">{boxItem}</p>
				</div>
			</div>
		{/each}
	</div>
</Section>

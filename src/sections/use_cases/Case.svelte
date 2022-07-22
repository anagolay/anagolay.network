<script lang="ts">
	import BoxItem from '$src/components/BoxItem.svelte';
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
			<div class="sm:w-3/4 lg:w-full mx-auto">
				<GlowingLight class=" from-neonGreen-400/40">
					<img
						class="object-contain relative mx-auto {caseItem.image.class}"
						src={caseItem.image.source}
						alt={caseItem.image.altText}
						height={caseItem.image.height}
					/>
				</GlowingLight>
			</div>
		</div>
	</div>
	<div class="md:grid md:grid-cols-2 md:gap-x-8">
		{#each caseItem.boxItems as boxItem}
			<BoxItem {boxItem} />
		{/each}
	</div>
</Section>

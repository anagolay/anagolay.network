<script lang="ts">
	import DescriptionCard from '$src/components/DescriptionCard.svelte';
	import FeatureCard from '$src/components/FeatureCard.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
	import type { FeatureData } from '$src/types';
	export let cardsContent: FeatureData[];
</script>

<Section class="py-6 md:pb-20" id="idiyanale_succession_principle">
	<div class="flex flex-col items-center text-center">
		<SectionTitle>Succession principle</SectionTitle>
		<p class="text-base md:text-xl 2xl:text-2xl md:w-3/4 md:mx-auto py-4">
			In Anagolay Framework the two main chains are delivered consecutively under the succession principle.
		</p>
		<div class="flex flex-col md:flex-row w-full gap-4 md:gap-8 justify-center items-stretch pt-12">
			{#each cardsContent as item}
				<div class="md:basis-[30%] mb-6">
					<FeatureCard data={item} iconClasses="w-16 h-16 lg:w-24 lg:h-24" iconSize="text-3xl lg:text-5xl" />
				</div>
			{/each}
		</div>
	</div>
</Section>

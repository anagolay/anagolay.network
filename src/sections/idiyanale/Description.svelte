<script lang="ts">
	import DescriptionCard from '$src/components/DescriptionCard.svelte';
	import Section from '$src/components/Section.svelte';
	import type { FeatureData } from '$src/types';
	export let cardsContent: FeatureData[];
</script>

<Section class="py-20">
	<div class="flex flex-col items-center text-center">
		<div class="py-12">
			<h3 class="text-2xl md:text-3xl lg:text-4xl text-neonGreen-400 mb-6 md:mb-8">
				Succession principleSuccession principle
			</h3>
			<p class="text-base md:text-xl 2xl:text-2xl md:w-3/4 md:mx-auto pb-4 md:pb-0">
				In Anagolay Framework the two main chains are delivered consecutively under the succession principle.
			</p>
		</div>
		<div class="flex w-full gap-8 justify-center pt-12">
			{#each cardsContent as item}
				<DescriptionCard {item} />
			{/each}
		</div>
	</div>
</Section>

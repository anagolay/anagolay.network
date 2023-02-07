<script lang="ts">
	import FeatureCard from '$src/components/FeatureCard.svelte';
	import Section from '$src/components/Section.svelte';
	import type { FeatureData } from '$src/types';

	export let descriptionItems: FeatureData[];
</script>

<Section id="use_cases_features">
	<div class="flex flex-col md:flex-row w-full pt-40 pb-12  md:pb-20 justify-between">
		{#each descriptionItems as data}
			<div class="md:basis-[30%] mb-12 md:mb-6">
				<FeatureCard {data} iconClasses="w-16 h-16 lg:w-24 lg:h-24" iconSize="text-3xl lg:text-5xl" />
			</div>
		{/each}
	</div>
</Section>

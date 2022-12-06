<script lang="ts">
	import DescriptionCard from '$src/components/DescriptionCard.svelte';
	import Section from '$src/components/Section.svelte';
	import type { FeatureData } from '$src/types';

	export let descriptionItems: FeatureData[];
</script>

<Section id="use_cases_features">
	<div class="flex flex-col md:flex-row w-full py-12 justify-between">
		{#each descriptionItems as item}
			<DescriptionCard {item} />
		{/each}
	</div>
</Section>

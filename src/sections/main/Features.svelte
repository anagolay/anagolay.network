<script lang="ts">
	import FeatureCard from '$src/components/FeatureCard.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
	import type { FeatureData } from '$src/types';

	export let beastFeatures: FeatureData[];
</script>

<Section id="home_main_features" class="relative bg-spaceBlue-900">
	<div class="text-center mb-40">
		<SectionTitle class="mb-12">
			<p class="md:mb-4">Anagolay is a</p>
			<p>different kind of beast</p>
		</SectionTitle>
		<div class="flex flex-wrap gap-4 justify-evenly">
			{#each beastFeatures as feature}
				<FeatureCard {feature} />
			{/each}
		</div>
	</div>
</Section>

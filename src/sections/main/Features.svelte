<script lang="ts">
	import FadeinCard from '$src/components/FadeinCard.svelte';
	import FeatureCard from '$src/components/FeatureCard.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
	import type { FeatureData } from '$src/types';

	export let beastFeatures: FeatureData[];
</script>

<Section id="home_main_features" class="relative bg-spaceBlue-900">
	<div class="text-center mb-40">
		<SectionTitle class="mb-12">
			<p class="md:mb-4">Essential infrastructure for digital</p>
			<p>creative market 3.0</p>
		</SectionTitle>
		<div class="flex flex-wrap gap-4 justify-evenly">
			{#each beastFeatures as data}
				<FadeinCard
					class="max-w-xs sm:max-w-full sm:basis-[45%] lg:basis-[30%] pt-6 transition-opacity delay-100 duration-700"
				>
					<FeatureCard {data} />
				</FadeinCard>
			{/each}
		</div>
	</div>
</Section>

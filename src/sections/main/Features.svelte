<script lang="ts">
	import FeatureCard from '$src/components/FeatureCard.svelte';
	import Section from '$src/components/Section.svelte';
	import type { FeatureData } from '$src/types';

	export let beastFeatures: FeatureData[];
</script>

<Section>
	<div class="mt-0 flex flex-col items-center text-center mb-20 md:mb-40">
		<h2 class="mb-12 text-green text-2xl md:text-4xl">
			<p class="md:mb-4">Anagolay is a</p>
			<p>different kind of beast</p>
		</h2>
		<div
			class="flex w-full flex-col mx-auto h-fit py-4 sm:flex-row sm:flex-wrap sm:justify-evenly 2xl:justify-between"
		>
			{#each beastFeatures as feature, i}
				<FeatureCard {feature} {i} />
			{/each}
		</div>
	</div>
</Section>

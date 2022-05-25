<script lang="ts">
	import FeatureCard from '$src/components/FeatureCard.svelte';
	import type { FeatureData } from '$src/types';

	export let beastFeatures: FeatureData[];
</script>

<section
	class="md:container w-[20rem] mx-auto max-w-full mt-0 flex flex-col sm:w-full items-center text-center mb-20 md:mb-40 snap-start"
>
	<h2 class="mb-12 text-green text-2xl md:text-4xl">
		<p class="mb-4">Anagolay is a</p>
		<p>different kind of beast</p>
	</h2>
	<div
		class="flex w-full flex-col mx-auto h-fit py-4 sm:flex-row sm:flex-wrap sm:justify-evenly 2xl:justify-between"
	>
		{#each beastFeatures as feature, i}
			<FeatureCard {feature} {i} />
		{/each}
	</div>
</section>

<script lang="ts">
	import FeatureCard from '$src/components/FeatureCard.svelte';
	import Section from '$src/components/Section.svelte';
	import type { FeatureData } from '$src/types';

	export let features: FeatureData[];
</script>

<Section class="py-20" id="tipping_comunity_revolution">
	<div class="flex w-full justify-center">
		<div
			class="basis-5/6 flex justify-center text-center text-xl md:text-2xl xl:text-4xl max-w-3xl py-8 md:py-16 xl:py-8"
		>
			Revolutionizing community support for Digital Creators & Open Source
		</div>
	</div>
	<div class="flex flex-col md:flex-row gap-8 w-full py-12 justify-between text-center items-stretch">
		{#each features as data}
			<div class="basis-1/4">
				<FeatureCard
					{data}
					iconClasses="w-12 h-12 lg:w-16 lg:h-16 -translate-y-4"
					iconSize="text-xl lg:text-3xl"
				/>
			</div>
		{/each}
	</div>
</Section>

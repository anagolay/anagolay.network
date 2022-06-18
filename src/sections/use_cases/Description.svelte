<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import type { FeatureData } from '$src/types';

	export let descriptionItems: FeatureData[];
</script>

<Section>
	<div class="flex flex-col md:flex-row w-full py-20 justify-between">
		{#each descriptionItems as item}
			<div
				class="md:basis-[30%] flex flex-col items-center border border-spaceBlue-800 rounded-3xl bg-gradient-to-b from-spaceBlue-50/5 to-transparent pb-4 mb-8"
			>
				<div class="px-8 pb-4 bg-radial66 from-neonGreen-400 to-transparent -mb-4">
					<div
						class="h-16 lg:h-20 w-16 lg:w-20 border flex justify-center items-center border-neonGreen-400 rounded-full -translate-y-[33%]  bg-spaceBlue-900 bg-gradient-to-br from-spaceBlue-800/90 to-spaceBlue-50/20"
					>
						{#if item.icon}
							<span class="material-icons sm:text-2xl lg:text-4xl text-neonGreen-400">{item.icon}</span>
						{:else if item.img}
							<img
								loading="lazy"
								class="material-icons w-2/5"
								width="30"
								height="30"
								src={item.img.src}
								alt={item.img.alt}
							/>
						{/if}
					</div>
				</div>
				<p class="w-5/6 text-center text-base lg:text-lg">
					{item.feature}
				</p>
			</div>
		{/each}
	</div>
</Section>

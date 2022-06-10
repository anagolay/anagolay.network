<script lang="ts">
	import type { FeatureData } from '$src/types';
	import FadeinCard from './FadeinCard.svelte';
	export let feature: FeatureData;
</script>

<div class="flex basis-4/5 sm:basis-[45%] lg:basis-[30%] pt-6">
	<FadeinCard class="w-full transition-opacity delay-100 duration-700">
		<div
			class="w-full rounded-3xl h-full bg-gradient-to-b from-spaceBlue-50/5 to-transparent border border-spaceBlue-800"
		>
			<div class="bg-upperLight from-neonGreen-400/50 to-transparent">
				<div class="flex justify-center">
					<div
						class="w-24 h-24 flex items-center justify-center -translate-y-6 bg-spaceBlue-900 bg-gradient-to-br from-spaceBlue-800/90 to-spaceBlue-50/20 border border-neonGreen-400 rounded-[100%]"
					>
						{#if feature.icon}
							<span class="material-icons text-5xl text-neonGreen-400">{feature.icon}</span>
						{:else if feature.img}
							<img
								loading="lazy"
								class="material-icons"
								width="48"
								height="48"
								src={feature.img.src}
								alt={feature.img.alt}
							/>
						{/if}
					</div>
				</div>
				<div class="flex justify-center pb-6">
					<div class="basis-4/5 2xl:text-lg">
						<p>{feature.feature}</p>
					</div>
				</div>
			</div>
		</div>
	</FadeinCard>
</div>

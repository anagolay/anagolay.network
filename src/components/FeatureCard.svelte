<script lang="ts">
	import type { FeatureData } from '$src/types';
	import BaseCard from './BaseCard.svelte';
	import CardIcon from './CardIcon.svelte';
	import FadeinCard from './FadeinCard.svelte';
	export let feature: FeatureData;
</script>

<div class="flex basis-4/5 sm:basis-[45%] lg:basis-[30%] pt-6">
	<FadeinCard class="w-full transition-opacity delay-100 duration-700">
		<BaseCard class="relative w-full h-full">
			<div class="flex justify-center">
				<CardIcon class="w-24 h-24">
					{#if feature.icon}
						<span class="material-icons text-5xl">{feature.icon}</span>
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
				</CardIcon>
			</div>
			<div class="flex justify-center pb-6">
				<div class="basis-4/5 2xl:text-lg">
					<p>{feature.feature}</p>
				</div>
			</div>
		</BaseCard>
	</FadeinCard>
</div>

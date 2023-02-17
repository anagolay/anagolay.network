<script lang="ts">
	import type { FeatureData } from '$src/types';
	import BaseCard from './BaseCard.svelte';
	import CardIcon from './CardIcon.svelte';
	export let data: FeatureData;
	export let iconClasses = 'w-24 h-24 -translate-y-6';
	export let iconSize = 'text-5xl';
</script>

<BaseCard class="flex flex-col relative w-full h-full">
	<div class="flex flex-col items-center">
		<CardIcon class={iconClasses}>
			{#if data.icon}
				<span class="material-icons {iconSize}">{data.icon}</span>
			{:else if data.img}
				<img
					loading="lazy"
					class="material-icons w-1/2"
					width="48"
					height="48"
					src={data.img.src}
					alt={data.img.alt}
				/>
			{/if}
		</CardIcon>
	</div>
	<div class="pb-8 flex-grow">
		<div class="basis-4/5 px-4 lg:px-8 2xl:text-lg flex flex-col h-full justify-between">
			<p>{data.text}</p>
			<slot name="arrow" />
		</div>
	</div>
</BaseCard>

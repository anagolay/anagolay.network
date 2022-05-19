<script lang="ts">
	import type { FeatureData } from '$src/types';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	export let feature: FeatureData;
	export let i: number;

	let isInView: boolean;
</script>

<div
	class="wrapper h-64 w-[24rem] max-w-full"
	use:inview={{ unobserveOnEnter: true, rootMargin: '5%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			in:fade={{ duration: 700, delay: (i % 3) * 150 }}
			class="w-[22rem] max-w-full sm:max-w-none sm:mx-2 my-8 mx-auto shadow-button flex flex-col items-center rounded-3xl bg-blue h-48 px-12 mt-8 text-base xl:text-xl"
		>
			<div
				class="flex w-24 h-24 items-center justify-center bg-blue/80 bg-gradient-to-br from-darkblue/90 to-anagolayWhite/20 mx-center text-green border border-green rounded-full -mt-6"
			>
				{#if feature.icon}
					<span class="material-icons text-5xl">{feature.icon}</span>
				{:else if feature.img}
					<img
						loading="lazy"
						class="material-icons h-12"
						width="48"
						height="48"
						src={feature.img.src}
						alt={feature.img.alt}
					/>
				{/if}
			</div>
			<div class="w-60 sm:w-[unset] md:text-base mt-4 h-20 my-4">
				<p class="py-4">{feature.feature}</p>
			</div>
		</div>
	{/if}
</div>

<style>
</style>

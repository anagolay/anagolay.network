<script lang="ts">
	import type { FeatureData } from '$src/types';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	export let feature: FeatureData;
	export let i: number;

	let isInView: boolean;
</script>

<div
	class="h-64 w-[24rem] 2xl:w-[27rem] max-w-full"
	use:inview={{ unobserveOnEnter: true, rootMargin: '5%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			in:fade={{ duration: 700, delay: (i % 3) * 150 }}
			class="w-[22rem] 2xl:w-[26rem] bg-gradient-to-b from-spaceBlue-50/5 to-transparent border border-spaceBlue-800 max-w-full my-8 mx-auto flex items-center rounded-3xl h-48 px-4 sm:px-12 mt-8"
		>
			<div class="h-full w-full">
				<div class="h-full w-44 mx-auto bg-upperLight from-neonGreen-400/50 to-transparent" />
			</div>

			<div class="-ml-[100%] w-full">
				<div
					class="flex w-24 h-24 mx-auto items-center justify-center bg-spaceBlue-900 bg-gradient-to-br from-spaceBlue-800/90 to-spaceBlue-50/20 mx-center text-neonGreen-400 border border-neonGreen-400 rounded-full -mt-6"
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
				<div class="w-60 max-w-full mx-auto sm:w-[unset] md:text-base 2xl:text-lg mt-4 h-20 my-4">
					<p class="py-4">{feature.feature}</p>
				</div>
			</div>
		</div>
	{/if}
</div>

<script lang="ts">
	import type { FeatureData } from '$src/types';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	export let feature: FeatureData;
	export let i: number;

	let isInView: boolean;
</script>

<div
	class="basis-4/5 sm:basis-[45%] lg:basis-[30%] pt-6"
	use:inview={{ unobserveOnEnter: true, rootMargin: '5%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			in:fade={{ duration: 700, delay: (i % 3) * 150 }}
			class="rounded-3xl h-full bg-gradient-to-b from-blue-50/5 to-transparent border border-blue-800"
		>
			<div class="bg-upperLight from-green-400/50 to-transparent">
				<div class="flex justify-center">
					<div
						class="w-24 h-24 flex items-center justify-center -translate-y-6 bg-blue-900 bg-gradient-to-br from-blue-800/90 to-blue-50/20 border border-green-400 rounded-[100%]"
					>
						{#if feature.icon}
							<span class="material-icons text-5xl text-green-400">{feature.icon}</span>
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
	{/if}
</div>

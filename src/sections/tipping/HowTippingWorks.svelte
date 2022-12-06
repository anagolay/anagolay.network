<script lang="ts">
	import type { TippingStep } from '$src/types';
	import Section from '$src/components/Section.svelte';

	export let steps: TippingStep[];
</script>

<Section class="pb-20 md:pb-0" id="how_it_works">
	<h2 class="text-2xl md:text-4xl pb-18 md:py-20 text-neonGreen-400 text-center">How it works</h2>
	{#each steps as step, i}
		<div class="flex flex-col lg:flex-row pt-16 md:pt-0 md:pb-20" class:lg:flex-row-reverse={i % 2 === 1}>
			<div
				class="basis-2/3 lg:basis-1/2 flex flex-col justify-center"
				class:md:pr-8={i % 2 === 0}
				class:md:pl-8={i % 2 === 1}
			>
				<h2
					class="text-3xl md:text-5xl text-center md:text-left text-spaceBlue-900 font-bold font-dmsans pb-4 text-shadow-around shadow-neonGreen-400"
				>
					{step.number} /
				</h2>
				<h3 class="text-center md:text-left text-xl lg:text-2xl text-neonGreen-400 mb-6 md:mb-8">
					{step.title}
				</h3>
				<p class="my-2 text-sm md:text-base 2xl:text-xl">
					{step.description}
				</p>
			</div>
			<div class="basis-1/3 lg:basis-1/2 md:flex md:items-center">
				<div class="w-3/4 lg:w-full mx-auto relative flex items-center justify-center">
					{#if step.img.glow}
						<div
							class="absolute w-3/4 pt-[75%] bg-light from-neonGreen-400/40 to-transparent rounded-[100%] animate-pulse"
						/>
					{/if}
					<img
						class="object-contain relative mx-auto pt-8 lg:pt-0"
						src={step.img.src}
						alt={step.img.alt}
						height={step.img.height}
						width={step.img.width}
					/>
				</div>
			</div>
		</div>
	{/each}
</Section>

<style>
	/*Tailwind does not have a standard class for text-shadow.
	This class works and uses the tailwind shadow color variable*/
	.text-shadow-around {
		text-shadow: 1px 0 1px var(--tw-shadow-color), -1px 0 1px var(--tw-shadow-color),
			0 1px 1px var(--tw-shadow-color), 0 -1px 1px var(--tw-shadow-color);
	}
</style>

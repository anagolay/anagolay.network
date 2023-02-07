<script lang="ts">
	import BaseCard from '$src/components/BaseCard.svelte';
	import IconContainer from '$src/components/IconContainer.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';

	import type { ArchitectureItem, WebLayerIcon } from '$src/types';

	export let webLayerIcons: WebLayerIcon[];
	export let architectureItems: ArchitectureItem[];

	for (let item of architectureItems) {
		item.wordContainer = [];
		for (let i = 0; i < item.description.length; i++) {
			item.wordContainer[i] = `${i % 2 === 0 ? '' : 'xl:mt-10'} ${
				i > 0 && i < item.description.length - 1 ? '' : ''
			} ${i >= item.description.length / 2 ? 'ml-auto xl:ml-0' : ''}`;
		}
	}
	const containerClass =
		'w-[25rem] px-2 max-w-full md:w-full flex md:py-6 lg:py-8 rounded-md md:rounded-3xl h-20 md:h-[unset] mx-auto mb-4 md:mb-8';
</script>

<Section
	id="how_it_works_architecture"
	class="mt-20 pt-20 bg-gradient-to-b from-spaceBlue-50/5 via-spaceBlue-50/5 to-transparent pb-40"
>
	<div class="lg:w-5/6 mx-auto">
		<div class="relative text-center pb-8 md:py-16">
			<SectionTitle>Architecture</SectionTitle>
		</div>

		<BaseCard class={containerClass}>
			<div
				class="w-28 min-w-[7rem] md:w-48 lg:w-56 flex justify-end text-right items-center text-neonGreen-400"
			>
				<p class="text-[.56rem] md:text-base font-bold "><i>Web Apps Layer</i></p>
				<span class="material-icons text-xl md:text-4xl ml-2 md:ml-4">web_asset</span>
			</div>
			<div
				class="flex flex-grow px-2 md:mx-auto md:flex-grow-0 my-auto md:w-5/6 md:justify-between md:px-16 justify-evenly md:text-left items-center text-[.56rem] md:text-base"
			>
				{#each webLayerIcons as icon}
					<img
						class="max-h-5 md:max-h-12 max-w-5 md:max-w-12"
						width="50"
						height="48"
						src={icon.source}
						alt="{icon.title} icon"
						title={icon.title}
					/>
				{/each}
			</div>
		</BaseCard>

		{#each architectureItems as item}
			<BaseCard class={containerClass}>
				<div class="w-28 min-w-[7rem] md:w-48 lg:w-56 flex justify-end items-center text-neonGreen-400">
					<div class="flex flex-col items-end text-right">
						<p class="text-[.56rem] md:text-base font-bold "><i>{item.title}</i></p>
						{#if item.subtitle}
							<p class="text-[.43rem] md:text-xs">{item.subtitle}</p>
						{/if}
					</div>
					<img
						loading="lazy"
						height="32"
						class="max-h-4 max-w-4 md:max-h-8 md:max-w-8 ml-2 md:ml-4"
						src={item.image.source}
						alt={item.image.altText}
					/>
				</div>
				<div
					class="grid grid-cols-2 w-full xl:flex xl:flex-grow px-2 md:px-8 lg:px-16 md:mx-auto md:flex-grow-0 my-auto md:w-5/6 md:justify-between  text-[.5rem] md:text-base"
				>
					{#each item.description as word, i}
						<div
							class=" {item.wordContainer[
								i
							]} w-fit min-w-[50%] xl:min-w-[8rem] h-fit text-center my-1 bg-gradient-to-b from-aquaTeal-300 to-neonGreen-400 cursor-default rounded-full border border-spaceBlue-50/30 hover:border-spaceBlue-50"
						>
							<div class="whitespace-nowrap bg-spaceBlue-900 rounded-full">
								<div
									class="whitespace-nowrap bg-spaceBlue-50/10 sm:py-1 md:py-2 px-2 md:px-4 rounded-full hover:bg-spaceBlue-50 hover:text-spaceBlue-900 hover:border-spaceBlue-50"
								>
									{word}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</BaseCard>
		{/each}
	</div>
</Section>

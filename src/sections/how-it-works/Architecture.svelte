<script lang="ts">
	import Section from '$src/components/Section.svelte';

	import type { ArchitectureItem, WebLayerIcon } from '$src/types';

	export let webLayerIcons: WebLayerIcon[];
	export let architectureItems: ArchitectureItem[];

	for (let item of architectureItems) {
		item.wordContainer = [];
		for (let i = 0; i < item.description.length; i++) {
			item.wordContainer[i] = `${i % 2 === 0 ? 'items-start' : 'items-end'} ${
				i > 1 && i < item.description.length - 1 ? 'w-fit sm:px-1 mx-1 sm:-mx-4' : ''
			}`;
		}
	}
	const containerClass =
		'w-[25rem] px-2 max-w-full md:w-full flex bg-gradient-to-b from-spaceBlue-50/10 to-transparent md:py-6 lg:py-8 rounded-md md:rounded-3xl h-20 md:h-[unset] mx-auto border border-spaceBlue-600/20 mb-4 md:mb-8';
</script>

<Section
	backgroundClass="bg-gradient-to-b from-spaceBlue-50/10 to-transparent shadow-cardTop shadow-aquaTeal-300 pb-40"
>
	<div class="lg:w-5/6 mx-auto">
		<div class="relative text-center py-8 md:py-16">
			<h3 class="text-2xl md:text-4xl text-neonGreen-400">Architecture</h3>
		</div>

		<div class={containerClass}>
			<div
				class="w-28 min-w-[7rem] md:w-48 sm:min-w-[unset] lg:w-56 flex justify-end text-right items-center text-neonGreen-400"
			>
				<p class="text-[.56rem] md:text-base font-bold "><i>Web Apps Layer</i></p>
				<span class="material-icons text-xl md:text-4xl ml-2 sm:ml-4">web_asset</span>
			</div>
			<div
				class="flex-grow px-2 md:px-[2%] md:w-2/3 md:mx-auto md:flex-grow-0 flex justify-between items-center"
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
		</div>

		{#each architectureItems as item}
			<div class={containerClass}>
				<div
					class="w-28 min-w-[7rem] md:w-48 sm:min-w-[unset] lg:w-56 flex justify-end items-center text-neonGreen-400"
				>
					<div class="flex flex-col items-end text-right">
						<p class="text-[.56rem] md:text-base font-bold "><i>{item.title}</i></p>
						{#if item.subtitle}
							<p class="text-[.43rem] md:text-xs">{item.subtitle}</p>
						{/if}
					</div>
					<img
						loading="lazy"
						width="32"
						height="32"
						class="max-h-4 max-w-4 md:max-h-8 md:max-w-8 ml-2 sm:ml-4"
						src={item.image.source}
						alt={item.image.altText}
					/>
				</div>
				<div
					class="flex-grow px-2 md:px-[2%] md:w-2/3 md:mx-auto md:flex-grow-0 h-fit my-auto flex flex-wrap sm:flex-nowrap justify-evenly sm:justify-between lg:px-12 md:text-left items-center text-[.56rem] md:text-base"
				>
					{#each item.description as word, i}
						<div class="flex h-8 md:h-16 text-center md:text-left {item.wordContainer[i]}">
							{word}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</Section>

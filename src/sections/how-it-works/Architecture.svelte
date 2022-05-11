<script lang="ts">
	import type { ArchitectureItem, WebLayerIcon } from '$src/types';

	export let webLayerIcons: WebLayerIcon[];
	export let architectureItems: ArchitectureItem[];

	const containerClass =
		'w-full flex shadow-button p-3 md:py-10 md:px-8 xl:px-16 rounded-md md:rounded-3xl h-20 md:h-[unset] bg-blue mb-4 md:mb-8';
</script>

<div class="mt-32 mb-32 md:mb-40">
	<div class="relative text-center mb-8 md:mb-16">
		<h3 class="text-2xl md:text-4xl md:mb-8">Architecture</h3>
	</div>

	<div class={containerClass}>
		<div
			class="w-1/3 md:w-1/3 flex flex-col md:flex-row justify-center items-start md:justify-start md:items-center text-green"
		>
			<span class="material-icons text-xl md:text-4xl md:mr-4">web_asset</span>
			<p class="text-[.56rem] md:text-lg font-bold "><i>Web Apps Layer</i></p>
		</div>
		<div class="w-2/3 md:w-2/3 md:pl-4 grid grid-cols-5 items-center">
			{#each webLayerIcons as icon}
				<img
					class="max-h-5 md:max-h-12 max-w-5 md:max-w-12"
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
				class="w-1/3 md:w-1/3 flex flex-col md:flex-row justify-center items-start md:items-center md:justify-start text-green"
			>
				<img
					loading="lazy"
					class="max-h-4 max-w-4 md:max-h-8 md:max-w-8 md:mr-4 mb-1"
					src={item.image.source}
					alt={item.image.altText}
				/>
				<div class="flex flex-col md:items-start">
					<p class="text-[.56rem] md:text-lg font-bold "><i>{item.title}</i></p>
					{#if item.subtitle}
						<p class="text-[.43rem] md:text-left md:text-xs lg:text-base">{item.subtitle}</p>
					{/if}
				</div>
			</div>
			<div
				class="w-2/3 md:w-2/3 flex justify-between md:pl-4 md:text-left items-center text-[.56rem] md:text-base"
			>
				{item.description}
			</div>
		</div>
	{/each}
</div>

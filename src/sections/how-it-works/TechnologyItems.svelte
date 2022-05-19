<script lang="ts">
	import type { TechnologyItem } from '$src/types';
	export let technologyItems: TechnologyItem[];
	const flexClassArray: string[] = [];

	$: technologyItems.map((value, index) => {
		flexClassArray.push(index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row');
	});
</script>

<div class="">
	{#each technologyItems as item, i}
		<div id={item.id} class="mb-40 md:mb-60">
			<div class="relative text-center mb-4 md:mb-16 xl:mb-20">
				<h3 class="text-2xl md:text-4xl lg:text-4xl mb-6 md:mb-8">{item.title}</h3>
				<p class="text-green text-base md:text-xl 2xl:text-2xl md:w-3/4 md:mx-auto">{item.subtitle}</p>
			</div>
			<div class="flex flex-col {flexClassArray[i]}">
				<div class="md:w-1/2  md:mb-16">
					<div class={item.image.class}>
						<img class="w-full" loading="lazy" src={item.image.source} alt={item.image.altText} />
					</div>
				</div>
				<div
					class="md:w-1/2 md:mt-0 flex flex-col items-center lg:items-start text-sm md:text-base 2xl:text-xl"
				>
					{#each item.contentLines as line}
						<p class="mb-4 md:mb-8">{line}</p>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

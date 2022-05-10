<script lang="ts">
	import type { TechnologyItem } from '$src/types';
	export let technologyItems: TechnologyItem[];
	const flexClassArray: string[] = [];
	const marginArray: string[] = [];

	$: technologyItems.map((value, index) => {
		flexClassArray.push(index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse');
	});
</script>

{#each technologyItems as item, i}
	<div id={item.id} class="pt-32 md:pt-40">
		<div class="relative text-center mb-12 md:mb-16 xl:mb-20">
			<h3 class="text-2xl md:text-4xl lg:text-4xl mb-6 md:mb-8">{item.title}</h3>
			<p class="text-green text-lg md:text-xl xl:text-2xl">{item.subtitle}</p>
		</div>
		<div class="flex flex-col-reverse {flexClassArray[i]}">
			<div
				class="md:w-1/2 -mt-20 md:mt-0 flex flex-col items-center lg:items-start text-sm md:text-base xl:text-xl"
			>
				{#each item.contentLines as line}
					<p class="mb-4 md:mb-8">{line}</p>
				{/each}
			</div>
			<div class="-mx-10 md:mx-0 md:w-1/2  md:mb-16  h-[inherit]">
				<img class={item.image.class} loading="lazy" src={item.image.source} alt={item.image.altText} />
			</div>
		</div>
	</div>
{/each}

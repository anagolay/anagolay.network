<script lang="ts">
	import Section from '$src/components/Section.svelte';

	import type { TechnologyItem } from '$src/types';
	export let technologyItems: TechnologyItem[];
	const flexClassArray: string[] = [];

	$: technologyItems.map((value, index) => {
		flexClassArray.push(index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row');
	});
</script>

<div class="w-full mb-20">
	{#each technologyItems as item, i}
		<Section class="w-80 max-w-full sm:w-5/6 mx-auto md:container">
			<div class="flex">
				<div class="hidden md:flex flex-col w-[80%] ml-[10%]">
					<div class="{item.line1} opacity-50">
						<div class="{item.inner1} bg-anagolayBlack h-full w-full" />
					</div>
					<div class="{item.line2} opacity-50">
						<div class="{item.inner2} bg-anagolayBlack h-full w-full" />
					</div>
				</div>
				<div class="w-full md:-ml-[90%] pb-16 md:pb-28 relative">
					<div id={item.id} class="relative text-center  pt-24  mb-4 md:mb-16 xl:mb-32">
						<h3 class="text-2xl md:text-4xl lg:text-4xl mb-6 md:mb-8">{item.title}</h3>
						<p class="text-green text-base md:text-xl 2xl:text-2xl md:w-3/4 md:mx-auto">
							{item.subtitle}
						</p>
					</div>
					<div class="flex flex-col {flexClassArray[i]}">
						<div class="md:w-1/2 flex flex-col md:mb-16">
							<div class={item.image.class}>
								<img
									class="w-full bg-light from-anagolayBlack to-transparent"
									loading="lazy"
									src={item.image.source}
									alt={item.image.altText}
								/>
							</div>
						</div>
						<div
							class="md:w-1/2 md:mt-0 flex flex-col items-center lg:items-start text-sm md:text-base 2xl:text-xl"
						>
							<div class="lg:w-5/6 mx-auto">
								{#each item.contentLines as line}
									<p class="mb-4 md:mb-8">{line}</p>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	{/each}
</div>

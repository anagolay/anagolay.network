<script lang="ts">
	import GlowingLight from '$src/components/GlowingLight.svelte';

	import Section from '$src/components/Section.svelte';

	import type { TechnologyItem } from '$src/types';
	export let technologyItems: TechnologyItem[];
	const flexClassArray: string[] = [];

	$: technologyItems.map((value, index) => {
		flexClassArray.push(index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row');
	});
</script>

{#each technologyItems as item, i}
	<Section id={item.id}>
		<div class="w-11/12 sm:w-5/6 mx-auto md:w-full flex">
			<div class="hidden md:flex flex-col w-[80%] ml-[10%]">
				<div class="{item.line1} opacity-50">
					<div class="{item.inner1} bg-spaceBlue-900 h-full w-full" />
				</div>
				<div class="{item.line2} opacity-50">
					<div class="{item.inner2} bg-spaceBlue-900 h-full w-full" />
				</div>
			</div>
			<div class="w-full md:-ml-[90%] md:pb-28 relative">
				<div class="relative text-center  pt-24  mb-4 md:mb-0 ">
					<h3 class="text-2xl md:text-3xl lg:text-4xl text-neonGreen-400 mb-6 md:mb-8">{item.title}</h3>
					<p class="text-base md:text-xl 2xl:text-2xl md:w-3/4 md:mx-auto pb-4 md:pb-0">
						{item.subtitle}
					</p>
				</div>
				<div class="flex flex-col {flexClassArray[i]}">
					<div class="w-5/6 mx-auto md:w-1/2 md:-mb-[50%] h-fit">
						<div class="lg:w-5/6 lg:mx-auto">
							<GlowingLight class=" from-neonGreen-400/40">
								<img
									class="object-contain relative mx-auto {item.image.class}"
									src={item.image.source}
									alt={item.image.altText}
									height={item.image.height}
								/>
							</GlowingLight>
						</div>
					</div>
					<div
						class="md:w-1/2 md:mt-0 pt-4 md:pt-16 xl:pt-24 flex flex-col items-center lg:items-start text-sm md:text-base 2xl:text-xl"
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

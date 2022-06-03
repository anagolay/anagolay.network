<script lang="ts">
	import Section from '$src/components/Section.svelte';

	import type { TrustProcessItem } from '$src/types';
	export let trustProcessItems: TrustProcessItem[];
	trustProcessItems.map((item: TrustProcessItem, index) => {
		item.extraClass = index % 2 === 0 ? 'md:flex-row md:h-60' : 'md:flex-row-reverse md:h-72';
	});
</script>

<Section class="md:container w-80 md:w-full flex max-w-full flex-col mx-auto xl:mx-auto">
	<div class="text-center mb-12 md:mb-16">
		<h2 class="text-2xl md:text-4xl mb-6 md:mb-8 text-green">Trust the process</h2>
		<p class="md:w-4/5 md:mx-auto text-base md:text-xl xl:text-2xl">
			No need for a central authority, or resource-heavy consensus mechanism to establish the rules of the
			game (trust)
		</p>
	</div>
	<div class="w-80 max-w-full mx-auto md:w-11/12">
		{#each trustProcessItems as item}
			<div class="w-full mx-auto md:flex {item.extraClass} mb-16 md:mb-16">
				<div class="justify-center h-40 md:h-[unset] md:w-1/2 mb-4 md:mb-0 md:px-5">
					<img class="max-h-full max-w-full mx-auto" src={item.src} alt={item.alt} />
				</div>

				<div
					class="flex flex-col text-center md:text-justify justify-center md:justify-center items-center md:items-start md:w-1/2 px-5 lg:items-start text-sm md:text-base xl:text-xl"
				>
					<p class="mb-4">{item.text}</p>
					<div class="pt-2">
						<a class="flex text-green" href={item.link}>
							<p class="hover:underline">{item.linkText}</p>
							<span class="material-icons ml-2 no-underline text-sm md:text-base xl:text-xl">east</span>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

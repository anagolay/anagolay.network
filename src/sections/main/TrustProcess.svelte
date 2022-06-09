<script lang="ts">
	import Section from '$src/components/Section.svelte';

	import type { TrustProcessItem } from '$src/types';
	export let trustProcessItems: TrustProcessItem[];
	trustProcessItems.map((item: TrustProcessItem, index) => {
		item.extraClass = index % 2 === 0 ? 'md:flex-row md:h-60' : 'md:flex-row-reverse md:h-72';
	});
</script>

<Section>
	<div class="text-center mb-12 md:mb-16 mx-auto">
		<h2 class="text-2xl md:text-4xl mb-6 md:mb-8 text-green-400">Trust the process</h2>
		<p class="md:px-0 md:mx-auto text-base md:text-xl xl:text-2xl">
			Instead of relaying on a central authority, or resource-heavy consensus mechanism to establish the rules
			of the game (trust)
		</p>
	</div>
	<div class="w-80 max-w-full mx-auto md:w-11/12 ">
		{#each trustProcessItems as item}
			<div class="w-full mx-auto md:flex {item.extraClass} mb-16">
				<div class="justify-center h-40 md:h-[unset] md:w-1/2 mb-4 md:mb-0 md:px-5">
					<img class="max-h-full max-w-full mx-auto" width="353" height="288" src={item.src} alt={item.alt} />
				</div>

				<div
					class="flex flex-col text-center md:text-justify justify-center md:justify-center items-center md:items-start md:w-1/2 md:px-5 lg:items-start text-sm md:text-base xl:text-xl"
				>
					<p class="mb-4">{item.text}</p>
					<div class="pt-2">
						<a class="flex text-green-400" href={item.link}>
							<p class="hover:underline">{item.linkText}</p>
							<span class="material-icons ml-2 no-underline text-sm md:text-base xl:text-xl">east</span>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

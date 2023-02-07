<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';

	import type { TrustProcessItem } from '$src/types';
	export let trustProcessItems: TrustProcessItem[];
	trustProcessItems.map((item: TrustProcessItem, index) => {
		item.extraClass = index % 2 === 0 ? 'md:flex-row md:h-60' : 'md:flex-row-reverse md:h-72';
	});
</script>

<Section id="home_trust_the_process">
	<div class="text-center mb-12 md:mb-16 mx-auto">
		<SectionTitle class="mb-6 md:mb-8">Trust the process</SectionTitle>
		<p class="md:px-0 md:mx-auto text-base md:text-xl xl:text-2xl max-w-5xl">
			Bring transparency and traceability to Verification Processes and Copyright Claims.
		</p>
	</div>
	<div class="w-80 max-w-full mx-auto md:w-full ">
		{#each trustProcessItems as item}
			<div
				class="w-full mx-auto md:flex md:justify-between {item.extraClass} mb-8 bg-spaceBlue-50/5 px-12 py-8 rounded-cardLg"
			>
				<div class="flex justify-center items-center h-40 md:h-[unset] md:w-1/3 mb-4 md:mb-0 md:px-5">
					<img class="max-h-full max-w-full mx-auto" width="353" height="288" src={item.src} alt={item.alt} />
				</div>

				<div
					class="flex flex-col text-center md:text-justify justify-center md:justify-center items-center md:items-start md:w-3/5 md:px-5 lg:items-start text-sm md:text-base xl:text-xl"
				>
					<p class="mb-4">{item.text}</p>
					<div class="pt-2">
						<a class="flex text-neonGreen-400" href={item.link}>
							<p class="hover:underline">{item.linkText}</p>
							<span class="material-icons ml-2 no-underline text-sm md:text-base xl:text-xl">east</span>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>

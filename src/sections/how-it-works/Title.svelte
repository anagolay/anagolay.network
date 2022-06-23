<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
	import TrustCard from '$src/components/TrustCard.svelte';

	import type { TrustItem } from '$src/types';
	export let trustItems: TrustItem[];
</script>

<Section class="overflow-hidden pb-20" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div class="relative w-full max-w-full flex flex-col text-center md:text-left md:flex-row pt-8 md:pt-20">
		<div class="basis-1/2 flex flex-col items-center md:items-start justify-center">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				<p class="leading-normal">How does it work?</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-8 xl:py-12 lg:w-5/6">
				Anagolay is a peer-to-peer network that stores records of Rights, Restrictions, and Proofs of any
				digital content. It empowers the users to store, claim, sell, and rent their work with the correct
				transfer of Rights and usage of Licenses.
			</h2>
			<SectionButton url="https://kelp.digital/" class="cursor-pointer">Kelp Digital use case</SectionButton>
		</div>
		<div class="basis-1/2">
			<div class="w-5/6 mx-auto md:w-[unset] lg:-mx-[10%] lg:-mt-[20%] 2xl:-my-[20%] md:-mt-10">
				<object
					class="object-contain"
					title="main animation"
					type="image/svg+xml"
					data="/how_it_works_main_workflow.svg"
				/>
			</div>
			<div
				class="rounded-[100%] bg-anagolayBlack bg-light from-aquaTeal-300/50 to-transparent h-28 md:h-64 -mt-20 md:-mt-48 -mx-[10%]"
			/>
		</div>
	</div>
</Section>
<Section>
	<div class="relative flex flex-wrap gap-4 justify-evenly pt-24 md:pb-20">
		{#each trustItems as trustItem}
			<TrustCard {trustItem} />
		{/each}
	</div>
</Section>

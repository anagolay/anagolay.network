<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
	import TrustCard from '$src/components/TrustCard.svelte';

	import type { TrustItem } from '$src/types';
	export let trustItems: TrustItem[];
</script>

<Section class="overflow-hidden py-20" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div
		class="relative w-80 max-w-full mx-auto md:w-full pt-8 md:pt-20 2xl:py-20  flex flex-col md:flex-row items-start lg:items-stretch"
	>
		<div class="md:basis-1/2 flex flex-col justify-center">
			<div class="relative lg:w-4/5">
				<h1 class="md:mb-0 text-center font-extrabold text-3xl md:text-5xl md:text-left">
					<p class="md:leading-[4rem]">How does it work?</p>
				</h1>
				<h2 class="w-full text-center md:text-left my-6 md:mb-20 text-base md:text-lg lg:text-xl md:my-12">
					Anagolay is a peer-to-peer network that stores records of Rights, Restrictions, and Proofs of any
					digital content. It empowers the users to store, claim, sell, and rent their work with the correct
					transfer of Rights and usage of Licenses.
				</h2>
				<SectionButton class="mx-auto md:m-0" url="#architecture">See architecture</SectionButton>
			</div>
		</div>
		<div class="w-full md:w-1/2 mx-auto md:mx-0">
			<div class=" lg:-mx-[10%]  lg:-mt-[20%] 2xl:-my-[20%] md:-mt-10">
				<object
					class="object-contain"
					title="main animation"
					type="image/svg+xml"
					data="/how_it_works_main_workflow.svg"
				/>
				<div
					class="rounded-[100%] bg-anagolayBlack bg-light from-aquaTeal-300/50 to-transparent h-28 md:h-64 -mt-20 md:-mt-48 -mx-[10%]"
				/>
			</div>
		</div>
	</div>
</Section>
<Section>
	<div class="relative flex flex-wrap gap-4 justify-evenly pt-12 md:pb-20">
		{#each trustItems as trustItem}
			<TrustCard {trustItem} />
		{/each}
	</div>
</Section>

<script lang="ts">
	import type { UseCase } from 'src/types';
	import SectionButton from '$src/components/SectionButton.svelte';
	import UseCaseCard from '$src/components/UseCaseCard.svelte';
	import Section from '$src/components/Section.svelte';

	export let useCases: UseCase[];
</script>

<Section class="overflow-hidden" id="use_cases" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div class="relative w-80 max-w-full mx-auto md:w-full py-24">
		<div class="mt-0 w-full flex flex-col items-center">
			<h2 class="w-5/6 mt-8 text-lg md:mb-12 md:text-2xl text-center">
				Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
				a number of issues including, but not limited to:
			</h2>
			<div class="flex w-full justify-evenly lg:justify-between mb-8 flex-wrap text-base">
				{#each useCases as item, i}
					<UseCaseCard data={item} {i} />
				{/each}
			</div>
			<SectionButton url="https://kelp.digital/" class="mt-8 md:mt-12">Kelp Digital use case</SectionButton>
		</div>
	</div>
</Section>

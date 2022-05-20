<script lang="ts">
	import type { UseCase } from 'src/types';
	import SectionButton from '$src/components/SectionButton.svelte';
	import UseCaseCard from '$src/components/UseCaseCard.svelte';

	export let useCases: UseCase[];
</script>

<a name="useCases">
	<div class="flex flex-col w-full justify-center items-center h-fit text-center pt-24">
		<div class="relative mt-0 flex flex-col items-center">
			<h2 class="mt-8 text-lg md:mb-12 md:text-2xl">
				Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
				a number of issues including, but not limited to:
			</h2>
			<div class="flex w-full justify-evenly mb-8 flex-wrap text-base">
				{#each useCases as item, i}
					<UseCaseCard data={item} {i} />
				{/each}
			</div>
			<SectionButton url="https://kelp.digital/" class="mt-8 md:mt-12">Kelp Digital use case</SectionButton>
		</div>
	</div>
</a>

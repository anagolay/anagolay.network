<script lang="ts">
	import type { useCase } from 'src/types';
	import SectionButton from '$src/components/SectionButton.svelte';
	export let useCases: useCase[];
</script>

<a name="useCases">
	<div class="flex flex-col w-full justify-center items-center h-fit text-center pt-24">
		<div class="relative mt-0 flex flex-col items-center">
			<h2 class="mt-8 text-lg md:mb-12 md:text-2xl">
				Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
				a number of issues including, but not limited to:
			</h2>
			<div class="flex w-full justify-evenly mb-8 flex-wrap text-base">
				{#each useCases as item}
					<div class="flex-col h-100 md:max-w-1/3 mt-20">
						<div class="shadow-button flex flex-col rounded-lg bg-blue px-3 pb-3 w-72 md:w-80 h-[25rem]">
							<div class="h-28 mx-auto py-auto flex items-center justify-center -mt-12 mb-8">
								<img class="object-contain max-h-full" src={item.src} alt={item.alt} />
							</div>
							<p class="w-full text-green text-center h-16">
								{item.title}
							</p>
							<p class="w-5/6 mx-auto">{item.text}</p>
						</div>
					</div>
				{/each}
			</div>
			<SectionButton url="https://kelp.digital/" class="mt-8 md:mt-12">Kelp Digital use case</SectionButton>
		</div>
	</div>
</a>

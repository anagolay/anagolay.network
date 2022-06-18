<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section class="overflow-x-clip">
	<div class="w-full max-w-full flex flex-col text-center md:text-left md:flex-row py-20">
		<div class="basis-1/2 flex flex-col items-center md:items-start justify-center">
			<h1 class="text-3xl md:text-5xl">
				<p class="leading-normal">Use Cases & applications</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-12">
				Anagolay allows asset creators to establish how digital assets are used and owned.
			</h2>
			<SectionButton url="https://kelp.digital/" class="cursor-default">Kelp Digital use case</SectionButton>
		</div>
		<div class="basis-1/2">
			<img
				class="relative w-3/4 mx-auto md:mr-0 md:w-[unset] my-4"
				src="/use_cases_main.png"
				alt="transparent rigts bundle"
			/>
		</div>
	</div>
	<div
		class="h-80 w-full -mt-80 md:-mt-[30%] md:ml-[15%] bg-anagolayBlack bg-light from-aquaTeal-300/30 to-transparent"
	/>
</Section>
<Section>
	<div class="flex w-full justify-center py-12 md:py-32">
		<div class="basis-5/6 flex justify-center text-center text-xl md:text-4xl max-w-3xl">
			We build the essential infrastructure for the emerging ownership economy to work
		</div>
	</div>
</Section>

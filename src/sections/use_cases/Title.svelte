<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section>
	<div class="w-full max-w-full flex flex-col text-center md:text-left md:flex-row py-20">
		<div class="basis-1/2 flex flex-col items-center md:items-start justify-center">
			<h1 class="text-3xl md:text-5xl">
				<p class="leading-normal">Use Cases & applications</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-12">
				Anagolay allows asset creators to establish how digital assets are used and owned.
			</h2>
			<SectionButton url={undefined} class="">Kelp Digital use cases</SectionButton>
		</div>
		<div class="basis-1/2">
			<img
				class="w-3/4 md:w-[unset] mx-auto md:mr-0 my-4"
				src="/use_cases_main.png"
				alt="transparent rigts bundle"
			/>
		</div>
	</div>
</Section>
<Section>
	<div class="flex w-full justify-center py-12 md:py-32">
		<div class="basis-5/6 flex justify-center text-center text-xl md:text-4xl max-w-3xl">
			We build the essential infrastructure for the emerging ownership economy to work
		</div>
	</div>
</Section>

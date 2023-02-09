<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section id="use_cases_header" class="overflow-hidden" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div class="relative w-full max-w-full flex flex-col text-center md:text-left md:flex-row pt-20 md:pt-36">
		<div class="basis-1/2 flex flex-col items-center md:items-start lg:pt-12">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				<p class="leading-normal">Use Cases & Applications</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-8 xl:py-16 lg:w-5/6">
				A framework for the creation of deterministic, tamper-proof, impartial, and transparent processes that
				can be applied to verify the rightfulness of a claim for any relation or right.
			</h2>
			<SectionButton url="https://kelp.digital/" class="cursor-pointer mb-4"
				>Kelp Digital use case</SectionButton
			>
		</div>
		<div class="basis-1/2">
			<div class="relative w-3/4 mx-auto md:mr-0 md:w-11/12 lg:-my-24">
				<object
					class="object-contain"
					title="main animation"
					data="/use_cases_main.svg"
					type="image/svg+xml"
				/>
			</div>
			<div
				class="h-40 md:h-80 -mt-32 md:-mt-60 md:-mx-[40%] bg-anagolayBlack bg-light from-aquaTeal-300/30 to-transparent"
			/>
		</div>
	</div>
</Section>

<Section class="pt-20 md:pt-8" id="ownership">
	<div
		class="basis-5/6 flex justify-center text-center text-xl md:text-2xl xl:text-4xl max-w-3xl py-8 md:py-16 xl:py-8 mx-auto"
	>
		We build the essential infrastructure for the emerging ownership economy to work
	</div>
</Section>

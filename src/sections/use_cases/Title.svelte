<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section class="overflow-hidden" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div class="relative w-full max-w-full flex flex-col text-center md:text-left md:flex-row pt-8 md:pt-20">
		<div class="basis-1/2 flex flex-col items-center md:items-start justify-center">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				<p class="leading-normal">Use Cases & Applications</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-8 xl:py-12 lg:w-5/6">
				A framework for the creation of deterministic, tamper-proof, impartial, and transparent processes that
				can be applied to verify the rightfulness of a claim for any relation or right.
			</h2>
			<SectionButton url="https://kelp.digital/" class="cursor-pointer">Kelp Digital use case</SectionButton>
		</div>
		<div class="basis-1/2">
			<div class="relative w-3/4 mx-auto md:mr-0 md:w-11/12 lg:-my-24">
				<object
					class="object-contain"
					title="main animation"
					type="image/svg+xml"
					data="/use_cases_main.svg"
				/>
			</div>
			<div
				class="h-40 md:h-80 -mt-32 md:-mt-60 md:-mx-[40%] bg-anagolayBlack bg-light from-aquaTeal-300/30 to-transparent"
			/>
		</div>
	</div>
</Section>
<Section>
	<div class="flex w-full justify-center">
		<div
			class="basis-5/6 flex justify-center text-center text-xl md:text-2xl xl:text-4xl max-w-3xl py-8 md:py-16 xl:py-8"
		>
			We build the essential infrastructure for the emerging ownership economy to work
		</div>
	</div>
</Section>

<script lang="ts">
	import Section from '$src/components/Section.svelte';
</script>

<Section class="overflow-hidden" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div class="relative w-full max-w-full flex flex-col text-center md:text-left md:flex-row pt-8 md:pt-24">
		<div class="basis-1/2 flex flex-col items-center md:items-start lg:pt-12">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				<p class="leading-normal">Pioneer MainNet for Anagolay Framework</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-8 xl:py-16 lg:w-5/6">
				A playground for developers, where they can try and test both new and existing features of Anagolay
				framework in an unrefined, unpredictable but realistic on-chain environment.
			</h2>
		</div>
		<div class="basis-1/2">
			<div class="relative w-3/4 mx-auto md:mr-0 md:w-11/12 lg:-my-24">
				<object
					class="object-contain opacity-0"
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
<Section class="py-20">
	<div class="flex w-full justify-center">
		<div
			class="flex flex-col sm:flex-row items-center justify-center sm:gap-4 text-xl md:text-2xl xl:text-4xl max-w-3xl py-8 md:py-16 xl:py-8"
		>
			<p>Build</p>
			<span class="hidden sm:block material-icons  text-neonGreen-400">east</span>
			<span class="sm:hidden material-icons  text-neonGreen-400">south</span>
			<p>Test</p>
			<span class="hidden sm:block material-icons  text-neonGreen-400">east</span>
			<span class="sm:hidden material-icons  text-neonGreen-400">south</span>
			<p class="sm:w-fit">Pass it on to AnagolayNet</p>
		</div>
	</div>
</Section>

<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import LottiePlayer from '$src/components/LottiePlayer.svelte';
</script>

<Section id="header" class="overflow-hidden" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div
		class="relative w-full max-w-full flex flex-col text-center md:text-left md:flex-row py-8 md:pt-24 pb-12 md:pb-32"
	>
		<div class="basis-1/2 flex flex-col items-center md:items-start lg:pt-12">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				<p class="leading-normal">Pioneer MainNet for Anagolay Framework</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-8 xl:py-16 lg:w-5/6">
				A playground for developers, where they can try and test both new and existing features of Anagolay
				framework in an unrefined, unpredictable but realistic on-chain environment.
			</h2>
		</div>
		<div class="relative md:basis-1/2 flex flex-col md:flex-row justify-center items-center md:-mt-10">
			<div class="w-1/3 md:w-1/2">
				<LottiePlayer
					class="-mx-12 -mb-20 md:-m-10"
					src="https://assets5.lottiefiles.com/packages/lf20_mtuum8is.json"
				/>
			</div>
			<div class="md:absolute md:top-[70%] lg:top-[70%] xl:top-[90%] w-full flex justify-center">
				<div class="w-3/4 md:w-full">
					<div class="h-40 bg-anagolayBlack -mx-[20%] bg-light from-aquaTeal-300/30 to-transparent" />
				</div>
			</div>
		</div>
	</div>

	<!--<div class="md:basis-1/2 flex items-end md:items-center 2xl:h-5/6 xl:items-end">
			<div class="w-full -mr-[50%] flex justify-center">
				<div class="w-1/2 -mt-12 mb-12">
					<LottiePlayer class="-m-10" src="https://assets6.lottiefiles.com/packages/lf20_qvb0cgyf.json" />
				</div>
			</div>
			<div class="w-full -ml-[50%] flex justify-center">
				<div class="w-3/4 md:w-full">
					<div class="h-40 bg-anagolayBlack bg-light from-aquaTeal-300/30 to-transparent" />
				</div>
			</div>
		</div>
	</div> -->
</Section>

<script>
	import BaseCard from '$src/components/BaseCard.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
</script>

<div class="relative ">
	<div class="absolute h-full w-full">
		<div
			class="absolute w-1/2 pt-[30%] -left-1/4 bottom-16 sm:bottom-0 translate-y-1/4 bg-light from-neonGreen-400/50 via-neonGreen-400/50 to-transparent rounded-[100%] animate-pulse"
		/>
		<div
			class="absolute w-1/2 pt-[50%] -right-1/4 top-16 sm:top-0 -translate-y-1/4 bg-light from-aquaTeal-300/50 via-aquaTeal-300/50 to-transparent rounded-[100%] animate-pulse"
		/>
	</div>

	<Section class="" id="home_support">
		<div class="py-20 md:py-40">
			<SectionTitle class="pb-8">Supported by</SectionTitle>

			<div class="relative rounded-cardLg bg-spaceBlue-900/70">
				<BaseCard class="px-2 w-full md:max-w-full flex flex-col py-6 lg:py-8 mb-4 md:mb-8">
					<!-- <div
						class="w-full max-w-md md:max-w-full mx-auto grid grid-cols-2 gap-4 md:gap-[unset] md:flex md:justify-evenly p-4 md:px-8"
					> -->
					<div
						class="w-full p-4 mx-auto max-w-md md:max-w-full flex flex-wrap gap-4 items-center justify-evenly"
					>
						<img
							height="100"
							class="opacity-50 w-2/5 my-auto md:w-1/6"
							src="/logo_web3.svg"
							alt="Web 3 logo"
						/>
						<img
							height="100"
							class="opacity-50 w-2/5 my-auto md:w-1/6"
							src="/logo_media_motor.svg"
							alt="Media Motor logo"
						/>
						<img
							height="100"
							class="opacity-50 w-2/5 my-auto md:w-1/6"
							src="/logo_europe.svg"
							alt="Europe logo"
						/>
						<img height="100" class="opacity-50 w-2/5 my-auto  md:w-1/6" src="/logo_sbp.svg" alt="SBP logo" />
					</div>
					<div class="text-center pt-4">
						<p class="font-bold text-lg md:text-2xl">Partners</p>
					</div>
					<div
						class="w-full p-4 mx-auto max-w-md md:max-w-full flex flex-wrap gap-4 items-center justify-center md:gap-8"
					>
						<img
							height="100"
							class="opacity-50 w-2/5 my-auto md:w-1/6"
							src="/logo_kelp.svg"
							alt="Kelp logo"
						/>
						<img
							height="100"
							class="opacity-50 w-2/5 my-auto md:w-1/6"
							src="mayhemnodes_logo.svg"
							alt="Mayhem Nodes logo"
						/>
						<img
							height="100"
							class="opacity-50 w-2/5 my-auto md:w-1/6"
							src="gotbit_logo.svg"
							alt="Gotbit logo"
						/>
					</div>
				</BaseCard>
			</div>
		</div>
	</Section>
</div>

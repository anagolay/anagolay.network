<script>
	import BaseCard from '$src/components/BaseCard.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
</script>

<div class="relative ">
	<div class="absolute h-full w-full">
		<div
			class="absolute w-1/2 pt-[30%] -left-1/4 bottom-0 translate-y-1/4 bg-light from-neonGreen-400/50 via-neonGreen-400/50 to-transparent rounded-[100%] animate-pulse"
		/>
		<div
			class="absolute w-1/2 pt-[50%] -right-1/4 top-0 -translate-y-1/4 bg-light from-aquaTeal-300/50 via-aquaTeal-300/50 to-transparent rounded-[100%] animate-pulse"
		/>
	</div>

	<Section class="" id="home_support">
		<div class="py-20 md:py-40">
			<SectionTitle class="pb-8">Supported by</SectionTitle>

			<div class="relative rounded-cardLg bg-spaceBlue-900/70">
				<BaseCard class=" px-2 w-full md:max-w-full flex py-6 lg:py-8  mb-4 md:mb-8">
					<div class="w-full mx-auto flex flex-wrap justify-evenly items-center md:py-4 sm:px-4">
						<img
							height="100"
							class="opacity-50 w-full py-2 max-w-[30%] md:max-w-[17%]"
							src="/logo_web3.svg"
							alt="Web 3 logo"
						/>
						<img
							height="100"
							class="opacity-50 w-full py-2 max-w-[30%] md:max-w-[17%]"
							src="/logo_media_motor.svg"
							alt="Media Motor logo"
						/>
						<img
							height="100"
							class="opacity-50 w-full py-2 max-w-[30%] md:max-w-[17%]"
							src="/logo_europe.svg"
							alt="Europe logo"
						/>
						<img
							height="100"
							class="opacity-50 w-full py-2 max-w-[30%] md:max-w-[17%]"
							src="/logo_kelp.svg"
							alt="Kelp logo"
						/>
						<img
							height="100"
							class="opacity-50 w-full py-2 max-w-[30%] md:max-w-[17%]"
							src="/logo_sbp.svg"
							alt="SBP logo"
						/>
					</div>
				</BaseCard>
			</div>
		</div>
	</Section>
</div>

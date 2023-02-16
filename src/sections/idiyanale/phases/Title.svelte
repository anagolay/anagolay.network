<script lang="ts">
	import Section from '$src/components/Section.svelte';
</script>

<Section id="phase_header" class="overflow-hidden" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div
		class="relative w-full max-w-full flex flex-col text-center md:text-left md:flex-row md:items-center pt-24 md:pt-40 pb-12 md:pb-32"
	>
		<div class="basis-1/2 flex flex-col items-center md:items-start lg:pt-12 lg:pr-4">
			<h1 class="text-3xl lg:text-5xl font-extrabold">
				<p class="leading-normal">Idiyanale Network Launch</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-8 xl:py-16 lg:w-5/6">
				To ensure the stability of the network Idiyanale will follow a phase-by-phase launch process,
				previously vetted by a number of Substrate-based chains, incl. Polkadot, Moonbeam, and Oak Network.
			</h2>
		</div>
		<div
			class="relative md:basis-1/2 flex flex-col-reverse md:flex-row justify-center items-center md:-mt-10"
		>
			<div class="flex w-full h-full items-center lg:pt-12 pb-20 md:pb-0">
				<div class="relative pt-[56.25%] h-0 w-full">
					<iframe
						class="absolute top-0 left-0 h-full w-full"
						width="900"
						height="506"
						src="https://www.youtube.com/embed/qN0taQYqnn8"
						title="What&#39;s Anagolay?"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					/>
					<div class="-mt-5 md:-mt-10 w-full flex justify-center">
						<div class="w-3/4 md:w-full">
							<div
								class="h-20 md:h-40 bg-anagolayBlack -mx-[20%] bg-light from-aquaTeal-300/30 to-transparent"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>
<Section />
<Section class="py-12 md:py-20" id="phase_phrase">
	<div class="w-5/6 text-center text-xl md:text-2xl xl:text-4xl mx-auto">
		When Idiyanale secures a parachain slot on Kusama with community support via Crowdloan, Phase 1 will
		commence.
	</div>
	<div class="w-5/6 text-center text-base md:text-lg py-12 mx-auto font-bold">
		The dates below are subject to change depending on launch conditions
	</div>
</Section>

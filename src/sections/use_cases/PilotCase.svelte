<script>
	import Ellipse from '$src/components/Ellipse.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section
	id="pilotCase"
	class="mt-12 md:mt-20 bg-gradient-to-b from-spaceBlue-50/10 to-transparent shadow-cardTop shadow-aquaTeal-300 pt-20 pb-40 md:pt-32 md:pb-40"
>
	<Ellipse class="h-12 w-12 ml-[85%] blur-sm rotate-[225deg] -mt-12 -mb-4" />
	<Ellipse class="h-6 w-6 rotate-[225deg] mb-8" />
	<div class="flex flex-col items-center">
		<div class="w-5/6">
			<p class="text-neonGreen-400 text-center">KELP DIGITAL</p>
			<div class="text-center pt-4 md:pt-8 pb-12">
				<p class="mb-12 text-xl font-medium md:text-2xl lg:text-4xl">
					The first Hybrid Dapp on Anagolay had a successful pilot implemented in 2021.
				</p>
				<div class="text-base md:text-lg lg:text-2xl">
					<p>
						While we started with photography, Kelp will work with any kind of digital images, video
						(including streams), text, and potentially can scale to music & podcasts.
					</p>
				</div>
			</div>
		</div>
		<SectionButton url="https://kelp.digital/" class="cursor-pointer md:py-6 md:text-xl">
			Check Pilot use case
		</SectionButton>
	</div>
	<Ellipse class="h-4 w-4 ml-[90%] blur-sm rotate-[225deg] -mb-4" />
</Section>

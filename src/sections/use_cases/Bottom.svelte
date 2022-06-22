<script>
	import Ellipse from '$src/components/Ellipse.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section
	class="mt-20 bg-gradient-to-b from-spaceBlue-50/10 to-transparent shadow-cardTop shadow-aquaTeal-300 py-48"
>
	<Ellipse class="h-12 w-12 ml-[85%] blur-sm rotate-[225deg] -mt-12 -mb-4" />
	<Ellipse class="h-6 w-6 rotate-[225deg] mb-8" />
	<div class="flex flex-col items-center">
		<div class="w-5/6">
			<p class="text-neonGreen-400 text-center">KELP DIGITAL</p>
			<div class="text-center py-12">
				<p class="mb-6 text-xl md:text-2xl lg:text-4xl">
					<b>The first Hybrid Dapp on Anagolay had a successful pilot implemented in 2021.</b>
				</p>
				<p class="text-lg lg:text-2xl">
					While we started with photography, could be similarly applied to any kind of digital images, video
					(including streams), text and potentially scaled to music & podcasts.
				</p>
			</div>
		</div>
		<SectionButton url="https://kelp.digital/" class="cursor-default md:py-8"
			>Check Pilot use case</SectionButton
		>
	</div>
	<Ellipse class="h-4 w-4 ml-[90%] blur-sm rotate-[225deg] -mb-4" />
</Section>

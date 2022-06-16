<script>
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section
	class="mt-20"
	id="architecture"
	backgroundClass="bg-gradient-to-b from-spaceBlue-50/10 to-transparent shadow-cardTop shadow-aquaTeal-300 pt-48 pb-64"
>
	<div class="flex flex-col items-center">
		<div class="w-5/6">
			<p class="text-neonGreen-400 text-center">KELP DIGITAL</p>
			<p class="text-center text-2xl md:text-4xl lg:text-4xl pt-12 pb-20">
				The first Hybrid Dapp on Anagolay had a successful pilot implemented in 2021
			</p>
		</div>
		<SectionButton class="py-8">Check Pilot use case</SectionButton>
	</div>
</Section>

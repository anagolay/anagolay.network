<script>
	import BaseCard from '$src/components/BaseCard.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
</script>

<Section class="pt-20 md:pt-40" id="home_support">
	<SectionTitle class="pb-8">Supported by</SectionTitle>
	<BaseCard class="px-2 w-full md:max-w-full flex py-6 lg:py-8  mb-4 md:mb-8">
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
</Section>

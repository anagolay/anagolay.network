<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section id="home_header" class="overflow-hidden" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div class="relative pt-8 pb-10 md:py-32 flex flex-col items-center md:items-start md:flex-row animate-">
		<div class="w-80 max-w-full md:w-3/5 ">
			<div class="relative lg:w-4/5">
				<h1 class="md:mb-0 text-center font-extrabold text-3xl md:text-5xl md:text-left">
					<p class="md:leading-[4rem]">Process-based Interplanetary P2P Framework</p>
				</h1>
				<h2 class="w-full text-center md:text-left my-6 md:mb-20 text-base md:text-lg lg:text-xl md:my-12">
					Transparent verifiable processes for creation & validation of proofs and stating of rights. Built
					with Substrate.
				</h2>
				<SectionButton
					url="https://discordapp.com/invite/WHe4EuY"
					class="mx-auto mt-6 md:mt-12 md:mx-0 flex justify-center w-fit"
				>
					<span class="material-icons mr-2">discord</span>
					<p>Join the community</p>
				</SectionButton>
			</div>
		</div>
		<div class="w-80  max-w-full max-h-full mx-auto md:mx-0 md:w-2/5 2xl:w-1/3 h-fit">
			<div class="md:-mx-[20%] md:-mt-10 xl:md:-mt-20">
				<object
					class="object-contain"
					title="main animation"
					type="image/svg+xml"
					data="animation_second.svg"
				/>
			</div>
		</div>
	</div>
</Section>

<Section class="relative bg-spaceBlue-900" id="no_central_authority">
	<div
		class="text-lg md:text-2xl py-8 md:py-16 mb-16 md:mb-36 text-center md:mt-16 px-4 shadow-phrase shadow-aquaTeal-300/20 rounded-cardLg font-firaMono"
	>
		<p class="line-through font-medium mb-2">
			<span class="text-spaceBlue-50">Central authority <br />Resource heavy consensus mechanism</span>
		</p>
		<p class="font-bold text-neonGreen-400">Trust the process</p>
	</div>
</Section>

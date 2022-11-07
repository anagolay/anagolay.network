<script>
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section class="overflow-hidden" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div class="relative w-full max-w-full flex flex-col text-center md:text-left md:flex-row pt-8 md:pt-24">
		<div class="basis-1/2 flex flex-col items-center md:items-start lg:pt-12">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				<p class="leading-normal">Your audience is yours</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-8 xl:py-16 lg:w-5/6">
				The process that by verifying internet identities will enable content creators and open-source
				developers to monetize the support from their communities without relying on a centralized solution.
			</h2>
			<SectionButton url="https://kelp.digital/" class="cursor-pointer mb-4">Join the waitlist</SectionButton>
		</div>
		<div class="basis-1/2">
			<div class="relative w-3/4 mx-auto md:mr-0 md:w-11/12">
				<object
					class="object-contain"
					title="main animation"
					data="/tipping_animation.svg"
					type="image/svg+xml"
				/>
			</div>
			<div
				class="h-40 md:h-80 -mt-32 md:-mt-60 md:-mx-[40%] bg-anagolayBlack bg-light from-aquaTeal-300/30 to-transparent"
			/>
		</div>
	</div>
</Section>

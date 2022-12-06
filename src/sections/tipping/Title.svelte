<script>
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section id="header" class="overflow-hidden" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div class="relative w-full max-w-full flex flex-col text-center md:text-left md:flex-row pt-8 md:pt-24">
		<div class="basis-1/2 flex flex-col items-center md:items-start lg:pt-12">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				<p class="leading-normal">Your audience stays yours</p>
			</h1>
			<h2 class="text-base md:text-lg lg:text-xl py-8 xl:py-16 lg:w-5/6">
				A community of supporters is hard enough to build. Why entrust it to a centralized platform? Verify
				your public identities and receive tips from audiences across your established channels. No need for
				sign-ups & registrations.
			</h2>
			<SectionButton url="#waitlist" class="cursor-pointer mb-4">Join the waitlist</SectionButton>
		</div>
		<div class="basis-1/2 pt-12 md:pt-0 md:flex flex-col justify-center">
			<div class="relative w-5/6 mx-auto md:mr-0 md:w-[120%]">
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

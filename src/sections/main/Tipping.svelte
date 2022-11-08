<script>
	import Marquee from '$src/components/Marquee.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<div class="pt-12 md:pt-20">
	<Marquee length={130}>
		<div class="py-0 px-1 md:p-1 flex gap-1 md:gap-2 text-base md:text-lg" slot="text">
			<div>NEW</div>
			<div>·</div>
		</div>
	</Marquee>
	<Section
		class="relative flex flex-col items-center bg-gradient-to-b from-black/50 via-transparent to-black/50"
	>
		<div class="flex flex-col items-center md:flex-row relative">
			<div
				class="w-full md:w-1/2 py-8 flex flex-col items-center md:items-start text-center md:text-left justify-center text-lg md:text-2xl"
			>
				<div
					class="text-2xl md:text-4xl font-medium flex flex-wrap gap-2 justify-center md:justify-start md:pt-4"
				>
					<p>Introducing now:</p>
					<p class="textGradient">Tipping</p>
				</div>

				<!-- image for small screens -->
				<div class="flex md:hidden w-1/2 items-center justify-center relative">
					<div
						class="absolute w-60 pt-60 bg-light from-neonGreen-400/40 to-transparent rounded-[100%] animate-pulse"
					/>
					<img class="w-40 py-4" width="330" src="/main_coincase.svg" alt="coin case" />
				</div>

				<div class="py-4 md:py-6">
					A decentralized solution to monetize the support from your community as an open-source developer or
					content creator!
				</div>
				<div class="pb-8 pt-2 md:pt-4 md:pb-12">Verify your identity and start earning tips!</div>
				<SectionButton url="/tipping/" class="md:w-80">Learn more</SectionButton>
			</div>
			<div class="hidden md:flex w-1/2 items-center justify-center relative">
				<div
					class="absolute w-4/5 pt-[80%] bg-light from-neonGreen-400/40 to-transparent rounded-[100%] animate-pulse"
				/>
				<img class="py-12 max-w-[60%]" width="330" src="/main_coincase.svg" alt="coin case" />
			</div>
		</div>
	</Section>
	<Marquee direction="right" length={130}>
		<div class="py-0 px-1 md:p-1 flex gap-1 md:gap-2 text-base md:text-lg" slot="text">
			<div>NEW</div>
			<div>·</div>
		</div>
	</Marquee>
</div>

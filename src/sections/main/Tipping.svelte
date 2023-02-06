<script>
	import LinkButton from '$src/components/LinkButton.svelte';
	import Marquee from '$src/components/Marquee.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
</script>

<section class="pt-12 md:pt-20 overflow-hidden" id="home_tipping">
	<Marquee
		length={100}
		class="bg-gradient-to-r from-neonGreen-400 to-aquaTeal-300 text-spaceBlue-900 font-firaMono font-medium text-xl py-2"
	>
		<div class="py-0 px-1 md:p-1 flex gap-1 md:gap-2 text-base md:text-lg" slot="text">
			<div>NEW</div>
			<div>·</div>
		</div>
	</Marquee>
	<div class="relative flex flex-col items-center bg-gradient-to-b from-black/50 via-transparent to-black/50">
		<div class="md:container w-11/12 sm:w-5/6 mx-auto">
			<div class="flex flex-col items-center md:flex-row relative">
				<div
					class="w-full md:w-1/2 py-8 flex flex-col items-center md:items-start text-center md:text-left justify-center text-lg md:text-2xl"
				>
					<SectionTitle class="md:pt-4">
						<div class="flex flex-wrap gap-2 justify-center md:justify-start">
							<p>Introducing now:</p>
							<p class="textGradient">Tipping</p>
						</div>
					</SectionTitle>
					<!-- image for small screens -->
					<div class="flex md:hidden w-1/2 items-center justify-center relative">
						<div
							class="absolute w-60 pt-60 bg-light from-aquaTeal-300/50 to-transparent rounded-[100%] animate-pulse"
						/>
						<img class="relative w-40 py-4" width="330" src="/main_coincase.svg" alt="coin case" />
					</div>

					<div class="py-4 md:py-6">
						A decentralized solution to monetize the support from your community as an open-source developer
						or content creator.
					</div>
					<div class="pb-8 pt-2 md:pt-4 md:pb-12">Verify your channels and start receiving tips!</div>
					<LinkButton url="/tipping/" class="w-60 md:w-80 rounded-lg text-base">
						<p class="py-5">Learn More</p>
					</LinkButton>
				</div>
				<div class="hidden md:flex w-1/2 items-center justify-center relative">
					<div
						class="absolute w-full pt-[100%] bg-light from-aquaTeal-300/50 via-aquaTeal-300/50 to-transparent rounded-[100%] animate-pulse"
					/>
					<img class="relative py-12 max-w-[60%]" width="330" src="/main_coincase.svg" alt="coin case" />
				</div>
			</div>
		</div>
	</div>
	<Marquee
		length={100}
		direction="right"
		class="bg-gradient-to-l from-neonGreen-400 to-aquaTeal-300 text-spaceBlue-900 font-firaMono font-medium text-xl py-2"
	>
		<div class="py-0 px-1 md:p-1 flex gap-1 md:gap-2 text-base md:text-lg" slot="text">
			<div>NEW</div>
			<div>·</div>
		</div>
	</Marquee>
</section>

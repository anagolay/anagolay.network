<script>
	import Marquee from '$src/components/Marquee.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<div>
	<Marquee length={130}>
		<div class="p-1 flex gap-2 text-lg" slot="text">
			<div>NEW</div>
			<div>·</div>
		</div>
	</Marquee>
	<Section>
		<div class="flex flex-col md:flex-row">
			<div class="w-2/5 flex flex-col justify-center text-2xl">
				<div class="text-4xl font-medium flex gap-2">
					<p>Introducing now:</p>
					<p class="textGradient">Tipping</p>
				</div>
				<div class="py-6">
					A decentralized solution to monetize the support from your community as an open-source developer or
					content creator!
				</div>
				<div class="py-4">Verify your identity and start earning tips!</div>
				<SectionButton>Learn more</SectionButton>
			</div>
			<div class="flex w-3/5 items-center justify-center relative">
				<div
					class="absolute w-4/5 pt-[80%] bg-light from-neonGreen-400/40 to-transparent rounded-[100%] animate-pulse"
				/>
				<img class="w-1/2 py-20" src="/main_coincase.svg" alt="coin case" />
			</div>
		</div></Section
	>
	<Marquee direction="right" length={130}>
		<div class="p-1 flex gap-2 text-lg" slot="text">
			<div>NEW</div>
			<div>·</div>
		</div>
	</Marquee>
</div>

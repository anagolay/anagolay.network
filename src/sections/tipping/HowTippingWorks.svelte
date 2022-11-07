<script>
	import Section from '$src/components/Section.svelte';

	const steps = [
		{
			number: 1,
			title: 'Verify & connect your sources: domains & digital identities.',
			description:
				'With a PolkadotJS account, you can use the Anagolay App to claim your domains ownership or, you can just verify your digital identities such as Twitter or Github.',
			img: {
				src: '/tipping_sources.svg',
				alt: 'list of possible sources',
				class: '',
				height: 342,
				glow: false,
			},
		},
		{
			number: 2,
			title: 'Start receiving tips for your work in IDI, DOT, or KSM.',
			description:
				'Once verified, start receiving tips from your supporters. Until now, you can choose to receive IDI, DOT or KSM; ERC20 will be integrated next.',
			img: {
				src: '/tipping_tips.svg',
				alt: 'tips, tokens and like icons',
				class: '',
				height: 342,
				glow: true,
			},
		},
		{
			number: 3,
			title: 'Get ready to license your creative works. Directly from your sources, on your terms.',
			description:
				'Sell or license the creative content directly from the verified sources and choose from predefined Licenses or create your own!',
			img: {
				src: '/tipping_license.svg',
				alt: 'license with a lock and copyright icon',
				class: '',
				height: 342,
				glow: true,
			},
		},
	];
</script>

<Section>
	<div class="text-center mb-12 md:mb-16 mx-auto">
		<h2 class="text-2xl md:text-4xl mb-6 md:mb-8 text-neonGreen-400">How it works</h2>
	</div>
	{#each steps as step, i}
		<div class="flex flex-col lg:flex-row md:pb-12" class:lg:flex-row-reverse={i % 2 === 1}>
			<div
				class="basis-2/3 lg:basis-1/2 flex flex-col justify-center"
				class:md:pr-8={i % 2 === 0}
				class:md:pl-8={i % 2 === 1}
			>
				<h2
					class="text-3xl md:text-5xl text-center md:text-left leading-[4rem] text-spaceBlue-900 font-bold font-dmsans pb-4 text-shadow-around shadow-neonGreen-400"
				>
					{step.number} /
				</h2>
				<h3 class="text-center md:text-left text-2xl md:text-3xl xl:text-4xl text-neonGreen-400 mb-6 md:mb-8">
					{step.title}
				</h3>
				<p class="my-2 text-sm md:text-base 2xl:text-xl">
					{step.description}
				</p>
			</div>
			<div class="basis-1/3 lg:basis-1/2 md:flex md:items-center">
				<div class="w-3/4 lg:w-full mx-auto relative flex items-center justify-center">
					{#if step.img.glow}
						<div
							class="absolute w-3/4 pt-[75%] bg-light from-neonGreen-400/40 to-transparent rounded-[100%] animate-pulse"
						/>
					{/if}
					<img
						class="object-contain relative mx-auto pt-8 lg:pt-0 {step.img.class}"
						src={step.img.src}
						alt={step.img.alt}
						height={step.img.height}
					/>
				</div>
			</div>
		</div>
	{/each}
</Section>

<style>
	/*Tailwind does not have a standard class for text-shadow.
	This class works and uses the tailwind shadow color variable*/
	.text-shadow-around {
		text-shadow: 1px 0 1px var(--tw-shadow-color), -1px 0 1px var(--tw-shadow-color),
			0 1px 1px var(--tw-shadow-color), 0 -1px 1px var(--tw-shadow-color);
	}
</style>

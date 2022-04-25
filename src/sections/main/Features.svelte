<script lang="ts">
	import FeatureCard from '$src/components/FeatureCard.svelte';

	let beastFeatures: { feature: string; icon?: string; img?: { src: string; alt: string } }[] = [
		{
			feature: 'Each stored proof on the Anagolay chain can be verified',
			icon: 'verified_user',
		},
		{
			feature: 'Each Workflow executes 100% the same code on each run',
			icon: 'code',
		},
		{
			feature: 'Stored proofs are contextual and well structured',
			icon: 'folder',
		},
		{ feature: 'Created Statements are legally valid', icon: 'copyright' },
		{
			feature: 'Developed with a mindset that every drop of energy matters',
			icon: 'bolt',
		},
		{
			feature: 'Can work on Mars or any other isolated environment',
			icon: 'rocket_launch',
		},
		{ feature: 'Community verified source code', icon: 'handshake' },
		{
			feature: 'Privacy by default, users’ data is not stored on-chain',
			icon: 'private_connectivity',
		},
		{
			feature: 'All stored data structures are content addressable',
			img: { src: 'decentralised_network.png', alt: 'decentralised network' },
		},
	];
</script>

<div class="relative mt-0 flex flex-col w-full justify-center items-center min-h-screen text-center pt-16">
	<h2 class="mb-12 text-2xl md:text-4xl">
		<p class="mb-4">Anagolay is a</p>
		<p>'different kind of beast'</p>
	</h2>
	<div class="flex flex-col items-center">
		<div
			class="flex flex-col w-[22rem] sm:w-full mx-auto overflow-x-auto overflow-y-hidden sm:h-fit sm:py-4 sm:grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-8"
		>
			{#each beastFeatures as feat, i}
				<FeatureCard {feat} {i} />
			{/each}
		</div>
	</div>
</div>

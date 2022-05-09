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
			img: { src: '/decentralized.svg', alt: 'decentralised network' },
		},
	];
</script>

<div
	class="w-[20rem] mx-auto max-w-full mt-0 flex flex-col sm:w-full items-center text-center mb-20 md:mb-40"
>
	<h2 class="mb-12 text-2xl md:text-4xl">
		<p class="mb-4">Anagolay is a</p>
		<p class="text-green">different kind of beast</p>
	</h2>
	<div
		class="flex w-full flex-col mx-auto h-fit py-4 sm:flex-row sm:flex-wrap sm:justify-evenly 2xl:justify-between"
	>
		{#each beastFeatures as feat, i}
			<FeatureCard {feat} {i} />
		{/each}
	</div>
</div>

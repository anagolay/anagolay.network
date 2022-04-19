<script lang="ts">
	import { onMount } from 'svelte';
	import SectionButton from '../SectionButton.svelte';
	import FeatureCard from './FeatureCard.svelte';

	let beastFeatures: { feature: string; icon?: string; subtitle?: string }[] = [
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
			feature: 'Can work on Mars (or any other isolated environment)',
			icon: 'rocket_launch',
		},
		{ feature: 'Community verified source code', icon: 'handshake' },
		{
			feature: 'Privacy by default, users’ data is not stored on-chain',
			icon: 'private_connectivity',
		},
		{
			feature: 'All stored data structures are content addressable',
			// icon: 'decentralized_network',
			subtitle: 'can be synced even if the nodes go offline',
		},
	];

	let howItems: { src: string; alt: string; text: string; link: string }[] = [
		{
			src: 'security.png',
			alt: 'security',
			text: 'The power of Anagolay is in creating the process (or workflow) that everyone can trust.',
			link: '/',
		},
		{
			src: 'world.png',
			alt: 'world validation',
			text: 'Anagolay workflow and its building blocks — operations can be run anywhere in any environment (even on Mars!) and always produce the same results (Proofs) for the same (or similar) sets of data.',
			link: '/',
		},
		{
			src: 'validation.png',
			alt: 'proofs',
			text: 'Anagolay Proofs, combined with cryptographic signatures, verify the rightfulness of a claim and generate Verifiable Statements.',
			link: '/',
		},
	];
</script>

<div class="relative flex w-full justify-center items-center min-h-screen text-center">
	<div class="flex flex-col items-center w-[90%] md:w-5/6">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-[2rem]">
			{#each beastFeatures as feat, i}
				<FeatureCard {feat} {i} />
			{/each}
		</div>
		<div class="flex mt-[3rem] flex-col mx-auto xl:w-5/6 xl:mx-auto">
			{#each howItems as item}
				<div class="md:flex text-left mb-8">
					<div class="justify-center mx-auto px-2 my-auto w-3/4 md:flex md:w-fit md:h-40" style="">
						<img class="md:object-contain h-[8rem] md:h-[unset] mx-auto" src={item.src} alt={item.alt} />
					</div>
					<div
						class="flex flex-col justify-center items-center md:items-start md:w-2/3 px-0 md:px-5 h-full my-auto"
					>
						<p class="text-center md:text-left mb-3">{item.text}</p>
						<a class="text-green" href={item.link}>learn more &#10230; </a>
					</div>
				</div>
			{/each}
		</div>
		<SectionButton>Learn more</SectionButton>
	</div>
</div>

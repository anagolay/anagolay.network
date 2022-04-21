<script lang="ts">
	import FeatureCard from '$src/components/FeatureCard.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';

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
			icon: '![descentralized network](decentralised_network.png)',
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
	let selectedFeature = 0;
	let carousel: HTMLDivElement;
	function selectFeature(event: { currentTarget: EventTarget & HTMLButtonElement }) {
		let index = Number(event.currentTarget.value);
		selectedFeature = index;
		carousel.scrollLeft = (carousel.scrollWidth / beastFeatures.length) * index;
	}
</script>

<div class="relative mt-0 flex flex-col w-full justify-center items-center min-h-screen text-center pt-16">
	<h2 class="mb-8">Anagolay is a <span class="text-green mb-8">different kind of beast</span></h2>
	<div class="flex flex-col items-center">
		<div
			class="flex w-[20rem] sm:w-full mx-auto overflow-x-auto overflow-y-hidden h-60 sm:h-fit sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-8"
			bind:this={carousel}
		>
			{#each beastFeatures as feat, i}
				<FeatureCard {feat} {i} />
			{/each}
		</div>
		<div class="sm:hidden flex w-2/4 justify-evenly my-4">
			{#each beastFeatures as feat, i}
				<button
					class="h-2 w-2 rounded-full border border-green active:bg-green {i === selectedFeature
						? 'bg-green'
						: ''}"
					value={i}
					on:click={selectFeature}
				/>
			{/each}
		</div>
		<div class="flex mt-16 flex-col mx-auto xl:mx-auto">
			{#each howItems as item}
				<div class="md:flex text-left mb-12">
					<div class=" justify-center mx-auto px-2 my-auto w-3/4 md:flex md:w-fit md:h-40">
						<img class="md:object-contain h-32 md:h-[unset] mx-auto" src={item.src} alt={item.alt} />
					</div>
					<div
						class="flex flex-col justify-center items-center md:items-start md:w-2/3 px-0 md:px-5 h-full my-auto"
					>
						<p class="text-center md:text-lg md:text-justify mb-3 pr-[12.5%]">{item.text}</p>
						<a class="text-green" href={item.link}>learn more &#10230; </a>
					</div>
				</div>
			{/each}
		</div>
		<SectionButton>Learn more</SectionButton>
	</div>
</div>

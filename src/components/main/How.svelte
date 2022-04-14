<script lang="ts">
	import SectionButton from '../SectionButton.svelte';

	let beastFeatures = [
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
			feature: 'Transaction ID and the block height do not affect content ID',
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
		<h2 class="py-2 mb-3 md:mb-8">How does it work?</h2>
		<div class="grid grid-cols-3 gap-4 mb-[2rem]">
			{#each beastFeatures as feat}
				<!-- <HowCard Icon={feat.icon}>{feat.feature}</HowCard> -->
				<div class="col">
					<div class="box flex items-center rounded-lg bg-blue h-[11rem] w-[21rem] px-[2rem] mt-[2rem]">
						<div
							class="absolute bg-gray p-[1rem] w-fit ml-[6rem] text-green bg-blue border border-green rounded-full -mt-[10rem]"
						>
							{#if feat.icon}
								<span class="material-icons text-[3rem]">{feat.icon}</span>
							{/if}
						</div>
						<p class="my-auto">{feat.feature}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex flex-col mx-auto xl:w-5/6 xl:mx-auto">
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

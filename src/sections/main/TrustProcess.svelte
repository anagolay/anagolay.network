<script lang="ts">
	let howItems: { src: string; alt: string; text: string; linkText: string; link: string }[] = [
		{
			src: '/trust_security.svg',
			alt: 'security',
			text: 'The power of Anagolay is in creating application-agnostic processes (or Workflows) that everyone can trust.',
			linkText: 'Anagolay workflows',
			link: '/',
		},
		{
			src: '/trust_world.svg',
			alt: 'world validation',
			text: 'Anagolay Workflow and its building blocks — Operations can be run anywhere in any environment (even on Mars!) and always produce the same results (Proofs) for the same (or similar) sets of data.',
			linkText: 'Anagolay proofs',
			link: '/',
		},
		{
			src: '/trust_print.svg',
			alt: 'proofs',
			text: 'Anagolay Proofs, combined with cryptographic signatures, verify the rightfulness of a claim and generate Verifiable Statements.',
			linkText: 'Anagolay statements',
			link: '/',
		},
	];
</script>

<div class="flex max-w-full lg:w-11/12 flex-col mx-auto xl:mx-auto">
	<div class="text-center mb-12 md:mb-16">
		<h2 class="text-2xl md:text-4xl mb-6 md:mb-8 text-green">Trust the process</h2>
		<p class="text-base md:text-xl xl:text-2xl">
			No need for a central authority, or resource-heavy consensus mechanism to establish the rules of the
			game (trust)
		</p>
	</div>
	<div class="w-80 max-w-full mx-auto md:w-full">
		{#each howItems as item}
			<div class="w-full mx-auto md:flex mb-16 lg:mb-16 xl:w-5/6">
				<div class="justify-center md:w-1/3 mx-auto mb-4 md:mb-0">
					<img class="max-w-full max-h-40 lg:max-h-48 mx-auto" src={item.src} alt={item.alt} />
				</div>

				<div
					class="flex flex-col text-center md:text-justify justify-center items-center  md:w-2/3 md:px-4 lg:items-start text-sm md:text-base xl:text-xl"
				>
					<p>{item.text}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

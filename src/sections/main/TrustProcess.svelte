<script lang="ts">
	let howItems: { src: string; alt: string; text: string; linkText: string; link: string }[] = [
		{
			src: 'security.png',
			alt: 'security',
			text: 'The power of Anagolay is in creating the process (or workflow) that everyone can trust.',
			linkText: 'Anagolay workflows',
			link: '/',
		},
		{
			src: 'world.png',
			alt: 'world validation',
			text: 'Anagolay workflow and its building blocks — operations can be run anywhere in any environment (even on Mars!) and always produce the same results (Proofs) for the same (or similar) sets of data.',
			linkText: 'Anagolay proofs',
			link: '/',
		},
		{
			src: 'validation.png',
			alt: 'proofs',
			text: 'Anagolay Proofs, combined with cryptographic signatures, verify the rightfulness of a claim and generate Verifiable Statements.',
			linkText: 'Anagolay statements',
			link: '/',
		},
	];
</script>

<div class="flex mt-16 flex-col mx-auto xl:mx-auto py-20">
	<div class="text-center mb-12">
		<h2 class="text-2xl md:text-4xl mb-8">Trust the process</h2>
		<p class="text-base md:text-2xl">
			No need for a central authority, or resource-heavy consensus mechanism to establish the rules of the
			game (trust)
		</p>
	</div>
	{#each howItems as item}
		<div class="md:flex text-left my-8 md:my-12">
			<div class="justify-center md:aspect-square mx-auto px-2 my-auto md:w-1/4 md:flex">
				<img class="h-44 md:h-[unset] md:object-contain mx-auto" src={item.src} alt={item.alt} />
			</div>
			<div
				class="flex flex-col text-center justify-center text-base lg:text-xl items-center md:justify-evenly md:w-3/4 px-0 md:px-5 md:items-start md:text-justify"
			>
				<p class="py-3">{item.text}</p>
				<!-- <a class="text-green hover:underline my-2 md:my-4" href={item.link}>
					<div class="flex items-center">
						{item.linkText} <span class="material-icons ml-2">east</span>
					</div>
				</a> -->
			</div>
		</div>
	{/each}
</div>

<script lang="ts">
	let howItems: { src: string; alt: string; text: string; link: string }[] = [
		{
			src: 'WDIW (1).png',
			alt: 'security',
			text: 'The power of Anagolay is in creating the process (or workflow) that everyone can trust.',
			link: '/',
		},
		{
			src: 'WDIW (2).png',
			alt: 'world validation',
			text: 'Anagolay workflow and its building blocks — operations can be run anywhere in any environment (even on Mars!) and always produce the same results (Proofs) for the same (or similar) sets of data.',
			link: '/',
		},
		{
			src: 'WDIW (3).png',
			alt: 'proofs',
			text: 'Anagolay Proofs, combined with cryptographic signatures, verify the rightfulness of a claim and generate Verifiable Statements.',
			link: '/',
		},
	];
</script>

<div class="relative flex w-full justify-center items-center min-h-screen text-center">
	<div class="flex flex-col items-center md:w-3/4">
		<h2 class="py-2">How does it work?</h2>
		<div class="flex flex-col mx-auto md:w-5/6">
			{#each howItems as item}
				<div class="md:flex mb-3 text-sm md:text-base">
					<div class="justify-center mx-auto px-2 my-auto w-3/4 md:flex md:w-1/3 md:h-40" style="">
						<img class="md:object-contain mx-auto" src={item.src} alt={item.alt} />
					</div>
					<div class="flex flex-col justify-center md:w-2/3 h-full px-5 my-auto">
						<p>{item.text}</p>
						<a class="text-green" href={item.link}>learn more &#10230; </a>
					</div>
				</div>
			{/each}
		</div>
		<button class="btn btn-primary min-w-fit w-[25vw] py-3 my-6 text-white">Learn more</button>
	</div>
</div>

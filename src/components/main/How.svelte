<script lang="ts">
	import SectionButton from '../SectionButton.svelte';

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
	<!-- <div class="flex flex-col items-center md:w-3/4"> -->
	<div class="flex flex-col items-center w-[90%] md:w-5/6">
		<h2 class="py-2 mb-3 md:mb-8">How does it work?</h2>
		<div class="flex flex-col mx-auto">
			<!-- <div class="flex flex-col mx-auto md:w-5/6"> -->
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

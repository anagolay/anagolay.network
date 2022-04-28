<script lang="ts">
	import SectionButton from '$src/components/SectionButton.svelte';

	let cases: { id: number; src: string; alt: string; title: string; link: string; text: string }[] = [
		{
			id: 0,
			src: 'case_code.png',
			alt: 'source code',
			title: 'Source code availability & trustworthiness',
			link: '/',
			text: 'Highly available storage for source code built with the new ContentVersioning approach gives assurance and trustworthiness by design to developers and users alike.',
		},
		{
			id: 1,
			src: 'case_ip.svg',
			alt: 'ip management',
			title: 'IP management in the Web3',
			link: '/',
			text: 'While creating & storing records of Rights, Restrictions, and Proofs Anagolay allows asset creators to establish how digital assets are used and owned.',
		},
		{
			id: 2,
			src: 'case_p2p.png',
			alt: 'digital art',
			title: 'Digital Art P2P Licensing',
			link: '/',
			text: 'A meaningful and straightforward way to monetize & buy digital art. From verified creators, with customized licensing options. Not just ‘as a collectible’.',
		},
	];
</script>

<div id="useCases" class="relative flex flex-col w-full justify-center items-center h-fit text-center mb-40">
	<div class="relative mt-0 flex flex-col items-center md:w-11/12 mx-auto">
		<h2 class="mt-8 text-lg md:mb-12 md:text-2xl">
			Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
			a number of issues including, but not limited to:
		</h2>
		<div class="flex w-full justify-evenly mb-8 flex-wrap text-base">
			{#each cases as item}
				<div class="carousel-item flex-col h-100 md:max-w-1/3 mt-20">
					<div class="shadow-button flex flex-col rounded-lg bg-blue px-3 pb-3 w-72 md:w-80 h-[25rem]">
						<div class="h-28 mx-auto py-auto flex items-center justify-center -mt-12 mb-8">
							<img class="object-contain max-h-full" src={item.src} alt={item.alt} />
						</div>
						<p class="w-full text-green text-center h-16">
							{item.title}
						</p>
						<p class="w-5/6 mx-auto">{item.text}</p>
					</div>
				</div>
			{/each}
		</div>
		<SectionButton url="https://kelp.digital/" class="mt-8 md:mt-12">Kelp Digital use case</SectionButton>
	</div>
</div>

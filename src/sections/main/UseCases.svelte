<script lang="ts">
	import SectionButton from '$src/components/SectionButton.svelte';

	let cases: { id: number; src: string; alt: string; title: string; link: string; text: string }[] = [
		{
			id: 0,
			src: 'case1.png',
			alt: 'source code',
			title: 'Source code availability & trustworthiness',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			id: 1,
			src: 'case2.png',
			alt: 'ip management',
			title: 'IP Management in the Web3',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			id: 2,
			src: 'case3.png',
			alt: 'digital art',
			title: 'Digital Art P2P Licensing \n (a working alternative to NFTs Craze)',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
	];
</script>

<div id="useCases" class="relative flex flex-col w-full justify-center items-center h-fit text-center">
	<div class="relative mt-0 flex flex-col items-center w-full m-full mt ">
		<h4 class="mt-8 font-montserrat text-base md:mb-12 w-full md:text-2xl">
			Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
			a number of issues including, but not limited to:
		</h4>
		<div class="flex w-full justify-evenly mb-8 flex-wrap text-base lg:text-lg">
			{#each cases as item}
				<div class="carousel-item flex-col mx-8 h-100 md:max-w-1/3 mt-20">
					<div class="shadow-button flex flex-col rounded-lg bg-blue px-3 pb-3 w-72 md:w-80 h-[25rem]">
						<div class="w-5/12 aspect-square mx-auto py-auto flex items-center justify-center -mt-[20%] mb-8">
							<img class="object-contain max-h-full" src={item.src} alt={item.alt} />
						</div>
						<p class="w-full text-green text-center mb-8 h-16">
							{item.title}
						</p>

						<p class="w-5/6 mx-auto">{item.text}</p>
						<div class="w-full mt-auto text-right">
							<a class="text-green mr-4 text-lg" href={item.link}
								><span class="material-icons ml-2">east</span></a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<SectionButton class="w-3/4 md:w-2/5">See more use cases</SectionButton>
	</div>
</div>

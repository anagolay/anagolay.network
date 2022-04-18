<script lang="ts">
	import { add_classes } from 'svelte/internal';
	import SectionButton from '../SectionButton.svelte';

	let cases: { id: number; src: string; alt: string; title: string; link: string; text: string }[] = [
		{
			id: 1,
			src: 'case1.png',
			alt: 'source code',
			title: 'Source code availability & trustworthiness',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			id: 2,
			src: 'case2.png',
			alt: 'ip management',
			title: 'IP Management in the Web3',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			id: 3,
			src: 'case3.png',
			alt: 'digital art',
			title: 'Digital Art P2P Licensing \n (a working alternative to NFTs Craze)',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
	];
	let carousel: HTMLDivElement;
	function scrollCarousel(e): void {
		e.preventDefault();
		const index = Number(e.target.id);
		const width = carousel.clientWidth;
		carousel.scrollLeft = (index - 1) * width;
	}
</script>

<div class={`flex flex-col w-full justify-center items-center h-fit min-h-screen text-center`}>
	<div class="absolute h-[120%] w-full bg-[url('stars_background2.png')] mix-blend-lighten" />
	<div class="relative mt-0 flex flex-col items-center w-full m-full mt ">
		<h4 class="py-6 font-montserrat mb-3 w-3/4">
			Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
			a number of issues including, but not limited to:
		</h4>
		<div
			class="w-[19rem] carousel font-dmsans font-medium mx-auto md:w-fit md:h-fit"
			bind:this={carousel}
			on:scroll={() => console.log(carousel.scrollLeft)}
		>
			{#each cases as item}
				<div class="carousel-item mx-[.75rem] flex-col md:max-w-1/3 md:w[16rem]">
					<div class="relative w-5/12 h-[7rem] mx-auto py-auto flex items-center justify-center -mb-[3.2rem]">
						<img class="object-contain max-h-full" src={item.src} alt={item.alt} />
					</div>
					<div
						class="box flex flex-col rounded-lg bg-blue px-[1rem] pt-[6rem] pb-[1rem] w-[18rem] md:w-[20rem] h-[25rem]"
					>
						<p class="w-full text-green text-center mb-[2rem] h-[4rem]">
							{item.title}
						</p>

						<p class="w-5/6 mx-auto">{item.text}</p>
						<div class="w-full mt-auto text-right">
							<a class="text-green mr-4 text-lg" href={item.link}>&#10230</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex justify-center w-full py-2 gap-2 md:invisible">
			{#each cases as item}
				<button class="btn h-1 w-1 btn-outline btn-accent p-0" id={'' + item.id} on:click={scrollCarousel} />
				<!-- <a href={`#item${item.id}`}><button class="btn h-1 w-1 btn-outline btn-accent p-0" /></a> -->
			{/each}
		</div>
		<SectionButton>See more use cases</SectionButton>
	</div>
</div>

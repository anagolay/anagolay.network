<script lang="ts">
	let cases: { id: number; src: string; alt: string; title: string; link: string; text: string }[] = [
		{
			id: 1,
			src: 'case A.png',
			alt: 'source code',
			title: 'Source code availability & trustworthiness',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			id: 2,
			src: 'case B.png',
			alt: 'ip management',
			title: 'IP Management in the Web3',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			id: 3,
			src: 'case C.png',
			alt: 'digital art',
			title: 'Digital Art P2P Licensing \n (a working alternative to NFTs Craze)',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
	];
</script>

<div class={`flex flex-col w-full justify-center items-center h-fit min-h-screen text-center`}>
	<div class="absolute h-[120%] w-full bg-[url('stars_background.png')] mix-blend-lighten" />
	<div class="relative mt-0 flex flex-col items-center h-3/4 w-full m-full mt ">
		<p class="py-6 font-montserrat mb-3 px-1/10 text-sm md:text-base md:w-3/4">
			Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
			a number of issues including, but not limited to:
		</p>

		<div class="w-5/6 carousel font-dmsans font-medium mx-auto md:w-fit  md:columns-3">
			{#each cases as item}
				<div class="carousel-item w-full mx-2 flex-col md:max-w-1/3 md:w-fit" id={`item${item.id}`}>
					<div class="relative w-5/12 h-40 mx-auto py-auto flex items-end justify-center -mb-14">
						<img src={item.src} alt={item.alt} />
					</div>
					<div class="box rounded-lg text-sm bg-blue md:w-[25vw]">
						<p class="px-3 mx-auto text-green text-center pt-24 mb-12 h-32">
							{item.title}
						</p>

						<p class="w-5/6 h-20 my-4 mx-auto">{item.text}</p>
						<div class="w-full mt-6 pb-3 text-right">
							<a class="text-green mr-4 text-lg" href={item.link}>&#10230</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex justify-center w-full py-2 gap-2 md:invisible">
			{#each cases as item}
				<a href={`#item${item.id}`}><button class="btn h-1 w-1 btn-outline btn-accent p-0" /></a>
			{/each}
		</div>
		<button class="btn btn-primary min-w-fit w-[25vw] py-3 my-6 text-white">See more use cases</button>
	</div>
</div>

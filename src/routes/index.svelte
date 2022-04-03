<script lang="ts">
	import TopButton from '../components/navBar/TopButton.svelte';
	import Ellipse from '../components/main/Ellipse.svelte';
	import NavBar from '../components/navBar/index.svelte';

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
	let cases: { src: string; alt: string; title: string; link: string; text: string }[] = [
		{
			src: 'case A.png',
			alt: 'source code',
			title: 'Source code availability & trustworthiness',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			src: 'case B.png',
			alt: 'ip management',
			title: 'IP Management in the Web3',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			src: 'case C.png',
			alt: 'digital art',
			title: 'Digital Art P2P Licensing \n (a working alternative to NFTs Craze)',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
	];
</script>

<main class="mainPage w-full text-white">
	<NavBar />
	<TopButton />
	<div class="absolute w-full starry" id="start" style="height: 100vh" />

	<div>
		<div class="absolute flex justify-end items-start w-full overflow-hidden h-3/4 top-0">
			<video class="mix-blend-lighten" style="height: 200%" playsinline autoplay muted loop>
				<source src="animacion sin fondo(1).mp4" type="video/mp4" />
			</video>
		</div>

		<Ellipse diam="1" left="18" top="90" op="0.5" blur />
		<Ellipse diam="3" left="30" top="75" op="0.5" blur />
		<Ellipse diam="3" left="60" top="75" blur />

		<div class="relative py-48 ml-1/10 w-3/4 font-dmsans text-xl">
			<h1 class="mb-5 tracking-wider">
				<p>Process-based</p>
				<p>Interplanetary P2P</p>
				<p>Framework</p>
			</h1>
			<p class="text-green">Process-based Interplanetary P2P Framework</p>
			<p class="w-2/3">
				No need for a central authority, or resource-heavy consensus mechanism to establish rules of the game
				— trust the process
			</p>
		</div>
	</div>

	<div class="relative flex w-full justify-center items-center min-h-screen">
		<div class="flex flex-col items-center w-3/4">
			<h2 class="p-2">How does it work?</h2>
			<div class="flex flex-col mx-auto w-5/6">
				{#each howItems as item}
					<div class="flex mb-3">
						<div class="flex w-1/3 justify-center px-2 my-auto" style="height: 10vw">
							<img class="object-contain" src={item.src} alt={item.alt} />
						</div>
						<div class="flex flex-col justify-center w-2/3 h-full p-2 my-auto">
							<p>{item.text}</p>
							<a class="text-green" href={item.link}>learn more &#10230; </a>
						</div>
					</div>
				{/each}
			</div>
			<button class="btn btn-primary py-2 px-20 my-2 text-white text-sm">{'Learn more'}</button>
		</div>
	</div>

	<div class={`flex flex-col w-full justify-center items-center h-fit min-h-screen`}>
		<div class="relative mt-0 flex flex-col items-center h-3/4 w-3/4 mt ">
			<p class="p-y font-montserrat mb-5 px-1/10">
				Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
				a number of issues including, but not limited to:
			</p>

			<div class="flex w-full font-dmsans font-medium justify-evenly">
				{#each cases as item}
					<div class="max-w-1/3 w-fit mx-2">
						<div class="w-5/12 h-1/4 mx-auto py-auto flex items-center -mb-14">
							<img class="" src={item.src} alt={item.alt} />
						</div>
						<div class="box h-92 rounded-lg text-sm bg-blue">
							<p class="w-48 mx-auto text-green text-center pt-24 mb-12 h-32">{item.title}</p>

							<p class="w-48 h-20 my-4 mx-5">{item.text}</p>
							<div class="w-full mt-6 pb-3 text-right">
								<a class="text-green mr-4 text-lg" href={item.link}>&#10230</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<button class="btn btn-primary py-2 px-20 my-2 text-white text-sm">{'Learn more'}</button>
		</div>
	</div>

	<div class="h-screen" />
	<div class="h-screen" />
</main>

<style>
	.mainPage {
		background: linear-gradient(168.89deg, #054f77 27.17%, #052233 94.76%);
		/* radial-gradient(66.7% 75vh at 77.94% 66vh, #141f45 50.59%, rgba(20, 31, 69, 0) 100%);
		background-blend-mode: darken; */
	}
	.starry {
		background: linear-gradient(rgba(5, 79, 119, 0) 70.87%, #054e76 100%),
			url('https://upload.wikimedia.org/wikipedia/commons/3/3b/Night_sky_in_the_Alps_-_panoramio_%281%29.jpg');
		opacity: 0.6;
		background-size: cover;
	}
</style>

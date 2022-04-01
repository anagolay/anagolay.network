<script lang="ts">
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
	let cases: { src: string; alt: string; title: string; link: string; text: string; arrowLink: string }[] = [
		{
			src: 'case A.png',
			alt: 'source code',
			title: 'Source code availability & trustworthiness',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
			arrowLink: '/',
		},
		{
			src: 'case B.png',
			alt: 'ip management',
			title: 'IP Management in the Web3',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
			arrowLink: '/',
		},
		{
			src: 'case C.png',
			alt: 'digital art',
			title: 'Digital Art P2P Licensing \n (a working alternative to NFTs Craze)',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
			arrowLink: '/',
		},
	];
</script>

<main class="mainPage w-screen text-white text-xl">
	<!-- <div class="rectangle82" /> -->
	<div class="absolute h-screen w-screen bg-stars bg-contain bg-opacity-60 rotate-180 mix-blend-lighten" />
	<div class="w-screen overflow-x-hidden">
		<div class="absolute radialHeader" />
	</div>

	<div class="w-screen">
		<div class="flex w-screen h-screen justify-center">
			<div class="absolute h-3/4 w-2/4 top-0 right-0 overflow-hidden">
				<video class="videoLight" playsinline autoplay muted loop>
					<source src="animacion sin fondo(1).mp4" type="video/mp4" />
				</video>
			</div>

			<NavBar />
			<div>
				<Ellipse diam="1" left="18" top="90" op="0.5" blur />
				<Ellipse diam="3" left="30" top="75" op="0.5" blur />
				<Ellipse diam="3" left="60" top="75" blur />
			</div>

			<div class="my-auto w-3/4 font-dmsans">
				<h1 class="mb-5 tracking-wider">
					<p>Process-based</p>
					<p>Interplanetary P2P</p>
					<p>Framework</p>
				</h1>
				<p class="text-green text-xl">Process-based Interplanetary P2P Framework</p>
				<p class="w-2/3">
					No need for a central authority, or resource-heavy consensus mechanism to establish rules of the
					game — trust the process
				</p>
			</div>
		</div>
	</div>

	<div class="flex w-full justify-center items-center h-screen">
		<div class="flex flex-col items-center h-3/4 w-3/4">
			<h2 class="p-2">How does it work?</h2>
			<div class="flex flex-col h-3/4">
				{#each howItems as item}
					<div class="flex h-1/3">
						<div class="flex w-1/3 h-full justify-center p-2">
							<img class="object-cover" src={item.src} alt={item.alt} />
						</div>
						<div class="flex flex-col justify-center w-2/3 h-full p-2">
							<p>{item.text}</p>
							<a class="text-green" href={item.link}>learn more &#8594; </a>
						</div>
					</div>
				{/each}
			</div>
			<button class="btn btn-primary py-2 px-20 my-2 text-white text-sm">{'Learn more'}</button>
		</div>
	</div>

	<div
		class="flex flex-col w-full justify-center items-center h-screen bg-stars mix-blend-lighten bg-contain"
	>
		<div class="flex flex-col items-center h-3/4 w-3/4">
			<p class="p-2 font-montserrat">
				Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
				a number of issues including, but not limited to:
			</p>

			<div class="flex w-full h-5/6 columns-3 gap-2 pt-6">
				{#each cases as item}
					<div class="btn btn-primary h-5/6 my-8 w-1/3 rounded-lg px-5 py-1">
						<img class="-mt-1/3 " src={item.src} alt={item.alt} />
						<a class="text-green my-3" href={item.link}>{item.title}</a>
						<p>{item.text}</p>
						<div class="w-full mt-auto text-right">
							<a class="text-green" href={item.arrowLink}>&#8594</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<button class="btn btn-primary text-white my-5">Learn more</button>
	</div>
</main>

<style>
	.radialHeader {
		width: 200vw;
		height: 180vh;
		left: -0.42vw;
		top: -0.45vh;
		background: radial-gradient(33.24% 40.02% at 59.89% 51.85%, #141f45 50.59%, rgba(20, 31, 69, 0) 100%);
		mix-blend-mode: darken;
		opacity: 0.7;
	}
	.mainPage {
		background: linear-gradient(348.89deg, #054f77 27.17%, #052233 94.76%), #ffffff;
	}

	/* .rectangle82 {
		position: absolute;
		width: 1.14vw;
		height: 0.96vw;
		left: -0.7vw;
		top: 0;
		background: linear-gradient(360deg, rgba(5, 79, 119, 0.25) 4.85%, #052233 86.68%);
	} */
	.videoLight {
		position: absolute;
		height: 190%;
		max-width: none;
		right: 0;
		mix-blend-mode: lighten;
	}
</style>

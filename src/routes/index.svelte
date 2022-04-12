<script lang="ts">
	import TopButton from '../components/navBar/TopButton.svelte';
	import Ellipse from '../components/main/Ellipse.svelte';
	import NavBar from '../components/navBar/index.svelte';
	import Team from '../components/main/Team.svelte';
	import Cases from '../components/main/Cases.svelte';
	import How from '../components/main/How.svelte';
	import Roadmap from '../components/main/Roadmap.svelte';
	import Footer from '../components/Footer/index.svelte';
</script>

<main class="mainPage text-white text-[.9rem] md:text-[1.125rem]">
	<NavBar />
	<TopButton />

	<div id="start">
		<div class="absolute w-full layer82 h-[50rem]" />
		<div class="absolute w-full starry h-[50rem]" />
		<div class="absolute w-full radialHeader h-[50rem]" />

		<div class="relative text-med py-[5rem] md:py-[10rem] px-3 md:ml-[10vw] font-dmsans">
			<div class="absolute right-0 top-[2rem] md:top-0 overflow-hidden">
				<video
					class=" w-screen min-w-[180vw] md:min-w-0 md:w-[inherit] md:mt-0"
					playsinline
					autoplay
					muted
					loop
				>
					<source src="header_animation.webm" type="video/webm" />
				</video>
			</div>

			<div class="absolute w-full h-5/6 md:h-3/4">
				<Ellipse diam="1.5vw" left="10" top="90" op="0.5" blur="5" extraclass="absolute" />
				<Ellipse diam="4.5vw" left="25" top="75" op="0.5" blur="5" extraclass="absolute" />
			</div>
			<div class="relative pt-[18.5rem] md:p-0 text-[1rem] md:text-[1.5rem]">
				<h1 class="mb-2 md:mb-5 tracking-wider text-center md:w-[40rem] md:text-left">
					<p>Process-based Interplanetary P2P Framework</p>
				</h1>
				<p
					class="text-green font-bold text-center md:text-left mb-2 md:mb-8  mx-auto md:mx-0 w-5/6  md:w-3/4"
				>
					The transparent verifiable process with 100% source-code assurance
				</p>
				<p class="w-5/6 mx-auto text-center md:text-left md:mx-0 md:w-[55%]">
					No need for a central authority, or resource-heavy consensus mechanism to establish rules of the
					game — trust the process
				</p>
			</div>
		</div>
	</div>

	<How />
	<Cases />
	<Team />
	<Roadmap />
	<Footer />
</main>

<style>
	.mainPage {
		background: linear-gradient(168.89deg, #054f77 27.17%, #052233 94.76%), #ffffff;
	}
	.radialHeader {
		background: radial-gradient(66.7vw 30vw at 75% 40%, #141f45 50.59%, rgba(20, 31, 69, 0) 100%);
		mix-blend-mode: darken;
		opacity: 0.7;
	}
	.layer82 {
		background: linear-gradient(360deg, rgba(5, 79, 119, 0.25) 4.85%, #052233 86.68%);
	}
	.starry {
		/* background: linear-gradient(180deg, #054e76 0%, rgba(5, 79, 119, 0) 29.13%), url('stars_background.png'); */
		/* transform: rotate(180deg); */
		background: linear-gradient(rgba(5, 79, 119, 0) 70.87%, #054e76 100%), url('stars_background.png');
		opacity: 0.6;
		mix-blend-mode: lighten;
		background-size: cover;
	}
</style>

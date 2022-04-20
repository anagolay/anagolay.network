<script lang="ts">
	import Ellipse from '../components/main/Ellipse.svelte';
	import Team from '../components/main/Team.svelte';
	import Cases from '../components/main/Cases.svelte';
	import How from '../components/main/How.svelte';
	import Roadmap from '../components/main/Roadmap.svelte';
	import Footer from '../components/Footer/index.svelte';
</script>

<div class="w-full">
	<div class="w-full bg-gradient-to-b from-black to-blue/0 h-[50rem]">
		<!-- <div class="w-full radialHeader md:min-h-[200vh] h-[80rem]"> -->
		<div class="text-med py-[5rem] md:pt-[10rem] md:pb-[15rem] px-3 md:ml-[10vw] font-dmsans">
			<div class="absolute right-0 top-[2rem] md:top-0 overflow-hidden max-h-screen">
				<video
					class=" w-screen min-w-[180vw] md:min-w-0 md:w-100 md:mt-0  max-h-3/4"
					playsinline
					autoplay
					muted
					loop
				>
					<source src="header_animation.webm" type="video/webm" />
				</video>
			</div>

			<Ellipse diam="1.5vw" left="10" top="90" op="0.5" blur="5" extraclass="absolute" />
			<Ellipse diam="4.5vw" left="25" top="75" op="0.5" blur="5" extraclass="absolute" />
			<div class={`relative pt-[95vw] md:pt-0 md:p-0 text-[1rem] md:text-[1.5rem]`}>
				<h1 class="mb-2 md:mb-5 tracking-wider text-center md:w-[50vw] md:max-w-[40rem] md:text-left">
					<p>Process-based Interplanetary P2P Framework</p>
				</h1>
				<p
					class="text-green font-bold text-center md:text-left mb-2 md:mb-8  mx-auto md:mx-0 w-5/6  md:w-[50vw]"
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
</div>

<style>
	.radialHeader {
		background: radial-gradient(66.7vw 30vw at 75% 40%, #141f45 50.59%, rgba(20, 31, 69, 0) 100%);
		mix-blend-mode: darken;
		opacity: 0.7;
	}
	.starry {
		background: linear-gradient(rgba(5, 79, 119, 0) 70.87%, #054e76 100%), url('stars_background2.png');
		opacity: 0.6;
		mix-blend-mode: lighten;
		background-size: cover;
	}
</style>

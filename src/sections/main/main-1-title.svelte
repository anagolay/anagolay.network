<script lang="ts">
	import Ellipse from '$src/components/Ellipse.svelte';
</script>

<div class="min-h-screen">
	<!-- Animation is absolute in md screen to let the green line reach the right border -->
	<div
		class="relative md:absolute flex overflow-visible -mr-[8vw] md:mr-0 md:overflow-hidden justify-end right-0 top-[2rem] md:top-0 max-h-full"
	>
		<!-- Video width 180vw is to set the animation visible on sm screen -->
		<video class="min-w-[180vw] h-[150%] md:min-w-0 md:w-100 md:mt-0" playsinline autoplay muted loop>
			<source src="header_animation.webm" type="video/webm" />
		</video>
	</div>
	<!-- Content marginTop and height are bound to screen width as also is animation -->
	<div class="relative flex flex-col -mt-[60vw] md:h-[50vw] md:min-h-screen md:my-0">
		<div class="md:my-auto">
			<h1 class="md:mb-5 tracking-wider text-center font-bold md:w-3/5 md:text-left">
				<p>Process-based Interplanetary P2P Framework</p>
			</h1>
			<h4
				class="text-green font-bold text-center md:text-left my-2 md:mb-8  mx-auto md:mx-0 w-5/6  md:w-[50vw]"
			>
				The transparent verifiable process with 100% source-code assurance
			</h4>
			<h4 class="w-5/6 mx-auto text-center md:text-left md:mx-0 md:w-[55%]">
				No need for a central authority, or resource-heavy consensus mechanism to establish rules of the game
				— trust the process
			</h4>
			<Ellipse class="absolute mt-[8vw] ml-[5%] opacity-50 blur-sm h-[1.5vw] border" />
			<Ellipse class="absolute mt-0 ml-[25%] opacity-50 blur-sm h-[4.5vw]" />
		</div>
	</div>
</div>

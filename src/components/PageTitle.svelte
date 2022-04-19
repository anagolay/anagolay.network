<script lang="ts">
	//Still under construction. The idea is to create a component where to write the title and set the animation.
	let starry: boolean;
	let bgAnimation: string;
</script>

<div>
	<div class="absolute w-full layer82 h-[50rem]" />
	{#if starry}
		<div class="absolute w-full starry h-[50rem]" />
	{/if}
	<div class="absolute w-full radialHeader md:min-h-[200vh] h-[80rem]" />

	<div class="relative text-med py-[5rem] md:pt-[10rem] md:pb-[15rem] px-3 md:ml-[10vw] font-dmsans">
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

		<!-- <div class="absolute w-full h-5/6 md:h-3/4">
			<Ellipse diam="1.5vw" left="10" top="90" op="0.5" blur="5" extraclass="absolute" />
			<Ellipse diam="4.5vw" left="25" top="75" op="0.5" blur="5" extraclass="absolute" />
		</div> -->
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
				No need for a central authority, or resource-heavy consensus mechanism to establish rules of the game
				— trust the process
			</p>
		</div>
	</div>
</div>

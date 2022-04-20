<script lang="ts">
	import { onMount } from 'svelte';

	let videoContainer: HTMLDivElement;
	let videoHeight: string;
	onMount(() => {
		videoHeight = `h-[${videoContainer.clientHeight * 2}px]`;
	});
</script>

<div class={`blueBg ${videoHeight}`}>
	<div>
		<div class="absolute w-full layer82 h-[50rem]" />
		<div class="absolute w-full starry h-[50rem]" />
		<div class="absolute w-full radialHeader md:min-h-[200vh] h-[80rem]" />

		<div
			class="relative text-med py-[5rem] md:pt-[10rem] md:pb-[15rem] px-3 md:ml-[10vw] font-dmsans"
			bind:this={videoContainer}
		>
			<div class="absolute right-0 top-[6rem] md:top-[4rem] overflow-hidden h-fit">
				<video
					class=" w-screen md:min-w-0 md:w-100 md:mt-0 mix-blend-lighten"
					playsinline
					autoplay
					muted
					loop
				>
					<source src="process.webm" type="video/webm" />
				</video>
			</div>

			<div class={`relative pt-[95vw] md:pt-0 md:p-0 text-[1rem] md:text-[1.5rem]`}>
				<h1 class="mb-2 md:mb-5 tracking-wider text-center md:w-[50vw] md:max-w-[40rem] md:text-left">
					How does it work?
				</h1>
				<p class="w-5/6 mx-auto text-center md:text-left md:mx-0 md:w-[55%]">
					Anagolay is a peer-to-peer network that stores records of Rights, Restrictions, and Proofs of any
					digital content.<br />
					It empowers the users to store, claim, sell, and rent their work with the correct transfer of Rights
					and usage of Licenses.
				</p>
			</div>
		</div>
	</div>
</div>

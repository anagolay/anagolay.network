<script lang="ts">
	import type { TrustItem } from '$src/types';
	export let trustItem: TrustItem;

	function onClick() {
		const target = document.getElementById(trustItem.anchor.split('#')[1]);
		window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
	}
</script>

<a
	class="basis-[45%] sm:basis-1/5 mt-4 flex flex-col pb-2 lg:pb-7 bg-spaceBlue-900 items-center text-center border border-spaceBlue-800 rounded-xl md:rounded-3xl bg-gradient-to-b from-spaceBlue-50/5 to-transparent"
	sveltekit:prefetch
	href={trustItem.anchor}
	on:click|preventDefault={onClick}
>
	<div
		class="h-12 sm:h-16 lg:h-28 w-16 sm:w-20 lg:w-32 -mb-12 sm:-mb-16 lg:-mb-28  bg-radial66 from-neonGreen-400/50 to-transparent"
	/>
	<div
		class="h-8 sm:h-12 lg:h-20 w-8 sm:w-12 lg:w-20 -translate-y-[33%] flex items-center justify-center rounded-full border border-neonGreen-400 bg-spaceBlue-900 bg-gradient-to-br from-spaceBlue-800/90 to-spaceBlue-50/20"
	>
		{#if trustItem.icon}
			<span class="material-icons text-sm sm:text-xl lg:text-4xl text-neonGreen-400">{trustItem.icon}</span>
		{:else if trustItem.img}
			<img
				loading="lazy"
				class="material-icons w-2/5"
				width="30"
				height="30"
				src={trustItem.img.src}
				alt={trustItem.img.alt}
			/>
		{/if}
	</div>
	<div
		class="w-full flex flex-col flex-grow justify-between items-center text-center text-xs md:text-base lg:text-xl 2xl:text-2xl"
	>
		<p class="w-11/12 sm:w-5/6">{trustItem.text}</p>
		<b><span class="material-icons text-neonGreen-400 text-[100%] mt-auto font-bold">south</span></b>
	</div>
</a>

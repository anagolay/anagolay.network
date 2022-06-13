<script lang="ts">
	import { onMount } from 'svelte';
	export let showOnPx = 200;

	let visible = 'opacity-0 cursor-default';

	function scrollToTop(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function setVisibility() {
		visible = window.scrollY > showOnPx ? 'opacity-100' : 'opacity-0 cursor-default';
	}
	onMount(() => setVisibility());
</script>

<svelte:window on:scroll={setVisibility} />

<button
	class="{visible} transition-opacity duration-500 flex justify-center items-center fixed bottom-5 right-8 h-12 w-12 rounded-full bg-white/25 bg-gradient-to-br from-spaceBlue-800/70 to-transparent shadow-md shadow-black/25 active:shadow-pressed backdrop-blur-md z-50"
	on:click={scrollToTop}
>
	<span class="material-icons text-neonGreen-400"> keyboard_arrow_up </span>
</button>

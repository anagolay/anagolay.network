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
	class="{visible} shadow-navBar shadow-black/50 text-white bg-spaceBlue-900 border-b md:border border-spaceBlue-700 transition-opacity duration-500 flex justify-center items-center fixed bottom-5 right-8 h-12 w-12 rounded-full z-50 active:scale-95"
	on:click={scrollToTop}
>
	<span class="material-icons text-spaceBlue-50 hover:text-neonGreen-400"> keyboard_arrow_up </span>
</button>

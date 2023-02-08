<script lang="ts">
	let showOnPx = 200;
	let scrollY: number;

	function scrollToTop(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY />

<button
	class="shadow-navBar shadow-black/50 text-white bg-navBarBg transition-opacity duration-500 flex justify-center items-center fixed bottom-5 right-8 h-12 w-12 rounded-full z-50 active:scale-95"
	class:opacity-100={scrollY >= showOnPx}
	class:opacity-0={scrollY < showOnPx}
	class:cursor-default={scrollY < showOnPx}
	on:click={scrollToTop}
>
	<span class="material-icons text-spaceBlue-50 hover:text-neonGreen-400"> keyboard_arrow_up </span>
</button>

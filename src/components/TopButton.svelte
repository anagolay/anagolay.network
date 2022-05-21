<script lang="ts">
	import { fade } from 'svelte/transition';
	export let showOnPx = 200;
	let visible = false;

	function scrollToTop(): void {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}
		visible = scrollContainer().scrollTop > showOnPx;
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

{#if visible}
	<button
		class="flex justify-center items-center fixed bottom-5 right-5 h-12 w-12 rounded-full bg-white/25 bg-gradient-to-br from-darkblue/70 to-transparent shadow-md shadow-black/25 active:shadow-pressed backdrop-blur-md z-50"
		transition:fade={{ duration: 300 }}
		on:click={scrollToTop}
	>
		<span class="material-icons text-green"> keyboard_arrow_up </span>
	</button>
{/if}

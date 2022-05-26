<script lang="ts">
	import { fade } from 'svelte/transition';
	export let scrollContainer: HTMLElement;
	export let scrollTop = 0;
	export let showOnPx = 200;
	let visible = false;

	function scrollToTop(): void {
		scrollContainer.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}

	$: visible = scrollTop > showOnPx;
</script>

{#if visible}
	<button
		class="flex justify-center items-center fixed bottom-5 right-8 h-12 w-12 rounded-full bg-white/25 bg-gradient-to-br from-darkblue/70 to-transparent shadow-md shadow-black/25 active:shadow-pressed backdrop-blur-md z-50"
		transition:fade={{ duration: 300 }}
		on:click={scrollToTop}
	>
		<span class="material-icons text-green"> keyboard_arrow_up </span>
	</button>
{/if}

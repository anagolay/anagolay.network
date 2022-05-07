<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.style.scrollBehavior = 'smooth';
		document.documentElement.style.scrollBehavior = 'smooth';
	});

	function scrollToTop(): void {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>

<button
	class="flex justify-center items-center fixed bottom-5 right-5 h-12 w-12 rounded-full bg-white/25 bg-gradient-to-br from-darkblue/70 to-transparent shadow-md shadow-black/25 active:shadow-pressed backdrop-blur-md z-[2]"
	on:click={scrollToTop}
>
	<span class="material-icons text-green"> keyboard_arrow_up </span>
</button>

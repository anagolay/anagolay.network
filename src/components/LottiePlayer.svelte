<script lang="ts" type="module">
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';
	export let src: string;

	let element: HTMLDivElement;

	onMount(() => {
		lottie.loadAnimation({
			container: element, // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: src, // the path to the animation json
		});
		lottie.play();
	});

	let extraClass = '';
	export { extraClass as class };
</script>

<div class={extraClass} bind:this={element} />

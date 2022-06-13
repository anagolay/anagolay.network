<script lang="ts">
	import { onMount } from 'svelte';

	let extraClass = '';
	export { extraClass as class };
	export let preClass = 'opacity-0';
	export let postClass = 'opacity-100';

	let card: HTMLDivElement;
	let scrollTop = 0;
	let offsetTop: number;
	let changingClass = preClass;

	function switchClass() {
		offsetTop = card.offsetTop;
		scrollTop = window.pageYOffset + window.innerHeight;
		changingClass = scrollTop > offsetTop ? postClass : preClass;
	}
	onMount(() => switchClass());
</script>

<svelte:window on:scroll={switchClass} />

<div class="{changingClass} {extraClass}" bind:this={card}>
	<slot />
</div>

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

	let cumulativeOffset = function (element) {
		var top = 0;
		do {
			top += element.offsetTop || 0;
			element = element.offsetParent;
		} while (element);

		return top;
	};

	function switchClass() {
		scrollTop = window.scrollY + window.innerHeight;
		changingClass = scrollTop > offsetTop ? postClass : preClass;
	}
	onMount(() => {
		offsetTop = cumulativeOffset(card);
		switchClass();
	});
</script>

<svelte:window on:scroll={switchClass} />

<div class="{changingClass} {extraClass}" bind:this={card}>
	<slot />
</div>

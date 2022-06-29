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

	let cumulativeOffset = function(element) {
			var top = 0, left = 0;
			do {
				top += element.offsetTop  || 0;
				left += element.offsetLeft || 0;
				element = element.offsetParent;
			} while(element);

			return {
				top: top,
				left: left
			};
		};

	function switchClass() {
		offsetTop = cumulativeOffset(card).top;
		scrollTop = window.scrollY + window.innerHeight;
		changingClass = scrollTop > offsetTop ? postClass : preClass;
		console.log(scrollTop, offsetTop, scrollTop > offsetTop, changingClass)
	}
	onMount(() => switchClass());
</script>

<svelte:window on:scroll={switchClass} />

<div class="{changingClass} {extraClass}" bind:this={card}>
	<slot />
</div>

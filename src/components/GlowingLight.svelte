<script lang="ts">
	import { onMount } from 'svelte';
	let container: HTMLDivElement;
	let extraClass = '';
	export { extraClass as class };
	let bgSize = 'bg-[length:0_0]';
	function setSize(): void {
		let size = Math.min(container.clientWidth, container.clientHeight);
		bgSize = 'bg-[length:' + size + 'px_' + size + 'px]';
	}
	onMount(() => setSize());
</script>

<svelte:window on:resize={setSize} />
<div class="glowing {bgSize} bg-no-repeat -my-[10%] bg-center {extraClass} blur-lg" bind:this={container}>
	<slot />
</div>

<style>
	.glowing {
		background-color: radial-gradient(rgb(244 251 255 / 0.05), transparent);
		background-image: radial-gradient(45% 45% at 50% 50%, var(--tw-gradient-from), transparent);
	}
</style>

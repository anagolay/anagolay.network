<script lang="ts">
	import { onMount } from 'svelte';
	let container: HTMLDivElement;
	let extraClass = '';
	export { extraClass as class };
	let wHclass = '0';
	function setSize(): void {
		let size = Math.min(container.clientWidth, container.clientHeight);
		wHclass = 'w-[' + size + 'px] h-[' + size + 'px]';
		console.log(wHclass);
	}
	onMount(() => setSize());
</script>

<svelte:window on:resize={setSize} />

<div class="flex w-full" bind:this={container}>
	<div class="w-full -mr-[50%] flex justify-center">
		<div
			class="{wHclass} animationCSS rounded-[100%] animate-glow bg-no-repeat bg-light to-transparent {extraClass} blur-lg"
		/>
	</div>
	<div class="w-full -ml-[50%] py-10">
		<slot />
	</div>
</div>

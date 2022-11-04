<script lang="ts">
	export let length: number;
	export let direction = 'left';
	let array = Array(length);
</script>

<div
	class="flex w-full overflow-hidden bg-gradient-to-b from-neonGreen-400/30 via-transparent to-neonGreen-400/30 border-t border-b border-neonGreen-400"
>
	{#each array as i}
		<div
			class="shadow-white py-2 min-w-fit"
			class:animate-marquee={direction === 'left'}
			class:animate-marqueeRight={direction === 'right'}
		>
			<slot name="text" />
		</div>
	{/each}
</div>

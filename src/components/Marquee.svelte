<script lang="ts">
	export let length: number;
	export let direction = 'left';
	let array = Array(length);
</script>

<div
	class="w-full overflow-hidden bg-gradient-to-b from-neonGreen-400/30 via-transparent to-neonGreen-400/30 border-t border-b border-neonGreen-400"
>
	<div
		class="flex w-fit"
		class:animate-marqueeOne={direction === 'left'}
		class:animate-marqueeRight={direction === 'right'}
	>
		{#each array as i}
			<div
				class="whitespace-nowrap"
				class:animate-marqueeOne={direction === 'left'}
				class:animate-marqueeRight={direction === 'right'}
			>
				<slot name="text" />
			</div>
		{/each}
	</div>
</div>

<script lang="ts">
	export let length: number;
	export let direction = 'left';
	let extraClass = '';
	export { extraClass as class };
	let array = Array(length);
</script>

<div class="{extraClass} w-full overflow-hidden">
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

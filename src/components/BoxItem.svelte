<script lang="ts">
	import BaseCard from './BaseCard.svelte';

	export let boxItem: string;
	let extraClass = '';
	export { extraClass as class };
</script>

<BaseCard class="{extraClass} h-full pb-4">
	<div class="flex flex-col items-center p-2 md:p-4 rounded-2xl">
		<div class="w-8 h-[2px] bg-neonGreen-400 my-4" />
		<p class="w-3/4 text-center text-sm md:text-base 2xl:text-lg">{boxItem}</p>
	</div>
</BaseCard>

<script lang="ts">
	let extraClass = '';
	export { extraClass as class };
	export let backgroundClasses: string[] = [];
	export let id = '';

	let containerClass = 'md:container w-11/12 sm:w-5/6 mx-auto';
</script>

<section {id} class={extraClass}>
	{#each backgroundClasses as bgClass}
		<div class={bgClass} />
	{/each}
	<div class={containerClass}>
		<slot />
	</div>
</section>

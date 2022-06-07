<script lang="ts">
	let extraClass = '';
	export { extraClass as class };
	export let backgroundClass = '';
	export let overlayClass = '';
	export let id = '';

	let containerClass = 'md:container w-11/12 sm:w-5/6 mx-auto';
</script>

<section {id} class={extraClass}>
	{#if backgroundClass}
		<div class={backgroundClass}>
			<div class={overlayClass}>
				<div class={containerClass}>
					<slot />
				</div>
			</div>
		</div>
	{:else}
		<div class={containerClass}>
			<slot />
		</div>
	{/if}
</section>

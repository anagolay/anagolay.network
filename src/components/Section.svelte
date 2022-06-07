<script lang="ts">
	let extraClass: string = '';
	export { extraClass as class };
	export let backgroundClass: string = '';
	export let overlayClass: string = '';
	export let id: string = '';

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

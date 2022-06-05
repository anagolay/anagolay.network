<script lang="ts">
	export let backgroundClass = '';
	export let overlayClass = '';
	let containerClass = 'md:container w-11/12 sm:w-5/6 mx-auto';
</script>

<section class="overflow-x-clip">
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

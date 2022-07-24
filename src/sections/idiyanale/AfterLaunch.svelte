<script lang="ts">
	import BoxItem from '$src/components/BoxItem.svelte';

	import Section from '$src/components/Section.svelte';

	export let boxItems: string[];
</script>

<Section class="pt-12 md:pt-20 pb-40 md:pb-60">
	<div class="flex flex-col items-center text-center">
		<div class="py-12">
			<h3 class="text-2xl md:text-3xl lg:text-4xl text-neonGreen-400 mb-6 md:mb-8">After Anagolay Launch</h3>
			<!-- <p class="text-base md:text-xl 2xl:text-2xl md:w-3/4 md:mx-auto pb-4 md:pb-0">
				In Anagolay Framework the two main chains are delivered consecutively under the succession principle.
			</p> -->
		</div>
		<div class="md:grid md:grid-cols-2 md:gap-x-8">
			{#each boxItems as boxItem}
				<BoxItem {boxItem} />
			{/each}
		</div>
	</div>
</Section>

<script lang="ts">
	import BoxItem from '$src/components/BoxItem.svelte';
	import FadeinCard from '$src/components/FadeinCard.svelte';
	import Section from '$src/components/Section.svelte';
	export let processCards: string[];
</script>

<Section class="py-12 md:pt-20 md:pb-40" id="idiyanale_process">
	<div class="flex w-full justify-center">
		<div class="flex items-center gap-2 md:gap-4 text-xl md:text-2xl xl:text-4xl max-w-3xl py-8 md:py-16">
			<FadeinCard class="transition-opacity duration-500">
				<p>Build</p>
			</FadeinCard>
			<FadeinCard class="transition-opacity duration-700 delay-500">
				<div class="flex gap-2 md:gap-4 items-center">
					<span class="material-icons  text-neonGreen-400">east</span>
					<p>Test</p>
				</div>
			</FadeinCard>
			<FadeinCard class="transition-opacity duration-700 delay-1000">
				<div class="flex gap-2 md:gap-4 items-center">
					<span class="material-icons  text-neonGreen-400">east</span>
					<p class="sm:w-fit">Pass it on</p>
				</div>
			</FadeinCard>
		</div>
	</div>

	<div class="flex flex-col gap-4 w-full items-center">
		<object
			class="object-contain py-8"
			title="Idiyanale and Anagolay interaction"
			type="image/svg+xml"
			data="/idiyanale_animation.svg"
		/>

		<div class="flex flex-col md:flex-row w-full gap-4 lg:gap-8 py-12 items-stretch">
			{#each processCards as cardText}
				<div class="basis-1/3">
					<BoxItem boxItem={cardText} />
				</div>
			{/each}
		</div>
	</div>
</Section>

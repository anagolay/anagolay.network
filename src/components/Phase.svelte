<script>
	import BaseCard from '$src/components/BaseCard.svelte';
	import BorderBox from '$src/components/BorderBox.svelte';
	import Section from '$src/components/Section.svelte';
	export let id = '';
	export let bgClass = '';
</script>

<Section class="py-16 md:py-24 {bgClass}" {id}>
	<div class="flex flex-col items-center text-base md:text-lg w-full">
		<BorderBox class="rounded-cardLg max-w-full w-80 sm:w-fit">
			<div
				class="flex flex-col sm:flex-row w-full gap-2 sm:gap-4 px-6 {bgClass === 'bg-spaceBlue-900'
					? 'bg-spaceBlue-900'
					: 'bg-phaseBg'} rounded-cardLg justify-center items-center py-5 text-lg md:text-2xl text-spaceBlue-50 font-firaMono"
			>
				<slot name="phasenumber" />
				<div class="h-0 border-2 w-12" />
				<slot name="phasequarter" />
			</div>
		</BorderBox>
		<div class="text-center py-6 text-lg md:text-2xl text-neonGreen-400 font-dmsans font-bold">
			<slot name="title" />
		</div>
		<div class="text-center pb-12 font-dmsans font-bold">
			<slot name="description" />
		</div>
		<div class="text-base">
			<slot name="cards" />
		</div>
	</div>
</Section>

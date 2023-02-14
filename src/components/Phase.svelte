<script>
	import BaseCard from '$src/components/BaseCard.svelte';
	import BorderBox from '$src/components/BorderBox.svelte';
	import BoxItem from '$src/components/BoxItem.svelte';
	import Section from '$src/components/Section.svelte';
	export let cardsData = [];
	export let id = '';
	export let bgClass = '';
</script>

<Section class="py-16 md:py-24 {bgClass}" {id}>
	<div class="flex flex-col items-center text-base md:text-lg w-full">
		<BorderBox class="rounded-cardLg w-80 max-w-full md:w-full md:max-w-sm">
			<div
				class="flex w-full gap-4 {bgClass === 'bg-spaceBlue-900'
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
		<div
			class="flex flex-col items-center md:flex-row w-full gap-8 md:items-stretch flex-wrap justify-center"
		>
			{#each cardsData as { title, content }}
				<BaseCard
					class="flex flex-col w-80 max-w-full md:w-[45%] lg:w-[30%] h-full px-6 py-20 text-center font-bold"
				>
					<div class="text-neonGreen-400 mb-8">{title}</div>
					<div class="">
						{content}
					</div>
				</BaseCard>
			{/each}
			<BoxItem
				class="flex flex-col justify-start w-80 max-w-full md:w-[45%] lg:w-[30%] h-full px-6 py-4 text-center font-bold"
				boxItem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sint quibusdam voluptatem temporibus est consequuntur, cupiditate quae vel necessitatibus labore."
			/>
		</div>
	</div>
</Section>

<script lang="ts">
	import { marked } from 'marked';

	export let feat: { feature: string; icon?: string; subtitle?: string };
	export let i: number;
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let isInView: boolean;
	let element: HTMLDivElement;
</script>

<div
	class="col wrapper"
	bind:this={element}
	use:inview={{ unobserveOnEnter: true, rootMargin: '5%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			in:fly={{ y: element.clientHeight, duration: 1500, delay: (i % 3) * 150 }}
			class="mx-4 sm:mx-0 shadow-button flex flex-col items-center rounded-lg bg-blue h-44 sm:h-60 lg:h-48 px-8 mt-8 text-base xl:text-xl"
		>
			<div class="bg-gray p-4 w-fit mx-center text-green border border-green rounded-full -mt-8">
				{#if feat.icon}
					<span class="material-icons text-5xl">{@html marked(feat.icon)}</span>
				{/if}
			</div>
			<div class="my-auto">
				<p class="w-[15rem] sm:w-fit mt-4 max-w-[15rem]">{feat.feature}</p>
				{#if feat.subtitle}
					<p class="text-[70%] leading-4 my-2">{feat.subtitle}</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.bg-gray {
		background: linear-gradient(166.26deg, rgba(9, 57, 84, 0.9) 14.88%, rgba(9, 57, 84, 0) 91%),
			rgba(255, 255, 255, 0.2);
		border: 1px solid #8cff00;
		backdrop-filter: blur(9px);
	}
</style>

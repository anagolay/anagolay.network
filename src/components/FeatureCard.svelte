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
			class="mx-4 sm:mx-0 shadow-button flex flex-col items-center rounded-3xl bg-blue h-44 lg:h-48 px-8 mt-8 mb-2 text-base xl:text-xl"
		>
			<div
				class="bg-gradient-to-br from-blue/90 to-white/20 backdrop-blur-[2px] p-5 mx-center text-green border aspect-square border-green rounded-full -mt-8"
			>
				{#if feat.icon}
					<span class="material-icons text-5xl">{@html marked(feat.icon)}</span>
				{/if}
			</div>
			<div class="w-64 sm:w-[unset] my-auto mt-4">
				<p class="mt-4">{feat.feature}</p>
				{#if feat.subtitle}
					<p class="text-[70%] mb-2">{feat.subtitle}</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
</style>

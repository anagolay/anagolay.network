<script lang="ts">
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
			class="box flex flex-col items-center rounded-lg bg-blue h-[11rem] max-w-[21rem] px-[2rem] mt-[2rem]"
		>
			<div class="bg-gray p-[1rem] w-fit mx-center text-green border border-green rounded-full -mt-[2rem]">
				{#if feat.icon}
					<span class="material-icons text-[3rem]">{feat.icon}</span>
				{/if}
			</div>
			<p class="my-auto">{feat.feature}</p>
			{#if feat.subtitle}
				<p class="text-[70%]" />
			{/if}
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

<script lang="ts">
	export let feat: { feature: string; icon?: string; img?: { src: string; alt: string } };
	export let i: number;
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let isInView: boolean;
</script>

<div
	class="col wrapper"
	use:inview={{ unobserveOnEnter: true, rootMargin: '5%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div
			in:fade={{ duration: 700, delay: (i % 3) * 150 }}
			class="mx-4 sm:mx-0 shadow-button flex flex-col items-center rounded-3xl bg-blue h-48 px-12 mt-8 text-base xl:text-xl"
		>
			<div
				class="flex w-24 h-24 items-center justify-center bg-gradient-to-br from-blue/90 to-white/20 backdrop-blur-[3px] mx-center text-green border border-green rounded-full -mt-6"
			>
				{#if feat.icon}
					<span class="material-icons text-5xl">{feat.icon}</span>
				{/if}
				{#if feat.img}
					<img class="material-icons h-12" src={feat.img.src} alt={feat.img.alt} />
				{/if}
			</div>
			<div class="w-60 sm:w-[unset] md:text-base mt-4 h-20 my-4">
				<p class="py-4">{feat.feature}</p>
			</div>
		</div>
	{/if}
</div>

<style>
</style>

<script lang="ts">
	import type { UseCase } from '$src/types';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	export let data: UseCase;
	export let i: number;

	let isInView: boolean;
</script>

<div
	class="wrapper h-[30rem] w-full md:w-fit"
	use:inview={{ unobserveOnEnter: true, rootMargin: '15%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fade={{ duration: 500, delay: (i % 3) * 300 }} class="flex-col h-100 mt-20">
			<div
				class="shadow-card shadow-aquaTeal-300 flex flex-col bg-spaceBlue-900 bg-gradient-to-b from-spaceBlue-50/5 to-transparent rounded-lg pb-3 px-3 2xl:px-6 text-center md:mx-2 md:w-72 2xl:w-80 h-[25rem]"
			>
				<div class="h-28 mx-auto py-auto flex items-center justify-center -mt-12 mb-8">
					<img class="object-contain max-h-full" src={data.src} alt={data.alt} />
				</div>
				<p class="w-full text-neonGreen-400 text-center h-16 2xl:h-20 2xl:pt-2">
					{data.title}
				</p>
				<p class="w-5/6 mx-auto">{data.text}</p>
			</div>
		</div>
	{/if}
</div>

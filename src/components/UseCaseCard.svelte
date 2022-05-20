<script lang="ts">
	import type { UseCase } from '$src/types';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	export let data: UseCase;
	export let i: number;

	let isInView: boolean;
</script>

<div
	class="wrapper h-[30rem]"
	use:inview={{ unobserveOnEnter: true, rootMargin: '15%' }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fade={{ duration: 500, delay: (i % 3) * 300 }} class="flex-col h-100 md:max-w-1/3 mt-20">
			<div class="shadow-button flex flex-col rounded-lg bg-blue px-3 pb-3 w-72 md:w-80 h-[25rem]">
				<div class="h-28 mx-auto py-auto flex items-center justify-center -mt-12 mb-8">
					<img class="object-contain max-h-full" src={data.src} alt={data.alt} />
				</div>
				<p class="w-full text-green text-center h-16">
					{data.title}
				</p>
				<p class="w-5/6 mx-auto">{data.text}</p>
			</div>
		</div>
	{/if}
</div>

<script lang="ts">
	import type { UseCase } from '$src/types';
	import FadeinCard from './FadeinCard.svelte';

	export let data: UseCase;
	export let i: number;
	let delay = `delay-[${150 * i}ms]`;
</script>

<div class="wrapper w-full md:w-fit">
	<FadeinCard class="transition-opacity {delay} duration-700">
		<div class="flex-col h-100 mt-20">
			<div
				class="shadow-card shadow-aquaTeal-300 flex flex-col bg-spaceBlue-900 bg-gradient-to-b from-spaceBlue-50/5 to-transparent rounded-lg pb-3 px-3 2xl:px-6 text-center md:mx-2 md:w-72 2xl:w-80 h-[25rem]"
			>
				<div class="h-28 mx-auto py-auto flex items-center justify-center -mt-12 mb-8">
					<img class="object-contain max-h-full" width="121" height="112" src={data.src} alt={data.alt} />
				</div>
				<p class="w-full text-neonGreen-400 text-center h-16 2xl:h-20 2xl:pt-2">
					{data.title}
				</p>
				<p class="w-5/6 mx-auto">{data.text}</p>
			</div>
		</div>
	</FadeinCard>
</div>

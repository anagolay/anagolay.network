<script lang="ts">
	import type { UseCase } from '$src/types';
	import BaseCard from './BaseCard.svelte';
	import FadeinCard from './FadeinCard.svelte';

	export let data: UseCase;
	export let i: number;
	let delay = `delay-[${150 * i}ms]`;
</script>

<div class="wrapper w-72 lg:w-[30%]">
	<FadeinCard class="transition-opacity {delay} duration-700">
		<div class="flex-col h-100 mt-20">
			<div class="bg-spaceBlue-900 rounded-cardLg">
				<BaseCard class="flex flex-col pb-3 px-3 2xl:px-6 text-center h-[25rem]">
					<div class="h-28 mx-auto py-auto flex items-center justify-center -mt-12 mb-8">
						<img class="object-contain max-h-full" width="121" height="112" src={data.src} alt={data.alt} />
					</div>
					<p class="w-full text-neonGreen-400 text-center h-16 2xl:h-20 2xl:pt-2">
						{data.title}
					</p>
					<p class="w-5/6 mx-auto">{data.text}</p>
				</BaseCard>
			</div>
		</div>
	</FadeinCard>
</div>

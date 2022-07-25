<script lang="ts">
	import type { FeatureData } from '$src/types';

	import TitleSection from '$src/sections/idiyanale/Title.svelte';
	import AfterLaunch from '$src/sections/idiyanale/AfterLaunch.svelte';
	import Description from '$src/sections/idiyanale/Description.svelte';
	import Process from '$src/sections/idiyanale/Process.svelte';

	export let boxItems: string[];
	export let cardsContent: FeatureData[];
</script>

<div>
	<TitleSection />
	<Description {cardsContent} />
	<Process />
	<AfterLaunch {boxItems} />
</div>

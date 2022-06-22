<script lang="ts">
	import Bottom from '$src/sections/use_cases/PilotCase.svelte';

	import Case from '$src/sections/use_cases/Case.svelte';
	import Description from '$src/sections/use_cases/Description.svelte';
	import Title from '$src/sections/use_cases/Title.svelte';

	import type { FeatureData, TechnologyItem } from '$src/types';

	export let descriptionItems: FeatureData[];
	export let cases: TechnologyItem[];
</script>

<Title />
<Description {descriptionItems} />
{#each cases as caseItem, i}
	<Case {caseItem} {i} />
{/each}
<Bottom />

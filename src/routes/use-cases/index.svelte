<script lang="ts">
	import Bottom from '$src/sections/use_cases/PilotCase.svelte';

	import Case from '$src/sections/use_cases/Case.svelte';
	import Description from '$src/sections/use_cases/Description.svelte';
	import Title from '$src/sections/use_cases/Title.svelte';

	import type { FeatureData, TechnologyItem } from '$src/types';
	import SvelteSeo from 'svelte-seo';
	import SectionButton from '$src/components/SectionButton.svelte';

	export let descriptionItems: FeatureData[];
	export let cases: TechnologyItem[];
</script>

<SvelteSeo
	title="Anagolay Network - Use Cases"
	description="Essential infrastructure for the emerging ownership economy to work."
	keywords="anagolay, workflow, transparent, process, ownership economy, rights management, copyright, content creators"
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - Use Cases',
		description: 'Essential infrastructure for the emerging ownership economy to work.',
		image:
			'https://ipfs.anagolay.network/ipfs/QmUj35FFkSH8rrQCmZAEG9W2D4TVJrqi4T7xSc7DgXckiv?filename=twitter_card_use_cases.png',
		imageAlt: 'Blue background with Anagolay brand logo',
	}}
/>

<Title />
<Description {descriptionItems} />
{#each cases as caseItem, i}
	<Case {caseItem} {i} />
{/each}
<Bottom />

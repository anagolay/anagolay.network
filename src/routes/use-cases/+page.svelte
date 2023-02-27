<script lang="ts">
	import Bottom from '$src/sections/use_cases/PilotCase.svelte';
	import Case from '$src/sections/use_cases/Case.svelte';
	import Description from '$src/sections/use_cases/Description.svelte';
	import Title from '$src/sections/use_cases/Title.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { PageData } from './$types';

	export let data: PageData;

	const { descriptionItems, cases } = data;
</script>

<SvelteSeo
	title="Anagolay Network - Use Cases"
	description="Claim and prove ownership. Manage & monetize communities across existing channels. Protect and license creative works p2p. Simple, transparent, secure, and fair"
	keywords="anagolay, workflow, transparent, process, ownership economy, rights management, copyright, content creators"
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - Use Cases',
		description:
			'Claim and prove ownership. Manage & monetize communities across existing channels. Protect and license creative works p2p. Simple, transparent, secure, and fair',
		image:
			'https://files.kelp.digital/kelp-digital-assets/anagolay-network/twitter-cards/Anagolay_TwCard_usecases.png',
		imageAlt: 'Blue background with Anagolay brand logo',
	}}
/>

<Title />
<Description {descriptionItems} />
{#each cases as caseItem, i}
	<Case {caseItem} {i} />
{/each}
<Bottom />

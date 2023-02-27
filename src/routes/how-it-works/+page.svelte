<script lang="ts">
	import TitleSection from '$src/sections/how-it-works/Title.svelte';
	import TechnologyItems from '$src/sections/how-it-works/TechnologyItems.svelte';
	import Architecture from '$src/sections/how-it-works/Architecture.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { PageData } from './$types';

	export let data: PageData;

	const { trustItems, technologyItems, webLayerIcons, architectureItems } = data;
</script>

<SvelteSeo
	title="Anagolay Network - How does it work?"
	description="Learn how Anagolay Workflows empower users to prove ownership, sell, and rent creative works with the correct transfer of Rights and usage of Licenses"
	keywords="anagolay, blockchain, workflow, transparent, process, substrate, web3"
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - How does it work?',
		description:
			'Learn how Anagolay Workflows empower users to prove ownership, sell, and rent creative works with the correct transfer of Rights and usage of Licenses',
		image:
			'https://files.kelp.digital/kelp-digital-assets/anagolay-network/twitter-cards/Anagolay_TwCard_HDIW.png',
		imageAlt: 'Blue background with Anagolay brand logo',
	}}
/>

<div>
	<TitleSection {trustItems} />
	<TechnologyItems {technologyItems} />
	<Architecture {webLayerIcons} {architectureItems} />
</div>

<script lang="ts">
	import TitleSection from '$src/sections/how-it-works/Title.svelte';
	import TechnologyItems from '$src/sections/how-it-works/TechnologyItems.svelte';
	import Architecture from '$src/sections/how-it-works/Architecture.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { TrustItem, TechnologyItem, ArchitectureItem, WebLayerIcon } from '$src/types';

	export let trustItems: TrustItem[];
	export let technologyItems: TechnologyItem[];
	export let webLayerIcons: WebLayerIcon[];
	export let architectureItems: ArchitectureItem[];
</script>

<SvelteSeo
	title="Anagolay Network - How does it work?"
	description="P2P Network to verify authorship & ownership, store & deliver proofs."
	keywords="anagolay, blockchain, workflow, transparent, process, substrate, web3"
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - How does it work?',
		description: 'P2P Network to verify authorship & ownership, store & deliver proofs.',
		image:
			'https://ipfs.anagolay.network/ipfs/QmTEVPpvQLbvLFB1tu1KyCz22osvt5YGQUGZLJtUiotaPY?filename=twitter_card_how_it_works.png',
		imageAlt: 'Blue background with Anagolay brand logo',
	}}
/>

<div>
	<TitleSection {trustItems} />
	<TechnologyItems {technologyItems} />
	<Architecture {webLayerIcons} {architectureItems} />
</div>

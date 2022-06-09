<script lang="ts">
	import TitleSection from '$src/sections/how-it-works/Title.svelte';
	import TechnologyItems from '$src/sections/how-it-works/TechnologyItems.svelte';
	import Architecture from '$src/sections/how-it-works/Architecture.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { TechnologyItem, ArchitectureItem, WebLayerIcon } from '$src/types';
	// import { onMount } from 'svelte';

	export let technologyItems: TechnologyItem[];
	export let webLayerIcons: WebLayerIcon[];
	export let architectureItems: ArchitectureItem[];

	// onMount(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
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
			'https://ipfs.anagolay.network/ipfs/QmX18cJBJ5vFKUYaxQsikFMBYrWtyqnznq9eY2ShdV7evZ?filename=twitter%20card.png',
		imageAlt: 'Blue background with Anagolay brand logo',
	}}
/>

<div>
	<TitleSection />
	<TechnologyItems {technologyItems} />
	<Architecture {webLayerIcons} {architectureItems} />
</div>

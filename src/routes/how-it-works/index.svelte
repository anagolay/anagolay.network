<script lang="ts">
	import TitleSection from '$src/sections/how-it-works/Title.svelte';
	import TechnologyItems from '$src/sections/how-it-works/TechnologyItems.svelte';
	import Architecture from '$src/sections/how-it-works/Architecture.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { TechnologyItem, ArchitectureItem, WebLayerIcon } from '$src/types';

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
			'https://ipfs.anagolay.network/ipfs/QmX18cJBJ5vFKUYaxQsikFMBYrWtyqnznq9eY2ShdV7evZ?filename=twitter%20card.png',
		imageAlt: 'Blue background with Anagolay brand logo',
	}}
/>

<div class="w-80 md:w-fit max-w-full mx-auto">
	<TitleSection />
	<TechnologyItems {technologyItems} />
	<div class="flex justify-center -mx-[100%] bg-gradient-to-b from-anagolayBlack to-transparent">
		<div class="w-1/3 md:container">
			<Architecture {webLayerIcons} {architectureItems} />
		</div>
	</div>
</div>

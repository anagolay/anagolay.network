<script lang="ts">
	import TitleSection from '$src/sections/idiyanale/mainnet/Title.svelte';
	import Description from '$src/sections/idiyanale/mainnet/Description.svelte';
	import Process from '$src/sections/idiyanale/mainnet/Process.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { PageData } from './$types';

	export let data: PageData;

	const { processCards, cardsContent } = data;
</script>

<SvelteSeo
	title="Idiyanale Network - Pioneer MainNet for Anagolay Framework"
	description="Playground for developers to test both new and existing features of Anagolay framework in an unrefined, unpredictable, but realistic on-chain environment"
	keywords="idiyanale, anagolay, blockchain, workflow, transparent process, substrate, copyright statements, ownership statements, web3 rights management, pioneer network"
	twitter={{
		site: '@IdiyanaleNet',
		title: 'Idiyanale Network - Pioneer MainNet for Anagolay Framework',
		description:
			'Playground for developers to test both new and existing features of Anagolay framework in an unrefined, unpredictable, but realistic on-chain environment',
		image:
			'https://ipfs.anagolay.network/ipfs/QmWJxT7s4BxZUm5XGfs2NdUk2GJJpyWDN7HzVGNGqvby1M?filename=idiyanale_twittercard.png',
		imageAlt: 'Blue background with Idiyanale white brand logo',
	}}
/>

<TitleSection />
<Description {cardsContent} />
<Process {processCards} />

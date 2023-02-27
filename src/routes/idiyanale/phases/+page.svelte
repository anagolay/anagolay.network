<script>
	import Phases from '$src/sections/idiyanale/phases/Phases.svelte';
	import Title from '$src/sections/idiyanale/phases/Title.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Idiyanale Network Launch"
	description="Essential infrastructure for the digital creative market 3.0."
	keywords="idiyanale, anagolay, parachain, crowdloan, substrate, verification, ownership statements, blockchain"
	twitter={{
		site: '@IdiyanaleNet',
		title: 'Idiyanale Network Launch',
		description: 'Essential infrastructure for the digital creative market 3.0.',
		image:
			'https://files.kelp.digital/kelp-digital-assets/anagolay-network/twitter-cards/Anagolay_TwCard_launchphases.png',
		imageAlt: 'Blue and green background with Anagolay green brand logo',
	}}
/>

<Title />
<Phases />

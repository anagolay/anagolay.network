<script lang="ts">
	import Cards from '$src/sections/tipping/Cards.svelte';
	import HowTippingWorks from '$src/sections/tipping/HowTippingWorks.svelte';
	import Title from '$src/sections/tipping/Title.svelte';
	import Waitlist from '$src/sections/tipping/Waitlist.svelte';
	import type { FeatureData, TippingStep } from '$src/types';
	import SvelteSeo from 'svelte-seo';

	export let features: FeatureData[];
	export let steps: TippingStep[];

</script>

<SvelteSeo
	title="Anagolay Network - Tips for Verified Creators"
	description="verify your channels and start accepting support from the community in crypto."
	keywords="anagolay, idiyanale, verified creators, content creators, digital tips,
	community support, monetize, your audience, online identity, verification"
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - Tips for Verified Creators',
		description: 'verify your channels and start accepting support from the community in crypto.',
		image:
			'https://ipfs.io/ipfs/QmQKFRhaZd2Ac3ZW1PCz2qfCQoeNq4XTcoRAfbiWoG9USG?filename=twitter_card_tipping.png',
		imageAlt: 'Blue starry background with Anagolay brand logo and tokens in a green coincase',
	}}
/>

<Title />
<Cards {features} />
<HowTippingWorks {steps} />
<Waitlist />

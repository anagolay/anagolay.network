<script lang="ts">
	import Cards from '$src/sections/tipping/Cards.svelte';
	import HowTippingWorks from '$src/sections/tipping/HowTippingWorks.svelte';
	import Title from '$src/sections/tipping/Title.svelte';
	import Waitlist from '$src/sections/tipping/Waitlist.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { PageData } from './$types';

	export let data: PageData;

	const { features, steps } = data;
</script>

<SvelteSeo
	title="Anagolay Network - Tips for Verified Creators"
	description="Verify your online identities: a domain, Twitter handler, Youtube. Start accepting tips from the community across all your channels in tokens of your choice"
	keywords="anagolay, idiyanale, verified creators, content creators, digital tips, community support, monetize, your audience, online identity, verification"
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - Tips for Verified Creators',
		description:
			'Verify your online identities: a domain, Twitter handler, Youtube. Start accepting tips from the community across all your channels in tokens of your choice',
		image:
			'https://files.kelp.digital/kelp-digital-assets/anagolay-network/twitter-cards/Anagolay_TwCard_tipping.png',
		imageAlt: 'Blue starry background with Anagolay brand logo and tokens in a green coincase',
	}}
/>

<Title />
<Cards {features} />
<HowTippingWorks {steps} />
<Waitlist />

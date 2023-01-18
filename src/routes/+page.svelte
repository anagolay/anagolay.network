<script lang="ts">
	import TitleSection from '$src/sections/main/Title.svelte';
	import FeaturesSection from '$src/sections/main/Features.svelte';
	import TrustProcess from '$src/sections/main/TrustProcess.svelte';
	import UseCases from '$src/sections/main/UseCases.svelte';
	import TeamSection from '$src/sections/main/Team.svelte';
	import Roadmap from '$src/sections/main/Roadmap.svelte';
	import Support from '$src/sections/main/Support.svelte';
	import Tipping from '$src/sections/main/Tipping.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { PageData } from './$types';

	export let data: PageData;

	const { beastFeatures, useCases, trustProcessItems, teamMembers, roadMapItems } = data;
</script>

<SvelteSeo
	title="Anagolay Network - Process-based Interplanetary P2P Framework"
	description="Process-based interplanetary P2P framework built for storing & transferring Intellectual Property rights (Copyright, Licenses, Ownerships) as verifiable records"
	keywords="anagolay, blockchain, workflow, transparent process, substrate, copyright statements, ownership statements, web3 rights management"
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - Process-based Interplanetary P2P Framework',
		description:
			'Process-based interplanetary P2P framework built for storing & transferring Intellectual Property rights (Copyright, Licenses, Ownerships) as verifiable records',
		image:
			'https://ipfs.anagolay.network/ipfs/QmZTpn19dZ5GJijKVn3aGg4HtwWTe9hx4sxqxdRXUjTrzt?filename=twitter_card_home.png',
		imageAlt: 'White background with Anagolay brand logo',
	}}
/>

<div>
	<TitleSection />
	<FeaturesSection {beastFeatures} />
	<TrustProcess {trustProcessItems} />
	<Tipping />
	<UseCases {useCases} />
	<TeamSection {teamMembers} />
	<Support />
	<Roadmap {roadMapItems} />
</div>

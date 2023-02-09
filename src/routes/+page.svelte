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
	title="Anagolay Network - Manage your content on your terms"
	description="Web3 Framework for Original Creators to claim and verify ownership of online identities and multimedia content and license creative works P2P"
	keywords="anagolay, workflow, multimedia content, transparent process, copyright statements, ownership, web3 rights management, online identeties "
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - Manage your content on your terms',
		description:
			'Web3 Framework for Original Creators to claim and verify ownership of online identities and multimedia content and license creative works P2P',
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

<script lang="ts">
	import TitleSection from '$src/sections/main/Title.svelte';
	import FeaturesSection from '$src/sections/main/Features.svelte';
	import TrustProcess from '$src/sections/main/TrustProcess.svelte';
	import UseCases from '$src/sections/main/UseCases.svelte';
	import TeamSection from '$src/sections/main/Team.svelte';
	import Roadmap from '$src/sections/main/Roadmap.svelte';
	import SvelteSeo from 'svelte-seo';

	import type { feat, howItWorksItem, useCase, teamMember, roadmapItem } from '$src/types';

	export let beastFeatures: feat[];
	export let useCases: useCase[];
	export let howItWorksItems: howItWorksItem[];
	export let teamMembers: teamMember[];
	export let roadMapItems: roadmapItem[];
</script>

<SvelteSeo
	title="Anagolay Network - Process-based Interplanetary P2P Framework"
	description="P2P Network to verify authorship, protect and manage copyright & ownership. Statements of Rights (Copyright, Licenses, and Ownership), Restrictions,  and Proofs created with Anagolay Workflows empower users to store, claim, sell, and rent creative works as digital assets with the correct transfer of Rights and usage of Licenses."
	keywords="anagolay, blockchain, workflow, transparent process, substrate, copyright statements, ownership statements, web3 rights management "
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - Process-based Interplanetary P2P Framework',
		description:
			'P2P Network to verify authorship, protect and manage copyright & ownership. Statements of Rights (Copyright, Licenses, and Ownership), Restrictions,  and Proofs created with Anagolay Workflows empower users to store, claim, sell, and rent creative works as digital assets with the correct transfer of Rights and usage of Licenses',
		image:
			'https://ipfs.anagolay.network/ipfs/QmX18cJBJ5vFKUYaxQsikFMBYrWtyqnznq9eY2ShdV7evZ?filename=twitter%20card.png',
		imageAlt: 'Blue background with Anagolay brand logo',
	}}
/>

<div>
	<TitleSection />
	<FeaturesSection {beastFeatures} />
	<TrustProcess {howItWorksItems} />
	<UseCases {useCases} />
	<TeamSection {teamMembers} />
	<Roadmap {roadMapItems} />
</div>

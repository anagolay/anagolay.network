<script lang="ts">
	import TitleSection from '$src/sections/main/Title.svelte';
	import FeaturesSection from '$src/sections/main/Features.svelte';
	import TrustProcess from '$src/sections/main/TrustProcess.svelte';
	import UseCases from '$src/sections/main/UseCases.svelte';
	import TeamSection from '$src/sections/main/Team.svelte';
	import Roadmap from '$src/sections/main/Roadmap.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Anagolay Network - Process-based Interplanetary P2P Framework"
	description="P2P Network to verify authorship, protect and manage copyright & ownership. Statements of Rights (Copyright, Licenses, and Ownership), Restrictions,  and Proofs created with Anagolay Workflows empower users to store, claim, sell, and rent creative works as digital assets with the correct transfer of Rights and usage of Licenses."
	keywords="anagolay, blockchain, workflow, transparent process, substrate, copyright statements, ownership statements, web3 rights management "
/>

<div>
	<TitleSection />
	<FeaturesSection />
	<TrustProcess />
	<UseCases />
	<TeamSection />
	<Roadmap />
</div>

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
	description="my awesome desc"
	keywords="anagolay, blockchain, workflow, transparent, process"
/>

<div>
	<TitleSection />
	<FeaturesSection />
	<TrustProcess />
	<UseCases />
	<TeamSection />
	<Roadmap />
</div>

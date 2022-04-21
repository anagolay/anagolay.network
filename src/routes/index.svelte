<script lang="ts">
	import TitleSection from '$src/sections/main/main-1-title.svelte';
	import FeaturesSection from '$src/sections/main/main-2-features.svelte';
	// import UseCases from '$src/sections/main/main-3-use-cases.svelte';
	// import TeamSection from '$src/sections/main/main-4-team.svelte';
	// import Roadmap from '$src/sections/main/main-5-roadmap.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Anagolay Network - Process-based Interplanetary P2P Framework"
	description="my awesome desc"
	keywords="anagolay, blockchain, workflow, transparent, process"
/>

<!--
<div class="w-full">
	<TitleSection />
	<FeaturesSection />
	<UseCases />
	<TeamSection />
	<Roadmap />
</div> -->

<div>
	<TitleSection />
	<FeaturesSection />
</div>

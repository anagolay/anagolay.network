<script lang="ts">
	import Cards from '$src/sections/tipping/Cards.svelte';
	import HowTippingWorks from '$src/sections/tipping/HowTippingWorks.svelte';
	import Title from '$src/sections/tipping/Title.svelte';
	import Waitlist from '$src/sections/tipping/Waitlist.svelte';
	import type { FeatureData } from '$src/types';

	export let features: FeatureData[];
</script>

<Title />
<Cards {features} />
<HowTippingWorks />
<Waitlist />

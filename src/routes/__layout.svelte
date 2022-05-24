<script lang="ts">
	import '$src/app.css';
	import NavBar from '$src/components/NavBar.svelte';
	import TopButton from '$src/components/TopButton.svelte';
	import Footer from '$src/components/Footer.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.style.scrollSnapType = 'y mandatory';
		document.body.style.scrollSnapStop = 'always';

		document.documentElement.style.scrollSnapType = 'y mandatory';
		document.documentElement.style.scrollSnapStop = 'always';
	});
</script>

<NavBar />
<div
	class="w-full bg-anagolayBlack bg-gradient-to-b from-anagolayBlack via-blue to-anagolayBlack overflow-x-hidden"
>
	<main class="lg:container mx-auto w-5/6">
		<div class="flex flex-col text-anagolayWhite font-dmsans scroll-smooth">
			<slot />
			<Footer />
			<TopButton />
		</div>
	</main>
</div>

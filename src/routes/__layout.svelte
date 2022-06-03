<script lang="ts">
	import '$src/app.css';
	import NavBar from '$src/components/NavBar.svelte';
	import TopButton from '$src/components/TopButton.svelte';
	import Footer from '$src/components/Footer.svelte';
	import { onMount } from 'svelte';
	// snap-y snap-proximity snap-always
	onMount(() => {
		const bgColor = 'rgb(5, 34, 51)';
		document.body.style.backgroundColor = bgColor;
		document.documentElement.style.backgroundColor = bgColor;
	});
</script>

<NavBar />

<main class="px-1/12 bg-anagolayBlack flex flex-col text-anagolayWhite font-dmsans">
	<slot />
	<Footer />
	<TopButton />
</main>

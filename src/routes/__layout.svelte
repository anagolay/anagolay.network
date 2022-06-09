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

<main class="bg-blue-900 flex flex-col text-blue-50 font-dmsans">
	<slot />
	<Footer />
	<TopButton />
</main>

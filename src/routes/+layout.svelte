<script>
	import '$src/app.css';

	import Footer from '$src/components/Footer.svelte';
	import NavBar from '$src/components/NavBar.svelte';
	import TopButton from '$src/components/TopButton.svelte';
</script>

<NavBar />

<main class="bg-spaceBlue-900 flex flex-col text-spaceBlue-50 font-dmsans overflow-x-hidden">
	<slot />
	<Footer />
	<TopButton />
</main>

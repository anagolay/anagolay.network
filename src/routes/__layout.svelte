<script lang="ts">
	import '$src/app.css';
	import NavBar from '$src/components/NavBar.svelte';
	import TopButton from '$src/components/TopButton.svelte';
	import Footer from '$src/components/Footer.svelte';
</script>

<NavBar />

<main class="bg-spaceBlue-900 flex flex-col text-spaceBlue-50 font-dmsans">
	<slot />
	<Footer />
	<TopButton />
</main>

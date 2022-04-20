<script lang="ts">
	import '../app.css';
	import NavBar from '$src/components/NavBar.svelte';
	import TopButton from '$src/components/TopButton.svelte';
	import Footer from '$src/components/Footer.svelte';
</script>

<main>
	<NavBar />
	<TopButton />
	<div>
		<slot />
	</div>
	<Footer />
</main>

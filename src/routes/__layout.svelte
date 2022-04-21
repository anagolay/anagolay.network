<script lang="ts">
	import '../app.css';
	import NavBar from '$src/components/NavBar.svelte';
	import TopButton from '$src/components/TopButton.svelte';
	import Footer from '$src/components/Footer.svelte';
</script>

<main class="lg:container mx-auto bg-gradient-to-b from-anagolayBlack via-[#054F77] to-anagolayBlack ">
	<div class="flex flex-col text-anagolayWhite">
		<NavBar />
		<slot />
		<Footer />
		<TopButton />
	</div>
</main>

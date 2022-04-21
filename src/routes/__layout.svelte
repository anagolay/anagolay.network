<script lang="ts">
	import '../app.css';
	import NavBar from '$src/components/NavBar.svelte';
	import TopButton from '$src/components/TopButton.svelte';
	import Footer from '$src/components/Footer.svelte';
</script>

<div class="w-full bg-gradient-to-b from-anagolayBlack via-[#054F77] to-anagolayBlack">
	<NavBar />
	<main class="lg:container mx-auto">
		<div class="flex flex-col text-anagolayWhite">
			<slot />
			<Footer />
			<TopButton />
		</div>
	</main>
</div>

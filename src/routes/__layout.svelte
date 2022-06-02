<script lang="ts">
	import '$src/app.css';
	import NavBar from '$src/components/NavBar.svelte';
	// import TopButton from '$src/components/TopButton.svelte';
	import Footer from '$src/components/Footer.svelte';

	let scrollContainer: HTMLElement;
	// let scrollTop = 0;
	// snap-y snap-proximity snap-always
</script>

<div class="bg-anagolayBlack flex flex-col  h-screen">
	<main
		class="px-1/12 flex-grow-1 overflow-y-auto scroll-smooth flex flex-col text-anagolayWhite font-dmsans"
		bind:this={scrollContainer}
	>
		<NavBar />
		<slot />
		<Footer />
		<!-- <TopButton {scrollTop} {scrollContainer} showOnPx={200} /> -->
	</main>
</div>

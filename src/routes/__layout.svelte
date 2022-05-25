<script lang="ts">
	import '$src/app.css';
	import NavBar from '$src/components/NavBar.svelte';
	import TopButton from '$src/components/TopButton.svelte';
	import Footer from '$src/components/Footer.svelte';

	let scrollContainer: HTMLElement;
</script>

<div class="bg-anagolayBlack flex flex-col  h-screen">
	<NavBar />
	<main
		class="px-1/12 flex-grow-1 overflow-x-hidden overflow-y-auto scroll-smooth flex flex-col text-anagolayWhite font-dmsans snap-y snap-proximity snap-always"
		bind:this={scrollContainer}
	>
		<slot />
		<Footer />
		<TopButton {scrollContainer} />
	</main>
</div>

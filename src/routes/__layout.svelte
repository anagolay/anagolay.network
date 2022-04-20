<script lang="ts">
	import '../app.css';
	import NavBar from '../components/navBar/index.svelte';
	import TopButton from '../components/navBar/TopButton.svelte';
</script>

<main>
	<NavBar />
	<TopButton />
	<div>
		<slot />
	</div>
</main>

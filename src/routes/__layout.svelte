<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import NavBar from '../components/navBar/index.svelte';
	import TopButton from '../components/navBar/TopButton.svelte';
</script>

{#if $page.url.pathname !== '/'}
	<NavBar />
	<TopButton />
{/if}
<slot />

<script lang="ts">
	import { onMount } from 'svelte';
	//Then we'll see what is needed to be loaded.
	onMount(() => {
		new Promise((res, rej) => {
			setTimeout(res, 1500);
		}).then(() => window.location.assign('/home'));
	});
</script>

<main class="bg-[url('background_loading.png')] w-screen h-screen bg-cover flex justify-center items-center">
	<img class="mix-blend-lighten max-h-[30vh] max-w-[33vw]" src="logo_loading.gif" alt="Loading..." />
</main>

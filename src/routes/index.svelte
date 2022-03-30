<script lang="ts">
	import Button from '../components/Button.svelte';
</script>

<main class="flex flex-col flex-grow text-fontColor bg-gradient-to-t from-primary to-darkestPrimary">
	<div class="flex flex-col items-center w-full">
		<h1 class="text-3xl font-bold underline pt-5 bg-lightgreen">Welcome!</h1>
		<h3 class="text-2xl font-bold p-2 bg-lightgreen">To anagolay website</h3>
		<Button addClass="bg-secondary text-black px-3" text="Botón verde" />
	</div>
</main>

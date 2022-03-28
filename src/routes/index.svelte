<script lang="ts">
	import Button from '../components/Button.svelte';
</script>

<main class="flex justify-center">
	<div class="flex flex-col items-center w-full">
		<h1 class="text-3xl font-bold underline p-5 bg-lightgreen">Welcome!</h1>
		<h3 class="text-3xl font-bold underline p-5 bg-lightgreen">To anagolay website</h3>
		<Button text="Switch theme" extraClassNames={['bg-orange']} />
	</div>
</main>

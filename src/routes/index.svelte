<script lang="ts">
	import Button from '../components/Button.svelte';
</script>

<main class="flex justify-center">
	<div class="flex flex-col items-center w-full">
		<h1 class="text-3xl font-bold underline p-5 bg-lightgreen">Welcome!</h1>

		<!-- <button class="bg-orange"> </button>\ -->
		<Button text="Switch theme" extraClassNames={['bg-orange']} />
		<p class="text-xs w-2/4 text-center">Now you can switch theme using the upper right button</p>
	</div>
</main>

<!-- <style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style> -->

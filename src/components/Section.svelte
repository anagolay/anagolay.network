<script lang="ts">
	let extraClass = '';
	export { extraClass as class };
</script>

<section class="md:container snap-start {extraClass} px-3 w-80 max-w-full mx-auto md:w-full sm:w-3/4">
	<slot />
</section>

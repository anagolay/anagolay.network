<script lang="ts">
	let extraClass = '';
	export { extraClass as class };
	export let snap = 'snap-start';
</script>

<section class="{extraClass} {snap} px-3 max-w-full mx-auto sm:w-full">
	<slot />
</section>

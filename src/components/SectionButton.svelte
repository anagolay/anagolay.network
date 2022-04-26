<script lang="ts">
	let extraClasses = '';
	export { extraClasses as class };
</script>

<button
	class="{extraClasses} flex items-center justify-center min-w-fit px-12 shadow-button active:shadow:pressed rounded-full btn-primary py-2 md:py-6 text-white text-sm md:text-base"
>
	<slot />
</button>

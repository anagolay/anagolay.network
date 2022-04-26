<script lang="ts">
	let extraClasses = '';
	export { extraClasses as class };
</script>

<button
	class="{extraClasses} w-full sm:w-1/2 md:w-2/5 py-5 lg:w-1/4 flex items-center justify-center min-w-fit px-12 shadow-button active:shadow:pressed rounded-full bg-blue md:py-6 text-white text-sm md:text-base"
>
	<slot />
</button>

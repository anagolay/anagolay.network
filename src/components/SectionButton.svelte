<script lang="ts">
	let extraClasses = '';
	export { extraClasses as clases };
</script>

<button
	class="{extraClasses} shadow-button active:shadow:pressed rounded-full btn-primary w-[75vw] md:w-[25vw] py-3 my-6 text-white text-base md:text-lg"
>
	<slot />
</button>

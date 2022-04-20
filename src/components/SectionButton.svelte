<script lang="ts">
	export let clases = '';
</script>

<button
	class={`${clases} shadow-button active:shadow:pressed rounded-full btn-primary w-[75vw] md:w-[25vw] py-3 my-6 text-white text-[1rem] md:text-[1.125rem]`}
>
	<slot />
</button>

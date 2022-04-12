<script lang="ts">
	export let clases = '';
	export function onClick() {
		return;
	}
</script>

<button
	class={`${clases} btn btn-primary w-[75vw] md:w-[25vw] py-3 my-6 text-white text-[1rem] md:text-[1.125rem]`}
	on:click={onClick}
>
	<slot />
</button>

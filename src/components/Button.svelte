<script lang="ts">
	export let text: string;
	export let extraClassNames: string[];
</script>

<button
	class={` ${extraClassNames} px-6 my-2 p-2 w-2/4 mx-auto rounded-full flex items-center justify-center
				md:my-1 md:py-1 md:w-24 md:mx-5 `}
>
	{text}
</button>

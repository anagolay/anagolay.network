<script lang="ts">
	export let text: string;
	export let addClass: string;
	export let onClick: () => void = () => {};
</script>

<button
	class={`${addClass} flex items-center h-fit py-1 justify-center px-1 cbtn rounded-full`}
	on:click={onClick}
>
	{text}
</button>

<style>
	.cbtn {
		box-shadow: 0px 4px 4px rgba(20, 31, 69, 0.5), inset 0px 2px 4px rgba(244, 251, 255, 0.5);
	}
	.cbtn:active {
		box-shadow: 0px 4px 4px rgba(20, 31, 69, 0.5), inset 0px -3px 5px rgba(244, 251, 255, 0.2),
			inset 4px 5px 10px #141f45;
	}
</style>

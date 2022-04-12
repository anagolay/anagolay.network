<script lang="ts">
	export let to = '#start';
	import ChevronUp from 'svelte-material-icons/ChevronUp.svelte';
</script>

<a href={to}
	><button class={`flex justify-center items-center topButton fixed bottom-5 right-5 h-12 w-12 rounded-full`}>
		<ChevronUp color="var(--accent)" size="1.5rem" />
	</button></a
>

<style>
	.topButton {
		background: linear-gradient(162.57deg, rgba(9, 57, 84, 0.7) 6.02%, rgba(9, 57, 84, 0) 88.05%),
			rgba(255, 255, 255, 0.2);
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(14.9993px);
		z-index: 2;
	}
	.topButton:active {
		box-shadow: 0px 4px 4px rgba(20, 31, 69, 0.5), inset 0px -3px 5px rgba(244, 251, 255, 0.2),
			inset 4px 5px 10px #141f45;
	}
</style>

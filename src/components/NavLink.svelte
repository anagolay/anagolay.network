<script lang="ts">
	import { onMount } from 'svelte';

	export let option: { text: string; link: string; external: boolean };
	let extraClass = '';
	export { extraClass as class };

	let target: string = undefined;
	let rel: string = undefined;

	onMount(() => {
		if (option.external) {
			target = '_blank';
			rel = 'noopener noreferrer';
		}
	});
</script>

<a class="w-full p-2 text-anagolayWhite hover:text-green {extraClass}" href={option.link} {target} {rel}
	>{option.text}</a
>

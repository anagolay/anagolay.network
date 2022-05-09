<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let option: { text: string; url: string; external: boolean };
	export let onClick: () => void = undefined;

	let extraClass = '';
	export { extraClass as class };

	let target: string = undefined;
	let rel: string = undefined;
	let color = 'text-anagolayWhite';

	//this ensures option.external value when mounted.
	onMount(() => {
		if (option.external) {
			target = '_blank';
			rel = 'noopener noreferrer';
		}
	});

	//this function sets green color when link url is the current page
	$: color = option.url === $page.url.pathname ? 'text-green' : 'text-anagolayWhite';
</script>

<a
	sveltekit:prefetch
	class="w-full {color} min-w-fit p-2 hover:text-green {extraClass}"
	href={option.url}
	{target}
	{rel}
	on:click={onClick}
>
	{option.text}
</a>

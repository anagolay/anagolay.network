<script lang="ts">
	import { page } from '$app/stores';
	import type { link } from '$src/types';

	export let option: link;
	export let onClick: () => void = undefined;

	let extraClass = '';
	export { extraClass as class };

	let target = option.external ? '_blank' : undefined;
	let rel = option.external ? 'noopener noreferrer' : undefined;
	let color = 'text-anagolayWhite';

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

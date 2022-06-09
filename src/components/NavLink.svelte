<script lang="ts">
	import { page } from '$app/stores';
	import type { LinkData } from '$src/types';

	export let option: LinkData;
	export let onClick: () => void = undefined;

	let extraClass = '';
	export { extraClass as class };

	let target = option.external ? '_blank' : undefined;
	let rel = option.external ? 'noopener noreferrer' : undefined;
	let color = 'text-blue-50';

	$: color = option.url === $page.url.pathname ? 'text-green-400' : 'text-blue-50';
</script>

<a
	class="w-full {color} min-w-fit hover:text-green-400 {extraClass}"
	href={option.url}
	{target}
	{rel}
	on:click={onClick}
>
	<p class="p-2">
		{option.text}
	</p>
</a>

<script lang="ts">
	import { page } from '$app/stores';
	import type { LinkData } from '$src/types';

	export let option: LinkData;
	export let onClick: () => void = undefined;

	let extraClass = '';
	export { extraClass as class };

	let target = option.external ? '_blank' : undefined;
	let rel = option.external ? 'noopener noreferrer' : undefined;
	let color = 'text-spaceBlue-50';

	$: color = option.url === $page.url.pathname ? 'text-neonGreen-400' : 'text-spaceBlue-50';
</script>

<a
	class="w-full {color} min-w-fit p-2 hover:text-neonGreen-400 {extraClass}"
	href={option.url}
	{target}
	{rel}
	on:click={onClick}
>
	{option.text}
</a>

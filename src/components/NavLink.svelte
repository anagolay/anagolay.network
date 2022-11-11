<script lang="ts">
	import { page } from '$app/stores';
	import type { LinkData } from '$src/types';

	export let option: LinkData;
	export let onClick: () => void = undefined;

	let extraClass = '';
	export { extraClass as class };

	let anchor: HTMLAnchorElement;

	let color = 'text-spaceBlue-50';

	function handleClick() {
		const currentUrl = $page.url.href.split('#')[0];
		const destinationUrl = anchor.href.split('#')[0];
		const locator = anchor.href.split('#')[1];

		if (destinationUrl === currentUrl) {
			const target = document.getElementById(locator);
			window.scrollTo({ top: target ? target.offsetTop : 0, behavior: 'smooth' });
		} else if (destinationUrl.includes(window.location.origin)) {
			window.open(anchor.href, '_self');
		} else {
			window.open(anchor.href, '_blank', 'noopener').focus();
		}
		onClick();
	}

	$: color = option.url === $page.url.pathname ? 'text-neonGreen-400' : 'text-spaceBlue-50';
</script>

<a
	class="w-full {color} min-w-fit hover:text-neonGreen-400 {extraClass}"
	sveltekit:prefetch
	href={option.url}
	on:click|preventDefault={handleClick}
	bind:this={anchor}
>
	<p class="p-2">
		{option.text}
	</p>
</a>

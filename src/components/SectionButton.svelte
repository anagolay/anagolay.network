<script lang="ts">
	let extraClasses = '';
	export { extraClasses as class };
	export let url: string;
	export let tab = '_blank';

	let anchor: HTMLAnchorElement;

	function handleClick() {
		const target = document.getElementById(anchor.href.split('#')[1]);
		if (target) {
			window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
		} else if (tab === '_blank') {
			window.open(anchor.href, '_blank', 'noopener').focus();
		} else {
			window.open(anchor.href, '_self');
		}
	}
</script>

<a
	href={url}
	class="{extraClasses} w-3/4 sm:w-1/2 md:w-1/4 py-5 flex items-center justify-center min-w-fit px-12 shadow-button active:shadow-pressed rounded-full bg-gradient-to-r from-spaceBlue-700 to to-spaceBlue-400 hover:from-spaceBlue-700 hover:to-spaceBlue-600 md:py-6 text-white text-sm md:text-base"
	bind:this={anchor}
	on:click|preventDefault={handleClick}
>
	<slot />
</a>

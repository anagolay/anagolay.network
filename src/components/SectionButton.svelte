<script lang="ts">
	let extraClasses = '';
	export { extraClasses as class };
	export let url: string;

	let anchor: HTMLAnchorElement;

	function handleClick() {
		let target: HTMLElement;
		switch (url[0]) {
			case '#':
				target = document.getElementById(url.split('#')[1]);
				window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
				break;
			case '/':
				window.open(url, '_self');
				break;
			case 'h':
				window.open(url, '_blank', 'noopener').focus();
				break;
			default:
				return;
		}
	}
</script>

<a
	href={url}
	class="{extraClasses} w-3/4 sm:w-1/2 md:w-1/4 py-5 flex items-center justify-center min-w-fit px-12 shadow-button active:shadow-pressed rounded-xl bg-gradient-to-r from-neonGreen-400 to-aquaTeal-300 hover:from-neonGreen-500 hover:to-aquaTeal-400 md:py-6 text-spaceBlue-900 text-sm md:text-base"
	bind:this={anchor}
	on:click|preventDefault={handleClick}
>
	<slot />
</a>

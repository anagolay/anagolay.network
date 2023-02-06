<script lang="ts">
	let extraClasses = '';
	export let sizeClasses = 'w-60 sm:w-80 py-5 md:py-6 text-sm md:text-base';
	export { extraClasses as class };
	export let url: string;

	let bgClass = 'bg-gradient-to-r from-neonGreen-400 to-aquaTeal-300';
	let backgroundClass = bgClass;

	function onMouseOver() {
		backgroundClass = 'bg-spaceBlue-50';
	}
	function onMouseLeave() {
		backgroundClass = bgClass;
	}

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
	class="{extraClasses} {sizeClasses} {backgroundClass} flex active:scale-95 items-center justify-center  font-bold rounded-xl text-spaceBlue-900 "
	on:mouseover={onMouseOver}
	on:mouseleave={onMouseLeave}
	on:focus
	on:click|preventDefault={handleClick}
>
	<slot />
</a>

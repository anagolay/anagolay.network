<script>
	import IconContainer from './IconContainer.svelte';

	let extraClass = '';
	export let url = '';
	export { extraClass as class };

	function handleClick() {
		let target;
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

<a href={url} on:click|preventDefault={handleClick} class="active:scale-95">
	<IconContainer class={extraClass}>
		<slot />
	</IconContainer>
</a>

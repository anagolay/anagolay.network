<script>
	export let url = '';
	let extraClass = '';
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

<a class="active:scale-95 {extraClass}" href={url} on:click|preventDefault={handleClick}>
	<slot />
</a>

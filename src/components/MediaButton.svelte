<script>
	export let title = ''; //icons[i].domain
	export let url = ''; //link
	export let src = ''; //icons[i].src
	let extraClass = '';
	export { extraClass as class };
</script>

<a
	{title}
	href={url}
	target="_blank"
	rel="noreferrer"
	class="{extraClass} flex justify-center items-center shadow-button active:shadow-pressed mx-3 bg-blue-800 hover:bg-blue-700/70 active:bg-blue-800/50 rounded-full"
>
	<img class="h-3 sm:h-5" {src} alt={title} />
</a>

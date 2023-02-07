<script>
	let extraClass = '';
	export { extraClass as class };
</script>

<div
	class="{extraClass} text-lg md:text-2xl py-8 md:py-16 text-center md:mt-16 px-4 shadow-phrase shadow-aquaTeal-300/20 rounded-cardLg font-firaMono"
>
	<slot />
</div>

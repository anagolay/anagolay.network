<script>
	let extraClass = '';
	export { extraClass as class };
</script>

<div
	class="{extraClass} flex items-center justify-center bg-gradient-to-b from-aquaTeal-300 to-neonGreen-400 p-[1px]"
>
	<div class="{extraClass}  flex items-center justify-center max-h-full max-w-full bg-spaceBlue-900">
		<slot />
	</div>
</div>

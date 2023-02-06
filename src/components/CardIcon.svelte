<script>
	let extraClass;
	export { extraClass as class };
</script>

<div
	class="{extraClass} flex items-center justify-center -translate-y-6 bg-spaceBlue-50 text-spaceBlue-900 rounded-[100%] cursor-default hover:bg-gradient-to-r hover:from-aquaTeal-300 hover:to-neonGreen-400 "
>
	<slot />
</div>

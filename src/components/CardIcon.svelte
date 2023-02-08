<script>
	let extraClass;
	export { extraClass as class };
</script>

<div
	class="{extraClass} flex items-center justify-center bg-gradient-to-b from-neonGreen-400 to-aquaTeal-300 p-[1px] text-neonGreen-400 rounded-[100%] cursor-default"
>
	<div class="bg-spaceBlue-900 rounded-full w-full h-full">
		<div class="bg-spaceBlue-50/10 rounded-full w-full h-full flex justify-center items-center">
			<slot />
		</div>
	</div>
</div>

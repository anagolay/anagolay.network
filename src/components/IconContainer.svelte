<script>
	let extraClass = '';
	export { extraClass as class };

	let borderClass = 'bg-gradient-to-b from-aquaTeal-300 to-neonGreen-400';
	let bgClass = borderClass;
	let content = null;
	let icons = null;

	function onHover() {
		bgClass = 'bg-transparent';
		icons = [...content.getElementsByTagName('img')];
		icons.length && icons.map((icon) => icon.classList.add('bgColorIcon'));
	}
	function onMouseLeave() {
		bgClass = borderClass;
		icons = [...content.getElementsByTagName('img')];
		icons.length && icons.map((icon) => icon.classList.remove('bgColorIcon'));
	}
</script>

<div class="{extraClass} flex items-center justify-center p-[1px] {bgClass}">
	<div
		class="{extraClass}  text-neonGreen-400 flex items-center justify-center max-h-full max-w-full bg-spaceBlue-900 hover:bg-spaceBlue-50 hover:text-spaceBlue-900 hover:font-bold"
		bind:this={content}
		on:mouseover={onHover}
		on:mouseleave={onMouseLeave}
		on:focus
	>
		<slot />
	</div>
</div>

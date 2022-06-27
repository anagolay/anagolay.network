<script lang="ts">
	let extraClass = '';
	export { extraClass as class };
	export let open = false;

	let iconClass = 'w-full h-0.5';
	let delay1 = '';
	let delay2 = '';

	$: if (open) {
		delay1 = 'delay-100';
		delay2 = 'delay-200';
		if (!iconClass.includes('transition')) iconClass += ' transition-all duration-300';
	}
</script>

<div class="{extraClass} hamburger-icon h-4 w-6">
	<div
		class="icon-1 {iconClass} {delay1}"
		class:rotate-45={open}
		class:translate-y-2={open}
		class:bg-spaceBlue-50={!open}
		class:bg-neonGreen-400={open}
	/>
	<div class="icon-2 my-[6px] bg-spaceBlue-50 {iconClass}" class:opacity-0={open} id="b" />
	<div
		class="icon-3 {iconClass} {delay2}"
		class:-rotate-45={open}
		class:-translate-y-2={open}
		class:bg-spaceBlue-50={!open}
		class:bg-neonGreen-400={open}
	/>
</div>

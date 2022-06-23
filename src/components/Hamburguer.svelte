<script lang="ts">
	let extraClass = '';
	export { extraClass as class };
	export let closed = true;

	const iconClass = 'w-ful h-0.5 transition-all duration-300';

	let condClass1 = 'bg-spaceBlue-50 -translate-y-[6px]';
	let condClass3 = 'bg-spaceBlue-50 translate-y-[6px]';

	$: condClass1 = closed
		? 'bg-spaceBlue-50 -translate-y-[6px]'
		: 'rotate-45 bg-neonGreen-400 translate-y-[2px]';
	$: condClass3 = closed
		? 'bg-spaceBlue-50 translate-y-[6px]'
		: '-rotate-45 bg-neonGreen-400 -translate-y-[2px]';
</script>

<div class="{extraClass} hamburger-icon h-4 pt-2 pb-3 w-6 transition-all duration-200">
	<div class="icon-1 {iconClass} delay-100 {condClass1}" />
	<div class="icon-2 bg-spaceBlue-50 {iconClass}" class:opacity-0={!closed} id="b" />
	<div class="icon-3 {iconClass} delay-[250ms] {condClass3}" />
	<div class="clear" />
</div>

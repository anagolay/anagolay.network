<script lang="ts">
	export let extraclass = '';
	export let diam = '2';
	export let left = '0';
	export let top = '0';
	export let op = '1';
	export let blur = '5';
</script>

<div
	class={`ellipse rounded-full bg-gradient-to-t from-blue to-green ${extraclass}`}
	style={`height: ${diam}; width: ${diam}; top: ${top}%; left: ${left}%; opacity: ${op} ${
		blur ? `; filter: blur(${blur}px)` : ''
	}`}
/>

<style>
	.ellipse {
		background: radial-gradient(60.62% 60.62% at 42.38% 19.2%, #8cff00 0%, #054f77 100%),
			linear-gradient(180deg, #054f77 0%, #8cff00 176.38%);
		transform: rotate(-24.5deg);
	}
</style>

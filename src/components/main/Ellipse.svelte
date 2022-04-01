<script lang="ts">
	export let diam = '2';
	export let left = '20';
	export let top = '10';
	export let op = '1';
	export let blur = false;
</script>

<div
	class={`ellipse absolute rounded-full bg-gradient-to-t from-blue to-green`}
	style={`height: ${diam}rem; width: ${diam}rem; left: ${left}%; top: ${top}%; opacity: ${op} ${
		blur ? `; filter: blur(${Number(diam) * 0.1}rem)` : ''
	}`}
/>

<style>
	.ellipse {
		background: radial-gradient(60.62% 60.62% at 42.38% 19.2%, #8cff00 0%, #054f77 100%),
			linear-gradient(180deg, #054f77 0%, #8cff00 176.38%);
		transform: rotate(-24.5deg);
	}
</style>

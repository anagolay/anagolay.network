<script lang="ts">
	let extraclass = '';
	export { extraclass as class };
</script>

<div class="ellipse rounded-full -rotate-[25deg] radial {extraclass} aspect-square" />

<style>
	.ellipse {
		background: radial-gradient(60.62% 60.62% at 42.38% 19.2%, #8cff00, #054f77);
	}
</style>

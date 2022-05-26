<script lang="ts">
	export let position: string = undefined;
	let top = position === 'top' ? 'from-transparent' : 'from-anagolayBlack';
	let bottom = position === 'bottom' ? 'to-transparent' : 'to-anagolayBlack';
</script>

<div class="bg-stars bg-repeat bg-[length:200px_200px] -mx-[100%]">
	<div class="bg-gradient-to-b {top} via-transparent {bottom}">
		<div class="w-1/3 mx-auto">
			<slot />
		</div>
	</div>
</div>

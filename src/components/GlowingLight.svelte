<script lang="ts">
	let extraClass = '';
	export { extraClass as class };
</script>

<div class="w-full flex ">
	<div class="w-full -mr-[50%]">
		<div class="w-5/6 mx-auto">
			<div
				class="rounded-[50%] w-full bg-light {extraClass} to-transparent rounded-[100%] animate-glow pt-[100%] h-auto -mr-[50%]"
			/>
		</div>
	</div>
	<div class="w-full -ml-[50%] flex items-center justify-center">
		<slot />
	</div>
</div>

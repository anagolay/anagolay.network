<script lang="ts">
	export let boxItem: string;
</script>

<div
	class="shadow-cardTop shadow-aquaTeal-300 rounded-2xl bg-gradient-to-b from-spaceBlue-50/10 to-transparent my-6 md:my-4"
>
	<div
		class="flex flex-col items-center bg-gradient-to-t from-spaceBlue-800/10 to-transparent p-2 md:p-4 rounded-2xl"
	>
		<div class="w-8 h-[2px] bg-neonGreen-400 my-4" />
		<p class="w-3/4 text-center text-sm md:text-base 2xl:text-lg">{boxItem}</p>
	</div>
</div>

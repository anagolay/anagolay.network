<script>
	import BaseCard from './BaseCard.svelte';
</script>

<BaseCard class="flex flex-col w-80 max-w-full md:w-[45%] lg:w-[30%] px-6 py-10 text-center">
	<div class="text-neonGreen-400 font-bold mb-8">
		<slot name="title" />
	</div>
	<slot name="content" />
</BaseCard>

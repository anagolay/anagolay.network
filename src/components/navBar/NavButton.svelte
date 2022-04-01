<script lang="ts">
	export let url: string;
	export let caption: string;
	export let onClick: () => void = undefined;
	import { page } from '$app/stores';
</script>

<a class="flex items-center h-100 py-auto w-full" href={url} on:click={onClick}>
	<div
		class={`p-2 w-full min-w-fit hover:bg-black border-b border-solid border-green ${
			$page.url.pathname === url ? 'text-green' : ''
		} md:navButton md:btn md:ml-2 md:btn-secondary md:text-white md:w-24 font-montserrat md:text-xs md:py-1.5 md:px-8 `}
	>
		{caption}
	</div>
</a>

<style>
</style>

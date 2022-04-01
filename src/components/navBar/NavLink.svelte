<script lang="ts">
	export let url: string;
	export let caption: string;
	export let onClick: () => void = undefined;
	import { page } from '$app/stores';
</script>

<a
	href={url}
	class={`p-2 min-w-fit hover:bg-black border-b border-solid border-green ${
		$page.url.pathname === url ? 'text-green' : ''
	} md:hover:underline md:border-0 md:my-auto md:hover:bg-transparent`}
	on:click={onClick}
>
	{caption}
</a>

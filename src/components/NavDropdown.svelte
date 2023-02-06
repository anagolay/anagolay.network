<script lang="ts">
	import { page } from '$app/stores';
	import NavLink from './NavLink.svelte';
	import type { MenuOption } from '$src/types';

	export let data: MenuOption;
	export let accordionHeightClass = '';
	export let onSelect: () => void = undefined;
	const id = 'dropdown-' + data.title.toLowerCase();

	let show = false;
	let height = 'h-6';
	let visible = 'hidden';
	let menuContent: HTMLUListElement;

	$: color = data.options
		.map((option) => option.url.replaceAll('/', ''))
		.includes($page.route.id.replaceAll('/', ''))
		? 'text-neonGreen-400'
		: 'text-spaceBlue-50';

	$: height = show ? accordionHeightClass : 'h-6';
</script>

<div class="hidden md:flex justify-center">
	<div class="dropdown relative">
		<button
			{id}
			class="relative flex items-center whitespace-nowrap {color} px-2 py-2 rounded-sm hover:text-neonGreen-400"
		>
			{data.title}
			<span class="material-icons">keyboard_arrow_down</span>
		</button>
		<ul
			class="absolute px-2 dropdown-content min-w-[10rem] lg:min-w-[13rem] {visible} bg-darkSpaceBlue border border-spaceBlue-700 rounded-lg text-base z-50 py-2 list-none text-left shadow-lg pt-1 m-0 bg-clip-padding"
			bind:this={menuContent}
		>
			{#each data.options as option}
				<li class="hover:bg-blue-800/50 p-2 rounded-sm">
					<NavLink class="whitespace-nowrap active:bg-transparent" {option} />
				</li>
			{/each}
		</ul>
	</div>
</div>

<div
	class="flex px-4 flex-col md:hidden my-4 transition-all duration-500 rounded-lg overflow-hidden {height}"
>
	<button class="flex justify-center {color}" on:click={() => (show = !show)}>
		<p class="mb-2">{data.title}</p>
		{#if show}
			<span class="material-icons"> expand_less </span>
		{:else}
			<span class="material-icons"> expand_more </span>
		{/if}
	</button>
	<div class="bg-darkSpaceBlue">
		{#each data.options as link}
			<NavLink class="py-1" option={link} onClick={onSelect} />
		{/each}
	</div>
</div>

<style>
	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>

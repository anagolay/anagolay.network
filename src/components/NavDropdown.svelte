<script lang="ts">
	import { page } from '$app/stores';
	import NavLink from './NavLink.svelte';
	import type { MenuOption } from '$src/types';

	let show = false;
	let height = 'h-6';

	export let data: MenuOption;
	export let id = data.title.toLowerCase();
	export let accordionHeightClass = '';
	export let onSelect: () => void = undefined;
	$: color = data.options.map((option) => option.url.replaceAll('/', '')).includes($page.routeId)
		? 'text-neonGreen-400'
		: 'text-spaceBlue-50';

	$: height = show ? accordionHeightClass : 'h-6';
</script>

<div class="hidden md:flex justify-center">
	<div>
		<div class="dropdown relative">
			<button
				class="dropdown-toggle flex whitespace-nowrap {color} px-2 py-2 rounded-sm md:w-fit hover:text-neonGreen-400"
				type="button"
				id="dropdownMenuButton2"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{data.title}
				<span class="material-icons hidden md:block">keyboard_arrow_down</span>
			</button>
			<ul
				{id}
				class="dropdown-menu  bg-spaceBlue-900 text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
				aria-labelledby="dropdownMenuButton2"
			>
				{#each data.options as option}
					<li class="w-32 hover:bg-blue-800/50 m-1 rounded-sm">
						<NavLink class="dropdown-item active:bg-transparent" {option} />
					</li>
				{/each}
			</ul>
		</div>
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
	<div class="bg-spaceBlue-900">
		{#each data.options as link}
			<NavLink class="py-1" option={link} onClick={onSelect} />
		{/each}
	</div>
</div>

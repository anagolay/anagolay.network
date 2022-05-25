<script lang="ts">
	import NavLink from './NavLink.svelte';
	import type { MenuOption } from '$src/types';

	let extraclass = '';
	export { extraclass as class };
	export let data: MenuOption;
	export let id = '';
	export let linkClass = '';
</script>

<div class="dropdown {extraclass}">
	<label tabindex="0" for={id} class="flex font-extrabold {linkClass}">
		{data.title}
		<span class="material-icons hidden md:block">keyboard_arrow_down</span>
	</label>
	<ul {id} tabindex="0" class="dropdown-content menu mt-1 p-0 shadow bg-anagolayBlack rounded-box w-36">
		{#each data.options as option}
			<li class="rounded-none">
				<NavLink {option} />
			</li>
		{/each}
	</ul>
</div>

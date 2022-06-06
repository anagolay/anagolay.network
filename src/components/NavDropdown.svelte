<script lang="ts">
	import NavLink from './NavLink.svelte';
	import type { MenuOption } from '$src/types';

	let extraclass = '';
	export { extraclass as class };
	export let data: MenuOption;
	export let id = '';
	export let linkClass = '';
</script>

<div class="flex justify-center {extraclass}">
	<div>
		<div class="dropdown relative">
			<button
				class="dropdown-toggle flex font-extrabold {linkClass}"
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

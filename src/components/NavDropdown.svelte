<script lang="ts">
	// import { onMount } from 'svelte';
	export let id = '';
	export let data = { title: '', options: [{ text: '', link: '', external: false }] };
	export let linkClass = '';
</script>

<div class="dropdown">
	<label tabindex="0" for={id} class="flex {linkClass}">
		{data.title}
		<span class="material-icons hidden md:block">keyboard_arrow_down</span>
	</label>
	<ul {id} tabindex="0" class="dropdown-content menu mt-3 p-0 shadow bg-anagolayBlack rounded-box w-52">
		{#each data.options as option}
			<li class="rounded-none">
				<a class="w-full p-2 text-anagolayWhite hover:text-green" href={option.link}>{option.text}</a>
			</li>
		{/each}
	</ul>
</div>

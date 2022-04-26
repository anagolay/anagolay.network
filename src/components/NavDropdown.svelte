<script lang="ts">
	// import { onMount } from 'svelte';

	let show = '';
	export let id = '';
	export let data = { title: '', options: [{ text: '', link: '', external: false }] };

	function showMenu(e: Event) {
		e.preventDefault();
		show = show ? '' : 'show';
	}

	//type of event?

	// onMount(
	// 	() =>
	// 		(window.onclick = function (event): void {
	// 			event.preventDefault();
	// 			console.log(event.target);
	// 			if (event.target.id !== id) {
	// 				let dropdowns = document.getElementsByClassName('dropdown-content');
	// 				let i: number;
	// 				for (i = 0; i < dropdowns.length; i++) {
	// 					var openDropdown = dropdowns[i];
	// 					if (openDropdown.classList.contains('show')) {
	// 						openDropdown.classList.remove('show');
	// 					}
	// 				}
	// 			}
	// 		})
	// );
</script>

<div class="dropdown w-full md:my-auto md:w-fit md:mr-6">
	<button
		on:click={showMenu}
		class="dropbtn w-full flex justify-center font-bold items-center bg-darkblue text-center h-8 md:w-fit shadow-button md:shadow-none md:bg-transparent md:dropbtn"
	>
		<p>{data.title}</p>
		<span class="material-icons hidden md:block">keyboard_arrow_down</span>
	</button>
	<div
		{id}
		class="dropdown-content {show} w-full md:w-[unset] md:mb-0 md:mt-4 flex flex-col bg-anagolayBlack mx-auto p-0 md:p-1"
	>
		{#each data.options as option}
			<a
				class="w-full border-t border-dotted border-green md:border-none md:w-32 py-2 hover:bg-blue"
				href={option.link}
				target={option.external ? '_blank' : undefined}
				rel={option.external ? 'noopener noreferrer' : undefined}
			>
				<p class="mx-2">{option.text}</p>
			</a>
		{/each}
	</div>
</div>

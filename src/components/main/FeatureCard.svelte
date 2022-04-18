<script lang="ts">
	export let feature: string;
	export let icon: string;
	export let windowHeight: number;
	export let i: number;
	// import { fly } from 'svelte/transition';
	// import {quintOut} from 'svelte/easing';
	import { onMount } from 'svelte';

	let element: HTMLDivElement;

	let elementTop: number;

	onMount(() => {
		elementTop = element.getBoundingClientRect().top;
		console.log('elementTop', elementTop, 'windowHeight', windowHeight);
	});
</script>

<!-- <div
	class={`col `}
	transition:fly={{ delay: (i % 3) * 150, duration: 600, easing: quintOut }}
	bind:this={element}
> -->
<div
	class={`col fade-in ${elementTop < windowHeight ? 'is-visible' : ''} `}
	bind:this={element}
	style={`transition-delay: ${(i % 3) * 150}ms`}
>
	<div class="box flex flex-col items-center rounded-lg bg-blue h-[11rem] max-w-[21rem] px-[2rem] mt-[2rem]">
		<div class="bg-gray p-[1rem] w-fit mx-center text-green border border-green rounded-full -mt-[2rem]">
			{#if icon}
				<span class="material-icons text-[3rem]">{icon}</span>
			{/if}
		</div>
		<p class="my-auto">{feature}</p>
	</div>
</div>

<style>
	.bg-gray {
		background: linear-gradient(166.26deg, rgba(9, 57, 84, 0.9) 14.88%, rgba(9, 57, 84, 0) 91%),
			rgba(255, 255, 255, 0.2);
		border: 1px solid #8cff00;
		backdrop-filter: blur(9px);
	}

	.fade-in {
		opacity: 0;
		transform: translateY(100%);
		visibility: hidden;
		transition: opacity 0.6s ease-out, transform 1.2s ease-out;
		will-change: opacity, visibility;
	}
	.fade-in.is-visible {
		opacity: 1;
		transform: none;
		visibility: visible;
	}
</style>

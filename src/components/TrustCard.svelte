<script lang="ts">
	import type { TrustItem } from '$src/types';
	export let trustItem: TrustItem;

	function onClick() {
		console.log(trustItem.anchor.split('#')[1]);
		const target = document.getElementById(trustItem.anchor.split('#')[1]);
		console.log('target', target, target.offsetTop);
		window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
	}
</script>

<a
	class="scale-50 md:scale-75 lg:scale-100 -mx-[20%] -mt-20 mb-4 md:-mx-[10%] lg:m-0 flex flex-col basis-3/4 md:basis-1/4 lg:basis-1/5 rounded-3xl bg-gradient-to-b from-spaceBlue-50/5 to-transparent border border-spaceBlue-800"
	href={trustItem.anchor}
	on:click|preventDefault={onClick}
>
	<div class="flex flex-col items-center h-full bg-upperLightIcon from-neonGreen-400/50 to-transparent">
		<div class="flex justify-center">
			<div
				class="w-20 h-20 flex items-center justify-center -translate-y-6 bg-spaceBlue-900 bg-gradient-to-br from-spaceBlue-800/90 to-spaceBlue-50/20 border border-neonGreen-400 rounded-[100%]"
			>
				{#if trustItem.icon}
					<span class="material-icons text-3xl text-neonGreen-400">{trustItem.icon}</span>
				{:else if trustItem.img}
					<img
						loading="lazy"
						class="material-icons"
						width="36"
						height="36"
						src={trustItem.img.src}
						alt={trustItem.img.alt}
					/>
				{/if}
			</div>
		</div>
		<div class="flex flex-col flex-grow items-center justify-between w-4/5 pb-6 text-center text-2xl">
			<p>{trustItem.text}</p>
			<b><span class="material-icons text-neonGreen-400 mt-auto font-bold">south</span></b>
		</div>
	</div>
</a>

<script lang="ts">
	import Section from '$src/components/Section.svelte';

	import SectionButton from '$src/components/SectionButton.svelte';
	import StarrySky from '$src/components/StarrySky.svelte';

	let data = 'animation_first.svg';
	let containerClass = 'md:-mx-[10%] md:-my-10';
	let radialClass =
		'rounded-[100%] bg-anagolayBlack bg-light from-teal-300/50 to-transparent h-28 md:h-64 -mt-20 md:-mt-48 -mx-[10%] md:-mx-[30%]';

	function changeAnimation(): void {
		console.log('clicked!');
		if (data === 'animation_first.svg') {
			data = 'animation_second.svg';
			containerClass = 'md:-mx-[20%] md:-my-20';
			radialClass =
				'rounded-[100%] bg-anagolayBlack bg-light from-teal-300/50 to-transparent h-28 md:h-64 -mt-20 md:-mt-48 -mx-[10%] md:-mx-[50%]';
		} else {
			data = 'animation_first.svg';
			containerClass = 'md:-mx-[10%] md:-my-10';
			radialClass =
				'rounded-[100%] bg-anagolayBlack bg-light from-teal-300/50 to-transparent h-28 md:h-64 -mt-20 md:-mt-48 -mx-[10%] md:-mx-[30%]';
		}
	}
</script>

<Section class="overflow-x-hidden">
	<StarrySky position="top">
		<button
			class="flex items-center absolute border-button p-2 rounded-full bg-light from-darkblue/50 to-transparent left-0 right-0 w-fit mx-auto active:shadow-pressed text-transparent hover:text-anagolayWhite hover:bg-darkblue"
			on:click={changeAnimation}
		>
			SVG
			<span class="ml-2 material-icons">published_with_changes</span>
		</button>

		<div class="md:container pt-8 md:pt-20 3xl:pt-40 flex flex-col items-center md:flex-row pb-10 md:pb-20">
			<div class="w-[20rem] max-w-full md:w-3/5">
				<div class="relative lg:w-4/5">
					<h1 class="md:mb-0 text-center font-extrabold text-3xl md:text-5xl 3xl:text-6xl md:text-left">
						<p class="md:leading-[4rem]">Process-based Interplanetary P2P Framework</p>
					</h1>
					<h2
						class="w-full text-center md:text-left my-6 md:mb-20 text-base md:text-lg lg:text-xl 3xl:text-2xl md:my-12"
					>
						Transparent verifiable processes for creation & validation of proofs and stating of rights. Built
						with Substrate.
					</h2>
					<SectionButton
						url="https://discordapp.com/invite/WHe4EuY"
						class="mx-auto mt-6 md:mt-12 md:mx-0 flex justify-center w-fit"
					>
						<span class="material-icons mr-2">discord</span>
						<p>Join the community</p>
					</SectionButton>
				</div>
			</div>
			<div class="w-80  max-w-full max-h-full mx-auto md:mx-0 md:w-2/5 2xl:w-1/3 h-fit z-50">
				<div class={containerClass}>
					<object class="object-contain" title="main animation" type="image/svg+xml" {data} />
				</div>
				<div class={radialClass} />
			</div>
		</div>
	</StarrySky>
</Section>
<div class="text-lg font-bold md:text-4xl mb-20 md:mb-40 text-center pt-10 md:pt-20">
	<p class="text-green line-through">
		<span class="text-anagolayWhite">Central authority <br />Resource heavy consensus mechanism</span>
	</p>
	<p>Trust the process</p>
</div>

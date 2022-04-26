<script lang="ts">
	import Ellipse from '$src/components/Ellipse.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<div>
	<div class="mt-20 flex flex-col-reverse md:flex-row md:mt-20">
		<div class="w-[20rem] mx-auto max-w-full relative md:w-3/5 md:max-w-[600px]">
			<div class="py-20 md:py-36">
				<h1 class="mb-4 md:mb-0 tracking-wider text-center font-bold text-3xl md:text-5xl  md:text-left">
					<p class="md:leading-[4rem]">Process-based Interplanetary P2P Framework</p>
				</h1>
				<h2
					class="w-full text-center text-green mt-12 mb-20 md:font-bold text-base md:text-2xl md:text-justify mx-auto md:my-12"
				>
					Transparent verifiable processes for creation & validation of proofs and statement of rights. Built
					with Substrate.
				</h2>
				<SectionButton class="mx-auto my-6 md:my-12 md:mx-0 flex justify-center w-fit">
					<span class="material-icons mr-2">discord</span>
					<p>Join the community</p>
				</SectionButton>
				<Ellipse class="mt-2 ml-[76%] opacity-50 blur-sm h-[4.5vw]" />
				<Ellipse class="mt-12 ml-[20%] opacity-50 blur-sm h-[1.5vw] border" />
			</div>
		</div>
		<!-- <div class="-mx-20 -mb-12 flex flex-grow justify-right md:-ml-52 md:-mr-40 md:-mt-28 2xl:-mx-20"> -->
		<div class="hidden md:flex flex-grow justify-right md:-ml-52 md:-mr-40 md:-mt-28 2xl:-mx-20">
			<img
				class="-mt-0 h-[400px] w-full md: object-contain md:h-fit"
				src="main_illustration.webp"
				alt="light ilustration"
			/>
		</div>
	</div>
</div>

<script lang="ts">
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<div>
	<div class="mt-36 flex flex-col-reverse md:flex-row mb-40">
		<div class="w-[20rem] mx-auto max-w-full relative md:w-3/5">
			<div class="relative xl:w-5/6 mx-auto">
				<h1 class="mb-4 md:mb-0 tracking-wider text-center font-extrabold text-3xl md:text-5xl  md:text-left">
					<p class="md:leading-[4rem]">Process-based Interplanetary P2P Framework</p>
				</h1>
				<h2
					class="w-full text-center text-green mt-12 mb-20 text-base md:text-lg lg:text-2xl md:text-justify mx-auto md:my-12"
				>
					Transparent verifiable processes for creation & validation of proofs and statement of rights. Built
					with Substrate.
				</h2>
				<SectionButton class="mx-auto mt-6 md:mt-12 md:mx-0 flex justify-center w-fit">
					<span class="material-icons mr-2">discord</span>
					<p>Join the community</p>
				</SectionButton>
			</div>
		</div>
		<!-- <div class="-mx-20 -mb-12 flex flex-grow justify-right md:-ml-52 md:-mr-40 md:-mt-28 2xl:-mx-20"> -->
		<div class="hidden md:block w-2/5 h-fit">
			<div class="-mx-40 2xl:-mx-32 -mt-32 xl:-mt-32 -translate-x-20 -mb-20">
				<img class="w-full object-cover" src="main_illustration.svg" alt="light ilustration" />
			</div>
		</div>
	</div>
</div>

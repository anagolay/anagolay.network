<script lang="ts">
	import Ellipse from '$src/components/Ellipse.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<div>
	<div class="flex flex-col-reverse md:flex-row md:mt-20">
		<div class="w-[20rem] mx-auto relative md:w-3/5">
			<div class="md:py-36">
				<h1 class="mb-4 md:mb-0 tracking-wider text-center font-bold text-xl md:text-5xl  md:text-left">
					<p class="md:leading-[4rem]">Process-based Interplanetary P2P Framework</p>
				</h1>
				<h4
					class="w-full text-center text-green my-4 font-bold text-base md:text-2xl md:text-justify mx-auto md:my-12"
				>
					Transparent verifiable processes for creation & validation of proofs and statement of rights. Built
					with Substrate.
				</h4>
				<SectionButton class="mx-auto my-12 md:mx-0 flex justify-center w-3/4">
					<span class="material-icons mr-2">discord</span>
					<p>Join the community</p>
				</SectionButton>
				<Ellipse class="-mt-12 ml-[76%] opacity-50 blur-sm h-[4.5vw]" />
				<Ellipse class="mt-12 ml-[20%] opacity-50 blur-sm h-[1.5vw] border" />
			</div>
		</div>
		<div class="flex flex-grow justify-center -mx-12 sm:mx-0 -mt-10 md:-ml-60 md:-mr-40">
			<object
				class="h-[400px] w-full md:-mt-60 md:h-[unset]"
				title="light animation"
				type="image/svg+xml"
				data="main_title.svg"
			/>
		</div>
	</div>
</div>

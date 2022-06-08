<script>
	import Section from '$src/components/Section.svelte';
</script>

<Section backgroundClass="bg-ligtTopRight md:bg-none from-aquaTeal-300/50 to-transparent">
	<div class="flex">
		<div class="w-5/6 mx-auto md:w-full pt-20 pb-8">
			<div>
				<h1 class="tracking-wider text-center font-extrabold text-3xl md:text-5xl md:text-left min-w-fit">
					<p class="md:leading-[4rem] min-w-fit">How does it work?</p>
				</h1>

				<h2
					class="w-full md:w-3/5 lg:w-3/5 2xl:w-1/2 text-center md:text-left mt-8 text-base md:text-lg lg:text-xl"
				>
					<p class="">
						Anagolay is a peer-to-peer network that stores records of Rights, Restrictions, and Proofs of any
						digital content. It empowers the users to store, claim, sell, and rent their work with the correct
						transfer of Rights and usage of Licenses.
					</p>
				</h2>
			</div>

			<div
				class="ml-48 mt-10 md:mt-12 w-8 h-8 bg-sphere from-neonGreen-400 to-spaceBlue-700 rounded-full -rotate-[25deg] opacity-80 blur-sm"
			/>
			<div
				class="ml-10 mt-4 md:mt-10 w-4 h-4 bg-sphere from-neonGreen-400 to-spaceBlue-700 rounded-full -rotate-[25deg] opacity-90"
			/>
		</div>

		<div class="hidden md:flex -ml-[100%] w-full mt-44 lg:mt-24 2xl:mt-4">
			<img
				class="relative w-full mx-auto xl:w-5/6"
				src="/how_it_works_main_workflow.png"
				width="1120"
				height="679"
				alt="workflow process"
			/>
			<div class="w-full -ml-[100%]">
				<div
					class="hidden md:block h-1/2 mt-[20%] ml-[35%] w-1/4 bg-light from-aquaTeal-300/50 to-transparent"
				/>
			</div>
		</div>
	</div>
</Section>
<div class="w-5/6 sm:w-[33rem] text-lg md:text-4xl text-center mx-auto max-w-full pt-8 md:pt-44 md:pb-32">
	<p class="md:leading-[3.25rem]">
		Anagolay allows asset creators to establish how digital assets are used and owned.
	</p>
</div>

<script>
	import Section from '$src/components/Section.svelte';
</script>

<Section class="md:container flex flex-col md:grid md:grid-cols-2 mt-40 md:mt-28 mb-20 md:mb-24">
	<div class="md:-mr-[100%]">
		<div
			class="-mt-20 w-12 h-12 bg-sphere from-green to-blue rounded-full -rotate-[25deg] opacity-80 blur-sm"
		/>
		<div
			class="h-[25rem] w-[25rem] bg-light -mt-32 from-green/40 md:from-green/30 to-transparent -mb-56 ml-32 md:ml-[80%]"
		/>
		<div>
			<h1 class="tracking-wider text-center font-extrabold text-3xl md:text-5xl md:text-left min-w-fit">
				<p class="md:leading-[4rem] min-w-fit">How does it work?</p>
			</h1>

			<h2
				class="w-full md:w-3/5 lg:w-3/5 2xl:w-1/2 text-center mt-8 text-lg md:text-lg 2xl:text-2xl md:text-left"
			>
				<p class="">
					Anagolay is a peer-to-peer network that stores records of Rights, Restrictions, and Proofs of any
					digital content. It empowers the users to store, claim, sell, and rent their work with the correct
					transfer of Rights and usage of Licenses.
				</p>
			</h2>
		</div>

		<div
			class="ml-48 mt-12 w-8 h-8 bg-sphere from-green to-blue rounded-full -rotate-[25deg] opacity-80 blur-sm"
		/>
		<div class="ml-10 mt-10 w-4 h-4 bg-sphere from-green to-blue rounded-full -rotate-[25deg] opacity-90" />
	</div>

	<div class="hidden md:block -ml-[60%] -mr-8 mt-14 lg:-mt-[15%] 3xl:-mt-[10%] 3xl:-ml-[75%]">
		<img class="w-full" src="/how_it_works_main_workflow.png" alt="workflow process" />
	</div>
</Section>
<div class="text-lg md:text-4xl mb-20 md:mb-40 text-center pt-10 md:pt-20 w-[33rem] mx-auto">
	<p class="leading-[3.5rem]">
		Anagolay allows asset creators to establish how digital assets are used and owned.
	</p>
</div>

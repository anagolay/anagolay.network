<script>
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section>
	<div class="relative w-80 max-w-full md:w-full mx-auto flex flex-col lg:flex-row items-center">
		<div class="md:pt-10 lg:pt-0 flex flex-col lg:w-5/12 lg:justify-center ">
			<div
				class="ml-48 mt-10 md:mt-0 w-8 h-8 bg-sphere from-neonGreen-400 to-spaceBlue-700 rounded-full -rotate-[25deg] opacity-80 blur-sm"
			/>

			<div>
				<h1 class="tracking-wider text-center font-extrabold text-3xl md:text-5xl md:text-left min-w-fit">
					<p class="md:leading-[4rem] min-w-fit">How does it work?</p>
				</h1>

				<h2 class="text-center md:text-left mt-8 text-base md:text-lg lg:text-xl">
					<p class="">
						Anagolay is a peer-to-peer network that stores records of Rights, Restrictions, and Proofs of any
						digital content. It empowers the users to store, claim, sell, and rent their work with the correct
						transfer of Rights and usage of Licenses.
					</p>
				</h2>
			</div>

			<div
				class="ml-10 mt-4 md:mt-10 w-4 h-4 bg-sphere from-neonGreen-400 to-spaceBlue-700 rounded-full -rotate-[25deg] opacity-90"
			/>
		</div>

		<div class="lg:w-7/12">
			<div class="md:w-3/4 md:mx-auto lg:ml-auto lg:w-full">
				<!-- <img class="-my-8 md:-mt-12 lg:mt-0" src="/how_it_works_main_workflow.png" alt="workflow process" /> -->
				<video class="mix-blend-lighten mx-auto lg:mr-0" autoplay loop muted>
					<source src="/hdiw_workflow.webm" type="video/webm" />
				</video>
				<div
					class="rounded-[100%] bg-anagolayBlack bg-light from-aquaTeal-300/20 to-transparent h-28 md:h-64 -mt-20 md:-mt-48 -mx-[10%] lg:ml-0"
				/>
			</div>
		</div>
	</div>
</Section>

<Section>
	<div class="flex flex-col items-center md:pb-20">
		<div class="w-3/4 md:w-[33rem] text-lg md:text-4xl text-center mx-auto max-w-full py-20 md:py-24">
			<p class="md:leading-[3.25rem]">
				State-of-the-art technology to keep your work being yours.
				<!-- Anagolay allows asset creators to establish how digital assets are used and owned. -->
			</p>
		</div>
		<SectionButton url="#architecture">See architecture & Tech stack</SectionButton>
	</div>
</Section>

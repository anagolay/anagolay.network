<script lang="ts">
	import PhraseContainer from '$src/components/PhraseContainer.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<Section id="home_header" class="overflow-hidden md:pb-8" backgroundClasses={['stars', 'stars2', 'stars3']}>
	<div
		class="relative pt-20 pb-10 md:pt-48 md:pb-32 flex flex-col items-center md:items-start md:flex-row animate-"
	>
		<div class="w-80 max-w-full md:w-3/5 ">
			<div class="relative lg:w-4/5">
				<h1 class="md:mb-0 text-center font-extrabold text-3xl md:text-5xl md:text-left">
					<p class="md:leading-[4rem]">Manage your content on your terms.</p>
				</h1>
				<h2 class="w-full text-center md:text-left my-6 md:mb-20 text-base md:text-lg lg:text-xl md:my-12">
					Across platforms. Web3 Framework for Original Creators to claim and verify ownership of online
					identities and multimedia content and license creative works P2P.
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
		<div class="w-80  max-w-full max-h-full mx-auto md:mx-0 md:w-2/5 2xl:w-1/3 h-fit">
			<div class="md:-mx-[20%] md:-mt-10 xl:md:-mt-20">
				<object
					class="object-contain"
					title="main animation"
					type="image/svg+xml"
					data="animation_second.svg"
				/>
			</div>
			<div
				class="rounded-[100%] bg-anagolayBlack bg-light from-aquaTeal-300/50 to-transparent h-28 md:h-64 -mt-20 md:-mt-48 -mx-[10%] md:-mx-[50%]"
			/>
		</div>
	</div>
</Section>

<Section class="relative bg-spaceBlue-900 pb-40" id="no_central_authority">
	<PhraseContainer>
		<p class="line-through font-medium mb-2">
			<span class="text-spaceBlue-50">Central authority <br />Resource heavy consensus mechanism</span>
		</p>
		<p class="font-bold text-neonGreen-400">Trust the process</p>
	</PhraseContainer>
</Section>

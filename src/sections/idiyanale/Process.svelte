<script>
	import Section from '$src/components/Section.svelte';
</script>

<Section class="py-12 md:py-20">
	<div class="flex w-full justify-center">
		<div
			class="flex items-center justify-center gap-2 md:gap-4 text-xl md:text-2xl xl:text-4xl max-w-3xl py-8 md:py-16"
		>
			<p>Build</p>
			<span class="material-icons  text-neonGreen-400">east</span>
			<p>Test</p>
			<span class="material-icons  text-neonGreen-400">east</span>
			<p class="sm:w-fit">Pass it on</p>
		</div>
	</div>

	<div class="flex flex-col gap-4 w-full items-center">
		<object
			class="object-contain py-8"
			title="Idiyanale and Anagolay interaction"
			type="image/svg+xml"
			data="/idiyanale_animation.svg"
		/>

		<div
			class="max-w-xs md:max-w-full sm:w-1/2  flex flex-col items-center border border-spaceBlue-800 rounded-3xl bg-gradient-to-b from-spaceBlue-50/5 to-transparent p-4 mb-8"
		>
			<p class="w-5/6 text-center text-sm sm:text-base lg:text-lg">
				<b>Token share:</b> The percentage of the initial token distribution to IDI tokens holders (who will be
				entitled to AGY token share respective to their IDI tokens)
			</p>
		</div>
	</div>
</Section>

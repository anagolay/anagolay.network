<script lang="ts">
	const containerClass =
		'flex shadow-button p-3 md:py-10 md:px-8 xl:px-16 rounded-3xl h-20 md:h-[unset] bg-blue mb-4 md:mb-8';
	const webLayers = [
		{ title: 'Typescript', source: 'hiw_typescript.svg' },
		{ title: 'Svelte', source: 'hiw_svelte.svg' },
		{ title: 'Polka', source: 'hiw_polka.svg' },
		{ title: 'WASM', source: 'hiw_wasm.svg' },
		{ title: 'Tailwind css', source: 'hiw_tailwind.svg' },
	];
	const layers = [
		{
			img: { source: 'hiw_arch_sdk.svg', alt: 'sdk icon' },
			title: 'SDK Layer',
			description: 'Typescript - Rust - Operations - Workflows - WASM - Workflow execution',
		},
		{
			img: { source: 'hiw_arch_storage.svg', alt: 'sdk icon' },
			title: 'Storage Layer',
			description: 'Operations - Build Artifacts - Workflows - WASM - Source code',
		},
		{
			img: { source: 'hiw_arch_blockchain.svg', alt: 'sdk icon' },
			title: 'Blockchain Layer',
			subtitle: 'Substrate with our pallets',
			description: 'Operations - Workflows - PoE - Statements - Artifacts',
		},
	];
</script>

<div class="mb-20">
	<div class="relative text-center mb-8 md:mb-16">
		<h3 class="text-2xl md:text-4xl md:mb-8 text-green">Architecture</h3>
	</div>

	<div class={containerClass}>
		<div
			class="w-5/12 md:w-1/3 flex flex-col md:flex-row justify-center md:justify-start items-center text-green"
		>
			<span class="material-icons text-xl md:text-4xl md:mr-4">web_asset</span>
			<p class="text-xs md:text-lg font-bold "><i>Web Apps Layer</i></p>
		</div>
		<div class="w-7/12 md:w-2/3 pl-2 grid grid-cols-5 items-center">
			{#each webLayers as icon}
				<img
					class="max-h-5 md:max-h-12 max-w-5 md:max-w-12"
					src={icon.source}
					alt="{icon.title} icon"
					title={icon.title}
				/>
			{/each}
		</div>
	</div>

	{#each layers as item}
		<div class={containerClass}>
			<div
				class="w-5/12 md:w-1/3 flex flex-col md:flex-row justify-center md:justify-start items-center text-green"
			>
				<img
					loading="lazy"
					class="max-h-4 max-w-4 md:max-h-8 md:max-w-8 md:mr-4"
					src={item.img.source}
					alt={item.img.alt}
				/>
				<div class="flex flex-col items-center md:items-start">
					<p class="text-xs md:text-lg font-bold "><i>{item.title}</i></p>
					{#if item.subtitle}
						<p class="text-[.6rem] md:text-base">{item.subtitle}</p>
					{/if}
				</div>
			</div>
			<div
				class="w-7/12 md:w-2/3 flex justify-between text-center md:text-left items-center text-2xs md:text-base"
			>
				{item.description}
			</div>
		</div>
	{/each}
</div>

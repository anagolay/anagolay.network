<script lang="ts">
	export let serialSection: any;
</script>

{#each serialSection as item}
	<div class="mb-20 md:mb-32">
		<div class="relative md:w-1/2 mb-12 md:mb-12">
			<h3 class="text-2xl md:text-4xl md:-mr-20 lg:text-4xl mb-6 md:mb-8 text-green">{item.title}</h3>
			<p class="text-lg md:text-xl xl:text-2xl">{item.subtitle}</p>
		</div>
		<div class="flex flex-col-reverse md:flex-row">
			<div class="md:w-1/2 py-auto">
				<div
					class="-mt-20 md:mt-0 flex flex-col justify-center items-center lg:items-start text-sm md:text-base xl:text-xl"
				>
					{#each item.contentLines as line}
						<p class="my-2 md:my-4">{line}</p>
					{/each}
				</div>
				{#if item.finalLink}
					<a
						class="flex items-center mt-4 md:text-lg text-green text-base hover:underline"
						href={item.finalLink.url}
					>
						{item.finalLink.text} <span class="material-icons ">east</span>
					</a>
				{/if}
			</div>
			<div class="md:w-1/2 md:-mt-36">
				<div class={item.image.class}>
					<img class="w-full -mb-40" loading="lazy" src={item.image.source} alt={item.image.alt} />
				</div>
			</div>
		</div>
	</div>
{/each}

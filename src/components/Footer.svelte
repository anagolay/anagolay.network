<script lang="ts">
	import { menuOptions, media } from '$src/routes';
	import Section from './Section.svelte';
</script>

<Section>
	<div class="font-montserrat">
		<hr class="mb-6 opacity-50 md:-mx-4 color-white" />
		<div class="flex flex-col md:flex-row items-center md:items-start text-center md:mx-auto text-base">
			<div class="w-36 md:w-[unset] md:my-0 md:-mr-8">
				<img
					width="152"
					height="152"
					class="md:object-contain md:-translate-y-[20%] md:-translate-x-[20%]"
					src="/green_logo.svg"
					alt="Anagolay logo"
				/>
			</div>
			<div class="flex w-full ml-2 md:w-fit justify-evenly text-left">
				{#each menuOptions as item}
					<div class="flex mx-3 lg:mx-6 md:py-0 flex-col">
						<div class="mb-4 md:mb-0 min-w-fit font-bold">{item.title}</div>
						{#each item.options as option}
							<a
								href={option.url}
								class="opacity-90 text-[90%] mb-2 md:mb-0 w-fit"
								target="_blank"
								rel="noopener noreferrer"
							>
								{option.text}
							</a>
						{/each}
					</div>
				{/each}
			</div>
			<div
				class="w-60 md:w-[unset] md:max-w-[15rem] flex flex-col flex-grow py-12 md:py-0 md:ml-auto md:mr-1/10"
			>
				<div class="flex w-full justify-center mb-5">Join the community</div>
				<div class="flex flex-grow items-center justify-between mb-4">
					{#each media as item}
						<a
							href={item.url}
							class="flex justify-center items-center shadow-button h-12 w-12 rounded-full bg-spaceBlue-800 text-white active:shadow-pressed"
							aria-label="social-media-{item.name}"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								class="max-h-5 max-w-[20px]"
								width="20"
								height="16"
								src={item.image}
								alt="{item.name} logo"
							/>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="w-full text-xs text-center pb-20 font-light opacity-50 md:pb-12">
			<p class="mb-1">Product of KELP DIGITAL OÜ</p>
			<p>Copyright © 2021-present Kelp Digital – All Rights Reserved</p>
		</div>
	</div>
</Section>

<script>
	import Ellipse from '$src/components/Ellipse.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
</script>

<div class="h-screen">
	<div class="mt-10 md:mt-20 mb-auto w-full md:w-[35rem] lg:w-2/3 md:mx-auto grid grid-cols-2">
		<div class="-mr-[100%]">
			<div class="flex">
				<div class="w-1/2">
					<Ellipse class="-mt-2 ml-32 h-2 w-2 blur-[2px] rotate-45" />
				</div>
				<div class="w-1/2 flex justify-end">
					<img
						class="invisible md:visible h-32 lg:h-40 -mr-20 lg:-mr-28 -mt-10 lg:-mt-20"
						src="/error_mars.svg"
						alt="blue mars"
					/>
				</div>
			</div>
			<div class="w-full flex justify-end">
				<Ellipse class="mr-[20%] h-6 w-6 blur-[3px] rotate-45" />
			</div>
			<Ellipse class="mt-20 -ml-5 h-8 w-8 blur-[3px] rotate-45" />
			<div class="w-full flex justify-end">
				<Ellipse class="-mr-6 mt-20 h-10 w-10 blur-[2px] rotate-45" />
			</div>
			<div class="w-full flex justify-start">
				<img
					class="invisible -mb-20 md:visible md:mb-0 -ml-40"
					src="/error_code_planet.svg"
					alt="code planet"
				/>
			</div>
		</div>
		<div class="-ml-[100%] flex justify-center">
			<div
				class="relative md:w-full bg-anagolayWhite/20 text-center shadow-card rounded-3xl px-3 md:px-16 xl:px-24 py-5 z-10"
			>
				<p class="text-2xl sm:text-3xl text-green blur-[2px] my-10 font-mono">4 0 4</p>
				<h1 class="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl md:leading-[6rem] min-w-fit font-bold">
					Lost in space?
				</h1>
				<div
					class="text-sm sm:text-base max-w-[25rem] md:w-[25rem] xl:w-[28rem] md:text-lg mx-auto my-3 2xl:my-10"
				>
					The page you are looking for cannot be found.<br /> We suggest you go back home.
				</div>
				<SectionButton url="/" class="my-10 px-20 mx-auto">Go Home</SectionButton>
			</div>
		</div>
	</div>
</div>

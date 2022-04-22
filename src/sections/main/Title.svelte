<script lang="ts">
	import Ellipse from '$src/components/Ellipse.svelte';
</script>

<div>
	<div class="flex flex-col-reverse md:grid md:grid-cols-4 md:my-10">
		<div class="md:col-span-2 md:-mr-20">
			<div class="md:py-40">
				<h1
					class="mb-4 md:mb-8 tracking-wider text-center font-bold text-xl md:text-5xl xl:text-6xl md:text-left"
				>
					<p class="md:leading-[3rem] xl:leading-[5rem]">Process-based Interplanetary P2P Framework</p>
				</h1>
				<h4
					class="w-full text-center text-base md:text-xl xl:text-2xl md:text-justify my-2 md:mb-8 mx-auto md:mx-0"
				>
					<p class="text-green my-4 font-bold md:my-8">
						The transparent verifiable process with 100% source-code assurance
					</p>
					<p class="md:-mr-20 lg:mr-0">
						No need for a central authority, or resource-heavy consensus mechanism to establish rules of the
						game — trust the process
					</p>
				</h4>
				<Ellipse class="absolute mt-[8vw] ml-[5%] opacity-50 blur-sm h-[1.5vw] border" />
				<Ellipse class="absolute mt-0 ml-[25%] opacity-50 blur-sm h-[4.5vw]" />
			</div>
		</div>
		<div class="aspect-square md:col-span-2 flex justify-center -mx-12 sm:mx-0 -mt-10 md:-mx-28">
			<object class="w-full md:-mt-60" title="light animation" type="image/svg+xml" data="main_title.svg" />
		</div>
	</div>
</div>

<script>
	import { home } from '$src/routes';
</script>

<div class="h-screen flex justify-center">
	<div class="mt-40 mb-auto text-center shadow-button bg-blue rounded-3xl px-3 md:px-20 py-5">
		<h1 class="text-2xl 2xl:text-4xl my-5 md:my-10">Page not found</h1>
		<p class="text-base 2xl:text-2xl my-5 md:my-10">
			Please, click <a class="text-green hover:underline" href={home.url}>here</a> to go back to home page
		</p>
	</div>
</div>

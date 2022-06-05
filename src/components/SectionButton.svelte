<script lang="ts">
	let extraClasses = '';
	export { extraClasses as class };
	export let url: string;
</script>

<a
	href={url}
	target="_blank"
	rel="noopener noreferrer"
	class="{extraClasses} w-3/4 sm:w-1/2 md:w-1/4  py-5 flex items-center justify-center min-w-fit px-12 shadow-button active:shadow-pressed rounded-full bg-gradient-to-r from-spaceBlue-700 to to-spaceBlue-400 hover:from-spaceBlue-700 hover:to-spaceBlue-600 to md:py-6 text-white text-sm md:text-base"
>
	<slot />
</a>

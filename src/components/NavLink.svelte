<script lang="ts">
	export let option: { text: string; link: string; external: boolean };
	let extraClass = '';
	export { extraClass as class };
</script>

<a
	class="w-full p-2 text-anagolayWhite hover:text-green {extraClass}"
	href={option.link}
	target={option.external ? '_blank' : undefined}
	rel={option.external ? 'noopener noreferrer' : undefined}>{option.text}</a
>

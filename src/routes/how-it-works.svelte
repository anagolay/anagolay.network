<script lang="ts">
	import TitleSection from '$src/sections/howitworks/Title.svelte';
	import SerialSections from '$src/sections/howitworks/SerialSections.svelte';
	import Architecture from '$src/sections/howitworks/Architecture.svelte';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
	title="Anagolay Network - How it works"
	description="P2P Network to verify authorship, protect and manage copyright & ownership. Statements of Rights (Copyright, Licenses, and Ownership), Restrictions,  and Proofs created with Anagolay Workflows empower users to store, claim, sell, and rent creative works as digital assets with the correct transfer of Rights and usage of Licenses."
	keywords="anagolay, blockchain, workflow, transparent process, substrate, copyright statements, ownership statements, web3 rights management "
	twitter={{
		site: '@AnagolayNet',
		title: 'Anagolay Network - How it works',
		description:
			'P2P Network to verify authorship, protect and manage copyright & ownership. Statements of Rights (Copyright, Licenses, and Ownership), Restrictions,  and Proofs created with Anagolay Workflows empower users to store, claim, sell, and rent creative works as digital assets with the correct transfer of Rights and usage of Licenses',
		image:
			'https://ipfs.anagolay.network/ipfs/QmX18cJBJ5vFKUYaxQsikFMBYrWtyqnznq9eY2ShdV7evZ?filename=twitter%20card.png',
		imageAlt: 'Blue background with Anagolay brand logo',
	}}
/>

<div class="w-80 md:w-fit max-w-full mx-auto">
	<TitleSection />
	<SerialSections />
	<Architecture />
</div>

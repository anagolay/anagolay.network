<script lang="ts">
	import BaseCard from '$src/components/BaseCard.svelte';
	import IconContainer from '$src/components/IconContainer.svelte';
	import LinkButton from '$src/components/LinkButton.svelte';
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
	import type { TeamMember } from '$src/types';

	let siteIcons = [
		{ domain: 'linkedin', src: '/linkedin.svg' },
		{ domain: 'github', src: '/github.svg' },
	];

	export let teamMembers: TeamMember[];

	let teamIndex = 0;
	let selected = teamMembers[teamIndex];
	let icons = selected.links.map((link: string) => siteIcons.find((icon) => link.includes(icon.domain)));

	function buildSelected(index: number) {
		selected.opacity = 'opacity-40';
		selected = teamMembers[index];
		teamMembers[index].opacity = 'opacity-100';
		icons = selected.links.map((link: string) => siteIcons.find((icon) => link.includes(icon.domain)));
	}

	const interval = setInterval(() => {
		teamIndex++;
		if (!teamMembers[teamIndex]) teamIndex = 0;
		buildSelected(teamIndex);
	}, 3000);

	function selectMember(name: string): void {
		buildSelected(teamMembers.findIndex((member) => member.name === name));
		clearInterval(interval);
	}
</script>

<Section class="pt-12" id="home_team">
	<BaseCard class="w-full h-min-[20rem] text-center p-5 md:mx-auto md:py-6">
		<div class="w-80 max-w-full mx-auto sm:w-full md:w-fit flex flex-col items-center ">
			<SectionTitle class="my-9 md:my-8">Meet the team</SectionTitle>
			<div
				class="py-3 mx-auto flex gap-4 md:gap-8 max-w-2xl xl:max-w-full xl:gap-4 flex-wrap justify-center xl:flex-nowrap"
			>
				{#each teamMembers as member}
					<div
						class="w-20 sm:w-32 avatar {member.opacity} duration-700 hover:opacity-100"
						on:click={() => selectMember(member.name)}
						on:keydown
					>
						<div class="mask mask-circle mask-[10px] duration-700 w-full cursor-pointer">
							<img class="rounded-[100%]" width="137" height="137" src={member.img} alt={member.name} />
						</div>
					</div>
				{/each}
			</div>
			<h3 class="font-light text-base md:text-3xl mt-8 mb-1 md:mb-2">{selected.title}</h3>
			<p class="text-neonGreen-400 text-base md:text-2xl mb-4 md:mb-6"><i>{selected.name}</i></p>
			<div class="sm:w-5/6 sm:mx-auto h-56 sm:h-48 md:h-36 lg:h-20 text-sm md:text-base 2xl:text-lg">
				{selected.bio}
			</div>
			<div class="flex md:mt-5 gap-2 md:gap-4">
				{#each selected.links as link, i}
					<LinkButton url={link}>
						<IconContainer class="w-10 h-10 sm:w-16 sm:h-16 rounded-full">
							<img height="20" width="20" class="h-3 sm:h-5" src={icons[i].src} alt={icons[i].domain} />
						</IconContainer>
					</LinkButton>
				{/each}
			</div>
		</div>
	</BaseCard>
</Section>

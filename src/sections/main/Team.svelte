<script lang="ts">
	import MediaButton from '$src/components/MediaButton.svelte';
	import Section from '$src/components/Section.svelte';

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

<Section>
	<div
		id="team"
		class="w-full lg:w-5/6 lg:mx-auto h-min-[20rem] text-center p-5 bg-gradient-to-b from-blue-50/10 to-transparent rounded-lg md:rounded-3xl md:mx-auto md:py-6 shadow-card shadow-teal-300"
	>
		<div class="w-80 max-w-full mx-auto sm:w-full md:w-fit flex flex-col items-center">
			<h2 class="font-medium text-2xl md:text-4xl my-9 md:my-8">Meet the team</h2>
			<div class="py-3 w-5/6 mx-auto grid gap-4 grid-cols-3 md:grid-cols-6">
				{#each teamMembers as member}
					<div
						class="avatar {member.opacity} duration-700 hover:opacity-100"
						on:click={() => selectMember(member.name)}
					>
						<div class="mask mask-circle mask-[10px] duration-700 w-full cursor-pointer">
							<img class="rounded-[100%]" width="137" height="137" src={member.img} alt={member.name} />
						</div>
					</div>
				{/each}
			</div>
			<h3 class="font-light text-base md:text-3xl mt-8 mb-1 md:mb-2">{selected.title}</h3>
			<p class="text-green-400 text-base md:text-2xl mb-4 md:mb-6"><i>{selected.name}</i></p>
			<div class="sm:w-5/6 sm:mx-auto h-64 sm:h-48 md:h-36 lg:h-28 text-sm md:text-base 2xl:text-lg">
				{selected.bio}
			</div>
			<div class="flex md:mt-5">
				{#each selected.links as link, i}
					<MediaButton
						class="w-10 h-10 sm:w-16 sm:h-16"
						title={icons[i].domain}
						url={link}
						src={icons[i].src}
					/>
				{/each}
			</div>
		</div>
	</div>
</Section>

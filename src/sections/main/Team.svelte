<script lang="ts">
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

<Section class="flex pt-20 text-center">
	<div class="md:container w-full">
		<div
			id="team"
			class=" p-5 bg-gradient-to-b from-anagolayWhite/10 to-transparent w-full teamGrid backdrop-blur-md rounded-lg md:rounded-3xl md:mx-auto md:py-6 shadow-card shadow-teal-300"
		>
			<h2 class="font-medium text-2xl md:text-4xl my-9 md:my-8">Meet the team</h2>
			<div class="py-3 w-5/6 mx-auto grid gap-4 grid-cols-3 md:grid-cols-6">
				{#each teamMembers as member}
					<div
						class="avatar {member.opacity} duration-700 hover:opacity-100"
						on:click={() => selectMember(member.name)}
					>
						<div class="mask mask-circle mask-[10px] duration-700 w-full cursor-pointer">
							<img src={member.img} alt={member.name} />
						</div>
					</div>
				{/each}
			</div>
			<h3 class="font-light text-base md:text-3xl mt-8 mb-1 md:mb-2">{selected.title}</h3>
			<p class="text-green text-base md:text-2xl mb-4 md:mb-8"><i>{selected.name}</i></p>
			<div class="sm:w-5/6 sm:mx-auto h-64 sm:h-40 md:h-48 lg:h-32">
				<p class="w-80 max-w-full flex sm:w-full mx-auto text-sm md:text-lg 2xl:text-lg">
					{selected.bio}
				</p>
			</div>
			<div class="flex items-center w-full justify-center">
				{#each selected.links as link, i}
					<a
						title={icons[i].domain}
						href={link}
						target="_blank"
						rel="noreferrer"
						class="flex justify-center items-center shadow-button w-10 h-10 sm:w-16 sm:h-16 active:shadow-pressed mx-3 md:mt-5 bg-blue rounded-full"
					>
						<img class="h-3 sm:h-5 fill-white" src={icons[i].src} alt={icons[i].domain} />
					</a>
				{/each}
			</div>
		</div>
	</div>
</Section>

<script lang="ts">
	let siteIcons = [
		{ domain: 'github.com', icon: 'github.svg' },
		{ domain: 'linkedin.com', icon: 'linkedin.svg' },
	];

	let team: {
		name: string;
		title: string;
		img: string;
		bio: string;
		links: string[];
		linkIcons?: string[];
		opacity: string;
	}[] = [
		{
			name: 'Daniel Maricic',
			title: 'Founder & Chief-Architect',
			img: 'daniel.png',
			bio: 'Daniel is the main brain behind Anagolay and a CTO of Kelp Digital OÜ, the company that develops Anagolay. A full-stack software engineer with over 13 years of experience in different business domains, from Fintech to real-time auctions and image management software. He is also a long-time photographer, passionate chief, and windsurfer.',
			links: ['https://www.linkedin.com/in/danielmaricic/', 'https://github.com/woss'],
			opacity: 'opacity-100',
		},
		{
			name: 'Adriano Dalpane',
			title: 'Senior Engineer',
			img: 'adriano.png',
			bio: 'Adriano Dalpane is a senior engineer with 11 years of experience and a vast portfolio ranging from Monte Carlo Tree Search AI for a game to a Bayesian classifier that performs match-making on a marketplace platform. For the last 2 years Adriano has been working with Rust and Substrate and now drives Anagolay implementation. On weekends he spends playing guitar, hiking, or cycling.',
			links: ['https://www.linkedin.com/in/adriano-dalpane/', 'https://github.com/digitalillusion'],
			opacity: 'opacity-40',
		},
		{
			name: 'Leonardo Monay',
			title: 'Front-End Engineer',
			img: 'leonardo.png',
			bio: 'Leonardo is a junior full-stack javascript developer specializing in decentralized solutions with 2+ years of experience. Before making a career switch, he dedicated 10 years to industrial engineering, data analysis and processing. A man of many talents, Leo also brews his own beer, dances salsa, enjoys a good gaming night and a moto ride.',
			links: ['https://www.linkedin.com/in/leomonay/', 'https://github.com/Leomonay'],
			opacity: 'opacity-40',
		},
		{
			name: 'Carla Pezzo',
			title: 'Art Director & UI/UX',
			img: 'carla.png',
			bio: 'Carla is a graphic designer, illustrator, and UX designer from Buenos Aires. Before joining the team, she worked for several years as a freelancer while also tutoring UX/UI lessons. Carla is passionate about everything that has to do with creativity, design, arts, and technology. She loves cats, nature, and doing yoga.',
			links: ['https://www.linkedin.com/in/carla-pezzo/'],
			opacity: 'opacity-40',
		},
		{
			name: 'Leila Iruzun',
			title: 'Business Operations',
			img: 'leila.png',
			bio: 'Leila’s background is in management and finance. Before joining Kelp, she has worked as a business consultant for several projects. Her research subject is digital art, NFTs, and digital copyright. MSc Management and Business Economics. Massachusetts Institute of Technology: Digital Transformation Program. Leila flies kites, enjoys origami, and is currently learning Chinese.',
			links: ['https://www.linkedin.com/in/leilairuzun/'],
			opacity: 'opacity-40',
		},
		{
			name: 'Elena Tairova',
			title: 'Founder',
			img: 'elena.png',
			bio: 'Elena is the CEO of Kelp Digital OÜ and Founder of Anagolay. With 9+ years of experience in digital strategy, media, & policy, since 2017 she has been working with DLT projects. MS Economics & Management. Global Media Industries, Data Regulation & Policy at LSE. EMBA at Quantic School of Business & Technology. To clear up her mind, Elena enjoys painting, windsurfing, and jogging.',
			links: ['https://www.linkedin.com/in/elena-tairova/'],
			opacity: 'opacity-40',
		},
	];

	let teamIndex = 0;
	let selected = team[teamIndex];
	let icons = selected.links.map((link: string) => siteIcons.find((icon) => link.includes(icon.domain)).icon);

	function buildSelected(index: number) {
		selected.opacity = 'opacity-40';
		selected = team[index];
		team[index].opacity = 'opacity-100';
		icons = selected.links.map((link: string) => siteIcons.find((icon) => link.includes(icon.domain)).icon);
	}

	const interval = setInterval(() => {
		teamIndex++;
		if (!team[teamIndex]) teamIndex = 0;
		buildSelected(teamIndex);
	}, 3000);

	function selectMember(name: string): void {
		buildSelected(team.findIndex((member) => member.name === name));
		clearInterval(interval);
	}
</script>

<div class="flex pt-40 text-center">
	<div
		id="team"
		class="relative p-5 bg-gradient-to-b from-anagolayWhite/20 to-anagolayWhite/20 bg-blue/60 w-full xl:w-11/12 teamGrid backdrop-blur-md rounded-3xl md:mx-auto md:py-6 shadow-around shadow-green"
	>
		<h2 class="font-medium text-2xl md:text-4xl my-9 md:my-16">Meet the team</h2>
		<div class="py-3 w-5/6 mx-auto grid gap-4 grid-cols-3 md:grid-cols-6">
			{#each team as member}
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
		<h3 class="font-light text-base md:text-3xl mt-12 mb-1 md:mb-2">{selected.title}</h3>
		<p class="text-green text-base md:text-2xl mb-6 md:mb-14"><i>{selected.name}</i></p>
		<div class="sm:w-5/6 sm:mx-auto h-60 sm:h-36 md:h-48 2xl:h-40">
			<p class="w-80 max-w-full flex sm:w-full mx-auto text-sm md:text-lg 2xl:text-lg">
				{selected.bio}
			</p>
		</div>
		<div class="flex items-center w-full justify-center mb-5">
			{#each selected.links as link, i}
				<a
					title="github"
					href={link}
					target="_blank"
					rel="noreferrer"
					class="flex justify-center items-center shadow-button w-10 h-10 sm:w-16 sm:h-16 active:shadow-pressed mx-3 md:mt-5 bg-blue rounded-full"
				>
					<img class="h-3 sm:h-5 fill-white" src={icons[i]} alt={icons[i].split('.')[0]} />
				</a>
			{/each}
		</div>
	</div>
</div>

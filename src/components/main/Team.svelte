<script lang="ts">
	import Ellipse from '../../components/main/Ellipse.svelte';

	let team = [
		{
			name: 'Daniel Maricic',
			title: 'Founder & Chief-Architect',
			img: 'daniel.jpg',
			bio: 'Daniel is the main brain behind Anagolay and a CTO of Kelp Digital OÜ, the company that develops Anagolay. A full-stack software engineer with over 13 years of experience in different business domains, from Fintech to real-time auctions and image management software. He is also a long-time photographer, passionate chief, and windsurfer.',
			link: 'https://www.linkedin.com/in/danielmaricic/',
			github: 'https://github.com/woss',
		},
		{
			name: 'Adriano Dalpane',
			title: 'Senior Engineer',
			img: 'adriano.jpg',
			bio: 'Adriano Dalpane is a senior engineer with 11 years of experience and a vast portfolio ranging from Monte Carlo Tree Search AI for a game to a Bayesian classifier that performs match-making on a marketplace platform. For the last 2 years Adriano has been working with Rust and Substrate and now drives Anagolay implementation. On weekends he spends playing guitar, hiking, or cycling.',
			link: 'https://www.linkedin.com/in/adriano-dalpane/',
			github: 'https://github.com/digitalillusion',
		},
		{
			name: 'Leonardo Monay',
			title: 'Front-End Engineer',
			img: 'leonardo.jpg',
			bio: 'Leonardo is a junior full-stack developer specializing in decentralized solutions with 2+ years of experience. Before making a career switch, he dedicated 10 years to industrial engineering, data analysis and processing. A man of many talents, Leo also brews his own beer, dances salsa, enjoys a good gaming night and a moto ride.',
			link: 'https://www.linkedin.com/in/leomonay/',
			github: 'https://github.com/Leomonay',
		},
		{
			name: 'Carla Pezzo',
			title: 'Art Director & UI/UX',
			img: 'carla.jpg',
			bio: 'Carla is a graphic designer, illustrator, and UX designer from Buenos Aires. Before joining the team, she worked for several years as a freelancer while also tutoring UX/UI lessons. Carla is passionate about everything that has to do with creativity, design, arts, and technology. She loves cats, nature, and doing yoga.',
			link: 'https://www.linkedin.com/in/carla-pezzo/',
		},
		{
			name: 'Leila',
			title: 'Business Operations',
			img: 'leila.jpg',
			bio: 'Leila’s background is in management and finance. Before joining Kelp, she has worked as a business consultant for several projects. Her research subject is digital art, NFTs, and digital copyright. MSc Management and Business Economics. Massachusetts Institute of Technology: Digital Transformation Program. Leila flies kites, enjoys origami, and is currently learning Chinese.',
			link: 'https://www.linkedin.com/in/leilairuzun/',
		},
		{
			name: 'Elena Tairova',
			title: 'Founder',
			img: 'elena.jpg',
			bio: 'Elena is the CEO of Kelp Digital OÜ and Founder of Anagolay. With 9+ years of experience in digital strategy, media, & policy, since 2017 she has been working with DLT projects. MS Economics & Management. Global Media Industries, Data Regulation & Policy at LSE. EMBA at Quantic School of Business & Technology. To clear up her mind, Elena enjoys painting, windsurfing, and jogging.',
			link: 'https://www.linkedin.com/in/elena-tairova/',
		},
	];

	let selected = team[0];

	const interval = setInterval(() => {
		let index = team.findIndex((e) => e.name === selected.name);
		index++;
		selected = team[index] || team[0];
	}, 3000);

	function selectMember(name: string): void {
		selected = team.find((member) => member.name === name);
		clearInterval(interval);
	}
</script>

<div class="flex mt-20 px-3 py-auto text-center teamBg">
	<div class="absolute right-0 left-0 h-full">
		<Ellipse left="10" top="90" diam="7.5vw" op="0.5" blur="5" />
	</div>

	<div
		class="relative box w-full my-12 teamGrid rounded-3xl px-2 py-5 md:mx-auto md:w-5/6 md:py-6 md:px-[5%]"
	>
		<h2 class="font-medium">Meet the team</h2>
		<div class="py-3 w-5/6 mx-auto grid grid-cols-3 md:w-full md:grid-cols-6 md:py-6">
			{#each team as member}
				<div class="text-center mx-1 py-2 md:mx-1 md:py-0">
					<div
						class={`rounded-full aspect-square overflow-hidden duration-700 cursor-pointer ${
							selected && selected.name === member.name ? 'opacity-100' : 'opacity-40'
						} hover:opacity-100 `}
						on:click={() => selectMember(member.name)}
					>
						<img class="-mt-1" src={member.img} alt={member.name} />
					</div>
				</div>
			{/each}
		</div>
		{#if selected}
			<h2 class="font-light">{selected.title}</h2>
			<p class="mt-2 text-green text-xl"><i>{selected.name}</i></p>
			<p class="text-sm mx-auto min-h-48  py-5 md:text-base md:w-5/6" style="height: calc( 18rem - 10vw )">
				{selected.bio}
			</p>
			<div class="flex w-full justify-center">
				<a
					href={selected.link}
					target="_blank"
					rel="noreferrer"
					class="btn text-sm p-4 w-fit mx-3 md:mt-5 bg-blue rounded-full"
					><i class="fa-brands fa-linkedin-in text-white" /></a
				>
				{#if selected.github}
					<a
						href={selected.github}
						target="_blank"
						rel="noreferrer"
						class="btn text-sm p-4 w-fit mx-3 md:mt-5 bg-blue rounded-full"
						><i class="fa-brands fa-github text-white" /></a
					>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.teamGrid {
		background: linear-gradient(0deg, rgba(244, 251, 255, 0.15), rgba(244, 251, 255, 0.15)),
			rgba(5, 79, 119, 0.6);
		box-shadow: 0px 1.05365px 1.05365px rgba(20, 31, 69, 0.5),
			inset 0px 0.526825px 1.05365px rgba(244, 251, 255, 0.5);
		backdrop-filter: blur(5.26825px);
	}

	.teamBg {
		margin: -25% 0%;
		height: fit-content;
		padding: 30% 5%;
		background: url('line 2.png') 100% 100% / 30vw no-repeat, url('line 1.png') 0% 0% / 30vw no-repeat;
	}
</style>

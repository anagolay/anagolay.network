<script lang="ts">
	import { onMount } from 'svelte';

	import Ellipse from '$src/components/Ellipse.svelte';
	import Footer from '$src/components/Footer/index.svelte';
	import SectionButton from '$src/components/SectionButton.svelte';
	import FeatureCard from '$src/components/FeatureCard.svelte';

	//incons to get or create and remove:
	import Linkedin from 'svelte-material-icons/Linkedin.svelte';
	import Github from 'svelte-material-icons/Github.svelte';
	import PanLeft from 'svelte-material-icons/PanLeft.svelte';
	import PanRight from 'svelte-material-icons/PanRight.svelte';

	//How it works data
	let beastFeatures: { feature: string; icon?: string; subtitle?: string }[] = [
		{
			feature: 'Each stored proof on the Anagolay chain can be verified',
			icon: 'verified_user',
		},
		{
			feature: 'Each Workflow executes 100% the same code on each run',
			icon: 'code',
		},
		{
			feature: 'Stored proofs are contextual and well structured',
			icon: 'folder',
		},
		{ feature: 'Created Statements are legally valid', icon: 'copyright' },
		{
			feature: 'Developed with a mindset that every drop of energy matters',
			icon: 'bolt',
		},
		{
			feature: 'Can work on Mars (or any other isolated environment)',
			icon: 'rocket_launch',
		},
		{ feature: 'Community verified source code', icon: 'handshake' },
		{
			feature: 'Privacy by default, users’ data is not stored on-chain',
			icon: 'private_connectivity',
		},
		{
			feature: 'All stored data structures are content addressable',
			// icon: 'decentralized_network',
			subtitle: 'can be synced even if the nodes go offline',
		},
	];

	let howItems: { src: string; alt: string; text: string; link: string }[] = [
		{
			src: 'security.png',
			alt: 'security',
			text: 'The power of Anagolay is in creating the process (or workflow) that everyone can trust.',
			link: '/',
		},
		{
			src: 'world.png',
			alt: 'world validation',
			text: 'Anagolay workflow and its building blocks — operations can be run anywhere in any environment (even on Mars!) and always produce the same results (Proofs) for the same (or similar) sets of data.',
			link: '/',
		},
		{
			src: 'validation.png',
			alt: 'proofs',
			text: 'Anagolay Proofs, combined with cryptographic signatures, verify the rightfulness of a claim and generate Verifiable Statements.',
			link: '/',
		},
	];

	//use cases data and functions
	let cases: { id: number; src: string; alt: string; title: string; link: string; text: string }[] = [
		{
			id: 1,
			src: 'case1.png',
			alt: 'source code',
			title: 'Source code availability & trustworthiness',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			id: 2,
			src: 'case2.png',
			alt: 'ip management',
			title: 'IP Management in the Web3',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
		{
			id: 3,
			src: 'case3.png',
			alt: 'digital art',
			title: 'Digital Art P2P Licensing \n (a working alternative to NFTs Craze)',
			link: '/',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis vitae commodo pellentesque laoreet nibh eu morbi accumsan. Curabitur.',
		},
	];

	let carousel: HTMLDivElement;

	function scrollCarousel(e): void {
		e.preventDefault();
		const index = Number(e.target.id);
		const width = carousel.clientWidth;
		carousel.scrollLeft = (index - 1) * width;
	}

	//team section data and functions
	let team = [
		{
			name: 'Daniel Maricic',
			title: 'Founder & Chief-Architect',
			img: 'daniel.png',
			bio: 'Daniel is the main brain behind Anagolay and a CTO of Kelp Digital OÜ, the company that develops Anagolay. A full-stack software engineer with over 13 years of experience in different business domains, from Fintech to real-time auctions and image management software. He is also a long-time photographer, passionate chief, and windsurfer.',
			link: 'https://www.linkedin.com/in/danielmaricic/',
			github: 'https://github.com/woss',
		},
		{
			name: 'Adriano Dalpane',
			title: 'Senior Engineer',
			img: 'adriano.png',
			bio: 'Adriano Dalpane is a senior engineer with 11 years of experience and a vast portfolio ranging from Monte Carlo Tree Search AI for a game to a Bayesian classifier that performs match-making on a marketplace platform. For the last 2 years Adriano has been working with Rust and Substrate and now drives Anagolay implementation. On weekends he spends playing guitar, hiking, or cycling.',
			link: 'https://www.linkedin.com/in/adriano-dalpane/',
			github: 'https://github.com/digitalillusion',
		},
		{
			name: 'Leonardo Monay',
			title: 'Front-End Engineer',
			img: 'leonardo.png',
			bio: 'Leonardo is a junior full-stack javascript developer specializing in decentralized solutions with 2+ years of experience. Before making a career switch, he dedicated 10 years to industrial engineering, data analysis and processing. A man of many talents, Leo also brews his own beer, dances salsa, enjoys a good gaming night and a moto ride.',
			link: 'https://www.linkedin.com/in/leomonay/',
			github: 'https://github.com/Leomonay',
		},
		{
			name: 'Carla Pezzo',
			title: 'Art Director & UI/UX',
			img: 'carla.png',
			bio: 'Carla is a graphic designer, illustrator, and UX designer from Buenos Aires. Before joining the team, she worked for several years as a freelancer while also tutoring UX/UI lessons. Carla is passionate about everything that has to do with creativity, design, arts, and technology. She loves cats, nature, and doing yoga.',
			link: 'https://www.linkedin.com/in/carla-pezzo/',
		},
		{
			name: 'Leila Iruzun',
			title: 'Business Operations',
			img: 'leila.png',
			bio: 'Leila’s background is in management and finance. Before joining Kelp, she has worked as a business consultant for several projects. Her research subject is digital art, NFTs, and digital copyright. MSc Management and Business Economics. Massachusetts Institute of Technology: Digital Transformation Program. Leila flies kites, enjoys origami, and is currently learning Chinese.',
			link: 'https://www.linkedin.com/in/leilairuzun/',
		},
		{
			name: 'Elena Tairova',
			title: 'Founder',
			img: 'elena.png',
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

	//Roadmap data and functions
	enum status {
		done = 'done',
		doing = 'doing',
		pending = 'pending',
	}

	interface Step {
		title: string;
		year: number;
		status?: string;
		blur?: number;
		op?: number;
		facts: { fact: string; description?: string; status: string }[];
	}
	let events: Step[] = [
		{
			title: 'Q1',
			year: 2021,
			facts: [
				{ fact: 'Concept Design ready', status: status.done },
				{ fact: 'Key Technologies Validation', status: status.done },
			],
		},
		{
			title: 'Q2',
			year: 2021,
			facts: [
				{ fact: 'Protocol Design', status: status.done },
				{ fact: 'Anagolay Chain Prototype', status: status.done },
			],
		},
		{
			title: 'Q3',
			year: 2021,
			facts: [
				{
					fact: 'Initial Version of Anagolay Chain Implementation',
					status: status.done,
				},
				{ fact: 'Initial Documentation Version', status: status.done },
			],
		},
		{
			title: 'Q4',
			year: 2021,
			facts: [
				{
					fact: 'Self-hosted service for rehosting git repositories on IPFS',
					description:
						"<p>An important milestone for Anagolay, as building the provable process for proof generation must always execute the same code.\nDetails and results are <a href='https://dev.to/woss/part-1-rehosting-git-repositories-on-ipfs-23bf' >presented here</a></p>",
					status: status.done,
				},
				{
					fact: 'Anagolay Publishing Service (1st iteration)',
					status: status.done,
				},
			],
		},
		{
			title: 'Q1',
			year: 2022,
			facts: [
				{
					fact: 'Idiyanale Phase 1/2 (Web3 Foundation Grant)',
					status: status.done,
				},
				{
					fact: 'Most common (generic) Operations & Workflows implemented',
					description:
						'<p>Most common (generic) Operations that will be used in almost any Workflow. This includes features from QRCode generation, Multimedia extraction, calculation of Cryptographic hashes, and a multitude of perceptual and Locally sensitive hashes.</p>',
					status: status.done,
				},
			],
		},
		{
			title: 'Q2',
			year: 2022,
			facts: [
				{
					fact: 'PoE & Statement of Ownership and Copyright',
					description:
						'<p>Improve and re-design the workflows specific for Proofs-of-Exitance & Statement of Ownership and Copyright. Where blockchain is not the central technology, but a facilitator of transparency & freedom for the build architecture.</p>',
					status: status.pending,
				},
				{ fact: ' Anagolay rebrand and new website', status: status.doing },
				{
					fact: 'Idiyanale Phase 2/2 (Web3 Foundation Grant)',
					status: status.doing,
				},
			],
		},
		{
			title: 'Q3',
			year: 2022,
			facts: [
				{
					fact: 'Governance design and implementation',
					status: status.pending,
				},
				{
					fact: 'Anagolay Explorer',
					description:
						'<p>Anagolay Explorer (focused on the Statements, Operation, Workflows and transfers of Ownerships and Copyrights).</p>',
					status: status.pending,
				},
				{
					fact: 'Anagolay SDK',
					description:
						'<p>While building SDK we will focus on the features for our JS/TS SDK, because the Anagolay interaction will come mostly from the Web Browser, Smart phones and Desktop environments. Our goal is to design SDK as intuitive and developer-friendly as possible.</p>',
					status: status.pending,
				},
			],
		},
		{
			title: 'Q4',
			year: 2022,
			facts: [
				{ fact: 'Idiyanale Mainnet Ready', status: status.pending },
				{ fact: 'IDI Token Launch', status: status.pending },
				{
					fact: 'Promote for Use Cases and Get Apps Running on Idiyanale',
					status: status.pending,
				},
			],
		},
		{
			title: 'Q1',
			year: 2023,
			facts: [
				{
					fact: 'Distributed-build system for Artefacts',
					description:
						"<p>Each Operation and Workflow produce the built artifacts for WASM and rust language targets. These artifacts must not be tampered with before they are stored on the chain and they must not be built on the developers' machines. If they were, then the developers can act as bad actors and try to inject the code in the middle of the process and try to fool any other user who will use that Operation or Workflow. This is going to be a new application and will come together with the incentive layer on-chain.</p>",
					status: status.pending,
				},
				{
					fact: 'Innovation on the permanent storage for Anagolay purpose',
					description:
						'<p>this may include the on-chain incentive to have the IPFS nodes running (either cluster or not) and storing the off-chain Anagolay data; Operation, Workflow and any other artefacts that are needed to have the Statements working.</p>',
					status: status.pending,
				},
			],
		},
		{
			title: 'Q2',
			year: 2023,
			facts: [
				{
					fact: 'Extensive testing and code improvements to fit low-energy devices',
					description:
						'<p>Extensive testing and code improvements to fit low-energy devices like smartphones and Raspberry Pi (with an idea that the Anagolay can be run anywhere, even on Mars). Low energy devices are quite powerful and they can be used to be part of the Anagolay validator set, effectively validating the chain and its transactions. We develop our solution with a mindset, that every drop of energy matters.</p>',
					status: status.pending,
				},
				{ fact: 'Extended set of common Workflows and Operations ', status: status.pending },
			],
		},
	];
	const steps = events.map((event: Step): Step => {
		let state = status.done;
		let blur = 0;
		let op = 1;
		let factStatus = event.facts.map((f) => f.status);
		if (factStatus.includes(status.doing)) {
			state = status.doing;
			blur = 5;
			op = 0.98;
		} else if (factStatus.includes(status.pending)) {
			state = status.pending;
			blur = 10;
			op = 0.9;
		}
		return { ...event, status: state, blur, op };
	});

	let roadMap: HTMLDivElement;
	let roadWidth: number;
	let windowWidth: number;
	function scrollTo(left: number) {
		roadMap.scrollLeft = left;
	}
	//This functions always sets the fifth event in the middle of Roadmap, but it is not in function of the current event.
	//Check the position function.
	onMount(() => (roadMap.scrollLeft = 0.545 * roadWidth - 0.5 * windowWidth));
</script>

<div class="w-full">
	<div class="w-full bg-gradient-to-b from-black to-blue/0 h-[50rem]">
		<!-- <div class="w-full radialHeader md:min-h-[200vh] h-[80rem]"> -->
		<div class="text-med py-[5rem] md:pt-[10rem] md:pb-[15rem] px-3 md:ml-[10vw] font-dmsans">
			<div class="absolute right-0 top-[2rem] md:top-0 overflow-hidden max-h-screen">
				<video
					class=" w-screen min-w-[180vw] md:min-w-0 md:w-100 md:mt-0  max-h-3/4"
					playsinline
					autoplay
					muted
					loop
				>
					<source src="header_animation.webm" type="video/webm" />
				</video>
			</div>

			<Ellipse diam="1.5vw" left="10" top="90" op="0.5" blur="5" extraclass="absolute" />
			<Ellipse diam="4.5vw" left="25" top="75" op="0.5" blur="5" extraclass="absolute" />
			<div class={`relative pt-[95vw] md:pt-0 md:p-0 text-[1rem] md:text-[1.5rem]`}>
				<h1 class="mb-2 md:mb-5 tracking-wider text-center md:w-[50vw] md:max-w-[40rem] md:text-left">
					<p>Process-based Interplanetary P2P Framework</p>
				</h1>
				<p
					class="text-green font-bold text-center md:text-left mb-2 md:mb-8  mx-auto md:mx-0 w-5/6  md:w-[50vw]"
				>
					The transparent verifiable process with 100% source-code assurance
				</p>
				<p class="w-5/6 mx-auto text-center md:text-left md:mx-0 md:w-[55%]">
					No need for a central authority, or resource-heavy consensus mechanism to establish rules of the
					game — trust the process
				</p>
			</div>
		</div>
	</div>

	<!-- How it works Section -->
	<div class="relative flex w-full justify-center items-center min-h-screen text-center">
		<div class="flex flex-col items-center w-[90%] md:w-5/6">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-[2rem]">
				{#each beastFeatures as feat, i}
					<FeatureCard {feat} {i} />
				{/each}
			</div>
			<div class="flex mt-[3rem] flex-col mx-auto xl:w-5/6 xl:mx-auto">
				{#each howItems as item}
					<div class="md:flex text-left mb-8">
						<div class="justify-center mx-auto px-2 my-auto w-3/4 md:flex md:w-fit md:h-40" style="">
							<img class="md:object-contain h-[8rem] md:h-[unset] mx-auto" src={item.src} alt={item.alt} />
						</div>
						<div
							class="flex flex-col justify-center items-center md:items-start md:w-2/3 px-0 md:px-5 h-full my-auto"
						>
							<p class="text-center md:text-left mb-3">{item.text}</p>
							<a class="text-green" href={item.link}>learn more &#10230; </a>
						</div>
					</div>
				{/each}
			</div>
			<SectionButton>Learn more</SectionButton>
		</div>
	</div>

	<div class={`flex flex-col w-full justify-center items-center h-fit min-h-screen text-center`}>
		<div class="absolute h-[120%] w-full bg-[url('stars_background2.png')] mix-blend-lighten" />
		<div class="relative mt-0 flex flex-col items-center w-full m-full mt ">
			<h4 class="py-6 font-montserrat mb-3 w-3/4">
				Copyright and Ownership <i>Verifiable</i> Statements created and stored on Anagolay can be applied to solve
				a number of issues including, but not limited to:
			</h4>
			<div
				class="w-[19rem] carousel font-dmsans font-medium mx-auto md:w-fit md:h-fit"
				bind:this={carousel}
				on:scroll={() => console.log(carousel.scrollLeft)}
			>
				{#each cases as item}
					<div class="carousel-item mx-[.75rem] flex-col md:max-w-1/3 md:w[16rem]">
						<div
							class="relative w-5/12 h-[7rem] mx-auto py-auto flex items-center justify-center -mb-[3.2rem]"
						>
							<img class="object-contain max-h-full" src={item.src} alt={item.alt} />
						</div>
						<div
							class="box flex flex-col rounded-lg bg-blue px-[1rem] pt-[6rem] pb-[1rem] w-[18rem] md:w-[20rem] h-[25rem]"
						>
							<p class="w-full text-green text-center mb-[2rem] h-[4rem]">
								{item.title}
							</p>

							<p class="w-5/6 mx-auto">{item.text}</p>
							<div class="w-full mt-auto text-right">
								<a class="text-green mr-4 text-lg" href={item.link}>&#10230</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="flex justify-center w-full py-2 gap-2 md:invisible">
				{#each cases as item}
					<button
						class="btn h-1 w-1 btn-outline btn-accent p-0"
						id={'' + item.id}
						on:click={scrollCarousel}
					/>
					<!-- <a href={`#item${item.id}`}><button class="btn h-1 w-1 btn-outline btn-accent p-0" /></a> -->
				{/each}
			</div>
			<SectionButton>See more use cases</SectionButton>
		</div>
	</div>

	<div class="flex mt-20 px-3 py-auto text-center teamBg">
		<div class="absolute right-0 left-0 h-full">
			<Ellipse left="10" top="90" diam="7.5vw" op="0.5" blur="5" />
		</div>

		<div
			class="relative box w-full my-12 teamGrid rounded-3xl px-2 py-5 md:mx-auto md:w-5/6 md:py-6 md:px-[5%]"
		>
			<h2 class="font-medium ">Meet the team</h2>
			<div class="py-3 w-5/6 mx-auto grid gap-4 grid-cols-3 md:w-full md:grid-cols-6">
				{#each team as member}
					<div
						class={`rounded-full aspect-square overflow-hidden duration-700 w-full cursor-pointer ${
							selected && selected.name === member.name ? 'opacity-100' : 'opacity-40'
						} hover:opacity-100 `}
						on:click={() => selectMember(member.name)}
					>
						<img class="-mt-1 w-full" src={member.img} alt={member.name} />
					</div>
				{/each}
			</div>
			{#if selected}
				<h3 class="font-light">{selected.title}</h3>
				<p class="mt-2 text-green text-[1rem] md:text-[1.5rem]"><i>{selected.name}</i></p>
				<p class="mx-auto h-[14rem]  py-3 md:py-5 md:w-5/6 md:h-[10rem]">
					{selected.bio}
				</p>
				<div class="flex w-full justify-center">
					<a
						href={selected.link}
						target="_blank"
						rel="noreferrer"
						class="shadow-button active:shadow-pressed text-sm p-[1.5rem] w-fit mx-3 md:mt-5 bg-blue rounded-full"
					>
						<Linkedin color="var(--white)" size="1.8rem" /></a
					>
					{#if selected.github}
						<a
							href={selected.github}
							target="_blank"
							rel="noreferrer"
							class="shadow-button active:shadow-pressed text-sm p-[1.5rem] w-fit mx-3 md:mt-5 bg-blue rounded-full"
						>
							<Github color="var(--white)" size="1.8rem" /></a
						>
					{/if}
				</div>
			{/if}
		</div>
	</div>

	<div class="w-5/6 mx-auto pb-10">
		<div class="flex justify-between items-center w-full py-[4rem] text-xs md:text-base">
			<p
				class="text-left w-1/3 opacity-75 cursor-pointer hover:opacity-100 hover:underline"
				on:click={() => scrollTo(0)}
			>
				&#10229; Completed
			</p>
			<h2 class="w-1/3 text-center">Roadmap</h2>
			<p
				class="text-right w-1/3 opacity-75 cursor-pointer hover:opacity-100 hover:underline"
				on:click={() => scrollTo(roadWidth)}
			>
				Coming next &#10230;
			</p>
		</div>
		<div class="overflow-x-scroll scroll-smooth" bind:this={roadMap} bind:clientWidth={windowWidth}>
			<div
				id="team"
				style={`grid-template-columns: repeat(${events.length}, 20rem);`}
				class={`grid min-w-fit text-center`}
				bind:clientWidth={roadWidth}
			>
				{#each steps as event}
					<div class="col min-w-[15rem] mx-auto font-dmsans font-medium">
						<div
							class={`text-7xl text- ${
								event.status === status.pending ? 'opacity-30' : 'opacity-70'
							} blur-[2px] text-darkblue ${
								event.status === status.doing ? 'shadow-green' : 'shadow-white'
							}  text-shadow-around `}
						>
							{event.title}
						</div>
						<div
							class={`flex justify-end blur-0 text-xl pr-[1rem] -mt-[4rem] mb-[4rem] w-1/2 ${
								event.status === status.pending ? 'opacity-50' : ''
							}`}
						>
							{event.year}
						</div>
					</div>
				{/each}
				<div class="col col-span-full  h-[.2rem] mt-2 bg-gradient-to-r from-blue to-green " />
				{#each steps as event}
					<div class="col w-[2.1rem] mx-auto -mt-[1.1rem] h-[2rem]">
						<div class=" ">
							<Ellipse
								diam="2rem"
								left="0"
								top=""
								blur={'' + event.blur}
								op={'' + event.op}
								extraclass="relative blur-[5px]"
							/>
						</div>
					</div>
				{/each}
				{#each steps as event}
					<div class="col mt-5 min-w-[15rem] mx-auto  pb-10 text-[1rem]">
						{#each event.facts as fact}
							<div
								class={`factBox box h-fit bg-primary italic ${
									fact.status === status.pending ? 'opacity-50' : 'bg-opacity-50'
								} p-2 mb-2 rounded-md mx-auto text-white`}
								style={`${
									fact.status === status.doing ? 'border: 1px solid green; box-shadow: 0 0 .5rem #8cff00' : ''
								}`}
							>
								{fact.fact}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		<div class="flex items-center justify-center text-white text-[1rem] opacity-50 italic py-5">
			<PanLeft />
			<p class="md:hidden">Swipe to see</p>
			<p class="hidden md:block">Scroll to see</p>
			<!-- <p class="ml-[.3rem]">to see</p> -->
			<PanRight />
		</div>
		<div class="flex flex-col items-center">
			<a href="/." class="text-green hover:underline  text-[1.125rem]">See the full roadmap</a>
			<SectionButton clases="flex justify-center">
				<span class="material-icons">discord</span>
				<p class="ml-[.3rem]">Join the community</p>
			</SectionButton>
		</div>
	</div>

	<Footer />
</div>

<style>
	.radialHeader {
		background: radial-gradient(66.7vw 30vw at 75% 40%, #141f45 50.59%, rgba(20, 31, 69, 0) 100%);
		mix-blend-mode: darken;
		opacity: 0.7;
	}
	.starry {
		background: linear-gradient(rgba(5, 79, 119, 0) 70.87%, #054e76 100%), url('stars_background2.png');
		opacity: 0.6;
		mix-blend-mode: lighten;
		background-size: cover;
	}

	/* Team section syle */
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
		background: url('line2.png') 100% 100% / 30vw no-repeat, url('line1.png') 0% 0% / 30vw no-repeat;
	}

	/* Roadmap style */
	.factBox {
		width: 12rem;
		background: linear-gradient(0deg, #054f7766, #054f7766);
		box-sizing: border-box;
	}
</style>

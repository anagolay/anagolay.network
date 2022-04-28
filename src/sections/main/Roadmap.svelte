<script lang="ts">
	import { onMount } from 'svelte';
	import SectionButton from '$src/components/SectionButton.svelte';

	enum status {
		done = 'done',
		doing = 'doing',
		pending = 'pending',
	}

	interface Step {
		title: string;
		year: number;
		status?: string;
		pointBlur?: string;
		pointOpacity?: string;
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
						'An important milestone for Anagolay, as building the provable process for proof generation must always execute the same code.\nDetails and results are [presented here](https://dev.to/woss/part-1-rehosting-git-repositories-on-ipfs-23bf)',
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
						'Most common (generic) Operations that will be used in almost any Workflow. This includes features from QRCode generation, Multimedia extraction, calculation of Cryptographic hashes, and a multitude of perceptual and Locally sensitive hashes.',
					status: status.done,
				},
			],
		},
		{
			title: 'Q2',
			year: 2022,
			facts: [
				{ fact: ' Anagolay rebrand and new website', status: status.doing },
				{
					fact: 'Idiyanale Phase 2/2 (Web3 Foundation Grant)',
					status: status.doing,
				},
				{
					fact: 'PoE & Statement of Ownership and Copyright',
					description:
						'Improve and re-design the workflows specific for Proofs-of-Exitance & Statement of Ownership and Copyright. Where blockchain is not the central technology, but a facilitator of transparency & freedom for the build architecture.',
					status: status.pending,
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
						'Anagolay Explorer (focused on the Statements, Operation, Workflows and transfers of Ownerships and Copyrights).',
					status: status.pending,
				},
				{
					fact: 'Anagolay SDK',
					description:
						'While building SDK we will focus on the features for our JS/TS SDK, because the Anagolay interaction will come mostly from the Web Browser, Smart phones and Desktop environments. Our goal is to design SDK as intuitive and developer-friendly as possible.',
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
						"Each Operation and Workflow produce the built artifacts for WASM and rust language targets. These artifacts must not be tampered with before they are stored on the chain and they must not be built on the developers' machines. If they were, then the developers can act as bad actors and try to inject the code in the middle of the process and try to fool any other user who will use that Operation or Workflow. This is going to be a new application and will come together with the incentive layer on-chain.",
					status: status.pending,
				},
				{
					fact: 'Innovation on the permanent storage for Anagolay purpose',
					description:
						'this may include the on-chain incentive to have the IPFS nodes running (either cluster or not) and storing the off-chain Anagolay data; Operation, Workflow and any other artefacts that are needed to have the Statements working.',
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
						'Extensive testing and code improvements to fit low-energy devices like smartphones and Raspberry Pi (with an idea that the Anagolay can be run anywhere, even on Mars). Low energy devices are quite powerful and they can be used to be part of the Anagolay validator set, effectively validating the chain and its transactions. We develop our solution with a mindset, that every drop of energy matters.',
					status: status.pending,
				},
				{ fact: 'Extended set of common Workflows and Operations ', status: status.pending },
			],
		},
	];
	// Steps are events that have global status, blur and opacity set for the timeline.
	const steps = events.map((event: Step): Step => {
		let state = status.done;
		let pointBlur = '';
		let pointOpacity = '';
		let factStatus = event.facts.map((f) => f.status);
		if (factStatus.includes(status.doing)) {
			state = status.doing;
			pointBlur = 'blur-[2px]';
			pointOpacity = 'opacity-90';
		} else if (factStatus.includes(status.pending)) {
			state = status.pending;
			pointBlur = 'blur-[5px]';
			pointOpacity = 'opacity-75';
		}
		return { ...event, status: state, pointBlur, pointOpacity };
	});

	let gridClass = `grid w-full text-center grid-flow-col gap-36 auto-cols-fit`;

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

<div class="mx-auto pt-8 md:w-11/12">
	<div class="flex justify-between items-center w-full text-xs md:text-base pb-16">
		<button
			class="flex items-center text-left w-1/3 opacity-60 cursor-pointer hover:opacity-100"
			on:click={() => scrollTo(0)}
		>
			<span class="material-icons mr-2 text-sm  md:text-base">west</span>
			<p class="hover:underline">Completed</p>
		</button>
		<h2 class="w-1/3 text-center text-xl md:text-3xl">Roadmap</h2>
		<button
			class="flex items-center justify-end w-1/3 opacity-60 cursor-pointer hover:opacity-100"
			on:click={() => scrollTo(roadWidth)}
		>
			<p class="hover:underline">Coming next</p>
			<span class="material-icons ml-2 text-sm md:text-base hover:no-underline">east</span>
		</button>
	</div>
	<div class="text-sm md:text-base">
		<div class="overflow-x-scroll scroll-smooth" bind:this={roadMap} bind:clientWidth={windowWidth}>
			<div class="w-fit">
				<div>
					<div class={gridClass} bind:clientWidth={roadWidth}>
						{#each steps as event}
							<div class="mx-auto">
								<div
									class="text-7xl {event.status === status.pending
										? 'opacity-30'
										: 'opacity-70'} blur-[2px] text-darkblue {event.status === status.doing
										? 'shadow-green'
										: 'shadow-white'}  text-shadow-around"
								>
									{event.title}
								</div>
								<div
									class="flex justify-end blur-0 text-xl pr-[1rem] -mt-[4rem] mb-[4rem] w-1/2 {event.status ===
									status.pending
										? 'opacity-50'
										: ''}"
								>
									{event.year}
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="w-fit">
					<div class="w-full h-[.2rem] mt-2 bg-gradient-to-r from-blue to-green " />
					<div class={gridClass}>
						{#each steps as event}
							<div class="flex flex-col items-center mx-auto -mt-[1.1rem]">
								<div
									class="mb-4 relative w-8 h-8 bg-sphere from-green to-blue rounded-full -rotate-[25deg] {event.pointBlur} {event.pointOpacity}"
								/>
								{#each event.facts as fact}
									<div
										class="w-56 p-7 mb-4  h-fit bg-blue italic {fact.status === status.pending
											? 'opacity-80'
											: 'bg-opacity-80'} mb-2 rounded-xl mx-auto text-anagolayWhite font-light {fact.status ===
										status.doing
											? 'shadow-card shadow-green border border-green'
											: 'shadow-button'}"
									>
										{fact.fact}
									</div>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-center text-white opacity-50 italic mt-16 mb-12">
			<span class="material-icons mr-2">west</span>
			<p class="md:hidden">Swipe to see</p>
			<p class="hidden md:block">Scroll to see</p>
			<span class="material-icons ml-2">east</span>
		</div>
		<div class="flex flex-col items-center">
			<a href="/" class="text-green hover:underline">See the full roadmap</a>
			<SectionButton url="https://discordapp.com/invite/WHe4EuY" class="flex justify-center my-32">
				<span class="material-icons">discord</span>
				<p class="ml-[.3rem]">Join the community</p>
			</SectionButton>
		</div>
	</div>
</div>

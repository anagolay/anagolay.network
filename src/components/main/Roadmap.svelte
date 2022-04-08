<script lang="ts">
	import { onMount } from 'svelte';

	import Ellipse from './Ellipse.svelte';

	enum status {
		done = 'done',
		doing = 'doing',
		pendant = 'pendant',
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
					status: status.doing,
				},
				{ fact: ' Anagolay rebrand and new website', status: status.doing },
				{
					fact: 'Idiyanale Phase 2/2 (Web3 Foundation Grant)',
					status: status.pendant,
				},
			],
		},
		{
			title: 'Q3',
			year: 2022,
			facts: [
				{
					fact: 'Governance design and implementation',
					status: status.pendant,
				},
				{
					fact: 'Anagolay Explorer',
					description:
						'<p>Anagolay Explorer (focused on the Statements, Operation, Workflows and transfers of Ownerships and Copyrights).</p>',
					status: status.pendant,
				},
				{
					fact: 'Anagolay SDK',
					description:
						'<p>While building SDK we will focus on the features for our JS/TS SDK, because the Anagolay interaction will come mostly from the Web Browser, Smart phones and Desktop environments. Our goal is to design SDK as intuitive and developer-friendly as possible.</p>',
					status: status.pendant,
				},
			],
		},
		{
			title: 'Q4',
			year: 2022,
			facts: [
				{ fact: 'Idiyanale Mainnet Ready', status: status.pendant },
				{ fact: 'IDI Token Launch', status: status.pendant },
				{
					fact: 'Promote for Use Cases and Get Apps Running on Idiyanale',
					status: status.pendant,
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
					status: status.pendant,
				},
				{
					fact: 'Innovation on the permanent storage for Anagolay purpose',
					description:
						'<p>this may include the on-chain incentive to have the IPFS nodes running (either cluster or not) and storing the off-chain Anagolay data; Operation, Workflow and any other artefacts that are needed to have the Statements working.</p>',
					status: status.pendant,
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
					status: status.pendant,
				},
				{ fact: 'Extended set of common Workflows and Operations ', status: status.pendant },
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
			blur = 2;
			op = 0.98;
		} else if (factStatus.includes(status.pendant)) {
			state = status.pendant;
			blur = 2;
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

<div class="w-5/6 mx-auto pb-10">
	<div class="flex justify-between items-center w-full py-12 text-xs md:text-base">
		<p
			class="flex flex-col-reverse md:flex-row opacity-75 w-1/3 text-left cursor-pointer hover:opacity-100 hover:underline"
			on:click={() => scrollTo(0)}
		>
			&#10229; Completed
		</p>
		<h2 class="w-1/3 text-center">Roadmap</h2>
		<p
			class="flex flex-col md:flex-row w-1/3 text-right opacity-75 cursor-pointer hover:opacity-100 hover:underline"
			on:click={() => scrollTo(roadWidth)}
		>
			Coming next &#10230;
		</p>
	</div>
	<div class="overflow-x-scroll scroll-smooth" bind:this={roadMap} bind:clientWidth={windowWidth}>
		<div
			style={`grid-template-columns: repeat(${events.length}, 20rem);`}
			class={`grid min-w-fit text-center`}
			bind:clientWidth={roadWidth}
		>
			{#each steps as event}
				<div class="col min-w-[15rem] mx-auto font-dmsans font-medium">
					<div
						class={`text-7xl text- ${
							event.status === status.pendant ? 'opacity-30' : 'opacity-70'
						} blur-[2px] text-darkblue ${
							event.status === status.doing ? 'shadow-green' : 'shadow-white'
						}  text-shadow-around `}
					>
						{event.title}
					</div>
					<div
						class={`flex justify-end blur-0 text-xl pr-[1rem] -mt-[4rem] mb-[4rem] w-1/2 ${
							event.status === status.pendant ? 'opacity-50' : ''
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
				<div class="col mt-5 min-w-[15rem] mx-auto  pb-10">
					{#each event.facts as fact}
						<div
							class={`factBox box h-fit bg-primary italic ${
								fact.status === status.pendant ? 'opacity-50' : 'bg-opacity-50'
							} p-2 mb-2 rounded-md mx-auto text-white text-sm`}
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
	<button class="btn btn-primary min-w-fit w-[25vw] mx-auto py-3 my-6 text-white">Learn more</button>
</div>

<style>
	.factBox {
		width: 12rem;
		background: linear-gradient(0deg, #054f7766, #054f7766);
		/* opacity: 0.5; */
		/* border: 1px solid #8cff00; */
		box-sizing: border-box;
	}
</style>

<script lang="ts">
	import { exclude_internal_props } from 'svelte/internal';

	import Ellipse from './Ellipse.svelte';

	enum status {
		done = 'done',
		doing = 'doing',
		pendant = 'pendant',
	}
	console.log('status', status);

	interface Step {
		title: string;
		year: number;
		status?: string;
		blur?: number;
		op?: number;
		facts: { fact: string; status: string }[];
	}
	let events: Step[] = [
		// {
		// 	title: 'Q1',
		// 	year: 2021,
		// 	facts: [
		// 		{ fact: 'Concept Design ready', status:  status.done },
		// 		{ fact: 'Key Technologies Validation', status:  status.done },
		// 	],
		// },
		// {
		// 	title: 'Q2',
		// 	year: 2021,
		// 	facts: [
		// 		{ fact: 'Protocol Design', status:  status.done },
		// 		{ fact: 'Anagolay Chain Prototype', status:  status.done },
		// 	],
		// },
		// {
		// 	title: 'Q3',
		// 	year: 2021,
		// 	facts: [
		// 		{
		// 			fact: 'Initial Version of Anagolay Chain Implementation',
		// 			status:  status.done,
		// 		},
		// 		{ fact: 'Initial Documentation Version', status:  status.done },
		// 	],
		// },
		{
			title: 'Q4',
			year: 2021,
			facts: [
				{
					fact: 'Self-hosted service for rehosting git repositories on IPFS',
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
				{ fact: 'Anagolay Explorer', status: status.pendant },
				{ fact: 'Anagolay SDK', status: status.pendant },
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
		// {
		// 	title: 'Q1',
		// 	year: 2023,
		// 	facts: [
		// 		{
		// 			fact: 'Distributed-build system for Artefacts',
		// 			status:  status.pendant,
		// 		},
		// 		{
		// 			fact: 'New CVer with decentralized p2p database & IPFS-based distributed storage',
		// 			status:  status.pendant,
		// 		},
		// 		{
		// 			fact: 'Innovation on the permanent storage for Anagolay purpose',
		// 			status:  status.pendant,
		// 		},
		// 	],
		// },
		// {
		// 	title: 'Q2',
		// 	year: 2023,
		// 	facts: [
		// 		{
		// 			fact: 'Extensive testing and code improvements to fit low-energy devices',
		// 			status:  status.pendant,
		// 		},
		// 		{ fact: 'Anagolay Mainnet Launch', status:  status.pendant },
		// 	],
		// },
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
</script>

<div class="overflow-x-scroll">
	<div class={`grid ${'grid-cols-' + events.length} grid-cols-5 min-w-fit text-center`}>
		{#each steps as event}
			<div class="col min-w-[15rem] mx-auto font-dmsans font-medium">
				<div
					class="text-7xl text- opacity-50 blur-[2px] text-darkblue "
					style="text-shadow: 1px 0 3px white, -1px 0 3px white, 0 1px 3px white, 0 -1px 3px white;"
				>
					{event.title}
				</div>
				<div class="flex justify-end blur-0 text-xl -mt-[4rem] mb-[4rem] w-1/4">
					{event.year}
				</div>
			</div>
		{/each}
		<div class="col col-span-full  h-[.2rem] mt-2 bg-gradient-to-r from-blue to-green " />
		{#each steps as event}
			<div class="col w-[2.1rem] mx-auto -mt-[1.1rem] h-[2rem]">
				<div class="absolute ">
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
			<div class="col mt-5 min-w-[15rem] mx-auto">
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

<style>
	.factBox {
		width: 12rem;
		background: linear-gradient(0deg, #054f7766, #054f7766);
		/* opacity: 0.5; */
		/* border: 1px solid #8cff00; */
		box-sizing: border-box;
	}
</style>

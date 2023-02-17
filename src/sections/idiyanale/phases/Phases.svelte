<script>
	import Phase from '$src/components/Phase.svelte';
	import PhaseCard from '$src/components/PhaseCard.svelte';
</script>

<Phase id="phase-0" bgClass="bg-spaceBlue-900">
	<p slot="phasenumber">Phase 0</p>
	<p slot="phasequarter">Q1 2023</p>
	<p slot="title">Parachain On-boarding on Rococo</p>
	<p slot="description">Testnet launch on rococo with collators run by the Anagolay Team.</p>
	<div
		slot="cards"
		class="flex flex-col items-center md:flex-row w-full gap-8 md:items-stretch flex-wrap justify-center"
	>
		<PhaseCard>
			<p slot="title">Goal</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Test Idiyanale’s stability and resilience</li>
				<li>Setup the infra for the monitoring and recovery</li>
				<li>
					Launch the testnet with currently implemented functionality, including the tipping, block
					production, and finalization
				</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Tech Updates</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Closed collator set run by the Anagolay team</li>
				<li>Stress testing and monitoring</li>
				<li>Launch in Sudo mode, where the Sudo account is controlled by Anagolay Team</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Stakeholder Impact</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Test the chain features in a truly edge-case environment</li>
				<li>Participate in the Idiyanale Crowdloan to secure the parachain slot in the next phase</li>
			</ul>
		</PhaseCard>
	</div>
</Phase>

<Phase id="phase-1" bgClass="bg-gradient-to-b from-phaseBg via-spaceBlue-900 to-phaseBg ">
	<p slot="phasenumber" class="whitespace-nowrap">Phase 1</p>
	<p slot="phasequarter" class="whitespace-nowrap">April 2023</p>
	<p slot="title">Parachain On-boarding on Kusama</p>
	<p slot="description">
		The Genesis block is launched, and the network is supported by service providers managed by the Anagolay
		team.
	</p>
	<div
		slot="cards"
		class="flex flex-col items-center md:flex-row w-full gap-8 md:items-stretch flex-wrap justify-center"
	>
		<PhaseCard>
			<p slot="title">Goal</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>
					Launch Idiyanale with a full feature set, including:
					<ul class="list-circle text-left pl-8">
						<li>Community tipping</li>
						<li>Verification</li>
						<li>Ownership statements</li>
						<li>Blockchain production</li>
						<li>Block finalization</li>
					</ul>
				</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Tech Updates</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>
					Minimal working feature set to support community tipping and support with the possibility to verify
					multiple online identities
				</li>
				<li>Closed collator set ( COL=5 ) hosted by the Anagolay Team</li>
				<li>
					Working with 3rd party service providers ( e.g., MayhamNodes ) to participate in closed collator set
				</li>
				<li>Launch in Sudo mode, where the Sudo account is controlled by Anagolay Team</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Stakeholder Impact</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>
					Users of Idiyanale will have limited functionality at this stage. Users will not be able to claim
					rewards, stake, execute balance transfers, or use any tipping or verification functionality
				</li>
			</ul>
		</PhaseCard>
	</div>
</Phase>

<Phase id="phase-2" bgClass="bg-spaceBlue-900">
	<p slot="phasenumber" class="whitespace-nowrap">Phase 2</p>
	<p slot="phasequarter" class="whitespace-nowrap">after the network launch</p>
	<p slot="title">Delegated Proof of Stake</p>
	<p slot="description">
		To increase stability, adoption, and trustworthiness it’s time to start with the transition to PoS. At
		this phase, the Idiyanale is stable and used by early adopters.
	</p>
	<div
		slot="cards"
		class="flex flex-col items-center md:flex-row w-full gap-8 md:items-stretch flex-wrap justify-center"
	>
		<PhaseCard>
			<p slot="title">Goal</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Add staking and delegation mechanisms to third-party collator service providers</li>
				<li>Continue to monitor the reliability of the system and increase traffic</li>
				<li>
					Ensure the decentralized collator set is performing well with the Kusama Relay Chain and its
					validators
				</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Tech Updates</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Start with the collator selection</li>
				<li>The active collator set is COL=10, and registration is done using Sudo</li>
				<li>Collator selection is permissioned by the Anagolay team</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Stakeholder Impact</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>
					Users will continue to have the same functionality as in the previous phase. Collators and crowdloan
					contributors cannot stake or receive rewards until the next phase.
				</li>
				<li>
					Collators will be able to perform actions necessary for block production. This phase is opened to a
					select set of collators who have enough IDI tokens to meet the minimum bond.
				</li>
			</ul>
		</PhaseCard>
	</div>
</Phase>

<Phase id="phase-3" bgClass="bg-gradient-to-b from-phaseBg via-spaceBlue-900 to-phaseBg ">
	<p slot="phasenumber">Phase 3</p>
	<p slot="phasequarter">May 2023</p>
	<p slot="title">Token Distribution Event</p>
	<p slot="description">
		This entails the distribution of the first set of IDI rewards to crowdloan supporters and community
		members. The distribution will enable everybody to use all Idiyanale functionality.
	</p>
	<div
		slot="cards"
		class="flex flex-col items-center md:flex-row w-full gap-8 md:items-stretch flex-wrap justify-center"
	>
		<PhaseCard>
			<p slot="title">Goal</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Distribute crowdloan rewards to supporters</li>
				<li>Enable early supporters to start using our tipping and verification functionality</li>
				<li>Promote and partner with prominent content and visual creators</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Tech Updates</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>The first distribution of crowdloan rewards to supporters.</li>
				<ul class="list-circle text-left pl-8">
					<li>
						30% of “Crowdloan Rewards” allocation will be distributed to Idiyanale crowdloan participants
					</li>
					<li>Delegators can begin staking to different collators.</li>
				</ul>

				<li>The collator set will increase to COL=24.</li>
				<li>Full Idiyanale features are accessible</li>
				<li>
					The Anagolay team will continue to manage via Sudo to ensure we are upgrading correctly and with the
					minimum downtime
				</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Stakeholder Impact</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>
					Users of Idiyanale will be able to use the tipping and verification functionality to verify their
					online identities and support verified creators with IDI tokens, and Crowdloan contributors will
					receive their rewards at this time.
				</li>
				<li>
					Collators (not in the closed set) are unaffected. IDI token holders cannot transfer tokens to other
					wallets..
				</li>
			</ul>
		</PhaseCard>
	</div>
</Phase>

<Phase id="phase-4" mdPy="md:py-48" bgClass="bg-spaceBlue-900">
	<p slot="phasenumber">Phase 4</p>
	<p slot="phasequarter">Q3 2023</p>
	<p slot="title">Governance</p>
	<p slot="description">
		Once the team is confident in the stability, we will use the Sudo key to enable governance.
	</p>
	<div
		slot="cards"
		class="flex flex-col items-center md:flex-row w-full gap-8 md:items-stretch flex-wrap justify-center"
	>
		<PhaseCard>
			<p slot="title">Goal</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Ensure all on-chain governance systems are working as expected</li>
				<li>Ensure the stability of the system and begin community governance proceedings</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Tech Updates</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>The collator set will remain at C=24 (or higher)</li>
				<li>Governance is enabled</li>
			</ul></PhaseCard
		>
		<PhaseCard>
			<p slot="title">Stakeholder Impact</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>
					Any token holder can participate in governance, ensuring the decentralization of the decision-making
					of the network.
				</li>
			</ul>
		</PhaseCard>
	</div>
</Phase>

<Phase id="phase-5" mdPy="md:py-40" bgClass="bg-gradient-to-b from-phaseBg via-spaceBlue-900 to-phaseBg">
	<p slot="phasenumber">Phase 5</p>
	<p slot="phasequarter">Q3 2023</p>
	<p slot="title">Full Feature Launch</p>
	<p slot="description">
		Any end user with IDI tokens can use tipping and verification functionality, staking, wallet transfers,
		and more.
	</p>
	<div
		slot="cards"
		class="flex flex-col items-center md:flex-row w-full gap-8 md:items-stretch flex-wrap justify-center"
	>
		<PhaseCard>
			<p slot="title">Goal</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Balance transfers (wallet to wallet) will be enabled via Sudo</li>
				<li>
					The Anagolay team will monitor the system closely and work with relevant stakeholders (like
					collators) to ensure a well-functioning system
				</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Tech Updates</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>
					Collator set will remain at C=24 (or higher), and end users can now stake to delegate collators
				</li>
			</ul></PhaseCard
		>
		<PhaseCard>
			<p slot="title">Stakeholder Impact</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>
					All end users can use Idiyanale functionality, including but not limited to claiming rewards,
					executing balance transfers, and using tipping and verification functionality.
				</li>
				<li>
					The collator set will continue to be permissioned by the Anagolay team as new features for collator
					selection and staking are rolled out
				</li>
			</ul>
		</PhaseCard>
	</div>
</Phase>

<Phase id="phase-6" mdPy="md:py-48" bgClass="bg-spaceBlue-900">
	<p slot="phasenumber">Phase 6</p>
	<p slot="phasequarter">TBD</p>
	<p slot="title">Governance</p>
	<p slot="description">
		At this point, we remove Sudo (the super user key) and hand over control of the network to token holders.
	</p>
	<div
		slot="cards"
		class="flex flex-col items-center md:flex-row w-full gap-8 md:items-stretch flex-wrap justify-center"
	>
		<PhaseCard>
			<p slot="title">Goal</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>Removing Sudo means we are 100% confident in all systems</li>
				<li>
					Once the Sudo key is removed, any extrinsic call that used to require Sudo (upgrades, etc.) will now
					be done through a council motion
				</li>
			</ul>
		</PhaseCard>
		<PhaseCard>
			<p slot="title">Tech Updates</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>The collator set will remain at C=24 (or higher)</li>
				<li>Removal of Sudo ownership from the Anagolay team</li>
				<li>Staking will be open to any IDI token holders for collator selection</li>
			</ul></PhaseCard
		>
		<PhaseCard>
			<p slot="title">Stakeholder Impact</p>
			<ul slot="content" class="list-disc text-left pl-6">
				<li>IDI holders can use the full chains’ functionality</li>
				<li>IDI holders can now select new collators by staking their IDI to selected collators</li>
				<li>IDI holders have control of the direction of the chain via governance</li>
			</ul>
		</PhaseCard>
	</div>
</Phase>

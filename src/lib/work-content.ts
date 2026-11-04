export interface WorkSession {
  name: string;
  topic: string;
  text: string;
}

export interface WorkEvent {
  slug: string;
  kind: string;
  title: string;
  date: string;
  dateLabel: string;
  format: string;
  status: string;
  summary: string;
  agenda: string[];
  placeholder: boolean;
}

export interface WorkIndustryDeliverable {
  title: string;
  detail: string;
}

export interface WorkIndustry {
  slug: string;
  n: string;
  name: string;
  evidenceStatus?: 'exploratory' | 'flagship';
  intro: string;
  problems: string[];
  question: string;
  scope?: string;
  steps: string[];
  deliverables?: WorkIndustryDeliverable[];
  dataBoundary?: string;
  exclusions?: string;
  challenge?: string;
}

export interface WorkNewsRelease {
  slug: string;
  title: string;
  dek: string;
  dateLabel: string;
  location: string;
  paragraphs: string[];
  quote: {
    text: string;
    attribution: string;
  };
  intensiveTopics: {
    title: string;
    text: string;
  }[];
  capNote: string;
  about: string;
  contact: {
    label: string;
    email: string;
    website: string;
  };
}

export const WORK_OFFER = {
  virtualPrice: 17500,
  onsitePrice: 27500,
  virtualParticipants: 20,
  diagnosticMinutes: 45,
  creditRate: 0.5,
  creditDays: 90,
  pilotWeeks: [4, 6] as const,
};

export const formatUsd = (amount: number) => `US$${amount.toLocaleString('en-US')}`;

export const EXECUTIVE_SERIES_SESSIONS: WorkSession[] = [
  {
    name: 'The asymptotic wall',
    topic: 'Industrial combinatorics',
    text: 'Examine where problem size, dense dependencies and time limits constrain classical mining schedules and fleet dispatch.',
  },
  {
    name: 'Topology meets architecture',
    topic: 'Trapped-ion systems',
    text: 'Explore all-to-all connectivity, native interaction gates and the routing overhead of different hardware architectures.',
  },
  {
    name: 'From formulation to compilation',
    topic: 'Nexus Cloud · pytket',
    text: 'Follow a problem through circuit compilation, realistic noise emulation and resource measurement.',
  },
  {
    name: 'A roadmap, not a leap of faith',
    topic: 'Industrial feasibility',
    text: 'Design classical baselines, hybrid workflows and decision gates for a measured quantum exploration programme.',
  },
];

export const INTENSIVE_SYLLABUS: [string, string, string, string][] = [
  [
    '09:00–10:30',
    'Executive de-hype & hardware reality',
    'Leadership',
    'Compare architectures, gate fidelity and connectivity; assess roadmaps and capital allocation.',
  ],
  [
    '10:45–12:30',
    'Industrial formulation & gate mapping',
    'Leadership + technical leads',
    'Map constraints into QUBO and Hamiltonian formulations; examine precedence graphs and native gates.',
  ],
  [
    '12:30–13:30',
    'Executive working lunch',
    'All participants',
    'Commercial strategy, open questions and post-quantum cryptographic readiness.',
  ],
  [
    '13:30–15:30',
    'Hands-on technical lab',
    'OR + data science',
    'Compile with pytket, use Nexus noise emulators and measure circuit depth against classical baselines.',
  ],
  [
    '15:45–17:00',
    'Enterprise roadmap & diagnostic',
    'Combined working group',
    'Review current solver runtimes, select pilot candidates and scope a six-month exploration roadmap.',
  ],
];

export const NEXT_COHORT = {
  date: '2026-11-26',
  label: '26 November 2026',
  format: 'Virtual & Singapore Hybrid',
  teamLimit: 4,
  status: 'Applications open',
};

export const MONTHLY_BRIEFING = {
  name: 'Eve Count Industrial Combinatorics Briefing',
  intervalMonths: 1,
};

export const BUYER_CLARITY_CLAUSES = {
  ip: 'All proprietary operational datasets, mine block models, logistics graphs and company-specific objective functions remain 100% your exclusive property under a bilateral MNDA. Ownership and licensing of any reusable tools or newly developed deliverables are documented separately in the engagement agreement.',
  infrastructure:
    'Standard compiler optimisation and noise emulation passes on Nexus are fully absorbed in the engagement fee. Additional live-hardware work or expanded compute scope is agreed before it is commissioned.',
  deliveryScope:
    'Feasibility pilots definitively evaluate circuit depth, noise scaling and algorithmic crossover thresholds against classical solvers. They do not require altering live production systems.',
  dataSecurity:
    'We routinely work with normalized coordinate systems and anonymized operational constraints, so a pilot can proceed without exposing commercially sensitive records and stays aligned with internal data governance requirements.',
};

export const BUYER_FAQS: { question: string; answer: string }[] = [
  {
    question: 'What prerequisites do our internal teams need?',
    answer:
      'Your operations research or data science leads need standard Python fluency and familiarity with your current solver formulations, such as Gurobi, CPLEX or Python PuLP. No prior quantum mechanics or QPU physics background is required.',
  },
  {
    question: 'Who owns the intellectual property?',
    answer: BUYER_CLARITY_CLAUSES.ip,
  },
  {
    question: 'How are Nexus compute and platform costs handled?',
    answer: BUYER_CLARITY_CLAUSES.infrastructure,
  },
  {
    question: 'What does a feasibility pilot actually cover?',
    answer: BUYER_CLARITY_CLAUSES.deliveryScope,
  },
  {
    question: 'How is our data handled before and during the engagement?',
    answer: BUYER_CLARITY_CLAUSES.dataSecurity,
  },
  {
    question: 'What can a feasibility assessment not prove?',
    answer:
      'We do not sell speculative production supremacy on current-generation hardware. A pilot measures mathematical compatibility, compiled circuit depth, noise sensitivity and resource requirements within the agreed benchmark scope. Physical-qubit requirements and crossover horizons are estimates subject to assumptions—not definitive proof that your dataset will outperform classical solvers. Emulator results alone cannot establish live-hardware fidelity or quantum advantage.',
  },
  {
    question: 'How does the next cohort differ from a private intensive?',
    answer:
      'The 26 November 2026 executive intensive cohort is offered in a Virtual & Singapore Hybrid format, with applications open for up to four enterprise teams. Private corporate intensives remain separately scheduled; the virtual private format allows up to 20 internal participants. Cohort timings, attendance arrangements and fees are confirmed before acceptance.',
  },
  {
    question: 'How are cancellations and changes handled?',
    answer:
      'Cancellation, rescheduling, payment and recording terms are agreed in writing before confirmation. Ask for these terms with your proposal; submitting an application does not create a paid booking.',
  },
];

export const WORK_EVENTS: WorkEvent[] = [
  {
    slug: 'executive-intensive-cohort-nov-2026',
    kind: 'Executive cohort',
    title: 'Executive Intensive Cohort — Heavy Assets, Hard Combinatorics',
    date: NEXT_COHORT.date,
    dateLabel: NEXT_COHORT.label,
    format: NEXT_COHORT.format,
    status: NEXT_COHORT.status,
    summary:
      'The one-day corporate intensive delivered as a shared cohort: map a target operational bottleneck, compile a sandbox benchmark on Nexus and leave with a documented feasibility position.',
    agenda: [
      'Morning — combinatorial reformulation: from solver models to high-density Hamiltonians',
      'Midday — trapped-ion topology and native ZZ(θ) gate interactions',
      'Afternoon — pytket compilation passes and emulator benchmarking on Nexus',
      'Close — executive decision gates: what a feasibility result does and does not prove',
    ],
    placeholder: false,
  },
  {
    slug: 'mining-combinatorics-webinar-2027',
    kind: 'Technical webinar',
    title: 'Stope Sequencing on Trapped-Ion Hardware',
    date: '2027-02-01',
    dateLabel: 'Q1 2027 · date to be confirmed',
    format: 'Virtual',
    status: 'Dates to be confirmed',
    summary:
      'A technical walkthrough of reformulating extraction precedence and grade-blending constraints for all-to-all trapped-ion connectivity, based on the Eve Count mining feasibility blueprint.',
    agenda: [
      'The classical MILP baseline and where it stalls',
      'Hamiltonian formulation of precedence matrices',
      'Compilation depth versus planar swap-mapping baselines',
    ],
    placeholder: true,
  },
  {
    slug: 'maritime-fleet-webinar-2027',
    kind: 'Technical webinar',
    title: 'Fleet Recovery and Port Bottlenecks — a Quantum Feasibility Lens',
    date: '2027-05-01',
    dateLabel: 'Q2 2027 · date to be confirmed',
    format: 'Virtual',
    status: 'Dates to be confirmed',
    summary:
      'How dynamic vessel routing and port congestion problems map onto trapped-ion circuit structures, and what emulator benchmarks can and cannot tell a fleet operator today.',
    agenda: [
      'Fleet recovery as a dense combinatorial problem',
      'Noise emulation and circuit scaling on Nexus',
      'Decision gates before any pilot commitment',
    ],
    placeholder: true,
  },
  {
    slug: 'executive-intensive-cohort-2027',
    kind: 'Executive cohort',
    title: 'Executive Intensive Cohort — Second 2027 Cohort',
    date: '2027-09-01',
    dateLabel: 'Q3 2027 · date to be confirmed',
    format: 'Virtual & Singapore Hybrid',
    status: 'Dates to be confirmed',
    summary:
      'A second delivery of the one-day executive intensive cohort, following the November 2026 edition. Format, seat allocation and fees are confirmed with registered interest before applications open.',
    agenda: [
      'Programme mirrors the November 2026 cohort',
      'Seat allocation and fees confirmed before applications open',
    ],
    placeholder: true,
  },
];

export const getSortedEvents = () =>
  [...WORK_EVENTS].sort((a, b) => a.date.localeCompare(b.date));

export const getEventBySlug = (slug: string) =>
  WORK_EVENTS.find((ev) => ev.slug === slug);

export const WORK_INDUSTRIES: WorkIndustry[] = [
  {
    slug: 'mining',
    n: '01',
    name: 'Mining & resources',
    intro:
      'Long horizons. Spatial precedence. Competing grades and capacity constraints. An operational plan is only as useful as the formulation and assumptions behind it.',
    problems: [
      'Multi-pit extraction planning',
      'Open-pit and underground precedence graphs',
      '3D stope sequencing',
      'Grade blending and resource allocation',
    ],
    question:
      'Which dependencies force your current model to aggregate, simplify or stop before the desired solution quality?',
    steps: [
      'Document the current MILP or heuristic formulation, solver settings and runtimes.',
      'Select a bounded scheduling or sequencing subproblem with measurable objectives.',
      'Map constraints and investigate a QUBO or Hamiltonian representation.',
      'Compare resource estimates and emulator results before proposing a pilot.',
    ],
  },
  {
    slug: 'maritime',
    n: '02',
    name: 'Maritime & fleet operations',
    intro:
      'Vessel rotations, port queues and changing conditions create interdependent decisions. The priority is not a bigger model at any cost—it is a better decision inside the operational window.',
    problems: [
      'Dynamic fleet dispatch',
      'Capesize routing and port bottlenecks',
      'Disruption recovery and vessel rotations',
      'Fuel, timing and capacity trade-offs',
    ],
    question:
      'Where do route interactions and disruption scenarios exceed the time or quality budget of your existing solver?',
    steps: [
      'Capture the current routing or recovery workflow and its operational time limit.',
      'Choose a bounded dispatch or disruption scenario with a reproducible baseline.',
      'Map decision variables, non-local dependencies and feasibility constraints.',
      'Measure candidate resources and define a go/no-go gate for further exploration.',
    ],
  },
  {
    slug: 'banking',
    n: '03',
    name: 'Banking & financial operations',
    evidenceStatus: 'exploratory',
    intro:
      'Capital, liquidity and operational capacity compete under tightly governed constraints. Eve Count explores whether a bounded financial optimization problem warrants quantum feasibility work—starting with a reproducible classical baseline, not an assumption of advantage.',
    problems: [
      'Constrained portfolio allocation',
      'Liquidity and collateral allocation',
      'Risk-scenario selection under compute budgets',
      'Operations scheduling and resource allocation',
    ],
    question:
      'Which discrete allocation decisions become difficult within your current solver’s time budget—and what would count as a materially better result?',
    scope:
      'Candidate work starts with discrete decision variables, explicit constraints and an agreed objective. Portfolio candidates must account for transaction costs, concentration limits and the chosen risk model. Liquidity candidates need timing, eligibility and settlement constraints. Not every financial model maps usefully to QUBO or Hamiltonian form; a classical-only recommendation is a valid outcome.',
    steps: [
      'Document the existing solver, objective, constraints and acceptance criteria.',
      'Select a bounded allocation instance using synthetic or appropriately de-identified inputs.',
      'Evaluate encoding overhead, constraint penalties and candidate circuit resources.',
      'Compare emulator evidence with the classical baseline and recommend proceed, revise or stop.',
    ],
    deliverables: [
      {
        title: 'Baseline specification',
        detail:
          'A reproducible problem instance, solver settings and agreed metrics for objective quality, feasibility and runtime.',
      },
      {
        title: 'Formulation & resource assessment',
        detail:
          'Decision-variable mapping, constraint treatment, circuit-depth estimates and noise-scaling assumptions for the selected candidate.',
      },
      {
        title: 'Decision report',
        detail:
          'Comparison limits, evidence gaps and an explicit go/no-go recommendation; emulator results do not establish live-hardware advantage.',
      },
    ],
    dataBoundary:
      'Initial scoping can use synthetic positions, aggregated exposures and de-identified eligibility rules. Do not submit customer identities, account numbers or transaction-level personal information through the enquiry form. Any later data access must be agreed under bilateral MNDA and your internal governance process.',
    exclusions:
      'This is exploratory optimization advisory, not investment advice, a trading service, regulatory approval or a claim of production deployment in banking. No verified banking case study is presented here.',
    challenge: 'financial-optimization',
  },
  {
    slug: 'compliance',
    n: '04',
    name: 'Compliance & regtech operations',
    evidenceStatus: 'exploratory',
    intro:
      'Compliance operations face constrained investigation capacity, evidence requirements and competing deadlines. Eve Count explores the optimization of those workflows—not the automation of legal judgement or a guarantee of regulatory compliance.',
    problems: [
      'Investigation queue prioritization',
      'Reviewer assignment and workload balancing',
      'Control-testing and audit scheduling',
      'Scenario coverage under review budgets',
    ],
    question:
      'Can you express the bottleneck as a measurable allocation or scheduling problem while retaining mandatory controls, human review and an auditable decision trail?',
    scope:
      'A candidate model can allocate cases to qualified reviewers, schedule control tests or select scenario coverage under a fixed capacity budget. Mandatory review obligations, deadlines, skills and conflict-of-interest rules remain explicit constraints. Prioritization does not determine whether a person committed wrongdoing, whether an alert is suspicious or whether a reporting obligation applies.',
    steps: [
      'Define the workflow with compliance owners, including mandatory controls and review boundaries.',
      'Build a synthetic or de-identified queue with capacity, eligibility and deadline constraints.',
      'Benchmark existing scheduling or allocation heuristics before considering a quantum encoding.',
      'Evaluate resource estimates and emulator limitations, then document an auditable go/no-go decision.',
    ],
    deliverables: [
      {
        title: 'Workflow & constraint map',
        detail:
          'A bounded scheduling or allocation model that distinguishes mandatory obligations from optimization preferences.',
      },
      {
        title: 'Comparative benchmark',
        detail:
          'Classical baseline and candidate formulation assessed for feasibility, coverage, backlog, runtime and resource requirements.',
      },
      {
        title: 'Governance-aware decision report',
        detail:
          'Documented assumptions, human-review boundaries and evidence limits for your compliance owners to evaluate—not a certification.',
      },
    ],
    dataBoundary:
      'Scoping should begin with synthetic case IDs, aggregated workloads and anonymized operational constraints. Removing names alone does not necessarily anonymize a dataset; linkage and re-identification risks require your governance review. Do not send names, identity documents, account details or case narratives through the enquiry form. Client datasets and company-specific objectives remain client-owned under bilateral MNDA.',
    exclusions:
      'PII is a data-handling boundary, not a separate quantum product. This practice does not offer privacy certification, encryption products, legal advice or guaranteed AML/KYC, PDPA or other regulatory compliance. No verified compliance-sector deployment is claimed.',
    challenge: 'compliance-workflow',
  },
];

export const getIndustryBySlug = (slug: string) =>
  WORK_INDUSTRIES.find((ind) => ind.slug === slug);

export const MINING_BLUEPRINT_SECTIONS: [string, string, string][] = [
  [
    'The operational problem',
    'A multi-pit copper/gold operation with non-local geometric extraction cones and dynamic smelter silica tolerances below 3.2%.',
    'Report evidence: extraction precedence graph, block model assumptions, blending constraints, time horizon and agreed objective.',
  ],
  [
    'The classical baseline',
    'Blueprint baseline input: Gurobi 11 MILP terminates at an 8.4% optimality gap after six hours on a 64-core HPC node, prompting block aggregation.',
    'Verification required: model and instance size, solver logs, configuration, hardware specification, random seeds, incumbent and bound. These supplied figures are not a published measured result.',
  ],
  [
    'The Eve Count formulation',
    'Map the extraction precedence matrix and blending penalties to a high-density Hamiltonian, investigating native trapped-ion ZZ(θ) interactions.',
    'Report evidence: encoding, penalty calibration, constraint satisfaction, qubit requirements and a comparison with the original objective. A Hamiltonian mapping alone is not an advantage result.',
  ],
  [
    'The Nexus benchmark',
    'Compile via pytket to a trapped-ion emulator on Nexus. The supplied blueprint sets a 62% circuit-depth reduction against a planar swap-mapping baseline as a comparison figure to validate.',
    'Verification required: matched circuits, compiler versions, optimisation settings, gate counts and noise assumptions. Emulator compilation cannot substantiate the supplied claim of zero gate-fidelity degradation on live hardware.',
  ],
  [
    'The executive outcome',
    'A validation report identifies measured resource costs and a conditional hardware-scale horizon for testing trapped-ion QAOA against classical heuristic aggregation.',
    'Decision gates: reproduce the baseline; validate the encoding; assess noise sensitivity; estimate scaling; decide whether to commission a pilot. No algorithmic crossover or exact physical-qubit threshold is established by this blueprint.',
  ],
];

export const WORK_NEWS: WorkNewsRelease[] = [
  {
    slug: 'launch-executive-cohort-nov-2026',
    title:
      'Eve Count Quantum Systems Provisioned on Nexus Cloud; Launches Industrial Combinatorics Advisory & November 2026 Executive Cohort',
    dek: 'Following its Singapore Quantum Grand Challenge 2026 submission, Eve Count transitions Project Q-Rotate and heavy-asset combinatorial benchmarks onto the Nexus compilation and emulation environment alongside academic and enterprise partners.',
    dateLabel: '4 November 2026',
    location: 'Singapore',
    paragraphs: [
      'Eve Count Quantum Systems today announced that its research and engineering team has been provisioned with dedicated access to the Nexus quantum cloud environment following the Singapore Quantum Grand Challenge 2026, alongside the formal launch of its enterprise advisory practice for mineral extraction and maritime fleet logistics. Applications are now open for the inaugural Executive Technical Intensive on November 26, 2026.',
      'As global resource extraction, molecular screening and shipping networks face unprecedented operational complexity, classical mathematical solvers—such as Mixed-Integer Linear Programming (MILP) and 3D Cartesian grid search—increasingly encounter exponential scaling walls. Operations research teams are frequently forced to rely on macro-block aggregations and rigid scheduling buffers.',
      'Eve Count addresses these computational ceilings by reformulating non-local precedence graphs, continuous Lie-algebraic pose flows (Project Q-Rotate) and dynamic routing matrices natively for all-to-all trapped-ion quantum architectures. Utilizing the Nexus platform and pytket compiler toolchains, the practice maps complex objective functions directly to native trapped-ion interaction gates (ZZ couplings), bypassing the heavy SWAP-gate overhead characteristic of planar chip topologies.',
    ],
    quote: {
      text: 'Enterprise quantum exploration has suffered from an excess of academic abstraction and a deficit of operational proof. With our team now provisioned on Nexus and engaging directly with Singapore academic faculty and industry operators, our focus is strict mathematical verification—taking the exact constrained formulations that stall classical solvers and benchmarking their circuit depth, noise resilience, and crossover thresholds on trapped-ion emulators.',
      attribution: 'Gwendalynn Lim, Founder and Technical Lead, Eve Count Quantum Systems',
    },
    intensiveTopics: [
      {
        title: 'Asymptotic Solver Limits',
        text: 'Identifying where classical heuristics leave measurable economic value on the table in 3D stope sequencing and dynamic vessel schedule recovery.',
      },
      {
        title: 'Native Gate Architecture',
        text: 'Formulating high-density dependency graphs and continuous Lie-algebraic flows directly into native trapped-ion parameterizations.',
      },
      {
        title: 'Hands-On Nexus Emulation',
        text: 'Compiling and benchmarking parameterized circuits on Nexus against hardware noise profiles to evaluate real error-budget scaling.',
      },
    ],
    capNote:
      'To maintain hands-on working group fidelity, registration for the November cohort is capped at four enterprise teams.',
    about:
      'Eve Count Quantum Systems is an applied quantum computing advisory and systems practice based in Singapore. The firm specializes in discrete industrial optimization, trapped-ion algorithmic mapping, and hardware-level emulation for capital-intensive global sectors.',
    contact: {
      label: 'Advisory Practice Lead, Eve Count Quantum Systems',
      email: 'gwen@evecount.com',
      website: 'https://evecount.com',
    },
  },
];

export const getNewsBySlug = (slug: string) =>
  WORK_NEWS.find((n) => n.slug === slug);

export const getWorkHighlights = () => [
  {
    type: 'News release · Nexus Access',
    dateLabel: '4 November 2026',
    title: 'Eve Count Provisioned on Nexus Cloud & Opens November 2026 Executive Cohort',
    summary:
      'Following the Singapore Quantum Grand Challenge 2026, Eve Count advances Project Q-Rotate and industrial combinatorics benchmarks on Nexus alongside academic and industry partners.',
    href: '/work/news/launch-executive-cohort-nov-2026',
  },
  {
    type: 'Report blueprint',
    dateLabel: 'Sample deliverable',
    title: '3D Stope Sequencing & Grade Blending — Feasibility Blueprint',
    summary:
      'An illustrative preview of what an Eve Count feasibility report delivers: classical baseline, Hamiltonian formulation, Nexus benchmark and executive decision gates.',
    href: '/work/insights/mining-feasibility-blueprint',
  },
  ...getSortedEvents().map((ev) => ({
    type: ev.placeholder ? ev.kind : `Upcoming · ${ev.kind}`,
    dateLabel: ev.dateLabel,
    title: ev.title,
    summary: ev.summary,
    href: `/work/events/${ev.slug}`,
  })),
  {
    type: 'Monthly memo',
    dateLabel: 'Every month',
    title: MONTHLY_BRIEFING.name,
    summary:
      'A once-monthly technical memo on native gate parameterizations, circuit compilation benchmarks and operations research case studies.',
    href: '/work/insights',
  },
];


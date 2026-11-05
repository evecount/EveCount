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
    name: 'Beyond the hype: what works now',
    topic: 'Part 01 · Executive Framing',
    text: 'Separate long-horizon speculation from the quantum, hybrid-solver and post-quantum security workflows enterprises can actually evaluate and deploy today.',
  },
  {
    name: 'Where classical computing hits a wall',
    topic: 'Part 02 · Real Bottlenecks',
    text: 'Why complex scheduling, fleet routing, molecular search and cryptographic exposure stall classical pipelines—and how to spot a good candidate problem inside your organisation.',
  },
  {
    name: 'Under the hood: live Nexus walkthrough',
    topic: 'Part 03 · Technical Proof',
    text: 'See a real operational problem mapped and compiled on Nexus cloud emulators—giving both technical and non-technical attendees a clear look at how feasibility is measured.',
  },
  {
    name: 'Your 2027 roadmap without the guesswork',
    topic: 'Part 04 · Open Q&A & Next Steps',
    text: 'How to scope a practical exploration or post-quantum readiness step without overcommitting budget—followed by open Q&A and optional private diagnostics.',
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
  date: '2026-12-01',
  label: 'Rolling Registration · Singapore & Live Stream',
  title: 'Quantum at Work: Where Enterprises Can Actually Use Quantum Today',
  format: 'Open Session · Singapore & Live Stream (Luma / Eventbrite / Meetup)',
  teamLimit: 4,
  status: 'Registration Open',
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
    question: 'How does the open session differ from a private corporate intensive?',
    answer:
      'The "Quantum at Work: Where Enterprises Can Actually Use Quantum Today" open session is open to operators, engineers, founders and enterprise teams via direct registration on evecount.com as well as Luma, Eventbrite and Meetup. Closed-door corporate intensives and working cohorts are scheduled directly with participating enterprise teams ready to benchmark a specific operational model.',
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
    kind: 'Open session · Luma / Eventbrite / Meetup',
    title: 'Quantum at Work: Where Enterprises Can Actually Use Quantum Today',
    date: NEXT_COHORT.date,
    dateLabel: NEXT_COHORT.label,
    format: NEXT_COHORT.format,
    status: NEXT_COHORT.status,
    summary:
      'An accessible, high-signal session with the promise of real technical substance: where classical computing hits a wall, what quantum and hybrid workflows can actually do for enterprises today, and a live look under the hood.',
    agenda: [
      'Part 01 — Beyond the hype: what enterprises can and cannot use quantum for right now',
      'Part 02 — Where classical solvers stall: scheduling, routing, molecular search and post-quantum security',
      'Part 03 — Under the hood (live walkthrough): how an operational problem is mapped and tested on real quantum cloud tools',
      'Part 04 — Open Q&A and networking: how to scope a practical 2027 roadmap without overcommitting budget',
    ],
    placeholder: false,
  },
  {
    slug: 'executive-intensive-cohort-q1-2027',
    kind: 'Executive cohort',
    title: 'Executive Intensive Cohort — Heavy Assets, Hard Combinatorics',
    date: '2027-02-25',
    dateLabel: 'Rolling Cohort Intake · Scheduled with registered teams',
    format: 'Virtual & Singapore Hybrid',
    status: 'Expressions of interest open',
    summary:
      'The corporate intensive delivered as a shared cohort (capped at four enterprise teams): map a target operational bottleneck, compile a sandbox benchmark on Nexus and leave with a documented feasibility position.',
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
    date: '2027-03-01',
    dateLabel: 'Register interest · Scheduled on demand',
    format: 'Virtual',
    status: 'Registration open',
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
    dateLabel: 'Register interest · Scheduled on demand',
    format: 'Virtual',
    status: 'Registration open',
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
    title: 'Private Enterprise Intensive — Custom Team Track',
    date: '2027-09-01',
    dateLabel: 'Scheduled directly with your engineering & operations team',
    format: 'Virtual & Singapore Hybrid',
    status: 'Available on enquiry',
    summary:
      'A dedicated delivery of the executive and technical intensive tailored around your organisation’s proprietary scheduling, routing or allocation constraints under mutual NDA.',
    agenda: [
      'Pre-session intake and classical baseline alignment',
      'Hands-on QUBO/Hamiltonian formulation and release-gate governance',
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
      'Eve Count Quantum Systems Provisioned on Nexus Cloud; Opens Registration for "Quantum at Work: Where Enterprises Can Actually Use Quantum Today"',
    dek: 'Following its Singapore Quantum Grand Challenge 2026 submission, Eve Count opens registration for its public executive & technical session and interactive companion alongside rolling enterprise cohort intakes.',
    dateLabel: 'Press Release',
    location: 'Singapore',
    paragraphs: [
      'Eve Count Quantum Systems announced that its research and engineering team has been provisioned with dedicated access to the Nexus quantum cloud environment following the Singapore Quantum Grand Challenge 2026. To mark the milestone, Eve Count has opened registration for its open session—"Quantum at Work: Where Enterprises Can Actually Use Quantum Today"—alongside a hands-on open-source technical companion.',
      'Designed for enterprise leaders, operations architects, engineers, and technical teams who want substance without impenetrable academic jargon, the session bridges executive clarity with real technical proof—showing where classical solvers hit a wall and how hybrid quantum workflows, continuous pose search (Project Q-Rotate), and post-quantum readiness can be applied pragmatically today.',
      'Alongside the open session, teams ready for hands-on benchmarking can register for Eve Count’s Executive Technical Intensive Cohort or commission a private corporate intensive.',
    ],
    quote: {
      text: 'Most enterprise leaders are tired of hearing either that quantum will solve everything tomorrow or that nothing is usable for ten years. Our "Quantum at Work" session and companion harness are built to show exactly what works now—giving decision-makers a clear lens on where quantum fits today, backed by a live look under the hood on Nexus.',
      attribution: 'Gwendalynn Lim, Founder and Technical Lead, Eve Count Quantum Systems',
    },
    intensiveTopics: [
      {
        title: 'Where Quantum Fits Right Now',
        text: 'Separating near-term enterprise utility—hybrid optimisation, molecular screening and post-quantum security—from long-horizon hype.',
      },
      {
        title: 'Where Classical Solvers Stall',
        text: 'How scheduling, routing and high-dimensional search bottlenecks translate into tractable quantum and hybrid formulations.',
      },
      {
        title: 'Live Look Under the Hood',
        text: 'A live demonstration of compiling and benchmarking circuits on Nexus so technical and non-technical attendees alike can see how feasibility is measured.',
      },
    ],
    capNote:
      'The "Quantum at Work" session is open for registration (Singapore & Live Stream). Closed-door enterprise cohort seats remain capped at four teams per intake.',
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
    type: 'News release · Open Session',
    dateLabel: 'Open Registration',
    title: 'Eve Count Provisioned on Nexus Cloud & Opens "Quantum at Work" Session Registration',
    summary:
      'Register interest for the upcoming open session ("Quantum at Work: Where Enterprises Can Actually Use Quantum Today") and explore the interactive technical companion.',
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


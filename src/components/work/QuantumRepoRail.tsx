'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Atom,
  Binary,
  BookOpen,
  Boxes,
  Braces,
   Compass,
  Cpu,
  GitBranch,
  Infinity as InfinityIcon,
  KeyRound,
  Layers,
  Network,
  Orbit,
  Radar,
  ShieldAlert,
  Sigma,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react';

export interface QuantumRepoCard {
  name: string;
  tag: string;
  description: string;
  href: string;
  bg: string;
  icon: typeof Atom;
}

export const EVECOUNT_QUANTUM_MATH_REPOS: QuantumRepoCard[] = [
  {
    name: 'quantum-at-work',
    tag: 'Feasibility harness',
    description:
      'Enterprise feasibility companion with runnable QUBO triage, classical MIP vs. trapped-ion solver benchmarks, and 9 architectural plates.',
    href: 'https://evecount.github.io/quantum-at-work/',
    bg: '#e59024', // Encharge Amber Gold
    icon: Compass,
  },
  {
    name: 'quantum_rotation',
    tag: 'SU(2) simulator',
    description:
      'Interactive 3D Bloch sphere and single-qubit gate rotation laboratory for visualising phase, superposition, and unitary trajectories.',
    href: 'https://evecount.github.io/quantum_rotation/simulation.html',
    bg: '#081b38', // Encharge Deep Navy
    icon: Orbit,
  },
  {
    name: 'quantum-research-101',
    tag: 'Foundations',
    description:
      'Open-source computational tutorial for constructing quantum state vectors, tensor products, and circuit primitives from scratch.',
    href: 'https://github.com/evecount/quantum-research-101',
    bg: '#13489c', // Encharge Cobalt Blue
    icon: Atom,
  },
  {
    name: 'QuantumAdversary',
    tag: 'Adversarial QML',
    description:
      'Stress-testing variational quantum circuits, noise-induced barren plateaus, and adversarial perturbations in hybrid quantum-classical loops.',
    href: 'https://github.com/evecount/QuantumAdversary',
    bg: '#9e2b46', // Encharge Crimson Berry
    icon: ShieldAlert,
  },
  {
    name: 'ScaryCryptography',
    tag: 'Post-quantum',
    description:
      'Lattice-based cryptography, Module-LWE hardness, and post-quantum signature & key-encapsulation mechanics deconstructed.',
    href: 'https://github.com/evecount/ScaryCryptography',
    bg: '#3aa97d', // Encharge Emerald Teal
    icon: KeyRound,
  },
  {
    name: 'riemann_hypothesis',
    tag: 'Analytic number theory',
    description:
      'Computational explorations of the Riemann zeta function, critical-line zero spacing, and Montgomery-Odlyzko random matrix connections.',
    href: 'https://github.com/evecount/riemann_hypothesis',
    bg: '#4b3285', // Deep Royal Violet
    icon: InfinityIcon,
  },
  {
    name: 'ScaryMatrices',
    tag: 'Linear operators',
    description:
      'Spectral decompositions, Hermitian operators, tensor contractions, and high-dimensional matrix mechanics powering quantum state evolution.',
    href: 'https://github.com/evecount/ScaryMatrices',
    bg: '#0b2242', // Midnight Sapphire
    icon: Boxes,
  },
  {
    name: 'ScaryTopologies',
    tag: 'Manifolds & homology',
    description:
      'Topological invariants, fiber bundles, persistent homology, and geometric phase structures across high-dimensional configuration spaces.',
    href: 'https://github.com/evecount/ScaryTopologies',
    bg: '#b03b2e', // Copper Oxide
    icon: Network,
  },
  {
    name: 'ScaryComplexity',
    tag: 'BQP vs. NP-Hard',
    description:
      'Where classical heuristics hit exponential walls: phase transitions in combinatorial optimisation, QMA, BQP, and approximation bounds.',
    href: 'https://github.com/evecount/ScaryComplexity',
    bg: '#d97706', // Warm Ochre
    icon: Layers,
  },
  {
    name: 'ScaryDynamics',
    tag: 'Dynamical systems',
    description:
      'Coupled differential equations, Lyapunov stability, strange attractors, and non-linear Hamiltonian flow in continuous and discrete time.',
    href: 'https://github.com/evecount/ScaryDynamics',
    bg: '#164e63', // Deep Ocean Cyan
    icon: Workflow,
  },
  {
    name: 'ScaryHardware',
    tag: 'Physical layer',
    description:
      'Trapped-ion shuttling overhead, superconducting coherence windows, cryoelectronics, and bit-level silicon execution constraints.',
    href: 'https://github.com/evecount/ScaryHardware',
    bg: '#1e293b', // Slate Steel
    icon: Cpu,
  },
  {
    name: 'ScaryCybernetics',
    tag: 'Control & feedback',
    description:
      'Closed-loop error syndrome decoding, observer-controller coupling, and information-theoretic feedback governance.',
    href: 'https://github.com/evecount/ScaryCybernetics',
    bg: '#881337', // Burgundy Wine
    icon: Radar,
  },
  {
    name: 'ScaryAlgorithms',
    tag: 'Solver primitives',
    description:
      'Grover amplitude amplification, QAOA mixer design, branch-and-bound pruning, and hybrid metaheuristics under tight runtime budgets.',
    href: 'https://github.com/evecount/ScaryAlgorithms',
    bg: '#0f766e', // Deep Viridian
    icon: Braces,
  },
  {
    name: 'ScaryCalculus',
    tag: 'Variational math',
    description:
      'Stochastic parameter-shift gradients, path integrals, differential forms, and functional optimisation on Riemannian manifolds.',
    href: 'https://github.com/evecount/ScaryCalculus',
    bg: '#1d4ed8', // Electric Royal
    icon: Sigma,
  },
  {
    name: 'AdversarialMath',
    tag: 'Counterexamples',
    description:
      'Pathological functions, ill-conditioned systems, and mathematical edge cases that break naive numerical solvers and ML models.',
    href: 'https://github.com/evecount/AdversarialMath',
    bg: '#9a3412', // Burnt Sienna
    icon: Binary,
  },
  {
    name: '03.ai-harness-token_count-lab',
    tag: 'Harness engineering',
    description:
      'Execution-loop instrumentation, context-window token telemetry, and automated rubric evaluation harnesses for autonomous agents.',
    href: 'https://github.com/evecount/03.ai-harness-token_count-lab',
    bg: '#374151', // Charcoal Iron
    icon: Terminal,
  },
  {
    name: 'snapdragon',
    tag: 'Bit-level logic',
    description:
      'Hardware-agnostic bit-level logic framework designed to extract deterministic performance on constrained compute nodes.',
    href: 'https://github.com/evecount/snapdragon',
    bg: '#312e81', // Deep Indigo
    icon: Sparkles,
  },
  {
    name: 'ScaryMath',
    tag: 'Core compendium',
    description:
      'The flagship mathematical synthesis bridging abstract algebra, group representations, and applied industrial problem formulation.',
    href: 'https://github.com/evecount/ScaryMath',
    bg: '#065f46', // Forest Emerald
    icon: BookOpen,
  },
];

export function QuantumRepoRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Track horizontal scroll progress for the custom Encharge-style bottom scrollbar
  const handleRailScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    setScrollProgress(Math.min(1, Math.max(0, el.scrollLeft / maxScroll)));
  };

  // IntersectionObserver for the mobile & desktop scroll-in fadeInRight card animation
  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;
    const cards = container.querySelectorAll('[data-repo-card-idx]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute('data-repo-card-idx');
          if (idxAttr !== null && entry.isIntersecting) {
            const idx = parseInt(idxAttr, 10);
            setVisibleCards((prev) => (prev[idx] ? prev : { ...prev, [idx]: true }));
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 40px 0px 40px' }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const [userTouchedRail, setUserTouchedRail] = useState(false);

  // Vertical-to-horizontal scroll-linked card motion (the Encharge mobile/desktop scroll effect)
  useEffect(() => {
    const onWindowScroll = () => {
      const sec = sectionRef.current;
      const rail = railRef.current;
      if (!sec || !rail || isDragging || userTouchedRail) return;
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (rect.top < vh && rect.bottom > 0) {
        const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
        const maxAutoScroll = Math.min(480, (rail.scrollWidth - rail.clientWidth) * 0.35);
        rail.scrollLeft = progress * maxAutoScroll;
        handleRailScroll();
      }
    };
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [isDragging, userTouchedRail]);

  const onMouseDown = (e: React.MouseEvent) => {
    const rail = railRef.current;
    if (!rail) return;
    setIsDragging(true);
    setStartX(e.pageX - rail.offsetLeft);
    setScrollLeft(rail.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !railRef.current) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    railRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <section
      ref={sectionRef}
      aria-label="Open Quantum and Mathematical Repositories"
      className="relative overflow-hidden bg-[#161c26] py-20 text-white md:py-28"
    >
      {/* Top 50/50 Asymmetric Split Header (Encharge Layout) */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#38a87c]">
              <span className="h-2 w-2 rounded-full bg-[#38a87c]" />
              <span>Open Research &amp; Code Commons</span>
            </div>
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[42px]">
              Explore natively across our quantum &amp; mathematical repositories. Without black boxes
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-7">
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-[17px]">
              Inspect runnable feasibility harnesses, Bloch-sphere unitary simulators, combinatorial QUBO benchmarks, and the 12-volume{' '}
              <span className="font-medium text-white">Scary Mathematics &amp; Cryptography</span> series. One-click open access to{' '}
              <span className="font-medium text-white">20+ repositories</span> including{' '}
              <span className="text-slate-200">
                quantum-at-work, quantum_rotation, ScaryCryptography, riemann_hypothesis, ScaryMatrices, ScaryTopologies, ScaryComplexity, QuantumAdversary,
              </span>{' '}
              and more.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Bleed Horizontal Scroll Rail (Desktop + Tablet) & Scroll-Animated Stack/Rail (Mobile) */}
      <div className="mt-12 md:mt-16">
        <div
          ref={railRef}
          onScroll={handleRailScroll}
          onTouchStart={() => setUserTouchedRail(true)}
          onMouseDown={(e) => {
            setUserTouchedRail(true);
            onMouseDown(e);
          }}
          onMouseMove={onMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className={`no-scrollbar flex gap-5 overflow-x-auto px-6 pb-8 pt-2 select-none md:gap-6 md:px-10 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          } snap-x snap-mandatory md:snap-none`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EVECOUNT_QUANTUM_MATH_REPOS.map((repo, idx) => {
            const IconComponent = repo.icon;
            const isVisible = visibleCards[idx] ?? true;
            return (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                data-repo-card-idx={idx}
                style={{
                  backgroundColor: repo.bg,
                  transitionDelay: `${Math.min(idx * 45, 270)}ms`,
                }}
                className={`group relative flex w-[285px] shrink-0 snap-center flex-col justify-between rounded-xl p-7 text-white no-underline shadow-lg transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl sm:w-[305px] min-h-[268px] ${
                  isVisible
                    ? 'translate-x-0 translate-y-0 opacity-100 scale-100'
                    : 'translate-x-8 translate-y-3 opacity-0 scale-[0.96]'
                }`}
              >
                {/* Top Icon + Repo Title + Category Pill */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="truncate text-[19px] font-semibold leading-snug text-white">
                          {repo.name}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-white/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                      </div>
                      <span className="mt-1.5 inline-block rounded bg-black/25 px-2.5 py-0.5 font-mono text-[11px] font-medium text-white/90">
                        {repo.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Description */}
                <p className="mt-6 text-[14.5px] leading-relaxed text-white/90">
                  {repo.description}
                </p>
              </a>
            );
          })}

          {/* Final "+30 more on GitHub & Commons" Summary Card (matches Encharge's "+38 more" slate card) */}
          <a
            href="https://github.com/evecount?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            data-repo-card-idx={EVECOUNT_QUANTUM_MATH_REPOS.length}
            style={{ backgroundColor: '#566175' }}
            className="group relative flex w-[285px] shrink-0 snap-center flex-col justify-between rounded-xl p-7 text-white no-underline shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#647087] sm:w-[305px] min-h-[268px]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10">
                <GitBranch className="h-6 w-6 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold leading-snug text-white">
                  +30 more
                </h3>
                <span className="mt-1.5 inline-block rounded bg-black/25 px-2.5 py-0.5 font-mono text-[11px] font-medium text-white/90">
                  Eve Count Commons
                </span>
              </div>
            </div>

            <p className="mt-6 text-[14.5px] leading-relaxed text-white/90">
              Browse the complete Eve Count open-source index—including algorithmic thinking starters, sovereign governance protocols, and community lab notebooks.
            </p>
          </a>
        </div>

        {/* Encharge-Style Custom Bottom Scrollbar Track */}
        <div className="mx-auto mt-2 max-w-[1440px] px-6 md:px-10">
          <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/90 p-0.5">
            <div
              className="h-full rounded-full bg-slate-400 transition-all duration-150"
              style={{
                width: '28%',
                transform: `translateX(${scrollProgress * 257}%)`,
              }}
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span className="font-mono uppercase tracking-wider">
              Swipe or drag horizontally to inspect 18 featured quantum &amp; math laboratories
            </span>
            <a
              href="https://github.com/evecount"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-white hover:underline"
            >
              <span>View all repositories on GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

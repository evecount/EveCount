import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  MonthlyMemoSection,
  WorkClosingBand,
  WorkPageShell,
  WorkSection,
} from '@/components/work/WorkShell';

export default function WorkInsightsPage() {
  return (
    <WorkPageShell
      eyebrow="Insights & sample work"
      title="Method blueprints, news releases and the monthly briefing."
      intro="Sample work below is illustrative of how an engagement is structured and reported. It is not presented as a verified client outcome."
    >
      <WorkSection label="Published items" title="Current notes and sample reports.">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Link
            href="/work/news/launch-executive-cohort-nov-2026"
            className="group flex flex-col justify-between rounded-sm border border-[var(--work-border)] bg-[var(--work-surface)] p-8 transition-colors hover:border-[var(--work-primary)]/40"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--work-muted-fg)]">
                <span>Newsroom · Nexus Access &amp; Cohort</span>
                <span>4 November 2026</span>
              </div>
              <h3 className="mt-4 text-2xl font-medium leading-snug tracking-tight group-hover:text-[var(--work-primary)]">
                Eve Count Quantum Systems Provisioned on Nexus Cloud; Launches Industrial Combinatorics Advisory &amp; November 2026 Executive Cohort
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--work-muted-fg)]">
                Following its Singapore Quantum Grand Challenge 2026 submission, Eve Count transitions Project Q-Rotate and heavy-asset combinatorial benchmarks onto the Nexus compilation and emulation environment alongside academic and enterprise partners.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--work-primary)]">
              <span>Read news release</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>

          <Link
            href="/work/insights/mining-feasibility-blueprint"
            className="group flex flex-col justify-between rounded-sm border border-[var(--work-border)] bg-[var(--work-surface)] p-8 transition-colors hover:border-[var(--work-primary)]/40"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--work-muted-fg)]">
                <span>Report Blueprint · Illustrative</span>
                <span>Sample deliverable</span>
              </div>
              <h3 className="mt-4 text-2xl font-medium leading-snug tracking-tight group-hover:text-[var(--work-primary)]">
                3D Stope Sequencing &amp; Grade Blending — Feasibility Blueprint
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--work-muted-fg)]">
                A preview of how an Eve Count engagement structures a multi-pit copper/gold problem: classical MILP baseline, Hamiltonian formulation, Nexus compilation and executive decision gates.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--work-primary)]">
              <span>Inspect the blueprint</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </WorkSection>

      <MonthlyMemoSection />

      <WorkClosingBand title="Want a blueprint structured around your own model?" />
    </WorkPageShell>
  );
}

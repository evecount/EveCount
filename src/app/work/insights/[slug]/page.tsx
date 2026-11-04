'use client';

import Link from 'next/link';
import { ArrowLeft, Printer } from 'lucide-react';
import { IndustrialLattice } from '@/components/work/IndustrialLattice';
import { WorkClosingBand, WorkPageShell, WorkSection } from '@/components/work/WorkShell';
import { MINING_BLUEPRINT_SECTIONS } from '@/lib/work-content';

export default function WorkInsightDetailPage() {
  return (
    <WorkPageShell
      eyebrow="Report blueprint · Illustrative preview"
      title="3D Stope Sequencing & Grade Blending."
      intro="A five-part blueprint showing how an Eve Count engagement documents an industrial problem, a classical baseline, a Hamiltonian mapping, a Quantinuum Nexus compilation and the executive decision gates."
    >
      <section className="relative overflow-hidden border-b border-[var(--work-border)]">
        <div className="pointer-events-none absolute inset-0 opacity-75">
          <IndustrialLattice variant="mine" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-6 py-12 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
            <Link
              href="/work/insights"
              className="inline-flex items-center gap-2 text-xs text-[var(--work-muted-fg)] hover:text-[var(--work-fg)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to insights
            </Link>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-sm border border-[var(--work-fg)]/20 bg-transparent px-4 text-xs font-medium text-[var(--work-fg)] transition hover:border-[var(--work-fg)]/50 hover:bg-[var(--work-muted)]/60"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Save / Print PDF</span>
            </button>
          </div>

          <div className="mt-8 max-w-3xl rounded-sm border border-[var(--work-border)] bg-[var(--work-surface)]/95 p-5 backdrop-blur">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--work-primary)]">
              Evidence status
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--work-muted-fg)]">
              This page is an illustrative method blueprint, not a completed client benchmark. Figures such as the 8.4% MILP optimality gap and 62% circuit-depth reduction are candidate comparison inputs to be reproduced and verified during a paid engagement; no live hardware advantage or physical-qubit crossover threshold is claimed here.
            </p>
          </div>
        </div>
      </section>

      <WorkSection label="Five-part structure" title="Inside the feasibility blueprint.">
        <ol className="divide-y divide-[var(--work-border)] border-y border-[var(--work-border)] bg-[var(--work-surface)]">
          {MINING_BLUEPRINT_SECTIONS.map(([heading, summary, evidence], idx) => (
            <li
              key={heading}
              className="grid grid-cols-1 gap-6 p-7 md:grid-cols-12 md:items-start md:p-9"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--work-primary)]">
                  Part 0{idx + 1}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{heading}</h3>
              </div>
              <div className="space-y-3 md:col-span-8">
                <p className="text-base leading-relaxed text-[var(--work-fg)]">{summary}</p>
                <p className="text-xs leading-relaxed text-[var(--work-muted-fg)]">{evidence}</p>
              </div>
            </li>
          ))}
        </ol>
      </WorkSection>

      <WorkClosingBand title="Bring your baseline. Define your evidence." />
    </WorkPageShell>
  );
}

'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { IndustrialLattice } from '@/components/work/IndustrialLattice';
import {
  WorkClosingBand,
  WorkPageShell,
  WorkSection,
} from '@/components/work/WorkShell';
import { WORK_INDUSTRIES } from '@/lib/work-content';

export default function WorkIndustriesPage() {
  return (
    <WorkPageShell
      eyebrow="Sector applications"
      title={
        <>
          Hard problems.
          <br />
          Across sectors.
        </>
      }
      intro="Scheduling, routing, allocation and sequencing share dense dependencies and competing constraints. Mining and maritime are our flagship focus; banking and compliance are exploratory applications, not claims of established sector deployments."
    >
      <WorkSection label="Problem-specific evaluation">
        <div className="grid gap-12 md:grid-cols-2">
          {WORK_INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/work/industries/${ind.slug}`}
              className="group border-t border-[var(--work-border)] pt-8 no-underline"
            >
              <div className="flex justify-between">
                <span className="font-mono text-xs text-[var(--work-primary)]">
                  {ind.n}
                  {ind.evidenceStatus === 'exploratory'
                    ? ' / Exploratory'
                    : ' / Flagship focus'}
                </span>
                <ArrowUpRight className="h-5 w-5 text-[var(--work-fg)]" />
              </div>
              <h2 className="mt-6 text-3xl text-[var(--work-fg)] group-hover:text-[var(--work-primary)]">
                {ind.name}
              </h2>
              <p className="mt-5 leading-relaxed text-[var(--work-muted-fg)]">
                {ind.intro}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-[var(--work-fg)]">
                {ind.problems.map((p) => (
                  <li key={p}>— {p}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </WorkSection>

      <div className="grid border-t border-[var(--work-border)] bg-[var(--work-surface)] md:grid-cols-2">
        <div className="relative h-[360px]">
          <IndustrialLattice className="h-full w-full" variant="mine" />
          <span className="absolute bottom-5 left-6 font-mono text-[10px] text-[var(--work-muted-fg)]">
            01 / Mining topology
          </span>
        </div>
        <div className="relative h-[360px]">
          <IndustrialLattice className="h-full w-full" variant="port" />
          <span className="absolute bottom-5 left-6 font-mono text-[10px] text-[var(--work-muted-fg)]">
            02 / Port topology
          </span>
        </div>
      </div>

      <WorkClosingBand />
    </WorkPageShell>
  );
}


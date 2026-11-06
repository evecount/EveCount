'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Layers, MoveUpRight, ScanLine } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { IndustrialLattice } from '@/components/work/IndustrialLattice';
import { QuantumRepoRail } from '@/components/work/QuantumRepoRail';
import {
  InsideDeliverableSection,
  MonthlyMemoSection,
  NextCohortBanner,
  PracticeLeadSection,
  WorkClosingBand,
  WorkFooter,
  WorkSection,
  WorkSubHeader,
} from '@/components/work/WorkShell';
import {
  EXECUTIVE_SERIES_SESSIONS,
  WORK_OFFER,
  getWorkHighlights,
} from '@/lib/work-content';

export default function WorkOverviewPage() {
  const highlights = getWorkHighlights().slice(0, 4);

  return (
    <div className="work-subsite min-h-screen bg-[var(--work-bg)] text-[var(--work-fg)]">
      <Header />
      <WorkSubHeader />

      {/* Hero */}
      <section className="relative isolate flex flex-col overflow-hidden bg-[var(--work-surface)] text-[var(--work-fg)] md:min-h-[720px] md:flex-row md:items-center">
        <IndustrialLattice
          className="industrial-hero order-1 relative h-[330px] w-full md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[65%]"
          morph
        />

        <div className="pointer-events-none relative mx-auto w-full max-w-[1440px] px-6 pb-4 pt-10 md:px-10 md:py-20">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase">
            <span className="h-2 w-2 bg-[var(--work-primary-glow)]" />
            <span>Eve Count Executive Briefing Series</span>
          </div>

          <h1 className="mt-8 max-w-3xl text-5xl font-normal leading-[1.06] md:text-7xl">
            Heavy Assets.
            <br />
            Hard Combinatorics.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--work-muted-fg)]">
            Mining. Maritime. Trapped-ion quantum computing.
            <br />
            A practical examination of where classical optimisation ends—and quantum exploration begins.
          </p>

          <div className="pointer-events-auto mt-10 flex flex-wrap gap-3">
            <Link
              href="/work/briefings"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[var(--work-primary)] px-8 text-sm font-medium text-[var(--work-primary-fg)] shadow transition hover:opacity-90"
            >
              <span>Explore the executive series</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/work/engagements"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-[var(--work-border)] bg-[var(--work-bg)]/80 px-8 text-sm font-medium text-[var(--work-fg)] transition hover:bg-[var(--work-accent)]"
            >
              <span>Corporate intensive</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 hidden flex-wrap gap-8 border-t border-[var(--work-border)] pt-5 font-mono text-[10px] uppercase text-[var(--work-muted-fg)] md:flex">
            <span>01 / Mining &amp; resources</span>
            <span>02 / Maritime operations</span>
            <span>03 / Evidence-led feasibility</span>
          </div>
        </div>

        <span className=" absolute bottom-5 right-6 font-mono text-[9px] uppercase text-[var(--work-muted-fg)]">
          Connected systems / Port study 001
        </span>
      </section>

      {/* 4-Stat Strip */}
      <div className="border-b border-[var(--work-border)] bg-[var(--work-surface)]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-6 py-7 md:grid-cols-4 md:px-10">
          {[
            ['04', 'Executive sessions'],
            [`${WORK_OFFER.diagnosticMinutes} min`, 'Private diagnostic'],
            ['01 day', 'Corporate intensive'],
            ['Nexus / pytket', 'Compilation & emulation'],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-xl font-medium">{val}</div>
              <div className="mt-2 font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Cohort Banner */}
      <NextCohortBanner />

      {/* 01 / The Operational Question */}
      <WorkSection
        label="01 / The operational question"
        pinned
        title={
          <>
            The asset is physical.
            <br />
            <span className="text-[var(--work-muted-fg)]">The bottleneck is mathematical.</span>
          </>
        }
      >
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <p className="max-w-2xl text-xl leading-relaxed text-[var(--work-muted-fg)]">
            Extraction sequences. Vessel rotations. Dense dependencies, competing constraints and a finite decision window. Before investing in quantum computing, establish exactly what your classical baseline can—and cannot—deliver.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="border-t border-[var(--work-border)] pt-5">
              <Layers className="h-6 w-6 text-[var(--work-primary)]" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg">Mining</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--work-muted-fg)]">
                Multi-pit scheduling, stope sequencing and grade blending.
              </p>
            </div>
            <div className="border-t border-[var(--work-border)] pt-5">
              <MoveUpRight className="h-6 w-6 text-[var(--work-primary)]" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg">Maritime</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--work-muted-fg)]">
                Fleet recovery, dynamic routing and port bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </WorkSection>

      {/* 02 / Executive Series */}
      <section className="bg-[var(--work-surface)]">
        <WorkSection
          label="02 / Executive series"
          pinned
          title="Four sessions. One clearer decision."
        >
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {EXECUTIVE_SERIES_SESSIONS.map((session, idx) => (
              <article key={session.name} className="border-t border-[var(--work-border)] pt-6">
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-[var(--work-primary)]">
                    0{idx + 1}
                  </span>
                  <ScanLine className="h-5 w-5 text-[var(--work-muted-fg)]" strokeWidth={1} />
                </div>
                <div className="mt-8 font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                  {session.topic}
                </div>
                <h3 className="mt-3 text-2xl leading-tight">{session.name}</h3>
                <p className="mt-5 text-sm leading-relaxed text-[var(--work-muted-fg)]">
                  {session.text}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/work/briefings"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--work-primary)] hover:underline"
          >
            <span>View the programme &amp; apply</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </WorkSection>
      </section>

      {/* 03 / Two Ways to Engage */}
      <WorkSection
        label="03 / Two ways to engage"
        title="Start with a briefing. Or bring the work in-house."
      >
        <div className="grid gap-12 md:grid-cols-2">
          {[
            [
              'Executive briefing',
              'For VPs of Operations Research, Chief Digital Officers and Heads of Resource Planning. Four focused sessions plus a private 45-minute feasibility diagnostic.',
              '/work/briefings',
              'Apply for the series',
            ],
            [
              'Corporate intensive',
              'A full-day, private engagement for leadership and technical teams. Map a target bottleneck, compile a sandbox benchmark and define the next decision.',
              '/work/engagements',
              'Explore the intensive',
            ],
          ].map(([title, desc, href, cta]) => (
            <article key={title} className="border-t border-[var(--work-border)] pt-8">
              <h3 className="text-3xl">{title}</h3>
              <p className="mt-5 max-w-lg leading-relaxed text-[var(--work-muted-fg)]">
                {desc}
              </p>
              <Link
                href={href}
                className="mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-[var(--work-border)] bg-[var(--work-bg)] px-5 text-sm font-medium text-[var(--work-fg)] transition hover:bg-[var(--work-accent)]"
              >
                <span>{cta}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </WorkSection>

      {/* Inside the Deliverable */}
      <InsideDeliverableSection />

      {/* Encharge-Style Open Quantum & Mathematical Repositories Rail */}
      <QuantumRepoRail />

      {/* Practice Lead */}
      <PracticeLeadSection />

      {/* Highlights & Upcoming Dates */}
      <WorkSection label="Latest" title="Highlights & upcoming dates.">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col border-t border-[var(--work-border)] pt-6"
            >
              <div className="font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                {item.type}
              </div>
              <div className="mt-3 font-mono text-xs text-[var(--work-primary)]">
                {item.dateLabel}
              </div>
              <h3 className="mt-4 text-xl leading-snug">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--work-muted-fg)]">
                {item.summary}
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-[var(--work-primary)] hover:underline"
                >
                  <span>Find out more</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </WorkSection>

      {/* Monthly Technical Memo */}
      <MonthlyMemoSection />

      {/* Evidence Disclaimer Bar */}
      <div className="border-t border-[var(--work-border)]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5 px-6 py-8 md:px-10">
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--work-muted-fg)]">
            No assumed quantum advantage. No hardware affiliation implied. Every feasibility assessment starts with a classical comparison.
          </p>
          <Link href="/work/company" className="text-sm text-[var(--work-primary)] hover:underline">
            Our approach ↗
          </Link>
        </div>
      </div>

      <WorkClosingBand />
      <WorkFooter />
    </div>
  );
}


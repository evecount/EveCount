'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { IndustrialLattice } from '@/components/work/IndustrialLattice';
import {
  WorkFooter,
  WorkSection,
  WorkSubHeader,
} from '@/components/work/WorkShell';
import { NEXT_COHORT, getEventBySlug } from '@/lib/work-content';

export default function WorkEventDetailPage() {
  const params = useParams<{ slug: string }>();
  const ev = getEventBySlug(params?.slug ?? '') ?? getEventBySlug('executive-intensive-cohort-nov-2026')!;
  const isNovCohort = ev.slug === 'executive-intensive-cohort-nov-2026';

  return (
    <div className="work-subsite min-h-screen bg-[var(--work-bg)] text-[var(--work-fg)]">
      <Header />
      <WorkSubHeader />

      <section className="border-b border-[var(--work-border)] bg-[var(--work-surface)]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <Link
            href="/work/events"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All events</span>
          </Link>

          <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase">
            <span className="h-2 w-2 bg-[var(--work-primary-glow)]" />
            <span>{ev.kind}</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-normal leading-[1.08] md:text-6xl">
            {ev.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-10 border-t border-[var(--work-border)] pt-6">
            <div>
              <div className="font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                Date
              </div>
              <div className="mt-2 text-lg">{ev.dateLabel}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                Format
              </div>
              <div className="mt-2 text-lg">{ev.format}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                Status
              </div>
              <div className="mt-2 text-lg">{ev.status}</div>
            </div>
            {isNovCohort && (
              <div>
                <div className="font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                  Seats
                </div>
                <div className="mt-2 text-lg">
                  Limited to {NEXT_COHORT.teamLimit} enterprise teams
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <WorkSection label="01 / About this session" title="What happens on the day.">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="max-w-2xl text-xl leading-relaxed text-[var(--work-muted-fg)]">
              {ev.summary}
            </p>
            <ol className="mt-10 grid gap-5">
              {ev.agenda.map((item, idx) => (
                <li
                  key={item}
                  className="flex gap-5 border-t border-[var(--work-border)] pt-5"
                >
                  <span className="font-mono text-xs text-[var(--work-primary)]">
                    0{idx + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-[var(--work-muted-fg)]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
            {ev.placeholder && (
              <p className="mt-10 max-w-xl border-l-2 border-[var(--work-primary)] pl-5 text-sm leading-relaxed text-[var(--work-muted-fg)]">
                This session is a forward placeholder: the quarter is indicative and the final date, agenda and fees are confirmed with registered interest before anything is published as confirmed. Enquire below and we will hold a place for your team.
              </p>
            )}
          </div>
          <IndustrialLattice className="hidden min-h-[320px] w-full lg:block" />
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {isNovCohort ? (
            <Link
              href="/work/contact?interest=cohort"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[var(--work-primary)] px-8 text-sm font-medium text-[var(--work-primary-fg)] transition hover:opacity-90"
            >
              <span>Apply for this cohort</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              href="/work/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[var(--work-primary)] px-8 text-sm font-medium text-[var(--work-primary-fg)] transition hover:opacity-90"
            >
              <span>Register interest</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
          <Link
            href="/work/briefings"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-[var(--work-border)] px-8 text-sm font-medium text-[var(--work-fg)] transition hover:bg-[var(--work-accent)]"
          >
            <span>Explore the executive series</span>
          </Link>
        </div>
      </WorkSection>

      <WorkFooter />
    </div>
  );
}


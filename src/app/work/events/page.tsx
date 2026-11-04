'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  WorkClosingBand,
  WorkPageShell,
  WorkSection,
} from '@/components/work/WorkShell';
import { getSortedEvents } from '@/lib/work-content';

export default function WorkEventsPage() {
  const events = getSortedEvents();

  return (
    <WorkPageShell
      eyebrow="Events & cohorts"
      title="Confirmed dates first. Everything else labelled honestly."
      intro="The November 2026 executive intensive cohort is confirmed and open for applications. Future webinars and cohorts are listed as placeholders until dates are fixed — register interest and we confirm details with you directly."
    >
      <WorkSection label="01 / Upcoming" title="The calendar as it stands.">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {events.map((ev) => (
            <article
              key={ev.slug}
              className="flex h-full flex-col border-t border-[var(--work-border)] pt-6"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                <span>{ev.kind}</span>
                <span className={ev.placeholder ? '' : 'text-[var(--work-primary)]'}>
                  {ev.status}
                </span>
              </div>
              <h2 className="mt-6 text-2xl leading-tight">{ev.title}</h2>
              <div className="mt-4 font-mono text-xs text-[var(--work-primary)]">
                {ev.dateLabel}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                {ev.format}
              </div>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--work-muted-fg)]">
                {ev.summary}
              </p>
              <div className="mt-auto pt-7">
                <Link
                  href={`/work/events/${ev.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--work-primary)] hover:underline"
                >
                  <span>View details</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </WorkSection>

      <WorkClosingBand
        title="Want a date held for your team?"
        label="Register interest"
      />
    </WorkPageShell>
  );
}


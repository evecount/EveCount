'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { InquiryForm } from '@/components/work/InquiryForm';
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
      title="Open sessions & enterprise cohorts — scheduled around registered teams."
      intro="Register below to join our next 'Quantum at Work' open session or express interest in an upcoming four-team executive intensive cohort. We confirm session timing directly with registered participants and provide immediate access to our interactive technical companion."
    >
      <WorkSection label="01 / Sessions & tracks" title="Available sessions and cohort tracks.">
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
              <div className="mt-auto flex flex-wrap items-center gap-5 pt-7">
                <Link
                  href={`/work/events/${ev.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--work-primary)] hover:underline"
                >
                  <span>View details &amp; register</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                {ev.slug === 'executive-intensive-cohort-nov-2026' && (
                  <a
                    href="https://evecount.github.io/quantum-at-work/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--work-muted-fg)] hover:text-[var(--work-primary)] hover:underline"
                  >
                    <span>Technical Companion</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </WorkSection>

      <section className="border-t border-[var(--work-border)] bg-[var(--work-surface)]">
        <WorkSection
          label="02 / Direct Signup"
          title="Register for the next open session or enterprise cohort."
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div className="space-y-5 text-[var(--work-muted-fg)]">
              <p>
                Tell us whether you are signing up for the public <strong>Quantum at Work</strong> open session, the four-team Executive Intensive Cohort, or one of our sector webinars.
              </p>
              <p>
                While your cohort slot is being coordinated, you can explore the 8-chapter{' '}
                <a
                  href="https://evecount.github.io/quantum-at-work/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--work-primary)] underline underline-offset-4"
                >
                  Quantum at Work Technical Companion &amp; Python Harness
                </a>{' '}
                right now.
              </p>
            </div>
            <InquiryForm
              kind="events-cohort-signup"
              cta="Sign up / Register interest"
            />
          </div>
        </WorkSection>
      </section>

      <WorkClosingBand
        title="Want a private corporate intensive held for your team?"
        label="Request a private session"
      />
    </WorkPageShell>
  );
}


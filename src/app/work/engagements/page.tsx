'use client';

import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import {
  InsideDeliverableSection,
  NextCohortBanner,
  WorkClosingBand,
  WorkPageShell,
  WorkSection,
} from '@/components/work/WorkShell';
import { INTENSIVE_SYLLABUS, WORK_OFFER, formatUsd } from '@/lib/work-content';

export default function WorkEngagementsPage() {
  const tiers = [
    {
      name: 'Executive virtual',
      price: WORK_OFFER.virtualPrice,
      sub: `Up to ${WORK_OFFER.virtualParticipants} internal participants`,
      items: [
        'Full-day private delivery',
        'Recording access',
        'Code templates',
        'Post-session architecture notes',
      ],
    },
    {
      name: 'On-site intensive',
      price: WORK_OFFER.onsitePrice,
      sub: 'Plus travel & accommodation',
      items: [
        'Perth · Vancouver · Santiago · Singapore',
        'Engineering-team whiteboarding',
        'Full-day private engagement',
        'Executive board readout',
      ],
    },
  ];

  return (
    <WorkPageShell
      eyebrow="Private corporate intensive"
      title={
        <>
          One operational problem.
          <br />
          One focused day.
        </>
      }
      intro="Trapped-Ion Quantum Computing in Heavy Industry: an operational and algorithmic intensive for senior leadership, operations research, data science and systems engineering teams."
    >
      <NextCohortBanner />

      <WorkSection
        label="The output"
        title="From hardware reality to a scoped feasibility decision."
      >
        <div className="grid gap-10 md:grid-cols-3">
          {[
            [
              'Feasibility assessment',
              'A clear view of your target bottleneck, current classical approach and the questions quantum exploration must answer.',
            ],
            [
              'Mathematical mapping',
              'A working formulation of selected constraints and dependencies, tailored to the agreed problem scope.',
            ],
            [
              'Sandbox benchmark',
              'A compilation benchmark using Quantinuum Nexus emulators, with resource metrics and a classical comparison plan.',
            ],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-[var(--work-border)] pt-6">
              <h3 className="text-xl">{title}</h3>
              <p className="mt-4 leading-relaxed text-[var(--work-muted-fg)]">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--work-muted-fg)]">
          Private work is scoped under a bilateral MNDA, from normalized and anonymized inputs wherever possible. A feasibility pilot does not require altering live production systems. Emulator results are not a demonstration of production quantum advantage.
        </p>
      </WorkSection>

      <section className="bg-[var(--work-surface)]">
        <WorkSection
          label="Full-day syllabus"
          title="Leadership in the morning. Hands on in the afternoon."
        >
          <div className="divide-y divide-[var(--work-border)] border-y border-[var(--work-border)]">
            {INTENSIVE_SYLLABUS.map(([time, title, audience, detail]) => (
              <div
                key={time}
                className="grid gap-4 py-7 md:grid-cols-[130px_1fr_1fr]"
              >
                <span className="font-mono text-xs text-[var(--work-primary)]">{time}</span>
                <div>
                  <h3 className="text-xl">{title}</h3>
                  <span className="mt-3 block font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
                    {audience}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--work-muted-fg)]">{detail}</p>
              </div>
            ))}
          </div>
        </WorkSection>
      </section>

      <WorkSection
        label="Commercial terms"
        title="Two delivery formats. The same decision-first discipline."
      >
        <div className="grid gap-12 md:grid-cols-2">
          {tiers.map((tier) => (
            <article key={tier.name} className="border-t border-[var(--work-border)] pt-8">
              <div className="work-eyebrow">{tier.name}</div>
              <div className="mt-5 text-4xl font-normal">
                {formatUsd(tier.price)}
                <span className="ml-2 text-sm text-[var(--work-muted-fg)]">USD</span>
              </div>
              <p className="mt-3 text-sm text-[var(--work-muted-fg)]">{tier.sub}</p>
              <ul className="mt-8 space-y-4">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--work-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/work/contact"
                className="mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-[var(--work-border)] bg-[var(--work-bg)] px-5 text-sm font-medium text-[var(--work-fg)] transition hover:bg-[var(--work-accent)]"
              >
                <span>Discuss {tier.name.toLowerCase()} delivery</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-10 border-t border-[var(--work-border)] pt-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl">Carry the work forward.</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--work-muted-fg)]">
              {WORK_OFFER.creditRate * 100}% of the intensive fee is credited towards a subsequent {WORK_OFFER.pilotWeeks[0]}–{WORK_OFFER.pilotWeeks[1]} week Eve Count Algorithmic Feasibility Pilot commissioned within {WORK_OFFER.creditDays} days. Pilot scope and pricing are agreed separately.
            </p>
          </div>
          <div>
            <h3 className="text-xl">What the fee already covers.</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--work-muted-fg)]">
              Standard compiler optimisation and noise emulation passes on Quantinuum Nexus are absorbed in the engagement fee. Client datasets, block models and objective functions stay client property under a bilateral MNDA.
            </p>
          </div>
        </div>
      </WorkSection>

      <InsideDeliverableSection />

      <WorkSection label="Before you commission">
        <Link
          href="/work/faq"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-[var(--work-border)] bg-[var(--work-bg)] px-5 text-sm font-medium text-[var(--work-fg)] transition hover:bg-[var(--work-accent)]"
        >
          <span>Enterprise buyer questions: MNDA, compute &amp; pilot scope</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </WorkSection>

      <WorkClosingBand
        title="Make your next quantum decision an informed one."
        label="Enquire about an intensive"
      />
    </WorkPageShell>
  );
}


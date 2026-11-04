'use client';

import { InquiryForm } from '@/components/work/InquiryForm';
import {
  MonthlyMemoSection,
  NextCohortBanner,
  WorkPageShell,
  WorkSection,
} from '@/components/work/WorkShell';
import { EXECUTIVE_SERIES_SESSIONS, WORK_OFFER } from '@/lib/work-content';

export default function WorkBriefingsPage() {
  return (
    <WorkPageShell
      eyebrow="Executive briefing series"
      title={
        <>
          Heavy Assets,
          <br />
          Hard Combinatorics.
        </>
      }
      intro="Trapped-ion quantum computing for mining and maritime fleet operations. A closed-door series for leaders who need an informed investment decision, not another technology pitch."
    >
      <NextCohortBanner />

      <WorkSection
        label="The programme"
        title="Breaking down the classical limits. Testing the quantum possibilities."
      >
        <div className="divide-y divide-[var(--work-border)] border-y border-[var(--work-border)]">
          {EXECUTIVE_SERIES_SESSIONS.map((session, idx) => (
            <article
              key={session.name}
              className="grid gap-4 py-8 md:grid-cols-[80px_1fr_1fr]"
            >
              <span className="font-mono text-xs text-[var(--work-primary)]">
                SESSION 0{idx + 1}
              </span>
              <div>
                <h3 className="text-2xl">{session.name}</h3>
                <p className="mt-3 font-mono text-xs text-[var(--work-muted-fg)]">
                  {session.topic}
                </p>
              </div>
              <p className="leading-relaxed text-[var(--work-muted-fg)]">{session.text}</p>
            </article>
          ))}
        </div>
      </WorkSection>

      <section className="bg-[var(--work-surface)]">
        <WorkSection
          label="From your problem to a next step"
          title={`A private ${WORK_OFFER.diagnosticMinutes}-minute feasibility diagnostic.`}
        >
          <div className="grid gap-10 md:grid-cols-3">
            {[
              [
                'Bring the bottleneck',
                'Share your current optimisation challenge, problem scale and solver runtime—without disclosing sensitive datasets.',
              ],
              [
                'Map the candidate',
                'Discuss constraints, dependency graphs and whether a trapped-ion exploration is worth investigating.',
              ],
              [
                'Define the decision',
                'Identify useful baselines and an appropriate next step. A diagnostic is not proof of quantum advantage.',
              ],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-[var(--work-border)] pt-6">
                <h3 className="text-xl">{title}</h3>
                <p className="mt-4 leading-relaxed text-[var(--work-muted-fg)]">{body}</p>
              </div>
            ))}
          </div>
        </WorkSection>
      </section>

      <WorkSection
        label="Apply for the series"
        title="For the people accountable for the operational roadmap."
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-5 text-[var(--work-muted-fg)]">
            <p>
              Designed for VPs of Operations Research, Chief Digital Officers and Heads of Resource Planning.
            </p>
            <p>
              Applications are reviewed for fit. Dates, format and any participation terms are confirmed directly; no payment is taken here.
            </p>
            <p className="text-sm">
              Prefer a private session for your team? Ask about the corporate intensive.
            </p>
          </div>
          <InquiryForm
            kind="eve-executive-series"
            cta="Apply for the executive series"
          />
        </div>
      </WorkSection>

      <MonthlyMemoSection />
    </WorkPageShell>
  );
}


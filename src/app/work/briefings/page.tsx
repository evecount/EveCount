'use client';

import { InquiryForm } from '@/components/work/InquiryForm';
import {
  MonthlyMemoSection,
  NextCohortBanner,
  WorkPageShell,
  WorkSection,
} from '@/components/work/WorkShell';
import { EXECUTIVE_SERIES_SESSIONS, NEXT_COHORT, WORK_OFFER } from '@/lib/work-content';

export default function WorkBriefingsPage() {
  return (
    <WorkPageShell
      eyebrow={`Open Executive & Technical Session · ${NEXT_COHORT.label}`}
      title={
        <>
          Quantum at Work:
          <br />
          <em>Where Enterprises Can Actually Use Quantum Today.</em>
        </>
      }
      intro="An open session designed for enterprise leaders, founders, operators, and curious technical teams—accessible enough for decision-makers, backed by a live look under the hood on Nexus. Cross-listed on Luma, Eventbrite, and Meetup."
    >
      <NextCohortBanner />

      <WorkSection
        label="Inside the 10 December open session"
        title="Accessible clarity up front. Real technical proof under the hood."
      >
        <div className="divide-y divide-[var(--work-border)] border-y border-[var(--work-border)]">
          {EXECUTIVE_SERIES_SESSIONS.map((session, idx) => (
            <article
              key={session.name}
              className="grid gap-4 py-8 md:grid-cols-[90px_1fr_1.1fr]"
            >
              <span className="font-mono text-xs text-[var(--work-primary)]">
                PART 0{idx + 1}
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
          label="Want to go deeper after the open session?"
          title={`Follow up with a private ${WORK_OFFER.diagnosticMinutes}-minute feasibility diagnostic.`}
        >
          <div className="grid gap-10 md:grid-cols-3">
            {[
              [
                'Bring your question',
                'Share the scheduling, routing, molecular search or security question your team is evaluating—no proprietary datasets required.',
              ],
              [
                'Test where quantum fits',
                'We map whether your problem benefits from hybrid solvers, trapped-ion compilation on Nexus, or post-quantum cryptographic migration today.',
              ],
              [
                'Leave with a clear decision',
                'Walk away with a concrete recommendation on what to do now, what to watch, and whether a Q1 2027 pilot is warranted.',
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
        label="Open RSVP · 10 December 2026"
        title="Reserve your spot for the open session."
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-5 text-[var(--work-muted-fg)]">
            <p>
              Open to enterprise leaders, operations managers, engineers, researchers, and founders exploring where quantum computing and hybrid workflows fit into real-world roadmaps.
            </p>
            <p>
              Register directly below to receive the calendar invite and Singapore / live-stream joining details (also cross-listed on Luma, Eventbrite, and Meetup).
            </p>
            <p className="text-sm">
              Prefer a closed-door session tailored to your organisation? Ask about our private corporate intensive or the Q1 2027 enterprise cohort.
            </p>
          </div>
          <InquiryForm
            kind="open-session-rsvp-dec-10"
            cta="Reserve a spot for 10 December"
          />
        </div>
      </WorkSection>

      <MonthlyMemoSection />
    </WorkPageShell>
  );
}

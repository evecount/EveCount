'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { InquiryForm } from '@/components/work/InquiryForm';
import { WorkPageShell } from '@/components/work/WorkShell';
import { NEXT_COHORT } from '@/lib/work-content';

function ContactContent() {
  const searchParams = useSearchParams();
  const isCohort = searchParams.get('interest') === 'cohort';
  const defaultSector = searchParams.get('sector') || undefined;
  const defaultInterest = searchParams.get('interest') || undefined;
  const defaultChallenge = searchParams.get('challenge') || undefined;

  return (
    <WorkPageShell
      eyebrow={isCohort ? 'Open Session RSVP · 10 December 2026' : 'Start a conversation'}
      title={
        isCohort
          ? 'RSVP for "Quantum at Work" (10 December 2026).'
          : 'Discuss your next session.'
      }
      intro={
        isCohort
          ? `${NEXT_COHORT.title} runs on ${NEXT_COHORT.label} (${NEXT_COHORT.format}). Reserve your spot below or let us know what question you’d like covered during the live session.`
          : 'Tell us whether you are joining the 10 December open session, exploring an executive briefing, or scoping a Q1 2027 corporate intensive.'
      }
    >
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-sm lg:col-span-5">
            <div>
              <p className="work-eyebrow">Before we meet</p>
              <p className="mt-2 text-[var(--work-muted-fg)]">
                A short note on your sector, team composition and the scheduling, routing or allocation bottleneck you want to examine is enough to begin. Please do not include confidential datasets or personal data in this form.
              </p>
            </div>
            <div className="border-t border-[var(--work-border)] pt-6">
              <p className="work-eyebrow">For private team engagements</p>
              <p className="mt-2 text-[var(--work-muted-fg)]">
                Mutual non-disclosure terms can be arranged before detailed operational models or constraints are shared. See{' '}
                <Link
                  href="/work/security"
                  className="text-[var(--work-fg)] underline underline-offset-4"
                >
                  Data &amp; confidentiality
                </Link>
                .
              </p>
            </div>
            <div className="border-t border-[var(--work-border)] pt-6">
              <p className="work-eyebrow">General Eve Count enquiries</p>
              <p className="mt-2 text-[var(--work-muted-fg)]">
                Looking for our broader software engineering, cloud &amp; DevOps or AI consulting studio? Visit the{' '}
                <Link
                  href="/#contact"
                  className="text-[var(--work-fg)] underline underline-offset-4"
                >
                  main Eve Count contact section
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-[var(--work-border)] bg-[var(--work-surface)] p-8 md:p-10">
              <InquiryForm
                kind={isCohort ? 'cohort-application' : 'work-enquiry'}
                cta={isCohort ? 'Submit cohort application' : 'Send enquiry'}
                details={{
                  defaultSector,
                  defaultInterest,
                  defaultChallenge,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </WorkPageShell>
  );
}

export default function WorkContactPage() {
  return (
    <Suspense
      fallback={
        <WorkPageShell
          eyebrow="Start a conversation"
          title="Discuss your next session."
          intro="Loading enquiry form…"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10" />
        </WorkPageShell>
      }
    >
      <ContactContent />
    </Suspense>
  );
}

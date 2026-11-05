'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Printer } from 'lucide-react';
import { WorkClosingBand, WorkPageShell } from '@/components/work/WorkShell';
import { getNewsBySlug, WORK_NEWS } from '@/lib/work-content';

export default function WorkNewsDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const release = getNewsBySlug(slug) ?? WORK_NEWS[0];

  return (
    <WorkPageShell
      eyebrow={`Newsroom · Press release · ${release.location} · ${release.dateLabel}`}
      title={release.title}
      intro={release.dek}
    >
      <article className="mx-auto max-w-[960px] px-6 pb-20 pt-12 md:px-10 md:pb-28">
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

        <div className="mt-10 space-y-6 border-t border-[var(--work-border)] pt-10 text-base leading-relaxed text-[var(--work-fg)]">
          {release.paragraphs.map((p, idx) => (
            <p key={idx}>
              {idx === 0 ? (
                <>
                  <strong className="font-mono text-xs uppercase tracking-[0.12em]">
                    {release.location.toUpperCase()} — {release.dateLabel} —{' '}
                  </strong>
                  {p}
                </>
              ) : (
                p
              )}
            </p>
          ))}

          <blockquote className="my-8 border-l-2 border-[var(--work-primary)] bg-[var(--work-surface)] p-6 md:p-8">
            <p className="text-base italic leading-relaxed text-[var(--work-fg)]">
              &ldquo;{release.quote.text}&rdquo;
            </p>
            <footer className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-[var(--work-muted-fg)]">
              — {release.quote.attribution}
            </footer>
          </blockquote>

          <h2 className="pt-4 text-2xl font-medium tracking-tight">
            Open Session &amp; Companion: &ldquo;Quantum at Work: Where Enterprises Can Actually Use Quantum Today&rdquo;
          </h2>
          <p className="text-sm leading-relaxed text-[var(--work-muted-fg)]">
            Open to enterprise leaders, operations managers, engineers, and curious builders (and cross-listed on Luma, Eventbrite, and Meetup), the session and its open-source technical companion cover three core themes:
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3">
            {release.intensiveTopics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-sm border border-[var(--work-border)] bg-[var(--work-surface)] p-5"
              >
                <p className="text-sm font-medium text-[var(--work-fg)]">{topic.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--work-muted-fg)]">
                  {topic.text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-[var(--work-muted-fg)]">{release.capNote}</p>

          <div className="flex flex-wrap gap-3 pt-2 print:hidden">
            <Link
              href="/work/contact?interest=cohort"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-[var(--work-primary)] px-5 text-xs font-medium text-[var(--work-primary-fg)] shadow-sm transition hover:opacity-90"
            >
              <span>Register for the Open Session</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://evecount.github.io/quantum-at-work/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-[var(--work-fg)]/20 bg-transparent px-5 text-xs font-medium text-[var(--work-fg)] transition hover:border-[var(--work-fg)]/50 hover:bg-[var(--work-muted)]/60"
            >
              <span>Open Technical Companion</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/work/insights/mining-feasibility-blueprint"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-[var(--work-fg)]/20 bg-transparent px-5 text-xs font-medium text-[var(--work-fg)] transition hover:border-[var(--work-fg)]/50 hover:bg-[var(--work-muted)]/60"
            >
              <span>Inspect the Mining Feasibility Blueprint</span>
            </Link>
          </div>

          <div className="mt-12 border-t border-[var(--work-border)] pt-8 text-xs leading-relaxed text-[var(--work-muted-fg)]">
            <p className="font-mono uppercase tracking-[0.14em] text-[var(--work-fg)]">
              About Eve Count Quantum Systems
            </p>
            <p className="mt-2">{release.about}</p>
            <p className="mt-4">
              <strong className="text-[var(--work-fg)]">Media &amp; Executive Inquiries:</strong>{' '}
              {release.contact.label} · {release.contact.email} · {release.contact.website}
            </p>
          </div>
        </div>
      </article>

      <WorkClosingBand title="Register for the open session or discuss a private team engagement." />
    </WorkPageShell>
  );
}

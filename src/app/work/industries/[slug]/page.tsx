'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  WorkClosingBand,
  WorkPageShell,
  WorkSection,
} from '@/components/work/WorkShell';
import { getIndustryBySlug } from '@/lib/work-content';

export default function WorkIndustryDetailPage() {
  const params = useParams<{ slug: string }>();
  const ind = getIndustryBySlug(params?.slug ?? '') ?? getIndustryBySlug('mining')!;

  return (
    <WorkPageShell
      eyebrow={`${
        ind.evidenceStatus === 'exploratory'
          ? 'Exploratory application'
          : 'Industrial focus'
      } / ${ind.n}`}
      title={ind.name}
      intro={ind.intro}
    >
      <WorkSection
        label="Candidate problems"
        title="Start with a bounded, measurable bottleneck."
      >
        <div className="grid gap-8 md:grid-cols-4">
          {ind.problems.map((p) => (
            <h3 key={p} className="border-t border-[var(--work-border)] pt-6 text-xl">
              {p}
            </h3>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[var(--work-muted-fg)]">
          {ind.question}
        </p>
        {ind.scope && (
          <p className="mt-6 max-w-3xl leading-relaxed text-[var(--work-muted-fg)]">
            {ind.scope}
          </p>
        )}
      </WorkSection>

      <section className="bg-[var(--work-surface)]">
        <WorkSection label="The feasibility path">
          <ol className="grid gap-10 md:grid-cols-4">
            {ind.steps.map((step, idx) => (
              <li key={step} className="border-t border-[var(--work-border)] pt-6">
                <span className="font-mono text-xs text-[var(--work-primary)]">
                  0{idx + 1}
                </span>
                <p className="mt-5 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-[var(--work-muted-fg)]">
            These are illustrative candidate problems, not claims of deployed quantum advantage.
          </p>
        </WorkSection>
      </section>

      {ind.deliverables && (
        <WorkSection label="Assessment outputs" title="Evidence for the next decision.">
          <div className="grid gap-10 md:grid-cols-3">
            {ind.deliverables.map((del) => (
              <div key={del.title} className="border-t border-[var(--work-border)] pt-6">
                <h3 className="text-xl">{del.title}</h3>
                <p className="mt-5 leading-relaxed text-[var(--work-muted-fg)]">
                  {del.detail}
                </p>
              </div>
            ))}
          </div>
        </WorkSection>
      )}

      {ind.dataBoundary && (
        <section className="border-t border-[var(--work-border)] bg-[var(--work-surface)]">
          <WorkSection
            label="Data & scope boundaries"
            title="A bounded model. Not unrestricted data access."
          >
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl">Data governance</h3>
                <p className="mt-5 leading-relaxed text-[var(--work-muted-fg)]">
                  {ind.dataBoundary}
                </p>
                <Link
                  href="/work/security"
                  className="mt-6 inline-block text-[var(--work-primary)] hover:underline"
                >
                  Data &amp; confidentiality →
                </Link>
              </div>
              <div>
                <h3 className="text-xl">What this does not claim</h3>
                <p className="mt-5 leading-relaxed text-[var(--work-muted-fg)]">
                  {ind.exclusions}
                </p>
                <Link
                  href="/work/faq"
                  className="mt-6 inline-block text-[var(--work-primary)] hover:underline"
                >
                  Enterprise buyer FAQs →
                </Link>
              </div>
            </div>
          </WorkSection>
        </section>
      )}

      <WorkClosingBand
        title={`Discuss your ${
          ind.challenge ?? (ind.slug === 'mining' ? 'resource-planning' : 'fleet-optimisation')
        } challenge.`}
      />
    </WorkPageShell>
  );
}


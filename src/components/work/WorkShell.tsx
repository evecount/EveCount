'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Compass, FileText, Menu, ShieldCheck, X } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Header } from '@/components/layout/header';
import { InquiryForm } from '@/components/work/InquiryForm';
import { MONTHLY_BRIEFING, NEXT_COHORT } from '@/lib/work-content';

const SUBNAV_LINKS: [string, string][] = [
  ['Overview', '/work'],
  ['Executive series', '/work/briefings'],
  ['Corporate intensive', '/work/engagements'],
  ['Industries', '/work/industries'],
  ['Events', '/work/events'],
  ['Our approach', '/work/company'],
  ['Insights', '/work/insights'],
  ['FAQs', '/work/faq'],
];

export function WorkSubHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/work') return pathname === '/work';
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <div className="sticky top-[88px] z-40 border-b border-[var(--work-border)] bg-[var(--work-bg)]/95 backdrop-blur print:hidden">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-4 px-6 md:px-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2.5 text-sm font-medium text-[var(--work-fg)] no-underline"
        >
          <Compass className="h-5 w-5 text-[var(--work-primary)]" strokeWidth={1.5} />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--work-fg)]">
            Work · Quantum / Industry
          </span>
        </Link>

        <nav aria-label="Work practice navigation" className="hidden items-center gap-6 text-xs lg:flex">
          {SUBNAV_LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                isActive(href)
                  ? 'font-medium text-[var(--work-fg)]'
                  : 'text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/work/contact"
            className="hidden sm:inline-flex h-9 items-center justify-center gap-2 rounded-sm bg-[var(--work-primary)] px-4 text-xs font-medium text-[var(--work-primary-fg)] shadow-sm transition hover:opacity-90"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close sub-navigation' : 'Open sub-navigation'}
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-[var(--work-fg)] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--work-border)] bg-[var(--work-bg)] px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-3.5 text-sm">
            {SUBNAV_LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive(href)
                    ? 'font-medium text-[var(--work-primary)]'
                    : 'text-[var(--work-fg)]'
                }
              >
                {label}
              </Link>
            ))}
            <Link
              href="/work/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-[var(--work-primary)] px-4 text-xs font-medium text-[var(--work-primary-fg)]"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export function WorkFooter() {
  return (
    <footer className="border-t border-[var(--work-border)] bg-[var(--work-bg)] text-[var(--work-fg)] print:hidden">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 text-xl font-medium">
              <Compass className="h-6 w-6 text-[var(--work-primary)]" strokeWidth={1.5} />
              <span>eve count</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--work-muted-fg)]">
              Quantum feasibility for the industries
              <br />
              that move the world.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--work-primary)] hover:underline"
            >
              <span>The wider Eve Count practice</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h3 className="work-eyebrow">Programmes</h3>
            <div className="mt-5 grid gap-3.5 text-sm">
              <Link href="/work/briefings" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Executive briefing series
              </Link>
              <Link href="/work/engagements" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Corporate intensive
              </Link>
              <Link href="/work/contact" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Feasibility diagnostic
              </Link>
              <Link href="/work/events" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Events &amp; cohorts
              </Link>
              <Link href="/work/faq" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Buyer FAQs
              </Link>
            </div>
          </div>

          <div>
            <h3 className="work-eyebrow">Focus</h3>
            <div className="mt-5 grid gap-3.5 text-sm">
              <Link href="/work/industries/mining" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Mining &amp; resources
              </Link>
              <Link href="/work/industries/maritime" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Maritime &amp; fleets
              </Link>
              <Link href="/work/industries/banking" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Banking &amp; financial operations
              </Link>
              <Link href="/work/industries/compliance" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Compliance &amp; regtech
              </Link>
              <Link href="/work/company" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Our approach
              </Link>
              <Link href="/work/insights" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Technical briefings &amp; report preview
              </Link>
              <Link
                href="/work/news/launch-executive-cohort-nov-2026"
                className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]"
              >
                Newsroom
              </Link>
            </div>
          </div>

          <div>
            <h3 className="work-eyebrow">Connect</h3>
            <div className="mt-5 grid gap-3.5 text-sm">
              <Link href="/work/contact" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Enquiries
              </Link>
              <Link href="/work/security" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                Data &amp; confidentiality
              </Link>
              <Link href="/" className="text-[var(--work-muted-fg)] hover:text-[var(--work-primary)]">
                evecount.com ↗
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-[var(--work-border)] pt-6 font-mono text-[10px] uppercase text-[var(--work-muted-fg)]">
          <span>© 2026 Eve Count</span>
          <span>Independent advisory · Evidence before advantage</span>
          <span>Mining / Maritime / Quantum</span>
        </div>
      </div>
    </footer>
  );
}

export function WorkSection({
  label,
  title,
  pinned = false,
  children,
}: {
  label: string;
  title?: ReactNode;
  pinned?: boolean;
  children: ReactNode;
}) {
  const headerBlock = (
    <>
      <div className="work-eyebrow">{label}</div>
      {title && (
        <h2 className="mt-5 max-w-3xl text-3xl font-normal leading-tight text-[var(--work-fg)] md:text-5xl">
          {title}
        </h2>
      )}
    </>
  );

  if (pinned) {
    return (
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-16">
          <div className="self-start lg:sticky lg:top-36">{headerBlock}</div>
          <div className="mt-2">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10">
      {headerBlock}
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function WorkClosingBand({
  title = 'Bring us your hardest operational problem.',
  href = '/work/contact',
  label = 'Start a conversation',
}: {
  title?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-[var(--work-ink)] text-[var(--work-ink-fg)]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-10 px-6 py-20 md:px-10">
        <div>
          <div className="font-mono text-xs uppercase text-[var(--work-primary-glow)]">
            The next decision
          </div>
          <h2 className="mt-6 max-w-3xl text-3xl font-normal leading-tight md:text-5xl">
            {title}
          </h2>
        </div>
        <Link
          href={href}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-[var(--work-primary)] px-8 text-sm font-medium text-[var(--work-primary-fg)] transition hover:opacity-90"
        >
          <span>{label}</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export function WorkPageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="work-subsite min-h-screen bg-[var(--work-bg)] text-[var(--work-fg)]">
      <Header />
      <WorkSubHeader />
      <section className="border-b border-[var(--work-border)] bg-[var(--work-surface)]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="work-eyebrow">{eyebrow}</div>
          <h1 className="mt-7 max-w-4xl text-4xl font-normal leading-[1.08] md:text-6xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--work-muted-fg)]">
            {intro}
          </p>
        </div>
      </section>
      {children}
      <WorkFooter />
    </div>
  );
}

export function NextCohortBanner() {
  return (
    <section className="border-y border-[var(--work-border)] bg-[var(--work-ink)] text-[var(--work-ink-fg)]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr] md:px-10">
        <div>
          <div className="font-mono text-xs uppercase text-[var(--work-primary-glow)]">
            Next executive intensive cohort
          </div>
          <h2 className="mt-5 text-3xl md:text-4xl">
            <time dateTime={NEXT_COHORT.date}>{NEXT_COHORT.label}</time>
          </h2>
          <p className="mt-4 text-[var(--work-ink-fg)]/80">{NEXT_COHORT.format}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <p className="flex items-center gap-3 text-sm">
            <span className="h-2 w-2 bg-[var(--work-primary-glow)]" />
            {NEXT_COHORT.status} · Up to {NEXT_COHORT.teamLimit} enterprise teams
          </p>
          <Link
            href="/work/contact?interest=cohort"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-[var(--work-primary)] px-8 text-sm font-medium text-[var(--work-primary-fg)] transition hover:opacity-90"
          >
            <span>Apply for the cohort</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="max-w-md text-xs leading-relaxed text-[var(--work-ink-fg)]/70">
            Cohort fees, timings and attendance arrangements confirmed before acceptance. Private team delivery is scheduled separately.
          </p>
        </div>
      </div>
    </section>
  );
}

export function InsideDeliverableSection() {
  const items = [
    'Operational problem',
    'Classical baseline',
    'Hamiltonian formulation',
    'Compilation benchmark',
    'Executive decision gates',
  ];

  return (
    <WorkSection label="Inside the deliverable" title="Inspect the work before commissioning it.">
      <div className="grid gap-10 border-y border-[var(--work-border)] py-8 md:grid-cols-[1fr_1.5fr]">
        <div>
          <FileText className="h-8 w-8 text-[var(--work-primary)]" strokeWidth={1.25} />
          <div className="mt-6 work-eyebrow">Illustrative report blueprint · Mining</div>
          <h3 className="mt-4 text-2xl">
            3D Stope Sequencing
            <br />
            &amp; Grade Blending
          </h3>
          <Link
            href="/work/insights/mining-feasibility-blueprint"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--work-primary)] hover:underline"
          >
            <span>Inspect the report blueprint</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--work-muted-fg)]">
            From extraction precedence and smelter constraints to classical baselines, native-gate mapping and a conditional hardware roadmap.
          </p>
          <ol className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            {items.map((item, idx) => (
              <li key={item} className="border-t border-[var(--work-border)] pt-4">
                <span className="mr-3 font-mono text-[var(--work-primary)]">0{idx + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs leading-relaxed text-[var(--work-muted-fg)]">
            A sample structure, not a verified client case study. Benchmark figures are supplied blueprint inputs; supporting run evidence has not yet been published.
          </p>
        </div>
      </div>
    </WorkSection>
  );
}

export function PracticeLeadSection() {
  return (
    <WorkSection label="Delivery leadership" title="Accountable for the work.">
      <div className="divide-y divide-[var(--work-border)] border-y border-[var(--work-border)]">
        <article className="grid gap-10 py-9 md:grid-cols-[1fr_1.4fr]">
          <div>
            <ShieldCheck className="mb-6 h-9 w-9 text-[var(--work-primary)]" strokeWidth={1.25} />
            <div className="work-eyebrow">Practice Lead · Founder &amp; CTO</div>
            <h3 className="mt-3 text-3xl">Gwendalynn Lim</h3>
            <p className="mt-3 text-sm text-[var(--work-muted-fg)]">
              Founder &amp; Technical Lead
              <br />
              Eve Count Quantum Systems
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Specialisation</h4>
            <p className="mt-3 leading-relaxed text-[var(--work-muted-fg)]">
              Combinatorial optimisation, Lie algebra parameterisations, and trapped-ion circuit synthesis via Quantinuum Nexus.
            </p>
            <h4 className="mt-6 text-sm font-medium">Track record</h4>
            <p className="mt-3 leading-relaxed text-[var(--work-muted-fg)]">
              Applied computing and advanced data systems specialist; contributor to competitive global quantum computing challenge frameworks; lead architect behind Eve Count’s discrete industrial optimisation pipelines.
            </p>
            <blockquote className="mt-8 border-l-2 border-[var(--work-primary)] pl-5 text-lg leading-relaxed">
              “Enterprise quantum exploration fails when treated as academic theater. Our practice is built strictly around mathematical mapping, compiler efficiency, and validating whether a problem can beat classical heuristics on live hardware.”
            </blockquote>
          </div>
        </article>

        <article className="grid gap-10 py-9 md:grid-cols-[1fr_1.4fr]">
          <div>
            <Compass className="mb-6 h-9 w-9 text-[var(--work-primary)]" strokeWidth={1.25} />
            <div className="work-eyebrow">Co-founder &amp; Systems Architect</div>
            <h3 className="mt-3 text-3xl">Benjamin Lim</h3>
            <p className="mt-3 text-sm text-[var(--work-muted-fg)]">
              Co-founder &amp; Systems Architect
              <br />
              Eve Count Quantum Systems
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Specialisation</h4>
            <p className="mt-3 leading-relaxed text-[var(--work-muted-fg)]">
              Interactive 3D quantum state and circuit visualisation, agentic runtime orchestration, and enterprise systems architecture.
            </p>
            <h4 className="mt-6 text-sm font-medium">Track record</h4>
            <p className="mt-3 leading-relaxed text-[var(--work-muted-fg)]">
              Co-architect of the Project Q-Rotate 3D Constellation and verification interfaces for the Quantinuum SG Grand Challenge 2026; leads full-stack systems engineering across Cybrdeck, Unity OS, and Eve Count’s technical delivery pipelines.
            </p>
          </div>
        </article>
      </div>
    </WorkSection>
  );
}

export function MonthlyMemoSection() {
  return (
    <section className="border-t border-[var(--work-border)] bg-[var(--work-surface)]">
      <WorkSection label="The monthly technical memo" title={MONTHLY_BRIEFING.name}>
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="max-w-xl leading-relaxed text-[var(--work-muted-fg)]">
            Native gate parameterisations. Circuit compilation benchmarks. Operations research case studies. One technical memo each month.
          </p>
          <InquiryForm
            kind="eve-technical-briefing"
            cta="Subscribe to technical briefings"
            emailOnly
          />
        </div>
      </WorkSection>
    </section>
  );
}


'use client';

import {
  PracticeLeadSection,
  WorkClosingBand,
  WorkPageShell,
  WorkSection,
} from '@/components/work/WorkShell';

export default function WorkCompanyPage() {
  return (
    <WorkPageShell
      eyebrow="The Eve Count approach"
      title={
        <>
          Evidence before
          <br />
          advantage.
        </>
      }
      intro="This is Eve Count’s dedicated quantum-and-industry practice site, integrated within the wider evecount.com presence. Our focus is a practical question: does your operational problem justify quantum exploration?"
    >
      <PracticeLeadSection />

      <WorkSection
        label="Working principles"
        title="A credible roadmap starts with what works today."
      >
        <div className="grid gap-10 md:grid-cols-3">
          {[
            [
              'Baseline first',
              'Document current formulations, solver settings, runtimes and solution quality. Classical methods remain the benchmark—not a straw man.',
            ],
            [
              'Measure the cost',
              'Inspect connectivity, circuit depth, two-qubit gates and noise. Hardware suitability is problem-specific; more qubits alone are not a business case.',
            ],
            [
              'Keep the decision open',
              'A useful assessment may recommend a pilot, more classical work or no quantum investment. The outcome should follow the evidence.',
            ],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-[var(--work-border)] pt-6">
              <h3 className="text-xl">{title}</h3>
              <p className="mt-4 leading-relaxed text-[var(--work-muted-fg)]">{body}</p>
            </div>
          ))}
        </div>
      </WorkSection>

      <section className="bg-[var(--work-surface)]">
        <WorkSection
          label="Technical scope"
          title="Trapped-ion architecture. Hybrid workflows. Real comparisons."
        >
          <div className="grid gap-10 md:grid-cols-2">
            <p className="leading-relaxed text-[var(--work-muted-fg)]">
              The programme explores constrained optimisation, QUBO and Hamiltonian formulations, all-to-all connectivity, native trapped-ion interactions and compiler-level resource trade-offs. Hands-on work uses pytket and Nexus cloud emulators.
            </p>
            <p className="leading-relaxed text-[var(--work-muted-fg)]">
              Platform references describe the curriculum, not a claimed partnership or endorsement. Standard compiler optimisation and noise emulation passes on Nexus are absorbed in the engagement fee; additional live-hardware work or expanded compute scope is agreed before it is commissioned. We do not promise speedups, cost savings or production quantum advantage.
            </p>
          </div>
        </WorkSection>
      </section>

      <WorkClosingBand />
    </WorkPageShell>
  );
}


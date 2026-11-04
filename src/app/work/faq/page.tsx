import { Plus } from 'lucide-react';
import { WorkClosingBand, WorkPageShell } from '@/components/work/WorkShell';
import { BUYER_FAQS } from '@/lib/work-content';

export default function WorkFaqPage() {
  return (
    <WorkPageShell
      eyebrow="Buyer FAQs"
      title="Direct answers before you commit a team."
      intro="Common questions from operations leaders, engineering sponsors and procurement teams evaluating an Eve Count briefing or intensive."
    >
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="divide-y divide-[var(--work-border)] border-y border-[var(--work-border)]">
          {BUYER_FAQS.map((item, idx) => (
            <details key={item.question} className="group py-6" open={idx === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-lg font-medium tracking-tight text-[var(--work-fg)]">
                  {item.question}
                </span>
                <Plus className="h-4 w-4 shrink-0 text-[var(--work-primary)] transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--work-muted-fg)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <WorkClosingBand title="Agree the scope. Then begin the work." />
    </WorkPageShell>
  );
}

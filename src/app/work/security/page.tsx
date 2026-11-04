import { WorkClosingBand, WorkPageShell } from '@/components/work/WorkShell';

export default function WorkSecurityPage() {
  return (
    <WorkPageShell
      eyebrow="Data & confidentiality"
      title="Handling your enquiry and engagement data."
      intro="How information shared through this website is used, and how private client engagements are scoped."
    >
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 border-t border-[var(--work-border)] pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="work-eyebrow">01 · Enquiry information</p>
            <h2 className="mt-2 text-xl font-medium">Website enquiries</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--work-muted-fg)] md:col-span-8">
            <p>
              Information submitted through the contact form — your name, work email, organisation, role, sector and scoping notes — is used only to review and respond to your enquiry.
            </p>
            <p>
              Please do not submit confidential commercial data, proprietary datasets, personal data sets or regulated records through the public website form. Initial scoping requires only a high-level description of your operational question.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[var(--work-border)] pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="work-eyebrow">02 · Private engagements</p>
            <h2 className="mt-2 text-xl font-medium">Working with your team</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:col-span-8 md:grid-cols-3">
            {[
              [
                'Confidentiality',
                'Mutual non-disclosure terms can be put in place before detailed operational models, constraints or internal benchmarks are shared.',
              ],
              [
                'Platform access',
                'Where hands-on sessions use Nexus or pytket, access and data handling follow the agreed engagement scope and platform terms.',
              ],
              [
                'Deliverables & IP',
                'Client-provided data remains client property. Ownership and reuse terms for problem formulations and summary deliverables are agreed in the statement of work.',
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-sm border border-[var(--work-border)] bg-[var(--work-surface)] p-6"
              >
                <h3 className="text-base font-medium">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--work-muted-fg)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkClosingBand
        title="Discuss confidentiality before sharing operational details."
        href="/work/contact"
        label="Contact the practice"
      />
    </WorkPageShell>
  );
}

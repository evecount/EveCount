'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';
import { submitWorkInquiryAction } from '@/app/actions';

const InquirySchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  title: z.string().trim().max(120),
  org: z.string().trim().max(120),
  email: z.string().trim().email('Enter a valid work email').max(255),
  sector: z.string().max(80),
  message: z.string().trim().max(2000),
});

const FIELDS: [string, string][] = [
  ['name', 'Full name'],
  ['title', 'Job title'],
  ['org', 'Organisation'],
  ['email', 'Work email'],
];

export function InquiryForm({
  kind,
  cta,
  details,
  onDone,
  showMessage = true,
  emailOnly = false,
}: {
  kind: string;
  cta: string;
  details?: Record<string, unknown>;
  onDone?: () => void;
  showMessage?: boolean;
  emailOnly?: boolean;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setErrorMsg(null);
    const formData = Object.fromEntries(new FormData(ev.currentTarget)) as Record<string, string>;

    if (emailOnly && formData.consent !== 'on') {
      setErrorMsg('Please consent to receiving the monthly technical briefing.');
      return;
    }

    const parsed = InquirySchema.safeParse({
      message: '',
      sector: '',
      title: '',
      org: '',
      ...formData,
      ...(emailOnly ? { name: 'Unnamed briefing subscriber' } : {}),
    });

    if (!parsed.success) {
      setErrorMsg(parsed.error.issues[0]?.message ?? 'Please check the form');
      return;
    }

    setStatus('sending');
    try {
      const res = await submitWorkInquiryAction({
        kind,
        ...parsed.data,
        details: {
          ...details,
          ...(emailOnly
            ? {
                nameProvided: false,
                consent: true,
                consentVersion: 'monthly-briefing-v1',
                consentAt: new Date().toISOString(),
                frequencyMonths: 1,
              }
            : {}),
        },
      });

      if (!res.success) {
        setStatus('idle');
        setErrorMsg(res.message ?? 'Your enquiry could not be sent. Please try again.');
        return;
      }

      setStatus('sent');
      onDone?.();
    } catch {
      setStatus('idle');
      setErrorMsg('Your request could not be sent. Please try again.');
    }
  }

  if (status === 'sent' && !onDone) {
    return (
      <div className="flex max-w-3xl items-start gap-4 border-t border-[var(--work-border)] pt-8">
        <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--work-success)] shrink-0" />
        <div role="status">
          <h3 className="text-xl font-medium text-[var(--work-fg)]">
            {emailOnly ? 'You’re on the briefing list.' : 'Received — thank you.'}
          </h3>
          <p className="mt-2 text-[var(--work-muted-fg)]">
            {emailOnly
              ? 'Your subscription request for the monthly industrial combinatorics memo has been saved.'
              : 'The Eve Count team will follow up to discuss fit and next steps.'}
          </p>
        </div>
      </div>
    );
  }

  const inputCls =
    'h-12 w-full rounded-sm border border-[var(--work-border)] bg-[var(--work-bg)] px-4 text-sm text-[var(--work-fg)] outline-none transition focus:border-[var(--work-primary)]';

  return (
    <form onSubmit={handleSubmit} noValidate className="grid max-w-3xl gap-5 sm:grid-cols-2">
      {(emailOnly ? FIELDS.filter(([key]) => key === 'email') : FIELDS).map(([key, label]) => (
        <label key={key} className={emailOnly ? 'block sm:col-span-2' : 'block'}>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--work-muted-fg)]">
            {label}
          </span>
          <input
            name={key}
            required={key === 'name' || key === 'email'}
            type={key === 'email' ? 'email' : 'text'}
            maxLength={key === 'email' ? 255 : 120}
            className={`mt-2 ${inputCls}`}
          />
        </label>
      ))}

      {!emailOnly && (
        <label className="block sm:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--work-muted-fg)]">
            Sector
          </span>
          <select name="sector" className={`mt-2 ${inputCls}`}>
            {['Mining & resources', 'Maritime & fleet operations', 'Industrial logistics', 'Other'].map(
              (opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              )
            )}
          </select>
        </label>
      )}

      {showMessage && !emailOnly && (
        <label className="block sm:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--work-muted-fg)]">
            What would you like to discuss?
          </span>
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            className="mt-2 w-full rounded-sm border border-[var(--work-border)] bg-[var(--work-bg)] p-4 text-sm text-[var(--work-fg)] outline-none focus:border-[var(--work-primary)]"
          />
        </label>
      )}

      {emailOnly ? (
        <label className="flex items-start gap-3 text-xs leading-relaxed text-[var(--work-muted-fg)] sm:col-span-2">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--work-primary)]"
          />
          <span>
            I agree to receive Eve Count’s once-monthly technical briefing. I can request removal at any time through the contact form.
          </span>
        </label>
      ) : (
        <p className="text-xs leading-relaxed text-[var(--work-muted-fg)] sm:col-span-2">
          Your details are used to respond to this enquiry. Please do not include confidential datasets; MNDA arrangements can be discussed first.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-12 h-auto max-w-full items-center gap-2 whitespace-normal rounded-sm bg-[var(--work-fg)] px-6 py-3 text-sm font-medium text-[var(--work-bg)] transition hover:bg-[var(--work-primary)] disabled:opacity-60"
        >
          <span>{status === 'sending' ? 'Sending…' : cta}</span>
          <ArrowUpRight className="h-4 w-4 shrink-0" />
        </button>
        {errorMsg && (
          <span role="alert" className="text-sm text-red-600">
            {errorMsg}
          </span>
        )}
      </div>
    </form>
  );
}


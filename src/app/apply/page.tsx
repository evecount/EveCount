'use client';

import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiagnosticInterlude } from "@/components/diagnostic-interlude";

const executiveRoles = [
  "Chief Information Security Officer (CISO)",
  "Chief Information Officer (CIO) / Chief Technology Officer (CTO)",
  "Head of Computational Chemistry / Molecular R&D",
  "Head of Enterprise Risk & Governance",
  "VP Infrastructure / Enterprise Cryptographic Architecture",
  "Principal Investigator / National Lab Director",
  "Managing Director / General Partner",
  "Other Executive Sponsor"
];

const organizationScales = [
  "< $50M Operating Budget / ARR",
  "$50M – $250M (Mid-Market Enterprise)",
  "$250M – $1B (Tier-1 Enterprise)",
  "$1B – $10B+ (Global Multinational / Sovereign Entity)"
];

const objectives = [
  ["Post-Quantum Cryptography (PQC) Audit & HNDL Defense", "Comprehensive cipher discovery and NIST FIPS 203/204/205 migration planning."],
  ["Accelerated Molecular Docking / Candidate Drug Discovery", "Quantum resonance screening of therapeutic compounds with zero-knowledge coordinate privacy."],
  ["Frontier Hardware Benchmarking & Algorithmic Compilation", "Trapped-ion circuit synthesis and fidelity validation on Quantinuum and IonQ backends."],
  ["Cryptographic Agility Architecture & Governance", "Modular abstraction layers to prevent future hardware and algorithmic lock-in."],
] as const;

const assetBrackets = [
  "< $25M (Standard Enterprise Scope)",
  "$25M – $100M (High Institutional Exposure)",
  "$100M – $500M (Mission-Critical Financial / Healthcare Assets)",
  "$500M+ (Sovereign Infrastructure / Proprietary BioPharma Pipelines)"
];

const timelines = [
  "Active Initiative — Q4 2026 / Q1 2027 (Budget Allocated)",
  "Evaluation Phase — H1 2027 (Vendor & Architecture Selection)",
  "Strategic Horizon — Board-Level Briefing & Feasibility Review"
];

type FormState = {
  companyName: string;
  executiveSponsor: string;
  workEmail: string;
  executiveRole: string;
  organizationScale: string;
  industry: string;
  primaryObjective: string;
  assetLiabilityBracket: string;
  procurementTimeline: string;
  technicalContext: string;
  mndaRequired: boolean;
  website: string;
};

const initialForm: FormState = {
  companyName: "",
  executiveSponsor: "",
  workEmail: "",
  executiveRole: "",
  organizationScale: "",
  industry: "",
  primaryObjective: "",
  assetLiabilityBracket: "",
  procurementTimeline: "",
  technicalContext: "",
  mndaRequired: true,
  website: ""
};

const freeEmailDomains = new Set([
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com", "mail.com", "protonmail.com", "proton.me"
]);

function diagnosticEmail(form: FormState) {
  const optional = (value: string) => value.trim() || "Not provided";
  const today = new Date().toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  const lines = [
    "==================================================",
    "EVE COUNT QUANTUM SYSTEMS — ENTERPRISE DIAGNOSTIC",
    "==================================================",
    `Date of Submission: ${today}`,
    "",
    "1. AUTHORITY & INSTITUTIONAL CONTEXT",
    `• Institution / Entity: ${form.companyName.trim()}`,
    `• Executive Sponsor: ${form.executiveSponsor.trim()}`,
    `• Executive Role / Title: ${form.executiveRole}`,
    `• Corporate / Institutional Email: ${form.workEmail.trim()}`,
    `• Operating Scale / Revenue Bracket: ${form.organizationScale}`,
    `• Industry / Vertical: ${optional(form.industry)}`,
    "",
    "2. STRATEGIC MANDATE & RISK EXPOSURE",
    `• Primary Commissioning Objective: ${form.primaryObjective}`,
    `• Estimated Encrypted Asset Exposure: ${optional(form.assetLiabilityBracket)}`,
    `• Engagement Horizon: ${optional(form.procurementTimeline)}`,
    "",
    "3. TECHNICAL CONTEXT & SYSTEM ARCHITECTURE",
    `${optional(form.technicalContext)}`,
    "",
  ];

  if (form.mndaRequired) {
    lines.push(
      "==================================================",
      "BILATERAL MUTUAL NON-DISCLOSURE AGREEMENT (MNDA)",
      "==================================================",
      `Effective Date: ${today}`,
      "",
      "PARTIES:",
      "1. Disclosing & Receiving Party: Eve Count Quantum Systems",
      "   Authorized Signatory: Gwendalynn Lim Wan Ting, Founder & CTO",
      "   Official Email: gwen@evecount.com",
      "",
      `2. Disclosing & Receiving Party: ${form.companyName.trim()}`,
      `   Authorized Signatory: ${form.executiveSponsor.trim()}`,
      `   Title / Role: ${form.executiveRole}`,
      `   Official Email: ${form.workEmail.trim()}`,
      "",
      "RECITALS & PURPOSE:",
      `The Parties wish to explore potential technical engagement and collaboration regarding:`,
      `"${form.primaryObjective}".`,
      "To facilitate technical discussions without risking forfeiture of intellectual property, trade secrets, cryptographic keys, or proprietary research, the Parties agree to the following terms:",
      "",
      "TERMS & CONDITIONS:",
      "1. Confidential Information: Includes all technical blueprints, algorithm specifications, quantum benchmark telemetry, source code, data architectures, and strategic roadmaps exchanged between the Parties.",
      "2. Standard of Care: Each Party agrees to protect the Confidential Information of the other Party with the same degree of care it uses for its own proprietary information (and never less than reasonable care).",
      "3. Permitted Purpose: Confidential Information shall be used exclusively for evaluating and executing bilateral technical or commercial collaborations between Eve Count Quantum Systems and the counterparty.",
      "4. Non-Disclosure: Neither Party will disclose Confidential Information to any third party without prior written consent, except to officers, employees, and advisors with a strict need to know and bound by equivalent confidentiality obligations.",
      "5. Term & Survival: This mutual confidentiality obligation shall remain in effect for two (2) years from the Effective Date above.",
      "",
      "SIGNATURES & ACKNOWLEDGMENT:",
      `Accepted & Requested on: ${today}`,
      "",
      `For ${form.companyName.trim()}:`,
      `Authorized Signatory: ${form.executiveSponsor.trim()}`,
      `Title: ${form.executiveRole}`,
      `Email: ${form.workEmail.trim()}`,
      "",
      "For Eve Count Quantum Systems:",
      "Authorized Signatory: Gwendalynn Lim Wan Ting",
      "Title: Founder & CTO, Eve Count Quantum Systems",
      "Email: gwen@evecount.com",
      "=================================================="
    );
  } else {
    lines.push("Bilateral mutual non-disclosure agreement requested: No");
  }

  const subject = form.mndaRequired 
    ? `Enterprise Diagnostic & MNDA — ${form.companyName.trim()} [${form.executiveSponsor.trim()}]`
    : `Enterprise Diagnostic — ${form.companyName.trim()} [${form.executiveSponsor.trim()}]`;

  return `mailto:gwen@evecount.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export default function ApplyPage() {
  const reduced = useReducedMotion();
  const visualRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [draftOpened, setDraftOpened] = useState(false);

  useEffect(() => {
    const video = visualRef.current;
    if (!video || videoError) return;
    if (reduced) {
      video.pause();
      video.currentTime = 0;
    } else {
      video.play().catch(() => {});
    }
  }, [reduced, videoError]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setDraftOpened(false);
    setForm(current => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!form.companyName.trim() || !form.executiveSponsor.trim() || !form.workEmail.trim() || !form.executiveRole || !form.organizationScale || !form.primaryObjective) {
      setError("Please complete all required institutional qualification fields.");
      return;
    }
    const email = form.workEmail.trim();
    const domain = email.split("@").at(-1)?.toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !domain || freeEmailDomains.has(domain)) {
      setError("Please use an authorized corporate or organizational email address.");
      return;
    }
    if (form.website) return; // honeypot caught bot
    setDraftOpened(true);
    window.location.href = diagnosticEmail(form);
  };

  return (
    <main className="diagnostic-page">
      <section className="handoff-visual">
        <img src="/images/quantum-hardware.jpg" alt="Quantum computing chamber filled with golden light" width={1920} height={1088} />
        <video 
          ref={visualRef} 
          className="cinema-video" 
          src="/images/quantum-hardware-loop.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto" 
          aria-hidden="true" 
        />
        <div className="handoff-overlay">
          <Link href="/" className="handoff-brand">
            <img src="/images/evecount-mark.png" alt="Eve Count home" width={150} height={150} />
          </Link>
          <p>There is no perfect moment<br />to prepare for the future.</p>
          <span>EVE COUNT · QUANTUM SYSTEMS</span>
        </div>
      </section>

      <section className="diagnostic-panel">
        <header className="diagnostic-top">
          <Link href="/">
            <ArrowLeft size={16} /> Overview
          </Link>
          <span>CONFIDENTIAL ENQUIRY · SINGAPORE</span>
        </header>

        <div className="diagnostic-inner">
          <div className="diagnostic-intro">
            <p className="handoff-kicker">ENTERPRISE QUANTUM DIAGNOSTIC</p>
            <h1>Begin with<br /><em>what is true.</em></h1>
            <p>A clear first picture of your post-quantum readiness, research objective, or hardware question. No documents needed to begin.</p>
            <div>
              <span>NIST FIPS 203 / 204 / 205</span>
              <span>QUANTINUUM · IONQ</span>
              <span>4–6 MINUTES</span>
            </div>
          </div>

          <form className="diagnostic-form" onSubmit={handleSubmit} noValidate>
            {error && <div className="diagnostic-error" role="alert">{error}</div>}

            <FormSection number="01" title="Authority & context" note="Who should we understand first?">
              <Field label="Institution / entity name" required>
                <input value={form.companyName} onChange={e => update("companyName", e.target.value)} autoComplete="organization" />
              </Field>
              <Field label="Executive sponsor" required>
                <input value={form.executiveSponsor} onChange={e => update("executiveSponsor", e.target.value)} autoComplete="name" />
              </Field>
              <Field label="Corporate / institutional email" required wide hint="Please use your organization’s domain.">
                <input type="email" value={form.workEmail} onChange={e => update("workEmail", e.target.value)} autoComplete="email" />
              </Field>
              <Field label="Executive role / title" required>
                <Select value={form.executiveRole} onChange={value => update("executiveRole", value)} placeholder="Select role" options={executiveRoles} />
              </Field>
              <Field label="Annual revenue / operating scale" required>
                <Select value={form.organizationScale} onChange={value => update("organizationScale", value)} placeholder="Select scale" options={organizationScales} />
              </Field>
              <Field label="Industry / vertical" wide>
                <input value={form.industry} onChange={e => update("industry", e.target.value)} placeholder="Banking, biopharma, aerospace…" />
              </Field>
            </FormSection>

            <DiagnosticInterlude
              first="Preparation is not"
              emphasis="a prediction."
              note="Ten fields, four to six minutes, one considered conversation. Nothing here asks for a document you do not already have — only for the shape of the question you are carrying."
              facts={["No documents to upload", "Four to six minutes", "One email to send"]}
            />

            <FormSection number="02" title="The question" note="What must this engagement make possible?">
              <fieldset className="diagnostic-objectives">
                <legend>Primary commissioning mandate <b>*</b></legend>
                {objectives.map(([title, detail]) => (
                  <label key={title} className={form.primaryObjective === title ? "is-selected" : ""}>
                    <input 
                      type="radio" 
                      name="objective" 
                      value={title} 
                      checked={form.primaryObjective === title} 
                      onChange={() => update("primaryObjective", title)} 
                    />
                    <i>{form.primaryObjective === title && <Check size={13} />}</i>
                    <span>
                      <strong>{title}</strong>
                      <small>{detail}</small>
                    </span>
                  </label>
                ))}
              </fieldset>

              <Field label="Estimated value of encrypted assets / IP">
                <Select value={form.assetLiabilityBracket} onChange={value => update("assetLiabilityBracket", value)} placeholder="Select exposure" options={assetBrackets} />
              </Field>
              <Field label="Procurement & engagement horizon">
                <Select value={form.procurementTimeline} onChange={value => update("procurementTimeline", value)} placeholder="Select horizon" options={timelines} />
              </Field>
            </FormSection>

            <FormSection number="03" title="What we should know" note="Only the context needed for a useful first conversation.">
              <Field label="High-level systems or compound focus" wide>
                <textarea rows={5} value={form.technicalContext} onChange={e => update("technicalContext", e.target.value)} placeholder="Describe the system, risk, target, or decision you are exploring." />
              </Field>
              <label className="diagnostic-check">
                <input type="checkbox" checked={form.mndaRequired} onChange={e => update("mndaRequired", e.target.checked)} />
                <i>{form.mndaRequired && <Check size={13} />}</i>
                <span>
                  <strong>Prepare a bilateral mutual non-disclosure agreement (MNDA)</strong>
                  <small>Pre-populates executed mutual NDA terms with your name, company, date, and scope directly in your email draft.</small>
                </span>
              </label>

              {/* Honeypot field for bot suppression */}
              <input className="diagnostic-honey" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={e => update("website", e.target.value)} style={{ display: 'none' }} />

              <Button type="submit" className="diagnostic-submit">
                Open email to Gwen <ArrowRight size={19} />
              </Button>
              <p className="diagnostic-privacy">
                Your answers open directly in your email client. Review and send the draft to complete your enquiry; this page does not store unencrypted institutional secrets.
              </p>
              {draftOpened && (
                <p className="diagnostic-email-status" role="status">
                  Your email draft should be open. Please press Send in your email app to complete the enquiry. If nothing opened, check that an email app is configured, then try the button again.
                </p>
              )}
            </FormSection>
          </form>
        </div>

        <footer className="diagnostic-panel-footer flex justify-between items-center py-6 border-t border-[var(--line)] text-xs text-[var(--ghost)] font-mono">
          <span>EVE COUNT QUANTUM SYSTEMS</span>
          <a href="mailto:gwen@evecount.com" className="hover:text-[var(--ink)] transition-colors">gwen@evecount.com</a>
        </footer>
      </section>
    </main>
  );
}

function FormSection({ number, title, note, children }: { number: string; title: string; note: string; children: ReactNode }) {
  return (
    <section className="diagnostic-section">
      <header>
        <span>{number} / 03</span>
        <div>
          <h2>{title}</h2>
          <p>{note}</p>
        </div>
      </header>
      <div className="diagnostic-fields">{children}</div>
    </section>
  );
}

function Field({ label, required, hint, wide, children }: { label: string; required?: boolean; hint?: string; wide?: boolean; children: ReactNode }) {
  return (
    <label className={`diagnostic-field${wide ? " is-wide" : ""}`}>
      <span>{label}{required && <b> *</b>}</span>
      {children}
      {hint && <small>{hint}</small>}
    </label>
  );
}

function Select({ value, onChange, placeholder, options }: { value: string; onChange: (value: string) => void; placeholder: string; options: readonly string[] }) {
  return (
    <span className="diagnostic-select">
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      <ChevronDown size={16} />
    </span>
  );
}

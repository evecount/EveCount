'use client';

import { useState, useEffect } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { submitEnterpriseDiagnosticAction, type EnterpriseDiagnosticInput } from "@/app/actions";
import { ShieldCheck, CheckCircle2, Lock, ArrowUpRight, Building2, Calendar, FileText, Sparkles, AlertCircle, Terminal } from "lucide-react";
import Link from 'next/link';

const STEPS = [
  { code: "01", label: "Authenticating confidential channel", detail: "TLS 1.3 · PFS" },
  { code: "02", label: "Loading post-quantum suite", detail: "ML-KEM · ML-DSA · SLH-DSA" },
  { code: "03", label: "Indexing crypto inventory", detail: "hybrid · agile · auditable" },
  { code: "04", label: "Reserving benchmark window", detail: "Quantinuum · IonQ" },
  { code: "05", label: "Opening intake terminal", detail: "ready" },
];

const EXECUTIVE_ROLES = [
  "Chief Information Security Officer (CISO)",
  "Chief Information Officer (CIO) / Chief Technology Officer (CTO)",
  "Head of Computational Chemistry / Molecular R&D",
  "Head of Enterprise Risk & Governance",
  "VP Infrastructure / Enterprise Cryptographic Architecture",
  "Principal Investigator / National Lab Director",
  "Managing Director / General Partner",
  "Other Executive Sponsor",
];

const ORGANIZATION_SCALES = [
  "< $50M Operating Budget / ARR",
  "$50M – $250M (Mid-Market Enterprise)",
  "$250M – $1B (Tier-1 Enterprise)",
  "$1B – $10B+ (Global Multinational / Sovereign Entity)",
];

const PRIMARY_OBJECTIVES = [
  {
    id: "pqc_defense",
    title: "Post-Quantum Cryptography (PQC) Audit & HNDL Defense",
    desc: "Comprehensive cipher discovery and NIST FIPS 203/204/205 migration planning.",
  },
  {
    id: "molecular_accel",
    title: "Accelerated Molecular Docking / Candidate Drug Discovery",
    desc: "Quantum resonance screening of therapeutic compounds with zero-knowledge coordinate privacy.",
  },
  {
    id: "qpu_benchmarking",
    title: "Frontier Hardware Benchmarking & Algorithmic Compilation",
    desc: "Trapped-ion circuit synthesis and fidelity validation on Quantinuum and IonQ backends.",
  },
  {
    id: "crypto_agility",
    title: "Cryptographic Agility Architecture & Governance",
    desc: "Modular abstraction layers to prevent future hardware and algorithmic lock-in.",
  },
];

const ASSET_LIABILITY_BRACKETS = [
  "< $25M (Standard Enterprise Scope)",
  "$25M – $100M (High Institutional Exposure)",
  "$100M – $500M (Mission-Critical Financial / Healthcare Assets)",
  "$500M+ (Sovereign Infrastructure / Proprietary BioPharma Pipelines)",
];

const TIMELINE_HORIZONS = [
  "Active Initiative — Q4 2026 / Q1 2027 (Budget Allocated)",
  "Evaluation Phase — H1 2027 (Vendor & Architecture Selection)",
  "Strategic Horizon — Board-Level Briefing & Feasibility Review",
];

const BLOCKED_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com", "mail.com", "protonmail.com", "proton.me"
];

export default function EnterpriseDiagnosticPage() {
  const [phase, setPhase] = useState<"boot" | "ready">("boot");
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(3);
  const [held, setHeld] = useState(false);

  const [formData, setFormData] = useState<EnterpriseDiagnosticInput>({
    companyName: '',
    executiveSponsor: '',
    executiveRole: '',
    workEmail: '',
    organizationScale: '',
    industry: '',
    primaryObjective: '',
    assetLiabilityBracket: '',
    procurementTimeline: '',
    mndaRequired: true,
    technicalContext: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const progress = Math.min(step / STEPS.length, 1);

  useEffect(() => {
    if (phase !== "boot") return;
    const id = window.setInterval(
      () => setStep((s) => Math.min(s + 1, STEPS.length)),
      420
    );
    return () => window.clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (step < STEPS.length || held || phase !== "boot") return;
    if (count <= 0) {
      setPhase("ready");
      return;
    }
    const id = window.setTimeout(() => setCount((c) => c - 1), 1000);
    return () => window.clearTimeout(id);
  }, [step, held, count, phase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.companyName || !formData.executiveSponsor || !formData.workEmail || !formData.executiveRole || !formData.organizationScale || !formData.primaryObjective) {
      setErrorMsg("Please complete all required institutional qualification fields.");
      return;
    }

    const domain = formData.workEmail.split('@')[1]?.toLowerCase();
    if (domain && BLOCKED_DOMAINS.includes(domain)) {
      setErrorMsg("Institutional commissions require an authorized corporate or organizational email domain (e.g. name@institution.com). Personal webmail addresses are not accepted.");
      return;
    }

    setIsSubmitting(true);
    const res = await submitEnterpriseDiagnosticAction(formData);
    setIsSubmitting(false);

    if (res.success && res.referenceId) {
      setSubmittedRef(res.referenceId);
    } else {
      setErrorMsg(res.message || "An error occurred while registering your docket.");
    }
  };

  if (phase === "boot") {
    return (
      <main className="enclave">
        <div className="enclave-field" aria-hidden="true">
          <div className="enclave-grid" />
          <div className="enclave-glow" />
          <div className="enclave-rings">
            <span className="ring-a" />
            <span className="ring-b" />
            <span className="ring-c" />
          </div>
          <img className="enclave-ghost" src="/images/quantum-architecture.svg" alt="" />
          <div className="enclave-scan" />
        </div>

        <div className="enclave-frame" aria-hidden="true">
          <span className="frame-tl" />
          <span className="frame-tr" />
          <span className="frame-bl" />
          <span className="frame-br" />
        </div>

        <div className="enclave-inner">
          <header className="enclave-top enclave-rise" style={{ animationDelay: ".04s" }}>
            <span className="enclave-mark">
              <img src="/icon.png" alt="Eve Count" width={40} height={40} />
            </span>
            <span className="enclave-wordmark">Eve Count Quantum Systems</span>
            <span className="enclave-live">
              <i /> channel live
            </span>
          </header>

          <div className="enclave-body">
            <div className="enclave-copy">
              <p className="enclave-kicker enclave-rise" style={{ animationDelay: ".1s" }}>
                ENTERPRISE QUANTUM DIAGNOSTIC
              </p>
              <h1 className="enclave-rise" style={{ animationDelay: ".18s" }}>
                Secure handoff
                <br />
                <em>in progress.</em>
              </h1>
              <p className="enclave-note enclave-rise" style={{ animationDelay: ".3s" }}>
                You are leaving the overview and entering the confidential intake terminal. Four minutes,
                no documents required at this stage.
              </p>
              <div className="enclave-actions enclave-rise" style={{ animationDelay: ".42s" }}>
                <button type="button" className="enclave-cta" onClick={() => setPhase("ready")}>
                  Enter the diagnostic <ArrowUpRight size={16} />
                </button>
                {step >= STEPS.length && !held ? (
                  <button type="button" className="enclave-hold" onClick={() => setHeld(true)}>
                    Hold here
                  </button>
                ) : (
                  <Link href="/" className="enclave-back">
                    Return to overview
                  </Link>
                )}
              </div>
            </div>

            <aside className="enclave-console enclave-rise" style={{ animationDelay: ".26s" }} aria-label="Handoff status">
              <div className="console-head">
                <span>intake terminal</span>
                <span className="console-tag">ecqs · 2.6</span>
              </div>
              <ol className="console-list">
                {STEPS.map((s, i) => (
                  <li key={s.code} className={i < step ? "is-done" : "is-wait"}>
                    <span className="console-index">{s.code}</span>
                    <span className="console-label">{s.label}</span>
                    <span className="console-detail">{s.detail}</span>
                    <span className="console-state">{i < step ? "ok" : "···"}</span>
                  </li>
                ))}
              </ol>
              <div className="console-meter" role="presentation">
                <span style={{ width: `${progress * 100}%` }} />
              </div>
              <p className="console-readout">
                <span>{String(Math.round(progress * 100)).padStart(3, "0")}%</span>
                <span>{step < STEPS.length ? "establishing" : held ? "standing by" : `opening docket in ${count}s`}</span>
              </p>
            </aside>
          </div>

          <footer className="enclave-foot enclave-rise" style={{ animationDelay: ".5s" }}>
            <span>CONFIDENTIAL · NO PII REQUIRED AT THIS STAGE</span>
            <span>EVE COUNT QUANTUM SYSTEMS</span>
          </footer>
        </div>
      </main>
    );
  }

  return (
    <div className="site-shell min-h-screen flex flex-col bg-[#FAF9F6] text-[#16181D]">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="page-container max-w-[920px]">
          
          {/* Top Enclave Telemetry Banner */}
          <div className="mb-10 rounded-xl border border-[#DCD6C8] bg-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#B8872A] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#16181D]">
                ENCLAVE HANDOFF VERIFIED // ECQS 2.6
              </span>
              <span className="text-[11px] font-mono text-[#5B616B] hidden md:inline">
                · TLS 1.3 PFS · ML-KEM/ML-DSA READY · HARDWARE BENCHMARK WINDOW RESERVED
              </span>
            </div>
            <button
              type="button"
              onClick={() => { setPhase("boot"); setStep(0); setCount(3); setHeld(false); }}
              className="text-xs font-mono font-bold text-[#B8872A] hover:underline inline-flex items-center gap-1.5 uppercase tracking-wider"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>Terminal Readout</span>
            </button>
          </div>
          
          {/* Header Briefing */}
          <div className="mb-14 text-left">
            <div className="eyebrow mb-4">
              <span className="eyebrow-line" />
              <span>CONFIDENTIAL DOCKET // COMMISSIONING NO. 2026-Q4</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#16181D] leading-[1.12]">
              Institutional Assessment &amp;<br />
              <span className="text-[#B8872A]">Advisory Commissioning.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5B616B] leading-relaxed max-w-[720px]">
              Commission a formal post-quantum cryptographic risk audit, real-time molecular discovery simulation, or trapped-ion hardware benchmark. All disclosures are governed under bilateral non-disclosure agreements (MNDA).
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6 mt-6 border-t border-[#E7E3D8] text-xs font-mono font-semibold tracking-wider text-[#5B616B] uppercase">
              <span className="flex items-center gap-1.5 text-[#B8872A]">
                <ShieldCheck className="h-4 w-4" />
                NIST FIPS 203/204/205 Scope
              </span>
              <span className="flex items-center gap-1.5 text-[#16181D]">
                <Lock className="h-3.5 w-3.5" />
                Bilateral MNDA Required
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                30-Min Partner Briefing
              </span>
            </div>
          </div>

          {submittedRef ? (
            <Card className="border border-[#E7E3D8] bg-white p-8 sm:p-14 text-left space-y-7 rounded-2xl shadow-xs">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-[#F5EBD6] flex items-center justify-center border border-[#DCD6C8]">
                  <CheckCircle2 className="h-6 w-6 text-[#B8872A]" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-[#16181D]">Commissioning Docket Registered</h2>
                  <p className="text-xs font-mono text-[#B8872A] tracking-wider uppercase mt-0.5">Clear-Box Architecture Priority Intake</p>
                </div>
              </div>

              <div className="rounded-xl border border-[#E7E3D8] bg-[#FAF9F6] p-6 space-y-3">
                <div className="text-xs font-mono text-[#5B616B] uppercase tracking-wider">Docket Identification Number</div>
                <div className="font-mono text-2xl font-extrabold text-[#16181D] tracking-tight">{submittedRef}</div>
                <div className="text-xs text-[#5B616B] pt-2 border-t border-[#E7E3D8]">
                  Assigned Entity: <strong>{formData.companyName}</strong> ({formData.executiveSponsor} — {formData.executiveRole})
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#5B616B] leading-relaxed">
                <p>
                  <strong>Immediate Next Steps:</strong>
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-[#5B616B]">
                  <li>
                    A bilateral Mutual Non-Disclosure Agreement (MNDA) is being transmitted to <strong>{formData.workEmail}</strong>.
                  </li>
                  <li>
                    A Senior Quantum Systems Architect has been assigned to prepare your institutional risk profile.
                  </li>
                  <li>
                    A secure scheduling link for an executive 30-minute scoping briefing will be provided upon MNDA signature.
                  </li>
                </ol>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button variant="editorial" asChild className="main-cta">
                  <Link href="/" className="inline-flex items-center gap-2">
                    <span>Return to Mainframe</span>
                    <ArrowUpRight className="h-4 w-4 text-[#D7AF55]" />
                  </Link>
                </Button>
                <a 
                  href="https://cybrdeck.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-link text-xs"
                >
                  Access Cybrdeck Terminal <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {errorMsg && (
                <div className="rounded-xl border border-red-300 bg-red-50/80 p-4 text-sm text-red-900 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                  <div className="leading-relaxed font-medium">{errorMsg}</div>
                </div>
              )}

              {/* Section 01: Authority & Economic Buyer */}
              <Card className="border border-[#E7E3D8] bg-white rounded-2xl shadow-none overflow-hidden">
                <CardHeader className="border-b border-[#E7E3D8] p-6 sm:p-8 bg-[#FAF9F6]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-extrabold text-[#16181D] flex items-center gap-2">
                      <span className="font-mono text-sm text-[#B8872A]">01.</span> Authority &amp; Economic Buyer
                    </CardTitle>
                    <span className="text-[11px] font-mono uppercase font-bold text-[#5B616B] tracking-wider">Step 1 of 3</span>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-[#5B616B] mt-1">
                    Identify the governing executive and institutional operating scale.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                        Institution / Entity Name *
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Global Financial"
                        required
                        className="bg-white border-[#E7E3D8] focus:border-[#B8872A] rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="executiveSponsor" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                        Executive Sponsor Full Name *
                      </Label>
                      <Input
                        id="executiveSponsor"
                        value={formData.executiveSponsor}
                        onChange={e => setFormData({ ...formData, executiveSponsor: e.target.value })}
                        placeholder="e.g. Dr. Robert Vance"
                        required
                        className="bg-white border-[#E7E3D8] focus:border-[#B8872A] rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="workEmail" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                        Corporate / Institutional Email *
                      </Label>
                      <Input
                        id="workEmail"
                        type="email"
                        value={formData.workEmail}
                        onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="executive@institution.com"
                        required
                        className="bg-white border-[#E7E3D8] focus:border-[#B8872A] rounded-lg"
                      />
                      <p className="text-[11px] text-[#5B616B]">Corporate domain required. Public webmail (@gmail, @yahoo) rejected.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="executiveRole" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                        Executive Role / Title *
                      </Label>
                      <select
                        id="executiveRole"
                        value={formData.executiveRole}
                        onChange={e => setFormData({ ...formData, executiveRole: e.target.value })}
                        required
                        className="w-full h-10 px-3 py-2 text-sm bg-white border border-[#E7E3D8] rounded-lg focus:outline-none focus:border-[#B8872A] text-[#16181D]"
                      >
                        <option value="">Select Executive Role...</option>
                        {EXECUTIVE_ROLES.map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="organizationScale" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                        Annual Revenue / Operating Scale *
                      </Label>
                      <select
                        id="organizationScale"
                        value={formData.organizationScale}
                        onChange={e => setFormData({ ...formData, organizationScale: e.target.value })}
                        required
                        className="w-full h-10 px-3 py-2 text-sm bg-white border border-[#E7E3D8] rounded-lg focus:outline-none focus:border-[#B8872A] text-[#16181D]"
                      >
                        <option value="">Select Scale Bracket...</option>
                        {ORGANIZATION_SCALES.map(scale => (
                          <option key={scale} value={scale}>{scale}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                        Industry Domain
                      </Label>
                      <Input
                        id="industry"
                        value={formData.industry}
                        onChange={e => setFormData({ ...formData, industry: e.target.value })}
                        placeholder="e.g. Banking, Biopharma, Aerospace, Defense"
                        className="bg-white border-[#E7E3D8] focus:border-[#B8872A] rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 02: Mandate & Financial Exposure */}
              <Card className="border border-[#E7E3D8] bg-white rounded-2xl shadow-none overflow-hidden">
                <CardHeader className="border-b border-[#E7E3D8] p-6 sm:p-8 bg-[#FAF9F6]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-extrabold text-[#16181D] flex items-center gap-2">
                      <span className="font-mono text-sm text-[#B8872A]">02.</span> Scope &amp; Exposure Profile
                    </CardTitle>
                    <span className="text-[11px] font-mono uppercase font-bold text-[#5B616B] tracking-wider">Step 2 of 3</span>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-[#5B616B] mt-1">
                    Define the strategic bottleneck and balance-sheet exposure.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-wider text-[#16181D] block">
                      Primary Commissioning Mandate *
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {PRIMARY_OBJECTIVES.map(obj => {
                        const isSelected = formData.primaryObjective === obj.title;
                        return (
                          <div 
                            key={obj.id}
                            onClick={() => setFormData({ ...formData, primaryObjective: obj.title })}
                            className={`cursor-pointer rounded-xl border p-4 transition-all ${
                              isSelected 
                                ? 'border-[#B8872A] bg-[#F5EBD6]/50 shadow-xs' 
                                : 'border-[#E7E3D8] hover:border-[#B8872A]/50 bg-white'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-bold text-xs sm:text-sm text-[#16181D]">{obj.title}</span>
                              <span className={`h-4 w-4 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${
                                isSelected ? 'border-[#B8872A] bg-[#B8872A]' : 'border-[#DCD6C8]'
                              }`}>
                                {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                              </span>
                            </div>
                            <p className="text-xs text-[#5B616B] mt-2 leading-relaxed">{obj.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E7E3D8]">
                    <div className="space-y-2">
                      <Label htmlFor="assetLiabilityBracket" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                        Estimated Value of Encrypted Assets / IP
                      </Label>
                      <select
                        id="assetLiabilityBracket"
                        value={formData.assetLiabilityBracket}
                        onChange={e => setFormData({ ...formData, assetLiabilityBracket: e.target.value })}
                        className="w-full h-10 px-3 py-2 text-sm bg-white border border-[#E7E3D8] rounded-lg focus:outline-none focus:border-[#B8872A] text-[#16181D]"
                      >
                        <option value="">Select Asset Exposure Bracket...</option>
                        {ASSET_LIABILITY_BRACKETS.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="procurementTimeline" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                        Procurement &amp; Engagement Horizon
                      </Label>
                      <select
                        id="procurementTimeline"
                        value={formData.procurementTimeline}
                        onChange={e => setFormData({ ...formData, procurementTimeline: e.target.value })}
                        className="w-full h-10 px-3 py-2 text-sm bg-white border border-[#E7E3D8] rounded-lg focus:outline-none focus:border-[#B8872A] text-[#16181D]"
                      >
                        <option value="">Select Engagement Timeline...</option>
                        {TIMELINE_HORIZONS.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 03: Governance & Execution */}
              <Card className="border border-[#E7E3D8] bg-white rounded-2xl shadow-none overflow-hidden">
                <CardHeader className="border-b border-[#E7E3D8] p-6 sm:p-8 bg-[#FAF9F6]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-extrabold text-[#16181D] flex items-center gap-2">
                      <span className="font-mono text-sm text-[#B8872A]">03.</span> Governance &amp; Execution Framework
                    </CardTitle>
                    <span className="text-[11px] font-mono uppercase font-bold text-[#5B616B] tracking-wider">Step 3 of 3</span>
                  </div>
                  <CardDescription className="text-xs sm:text-sm text-[#5B616B] mt-1">
                    Establish bilateral confidentiality prior to architectural disclosure.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="technicalContext" className="text-xs font-bold uppercase tracking-wider text-[#16181D]">
                      High-Level Systems or Compound Focus (Optional)
                    </Label>
                    <Textarea
                      id="technicalContext"
                      value={formData.technicalContext}
                      onChange={e => setFormData({ ...formData, technicalContext: e.target.value })}
                      placeholder="e.g. Evaluating PQC key exchange migration across internal TLS infrastructure, or screening candidate protease inhibitors for viral target active sites."
                      rows={3}
                      className="bg-white border-[#E7E3D8] focus:border-[#B8872A] rounded-lg text-sm"
                    />
                  </div>

                  <div className="rounded-xl border border-[#DCD6C8] bg-[#F5EBD6]/40 p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="mndaRequired"
                        checked={formData.mndaRequired}
                        onCheckedChange={checked => setFormData({ ...formData, mndaRequired: !!checked })}
                        className="mt-0.5"
                      />
                      <div className="text-xs text-[#5B616B] leading-relaxed">
                        <Label htmlFor="mndaRequired" className="font-bold text-[#16181D] cursor-pointer block">
                          Execute Bilateral Mutual Non-Disclosure Agreement (MNDA)
                        </Label>
                        <span>
                          Transmits our standard Singapore law / Delaware cross-jurisdictional MNDA prior to the technical scoping session. Technical specifics remain strictly proprietary.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="editorial"
                      disabled={isSubmitting}
                      className="w-full h-14 text-sm font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-3 bg-[#16181D] text-white hover:bg-[#16181D]/90 shadow-md"
                    >
                      {isSubmitting ? (
                        <span>Registering Commissioning Docket…</span>
                      ) : (
                        <>
                          <span>Submit Institutional Commissioning Docket</span>
                          <ArrowUpRight className="h-4 w-4 text-[#D7AF55]" />
                        </>
                      )}
                    </Button>
                    <p className="mt-3 text-center text-xs text-[#5B616B]">
                      Submissions are logged into the Eve Count sovereign registry. All information is confidential.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </form>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

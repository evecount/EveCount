'use client';

import { useState } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { submitEnterpriseDiagnosticAction, type EnterpriseDiagnosticInput } from "@/app/actions";
import { ShieldCheck, ArrowRight, CheckCircle2, Lock, Cpu, Sparkles } from "lucide-react";

const DATA_PROFILES = [
  { id: "financial", label: "Financial / Transactional Data" },
  { id: "healthcare", label: "Healthcare / PHI / Genomic Data" },
  { id: "ip", label: "Proprietary IP / Trade Secrets" },
  { id: "defense", label: "National Security / Defense Assets" },
  { id: "pii", label: "High-Volume Consumer PII" },
];

const ENGAGEMENT_GOALS = [
  { id: "csuite_edu", label: "Executive / Board-Level Education and Demystification" },
  { id: "pqc_audit", label: "Post-Quantum Cryptographic (PQC) Audit and Migration Strategy" },
  { id: "quantum_opt", label: "Exploring Quantum-Inspired Optimization for existing bottlenecks" },
  { id: "advisory", label: "General technical advisory and architectural review" },
];

export default function EnterpriseDiagnosticPage() {
  const [formData, setFormData] = useState<EnterpriseDiagnosticInput>({
    companyName: '',
    executiveSponsor: '',
    workEmail: '',
    industry: '',
    dataProfile: [],
    pqcAwareness: 'unsure',
    currentEncryption: '',
    dataLifespan: '10_years',
    classicalLimitations: '',
    aiArchitecture: '',
    immediateGoal: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleDataProfile = (item: string) => {
    setFormData(prev => ({
      ...prev,
      dataProfile: prev.dataProfile.includes(item)
        ? prev.dataProfile.filter(i => i !== item)
        : [...prev.dataProfile, item]
    }));
  };

  const toggleGoal = (item: string) => {
    setFormData(prev => ({
      ...prev,
      immediateGoal: prev.immediateGoal.includes(item)
        ? prev.immediateGoal.filter(i => i !== item)
        : [...prev.immediateGoal, item]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.executiveSponsor || !formData.workEmail) {
      setErrorMsg("Please complete all required organizational contact fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    const res = await submitEnterpriseDiagnosticAction(formData);
    setIsSubmitting(false);

    if (res.success && res.referenceId) {
      setSubmittedRef(res.referenceId);
    } else {
      setErrorMsg(res.message || "An error occurred while submitting.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />

      <main className="flex-1 py-16 md:py-24">
        <div className="container max-w-[880px] mx-auto px-6">
          {/* Header Briefing */}
          <div className="mb-12 text-left space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-mist px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-slate">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-warm" />
              <span>NIST PQC & Computational Baseline</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
              Enterprise Quantum Diagnostic
            </h1>
            <p className="text-base sm:text-lg text-slate leading-relaxed max-w-[720px]">
              Establish your organizational readiness for post-quantum cryptographic security and classical-quantum algorithm acceleration. Submissions are reviewed by our chief architects under strict confidentiality.
            </p>
          </div>

          {submittedRef ? (
            <Card className="border border-border bg-mist/30 p-8 sm:p-12 text-left space-y-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-gold-warm" />
                <h2 className="text-2xl font-bold text-ink">Diagnostic Assessment Ingested</h2>
              </div>
              <p className="text-slate leading-relaxed">
                Thank you. Your organizational baseline has been registered under Reference ID:
              </p>
              <div className="rounded-md border border-border bg-white p-4 font-mono text-lg font-bold text-ink inline-block">
                {submittedRef}
              </div>
              <p className="text-sm text-slate">
                Our architecture team is evaluating your data profile against current NIST PQC standards (ML-KEM, ML-DSA) and classical bottlenecks. An executive summary will be transmitted to <strong>{formData.workEmail}</strong>.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-gold-luminous hover:bg-gold-warm text-ink font-semibold">
                  <a href="/">Return to Sovereign Portal</a>
                </Button>
              </div>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {errorMsg && (
                <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  {errorMsg}
                </div>
              )}

              {/* Section 1: Organizational Baseline */}
              <Card className="border border-border bg-white shadow-none">
                <CardHeader className="border-b border-border pb-4">
                  <CardTitle className="text-xl font-bold text-ink flex items-center gap-2">
                    <span className="font-mono text-sm text-gold-warm">01.</span> Organizational Baseline
                  </CardTitle>
                  <CardDescription className="text-slate">
                    Identify the operational context and primary data categories to be secured.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-ink font-semibold">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Global Logistics"
                        required
                        className="bg-white border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="executiveSponsor" className="text-ink font-semibold">Executive Sponsor / Contact *</Label>
                      <Input
                        id="executiveSponsor"
                        value={formData.executiveSponsor}
                        onChange={e => setFormData({ ...formData, executiveSponsor: e.target.value })}
                        placeholder="e.g. Chief Information Security Officer"
                        required
                        className="bg-white border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="workEmail" className="text-ink font-semibold">Corporate Work Email *</Label>
                      <Input
                        id="workEmail"
                        type="email"
                        value={formData.workEmail}
                        onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="executive@company.com"
                        required
                        className="bg-white border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-ink font-semibold">Industry / Domain</Label>
                      <Input
                        id="industry"
                        value={formData.industry}
                        onChange={e => setFormData({ ...formData, industry: e.target.value })}
                        placeholder="e.g. Defense, FinTech, Energy, Healthcare"
                        className="bg-white border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Label className="text-ink font-semibold block">Primary Data Profile (Select all that apply)</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {DATA_PROFILES.map(dp => (
                        <div key={dp.id} className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-mist/40 transition-colors">
                          <Checkbox
                            id={dp.id}
                            checked={formData.dataProfile.includes(dp.label)}
                            onCheckedChange={() => toggleDataProfile(dp.label)}
                          />
                          <Label htmlFor={dp.id} className="text-sm text-slate cursor-pointer">{dp.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Security Threat Landscape */}
              <Card className="border border-border bg-white shadow-none">
                <CardHeader className="border-b border-border pb-4">
                  <CardTitle className="text-xl font-bold text-ink flex items-center gap-2">
                    <span className="font-mono text-sm text-gold-warm">02.</span> The Security Threat Landscape
                  </CardTitle>
                  <CardDescription className="text-slate">
                    Evaluating vulnerability to "Harvest Now, Decrypt Later" (HNDL) data collection.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-3">
                    <Label className="text-ink font-semibold">
                      Has your leadership or C-suite formally assessed Post-Quantum Cryptography (PQC) migration?
                    </Label>
                    <RadioGroup 
                      value={formData.pqcAwareness} 
                      onValueChange={val => setFormData({ ...formData, pqcAwareness: val })}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="pqc-yes" />
                        <Label htmlFor="pqc-yes" className="cursor-pointer text-slate">Yes, Active Initiative</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="in_discussion" id="pqc-in_discussion" />
                        <Label htmlFor="pqc-in_discussion" className="cursor-pointer text-slate">In Informal Discussion</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="pqc-no" />
                        <Label htmlFor="pqc-no" className="cursor-pointer text-slate">Not Yet Addressed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unsure" id="pqc-unsure" />
                        <Label htmlFor="pqc-unsure" className="cursor-pointer text-slate">Unsure</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="currentEncryption" className="text-ink font-semibold">Current Encryption Baseline</Label>
                      <Input
                        id="currentEncryption"
                        value={formData.currentEncryption}
                        onChange={e => setFormData({ ...formData, currentEncryption: e.target.value })}
                        placeholder="e.g. RSA-2048, ECC, AES-256"
                        className="bg-white border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dataLifespan" className="text-ink font-semibold">Required Data Secrecy Lifespan</Label>
                      <Input
                        id="dataLifespan"
                        value={formData.dataLifespan}
                        onChange={e => setFormData({ ...formData, dataLifespan: e.target.value })}
                        placeholder="e.g. 5 years, 15 years, 30+ years"
                        className="bg-white border-border"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Computational Bottlenecks */}
              <Card className="border border-border bg-white shadow-none">
                <CardHeader className="border-b border-border pb-4">
                  <CardTitle className="text-xl font-bold text-ink flex items-center gap-2">
                    <span className="font-mono text-sm text-gold-warm">03.</span> Computational Bottlenecks
                  </CardTitle>
                  <CardDescription className="text-slate">
                    Where combinatorial explosion and classical compute limits restrict your growth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="classicalLimitations" className="text-ink font-semibold">
                      Where is traditional classical computing failing your organization today?
                    </Label>
                    <Textarea
                      id="classicalLimitations"
                      rows={3}
                      value={formData.classicalLimitations}
                      onChange={e => setFormData({ ...formData, classicalLimitations: e.target.value })}
                      placeholder="e.g. Route optimization latency in supply chain, financial portfolio risk calculations, molecular docking simulations, prohibitive GPU cloud bills."
                      className="bg-white border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aiArchitecture" className="text-ink font-semibold">
                      Current AI & Agentic Architecture Deployment
                    </Label>
                    <Textarea
                      id="aiArchitecture"
                      rows={3}
                      value={formData.aiArchitecture}
                      onChange={e => setFormData({ ...formData, aiArchitecture: e.target.value })}
                      placeholder="Describe existing autonomous agentic workflows, transformer inference pipelines, or proprietary foundational models."
                      className="bg-white border-border"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Engagement Objectives */}
              <Card className="border border-border bg-white shadow-none">
                <CardHeader className="border-b border-border pb-4">
                  <CardTitle className="text-xl font-bold text-ink flex items-center gap-2">
                    <span className="font-mono text-sm text-gold-warm">04.</span> Engagement Objectives
                  </CardTitle>
                  <CardDescription className="text-slate">
                    Primary outcomes desired from Eve Count Quantum Systems.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    {ENGAGEMENT_GOALS.map(goal => (
                      <div key={goal.id} className="flex items-center space-x-3 rounded-lg border border-border p-3 hover:bg-mist/40 transition-colors">
                        <Checkbox
                          id={goal.id}
                          checked={formData.immediateGoal.includes(goal.label)}
                          onCheckedChange={() => toggleGoal(goal.label)}
                        />
                        <Label htmlFor={goal.id} className="text-sm text-slate cursor-pointer">{goal.label}</Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate">
                  <Lock className="h-4 w-4 text-gold-warm" />
                  <span>Confidential assessment under institutional NDA baseline.</span>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gold-luminous hover:bg-gold-warm text-ink font-semibold px-8 py-3 text-base shadow-sm transition-all"
                >
                  {isSubmitting ? "Encrypting & Ingesting..." : "Transmit Diagnostic"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

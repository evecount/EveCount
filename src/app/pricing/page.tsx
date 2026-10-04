'use client';

import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Cpu, Terminal, Sparkles, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Tier {
  icon: LucideIcon;
  title: string;
  scope: string;
  timeline: string;
  price: string;
  badge: string;
  deliverables: string[];
}

const enterpriseTiers: Tier[] = [
  {
    icon: Sparkles,
    title: "1. Executive Risk Briefing",
    scope: "Board-level immersion into quantum computing realities, timeline horizons, and regulatory compliance.",
    timeline: "1-2 Weeks",
    price: "$25,000",
    badge: "Orientation",
    deliverables: [
      "Executive risk & opportunity assessment",
      "Harvest Now, Decrypt Later (HNDL) exposure brief",
      "Sector-specific regulatory mandate analysis (NIST / MAS)",
      "Interactive C-suite Q&A session"
    ],
  },
  {
    icon: ShieldCheck,
    title: "2. Post-Quantum Cryptography Audit",
    scope: "Comprehensive cryptographic inventory and migration roadmap compliant with NIST FIPS 203/204/205.",
    timeline: "4-6 Weeks",
    price: "$75,000 – $125,000",
    badge: "Remediation",
    deliverables: [
      "Complete PKI & cipher suite discovery scan",
      "NIST FIPS 203 (ML-KEM) / 204 (ML-DSA) gap analysis",
      "Cryptographic agility middleware blueprint",
      "Phased transition implementation plan"
    ],
  },
  {
    icon: Cpu,
    title: "3. Algorithm Prototyping & Benchmarking",
    scope: "Benchmarking and compilation of domain-specific algorithms on real quantum hardware backends.",
    timeline: "8-12 Weeks",
    price: "$150,000 – $250,000",
    badge: "Hardware Validation",
    deliverables: [
      "Circuit synthesis & error mitigation modeling",
      "Quantinuum trapped-ion & IonQ hardware execution",
      "Classical vs. quantum benchmark report",
      "Hardware-agnostic SDK integration code"
    ],
  },
  {
    icon: Terminal,
    title: "4. Retained Quantum Advisory Partner",
    scope: "Continuous strategic technical leadership for enterprises engineering mission-critical quantum resilience.",
    timeline: "Annual Retainer",
    price: "$35,000 / month",
    badge: "Retained Advisory",
    deliverables: [
      "Dedicated quantum systems architects",
      "Continuous algorithm & cipher monitoring",
      "Cybrdeck terminal rapid prototyping integration",
      "Priority hardware access coordination"
    ],
  }
];

export default function PricingPage() {
  React.useEffect(() => {
    document.title = "Enterprise Engagement Models | Eve Count Quantum Systems";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6]">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 border-b border-[#E7E3D8]">
          <div className="container max-w-[1280px] mx-auto px-6">
            
            {/* Header */}
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD6C8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-warm" />
                <span>Institutional Engagement Frameworks</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-tight">
                Enterprise Engagement Models
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-slate leading-relaxed">
                We provide transparent, fixed-scope engagements designed to transition global enterprises and institutional funds from quantum vulnerability to verifiable sovereign readiness.
              </p>
            </div>

            {/* Grid */}
            <div className="grid max-w-7xl mx-auto grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {enterpriseTiers.map((tier) => (
                <Card 
                  key={tier.title} 
                  className="flex flex-col bg-white border-[#E7E3D8] hover:border-gold-luminous hover:shadow-md transition-all duration-200 rounded-2xl overflow-hidden shadow-xs"
                >
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist border border-[#DCD6C8]">
                        <tier.icon className="h-5 w-5 text-gold-warm" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-wash text-ink">
                        {tier.badge}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-ink">{tier.title}</CardTitle>
                    <div className="mt-3">
                      <div className="text-2xl font-extrabold text-ink">{tier.price}</div>
                      <div className="text-xs font-mono text-slate font-medium mt-0.5">Timeline: {tier.timeline}</div>
                    </div>
                    <CardDescription className="text-xs text-slate mt-3 leading-relaxed min-h-[50px]">
                      {tier.scope}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col justify-between p-6 pt-2">
                    <div className="border-t border-[#E7E3D8] pt-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">Key Deliverables</div>
                      <ul className="space-y-2.5 text-xs text-slate mb-6">
                        {tier.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-gold-warm mt-0.5 shrink-0" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-ink hover:bg-ink/90 text-white font-semibold rounded-xl">
                      <Link href="/apply">Initiate Engagement</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom info */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
              <p className="text-xs text-slate leading-relaxed">
                All engagements are protected under strict bilateral non-disclosure agreements (NDA). Retained partnerships include priority scheduling for Quantinuum and IonQ hardware batch executions.
              </p>
              <div className="mt-6">
                <Button size="lg" asChild className="bg-gold-luminous hover:bg-gold-warm text-ink font-semibold rounded-xl px-8 shadow-sm">
                  <Link href="/apply" className="inline-flex items-center gap-2">
                    <span>Complete Enterprise Diagnostic</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

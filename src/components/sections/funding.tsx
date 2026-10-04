'use client';

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
  badge: string;
  deliverables: string[];
}

const enterpriseTiers: Tier[] = [
  {
    icon: Sparkles,
    title: "1. Executive Briefing",
    scope: "Board-level immersion into quantum computing realities, timeline horizons, and regulatory mandates.",
    timeline: "1-2 Weeks",
    badge: "Strategic Orientation",
    deliverables: [
      "Executive risk & opportunity brief",
      "Harvest Now, Decrypt Later assessment",
      "Industry-specific use-case mapping",
      "Leadership Q&A session"
    ],
  },
  {
    icon: ShieldCheck,
    title: "2. Post-Quantum Audit",
    scope: "Comprehensive cryptographic inventory and migration roadmap compliant with NIST standards.",
    timeline: "4-6 Weeks",
    badge: "Risk Remediation",
    deliverables: [
      "PKI & cipher suite discovery",
      "NIST FIPS 203/204/205 alignment",
      "Cryptographic agility blueprint",
      "Phased transition implementation plan"
    ],
  },
  {
    icon: Cpu,
    title: "3. Algorithm Prototyping",
    scope: "Benchmarking and compilation of domain-specific algorithms on real quantum hardware backends.",
    timeline: "8-12 Weeks",
    badge: "Hardware Validation",
    deliverables: [
      "Circuit synthesis & error mitigation",
      "Quantinuum & IonQ execution",
      "Classical vs. quantum benchmark report",
      "Hardware-agnostic SDK integration"
    ],
  },
  {
    icon: Terminal,
    title: "4. Retained Partner",
    scope: "Ongoing strategic technical advisory for enterprises engineering mission-critical quantum resilience.",
    timeline: "Annual Retainer",
    badge: "Enterprise Advisory",
    deliverables: [
      "Dedicated quantum systems architects",
      "Continuous algorithm monitoring",
      "Cybrdeck terminal integration",
      "Priority hardware access coordination"
    ],
  }
];

export function Funding() {
  return (
    <section id="advisory" className="bg-white py-20 md:py-28 border-t border-[#E7E3D8]">
      <div className="container max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD6C8] bg-mist/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-warm" />
            <span>Enterprise Engagement Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            Structured for institutional impact.
          </h2>
          <p className="mt-4 text-lg text-slate leading-relaxed">
            From focused cryptographic risk assessments to continuous quantum systems architecture, we tailor our engagements to match your organization’s risk profile and technical maturity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid max-w-7xl mx-auto grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {enterpriseTiers.map((tier) => (
            <Card 
              key={tier.title} 
              className="flex flex-col bg-[#FAF9F6] border-[#E7E3D8] hover:border-gold-luminous hover:shadow-md transition-all duration-200 rounded-2xl overflow-hidden"
            >
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#DCD6C8]">
                    <tier.icon className="h-5 w-5 text-gold-warm" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-wash text-ink">
                    {tier.badge}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold text-ink">{tier.title}</CardTitle>
                <div className="text-xs font-mono text-slate font-medium mt-1">Timeline: {tier.timeline}</div>
                <CardDescription className="text-xs text-slate mt-3 leading-relaxed min-h-[50px]">
                  {tier.scope}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col justify-between p-6 pt-2">
                <div className="border-t border-[#E7E3D8] pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">Key Deliverables</div>
                  <ul className="space-y-2.5 text-xs text-slate">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-gold-warm mt-0.5 shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button 
              size="lg" 
              asChild
              className="bg-ink hover:bg-ink/90 text-white font-semibold rounded-xl px-8 py-6 text-base shadow-sm"
            >
              <Link href="/apply" className="inline-flex items-center gap-2">
                <span>Request Enterprise Consultation</span>
                <ArrowRight className="h-4 w-4 text-gold-luminous" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-slate">
            All engagements begin with an initial diagnostic intake and confidential non-disclosure framework.
          </p>
        </div>

      </div>
    </section>
  );
}

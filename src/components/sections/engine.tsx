import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Cpu, GitBranch, Binary, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quantumPillars = [
  {
    icon: ShieldCheck,
    title: "1. Post-Quantum Cryptography (PQC) Migration",
    badge: "NIST FIPS 203/204/205",
    description: "Evaluating your vulnerability to 'Harvest Now, Decrypt Later' adversaries. We audit legacy RSA/ECC public key infrastructure and implement NIST-standardized lattice-based replacements (ML-KEM, ML-DSA) with zero systemic downtime."
  },
  {
    icon: Cpu,
    title: "2. Hardware Benchmarking & Optimization",
    badge: "Quantinuum & IonQ H-Series",
    description: "Real-world hardware execution across trapped-ion and superconducting platforms. Leveraging deep quantum compilation, fault-tolerant rotation synthesis, and circuit noise mitigation to extract maximal algorithmic fidelity."
  },
  {
    icon: Binary,
    title: "3. Quantum-Classical Hybrid Architecture",
    badge: "Co-Processing Stacks",
    description: "Designing low-latency orchestrations between high-performance classical clusters and quantum processing units (QPUs). Targeted at combinatorial optimization, materials simulation, and quantum-enhanced machine learning."
  },
  {
    icon: GitBranch,
    title: "4. Cryptographic Agility & Governance",
    badge: "Enterprise Readiness",
    description: "Future-proofing institutional IT against algorithm obsolescence. We engineer modular cipher suites that permit seamless protocol swaps as quantum hardware capabilities and regulatory mandates evolve."
  }
];

export function Engine() {
  return (
    <section id="engine" className="border-t border-[#E7E3D8] bg-[#FAF9F6] py-20 md:py-28">
      <div className="container max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD6C8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-warm" />
            <span>The Advisory Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            Engineering clarity in an era of quantum uncertainty.
          </h2>
          <p className="mt-4 text-lg text-slate leading-relaxed">
            Transitioning to quantum readiness requires more than theoretical whitepapers. We provide end-to-end technical leadership, from board-level risk audits to hardware-level circuit execution.
          </p>
        </div>
        
        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {quantumPillars.map((pillar) => (
            <Card 
              key={pillar.title} 
              className="bg-white border-[#E7E3D8] shadow-xs hover:border-gold-luminous hover:shadow-md transition-all duration-200 rounded-2xl overflow-hidden"
            >
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist border border-[#DCD6C8]">
                    <pillar.icon className="h-6 w-6 text-gold-warm" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gold-wash text-ink">
                    {pillar.badge}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-ink pt-2">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate leading-relaxed text-sm md:text-base">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-14 p-8 rounded-2xl bg-white border border-[#DCD6C8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="text-lg font-bold text-ink">Ready to evaluate your quantum exposure?</h3>
            <p className="text-sm text-slate mt-1">Complete our 4-minute diagnostic intake to receive an initial transition roadmap.</p>
          </div>
          <Button size="lg" asChild className="bg-ink hover:bg-ink/90 text-white font-semibold rounded-xl px-6">
            <Link href="/apply" className="inline-flex items-center gap-2">
              <span>Start Enterprise Diagnostic</span>
              <ArrowRight className="h-4 w-4 text-gold-luminous" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

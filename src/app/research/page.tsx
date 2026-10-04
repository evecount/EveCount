import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { DynamicBlochSphere } from "@/components/DynamicBlochSphere";
import { ShieldCheck, Cpu, GitBranch, Binary, ExternalLink, ArrowRight, BookOpen, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Foundational Quantum Systems Research | Eve Count Quantum Systems",
  description: "Peer-level technical preprints, circuit synthesis benchmarks, and Post-Quantum Cryptography (PQC) adversarial models developed by Eve Count Quantum Systems.",
};

const researchPapers = [
  {
    badge: "Quantinuum Challenge",
    title: "Fault-Tolerant Rotation Synthesis on Trapped-Ion Architectures",
    description: "Algorithmic synthesis of arbitrary single- and multi-qubit rotations with minimal circuit depth and gate infidelity. Benchmarked on Quantinuum H-Series trapped-ion QPU noise models.",
    link: "https://github.com/evecount/quantum_rotation",
    tags: ["Trapped-Ion", "TKET", "Circuit Synthesis", "Error Mitigation"],
  },
  {
    badge: "PQC Defense",
    title: "Quantum Adversary: Lattice-Based Cryptanalysis & HNDL Risk Modeling",
    description: "Adversarial simulations evaluating enterprise exposure to 'Harvest Now, Decrypt Later' (HNDL). Benchmarking transition paths from legacy RSA/ECC to NIST FIPS 203 (ML-KEM) and FIPS 204 (ML-DSA).",
    link: "https://github.com/evecount/QuantumAdversary",
    tags: ["Lattice Cryptography", "NIST FIPS 203", "HNDL", "Security"],
  },
  {
    badge: "Photonic Co-Processing",
    title: "Project Snapdragon: O(1) Optical Matrix Interconnects",
    description: "Architectural blueprints for low-latency classical-optical co-processing bridges designed to eliminate von Neumann bottlenecks in high-dimensional tensor operations.",
    link: "/snapdragon",
    tags: ["Optical Computing", "O(1) Optics", "Hardware Interconnect"],
  },
  {
    badge: "Sovereign AI",
    title: "One: Autonomous Agentic Architectures Grounded in Human Intuition Datasets",
    description: "Autonomous reasoning agents executing distributed multi-model workflows, calibrated against high-fidelity datasets of human heuristic decision-making.",
    link: "https://github.com/evecount/one",
    tags: ["Agentic Systems", "Autonomous AI", "Intuition Modeling"],
  },
];

const technicalPillars = [
  {
    icon: ShieldCheck,
    title: "Cryptographic Agility Engineering",
    description: "Developing modular cipher abstraction layers that allow institutional banking and defense cores to swap underlying cryptographic primitives without rebuilding application layers.",
  },
  {
    icon: Cpu,
    title: "Hardware-Agnostic Compilation",
    description: "Bridging the gap between high-level algorithmic intent and physical hardware constraints across trapped-ion, neutral atom, and superconducting qubits.",
  },
  {
    icon: Binary,
    title: "Hybrid Combinatorial Optimization",
    description: "Orchestrating classical high-performance compute clusters with QPUs to tackle NP-hard supply chain, portfolio arbitrage, and molecular ground state calculations.",
  },
  {
    icon: GitBranch,
    title: "Open Verification & Proof of Work",
    description: "All core mathematical proofs, compilation circuits, and vulnerability models are maintained on public repositories to allow peer verification by institutional teams.",
  },
];

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F6]">
      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#E7E3D8] bg-[#FAF9F6] py-20 md:py-28">
          <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-gold-wash/50 blur-3xl pointer-events-none" />
          
          <div className="container max-w-[1280px] mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD6C8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-warm" />
                  <span>Foundational Deep-Tech Research</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-tight">
                  Mathematical rigor.
                  <br />
                  <span className="text-ink">Hardware execution.</span>
                </h1>
                <p className="text-lg text-slate leading-relaxed max-w-[620px]">
                  Eve Count conducts applied research at the frontier of quantum computation, post-quantum cryptography (PQC), and sovereign AI architectures. We don't write speculative theory—we synthesize circuits, benchmark real QPUs, and engineer defenses against Q-Day adversaries.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button size="lg" asChild className="bg-ink hover:bg-ink/90 text-white font-semibold rounded-xl px-7 py-6">
                    <a href={`mailto:gwen@evecount.com?subject=${encodeURIComponent("Research Briefing Request — Quantum Systems & PQC")}&body=${encodeURIComponent("Hi Gwen,\n\nWe would like to request an executive research briefing on applied quantum computation, post-quantum cryptography (PQC), and cryptographic agility.\n\nOrganization / Entity:\nExecutive / Research Lead:\nKey Technical Areas of Focus:\nProposed Date / Format:\n")}`} className="inline-flex items-center gap-2">
                      <span>Request Research Briefing</span>
                      <ArrowRight className="h-4 w-4 text-gold-luminous" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-2 border-[#D8D2C4] bg-white hover:bg-mist text-ink font-semibold rounded-xl px-6 py-6">
                    <a href="https://github.com/evecount" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <span>View GitHub Repos</span>
                      <ExternalLink className="h-4 w-4 text-gold-warm" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Bloch Sphere Interactive Display */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="w-full max-w-[460px] rounded-2xl bg-white border border-[#E7E3D8] p-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#E7E3D8] pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink">Qubit State Vector Simulator</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate">|ψ⟩ = α|0⟩ + β|1⟩</span>
                  </div>
                  <div className="flex h-[320px] w-full items-center justify-center">
                    <DynamicBlochSphere />
                  </div>
                  <p className="text-xs text-center text-slate font-mono mt-3">
                    Active state rotation visualization on the complex Bloch sphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Research Preprints & Technical Deliverables */}
        <section className="py-20 md:py-28 border-b border-[#E7E3D8] bg-white">
          <div className="container max-w-[1280px] mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD6C8] bg-mist/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate mb-3">
                <BookOpen className="h-3.5 w-3.5 text-gold-warm" />
                <span>Active Research Streams</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                Peer-level preprints & open implementations.
              </h2>
              <p className="mt-4 text-base text-slate leading-relaxed">
                Our technical discoveries are developed openly on institutional repositories, providing transparent provenance for enterprise adopters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchPapers.map((paper) => (
                <Card key={paper.title} className="bg-[#FAF9F6] border-[#E7E3D8] hover:border-gold-luminous hover:shadow-md transition-all duration-200 rounded-2xl overflow-hidden flex flex-col justify-between">
                  <CardHeader className="p-8 pb-4">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded bg-gold-wash text-ink">
                        {paper.badge}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-ink leading-snug">
                      {paper.title}
                    </CardTitle>
                    <p className="text-sm text-slate leading-relaxed mt-3">
                      {paper.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8 pt-0">
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E7E3D8] mb-6">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-[#DCD6C8] text-slate font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {paper.link.startsWith("http") ? (
                      <Button asChild variant="outline" className="w-full border-[#DCD6C8] bg-white hover:bg-mist text-ink font-semibold rounded-xl">
                        <a href={paper.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                          <span>Inspect Codebase & Benchmarks</span>
                          <ExternalLink className="h-4 w-4 text-gold-warm" />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="outline" className="w-full border-[#DCD6C8] bg-white hover:bg-mist text-ink font-semibold rounded-xl">
                        <Link href={paper.link} className="inline-flex items-center justify-center gap-2">
                          <span>Read Technical Blueprint</span>
                          <ArrowRight className="h-4 w-4 text-gold-warm" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Rigor & Architecture */}
        <section className="py-20 md:py-28 bg-[#FAF9F6]">
          <div className="container max-w-[1280px] mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD6C8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate mb-3">
                <Layers className="h-3.5 w-3.5 text-gold-warm" />
                <span>Architectural Standards</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                Built for mission-critical enterprise deployment.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalPillars.map((pillar) => (
                <div key={pillar.title} className="p-6 rounded-2xl bg-white border border-[#E7E3D8] shadow-xs">
                  <div className="h-10 w-10 rounded-xl bg-mist flex items-center justify-center mb-4 border border-[#DCD6C8]">
                    <pillar.icon className="h-5 w-5 text-gold-warm" />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-white border border-[#DCD6C8] text-center max-w-3xl mx-auto shadow-xs">
              <h3 className="text-xl font-bold text-ink">Engage Our Research Team</h3>
              <p className="text-sm text-slate mt-2 max-w-xl mx-auto">
                We collaborate with enterprise R&D departments, defense contractors, and financial institutions on targeted post-quantum cryptographic validation.
              </p>
              <Button size="lg" asChild className="bg-ink hover:bg-ink/90 text-white font-semibold rounded-xl px-8 mt-6">
                <a href={`mailto:gwen@evecount.com?subject=${encodeURIComponent("Research Consultation Scheduling — Eve Count R&D")}&body=${encodeURIComponent("Hi Gwen,\n\nWe would like to schedule a research consultation with the Eve Count quantum and systems engineering team.\n\nInstitution / Organization:\nContact Name & Title:\nDomain / Technical Architecture:\nTarget Timeline:\n")}`}>
                  Schedule a Research Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

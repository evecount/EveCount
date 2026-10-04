import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Activity, Dna, ArrowRight, ShieldCheck, Zap, HelpCircle, CheckCircle2, RotateCw } from 'lucide-react';

const VALUE_CARDS = [
  {
    id: "speed",
    number: "01",
    questionBadge: "VELOCITY",
    question: "Will we create cures faster?",
    questionContext: "Biopharma discovery timelines average 10–12 years, bottlenecked by classical supercomputer queues testing molecular rotations.",
    solutionBadge: "HIGH-THROUGHPUT DISCOVERY",
    title: "High-Throughput Drug Screening",
    description: "Screen candidate compounds against viral targets in seconds instead of months on supercomputers. Natural quantum interference locks onto target pockets in real-time iterations.",
    metricValue: "1,000×+",
    metricLabel: "Speedup Advantage",
    subMetric: "Vs. Classical Grid Search",
    icon: Zap,
  },
  {
    id: "privacy",
    number: "02",
    questionBadge: "IP PROTECTION",
    question: "How can I protect my ideas?",
    questionContext: "Evaluating candidate drugs with external research partners or CROs historically risks leaking atomic coordinates and proprietary chemical formulas.",
    solutionBadge: "ZERO-KNOWLEDGE VERIFICATION",
    title: "Confidential Research Pipelines",
    description: "Zero-knowledge cryptographic verification evaluates docking fit and binding affinity without ever exposing raw chemical structures or atomic coordinates to third parties.",
    metricValue: "Zero-Knowledge",
    metricLabel: "Privacy Guarantee",
    subMetric: "Bilateral Coordinate Obfuscation",
    icon: ShieldCheck,
  },
  {
    id: "materials",
    number: "03",
    questionBadge: "SYNTHESIS",
    question: "Can we design a new future?",
    questionContext: "Classical physics algorithms break down when computing electronic correlation in large active sites, novel catalysts, and synthetic enzymes.",
    solutionBadge: "QUANTUM CATALYSIS",
    title: "Novel Materials & Enzyme Design",
    description: "Model complex protein switches, targeted industrial catalysts, and synthetic biology on trapped-ion quantum backends with sub-degree angular precision.",
    metricValue: "< 1.0°",
    metricLabel: "Angular Accuracy",
    subMetric: "Trapped-Ion Circuit Fidelity",
    icon: Sparkles,
  },
];

const realWorldSystems = [
  {
    target: "Antiviral Protease",
    application: "Rapid screening for viral replication inhibitors",
    speedup: "3,360×",
    metric: "Instant target lock",
    badge: "Antiviral Therapeutics",
  },
  {
    target: "Targeted Anti-Inflammatory",
    application: "Precision binding to disease enzyme active sites",
    speedup: "2,496×",
    metric: "Sub-degree precision",
    badge: "Enzyme Inhibition",
  },
  {
    target: "Cellular Receptor Switches",
    application: "Simulating light-activated molecular switches",
    speedup: "1,920×",
    metric: "Zero-knowledge fit",
    badge: "Optogenetics & Sensors",
  },
  {
    target: "Fluorescent Protein Cores",
    application: "Modeling high-fidelity chromophore transitions",
    speedup: "1,056×",
    metric: "High-throughput screen",
    badge: "Biomarker Imaging",
  },
];

export function QuantinuumShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [morphedStates, setMorphedStates] = useState<boolean[]>([false, false, false]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [manualOverride, setManualOverride] = useState<boolean | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through section (0 to 1)
      const visibleDistance = windowHeight * 0.85 - rect.top;
      const totalDistance = rect.height * 0.65;
      const progress = Math.min(Math.max(visibleDistance / totalDistance, 0), 1);

      if (manualOverride === null) {
        setMorphedStates([
          progress > 0.22,
          progress > 0.48,
          progress > 0.72,
        ]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualOverride]);

  const toggleAll = (showSolutions: boolean) => {
    setManualOverride(showSolutions);
    setMorphedStates([showSolutions, showSolutions, showSolutions]);
  };

  const toggleCard = (index: number) => {
    setMorphedStates((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 md:py-28 border-b border-[#E7E3D8]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-wash/50 blur-3xl pointer-events-none" />

      <div className="page-container">
        
        {/* Header Eyebrow & Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD6C8] bg-mist/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate mb-4">
              <span className="h-2 w-2 rounded-full bg-gold-warm animate-pulse" />
              <span>Flagship Capability // Accelerated Molecular Discovery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              Testing candidate drugs in seconds,
              <br />
              <span className="text-ink">not months on supercomputers.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
              We replace months of brute-force supercomputing cluster queues with real-time quantum resonance—locking onto viral targets and disease enzymes in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Interactive Morph Mode Switcher */}
            <div className="inline-flex items-center p-1 rounded-xl bg-[#F0EEE6] border border-[#DCD6C8] text-xs font-mono font-bold">
              <button
                type="button"
                onClick={() => toggleAll(false)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  !morphedStates.every(Boolean)
                    ? 'bg-white text-ink shadow-2xs font-bold'
                    : 'text-slate hover:text-ink'
                }`}
              >
                Questions
              </button>
              <button
                type="button"
                onClick={() => toggleAll(true)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  morphedStates.every(Boolean)
                    ? 'bg-ink text-white shadow-2xs font-bold'
                    : 'text-slate hover:text-ink'
                }`}
              >
                Solutions
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" asChild className="bg-ink hover:bg-ink/90 text-white font-semibold rounded-xl px-4 py-5 shadow-xs text-xs">
                <a 
                  href="https://evecount.github.io/quantum_rotation/constellation.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5 text-gold-luminous" />
                  <span>3D Visualizer</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="border border-[#D8D2C4] bg-white hover:bg-mist text-ink font-semibold rounded-xl px-4 py-5 text-xs">
                <a 
                  href="https://github.com/evecount/quantum_rotation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  <span>Open Source</span>
                  <ExternalLink className="h-3 w-3 text-gold-warm" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Concept 1: Scroll-Morphing Question-to-Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {VALUE_CARDS.map((card, idx) => {
            const isCardMorphed = hoveredCard === idx ? true : morphedStates[idx];
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => toggleCard(idx)}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative min-h-[340px] sm:min-h-[360px] rounded-2xl cursor-pointer select-none transition-all duration-300 group"
              >
                {/* 1. Question Face (Visible before scroll / hover) */}
                <div
                  className={`absolute inset-0 rounded-2xl p-7 flex flex-col justify-between border border-[#E7E3D8] bg-[#FAF9F6] transition-all duration-500 ease-out ${
                    isCardMorphed
                      ? 'opacity-0 scale-95 pointer-events-none'
                      : 'opacity-100 scale-100 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#B8872A] uppercase">
                        {card.number} // {card.questionBadge}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-[#5B616B]">
                        <HelpCircle className="h-3.5 w-3.5 text-[#B8872A]" />
                        <span>Question</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#16181D] leading-tight mb-4">
                      <em>&ldquo;{card.question}&rdquo;</em>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5B616B] leading-relaxed">
                      {card.questionContext}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E7E3D8] flex items-center justify-between text-xs font-mono text-[#B8872A]">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <span>Scroll or tap to reveal</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] text-[#5B616B]/70 font-mono">0{idx + 1}/03</span>
                  </div>
                </div>

                {/* 2. Value Face (Morphed on scroll / hover) */}
                <div
                  className={`absolute inset-0 rounded-2xl p-7 flex flex-col justify-between border border-[#B8872A]/50 bg-[#16181D] text-white transition-all duration-500 ease-out shadow-xl shadow-black/10 ${
                    isCardMorphed
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B8872A]/20 border border-[#B8872A]/40 text-[#D7AF55]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#D7AF55] uppercase">
                          {card.number} // {card.solutionBadge}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/10">
                        Resolved
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-3">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-[#D7AF55] font-semibold tracking-wider">
                        {card.metricLabel}
                      </div>
                      <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                        {card.metricValue}
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        {card.subMetric}
                      </div>
                    </div>

                    <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1 group-hover:text-[#D7AF55] transition-colors">
                      <RotateCw className="h-3 w-3" />
                      <span>Flip</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-World Validated Systems */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate flex items-center gap-2">
              <Activity className="h-4 w-4 text-gold-warm" />
              <span>Demonstrated Performance on Real Biological Systems</span>
            </h3>
            <span className="text-xs text-slate font-mono hidden sm:inline">Validated Experimental Structures</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realWorldSystems.map((item) => (
              <Card key={item.target} className="bg-[#FAF9F6] border-[#E7E3D8] hover:border-gold-luminous transition-all duration-200 rounded-2xl shadow-2xs">
                <CardHeader className="p-5 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-wash text-ink">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono font-extrabold text-gold-warm">
                      {item.speedup}
                    </span>
                  </div>
                  <CardTitle className="text-sm font-bold text-ink leading-tight">
                    {item.target}
                  </CardTitle>
                  <p className="text-[11px] text-slate mt-1 line-clamp-2">
                    {item.application}
                  </p>
                </CardHeader>
                <CardContent className="p-5 pt-0 border-t border-[#E7E3D8] mt-2">
                  <div className="text-[11px] font-mono text-slate pt-3">
                    Result: <span className="font-bold text-ink">{item.metric}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

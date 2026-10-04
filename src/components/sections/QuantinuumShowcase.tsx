'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Activity, Dna, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

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
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 border-b border-[#E7E3D8]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-wash/50 blur-3xl pointer-events-none" />

      <div className="page-container">
        
        {/* Header Eyebrow & Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
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
              We use frontier quantum hardware APIs to solve one of biopharma’s most expensive bottlenecks: finding exactly how a therapeutic molecule locks into a disease target without brute-forcing billions of coordinates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" asChild className="bg-ink hover:bg-ink/90 text-white font-semibold rounded-xl px-6 py-6 shadow-sm">
              <a 
                href="https://evecount.github.io/quantum_rotation/constellation.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-gold-luminous" />
                <span>Launch Interactive 3D Visualizer</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-[#D8D2C4] bg-white hover:bg-mist text-ink font-semibold rounded-xl px-5 py-6">
              <a 
                href="https://github.com/evecount/quantum_rotation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <span>View Open Source Solution</span>
                <ExternalLink className="h-4 w-4 text-gold-warm" />
              </a>
            </Button>
          </div>
        </div>

        {/* 2-Column: Problem vs Quantum Leap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left: The Practical Story */}
          <div className="lg:col-span-7 rounded-2xl bg-[#FAF9F6] border border-[#E7E3D8] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#DCD6C8]">
                  <Dna className="h-5 w-5 text-gold-warm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">From Grid Brute-Force to Quantum Resonance</h3>
                  <p className="text-xs text-slate font-mono">Real-Time Molecular Lock-and-Key Matching</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  <strong>The Classical Bottleneck:</strong> Today, discovering whether a candidate drug fits a viral pocket requires supercomputers to break 3D space into a massive grid and test billions of rotations one-by-one. It takes days per compound and costs millions in compute.
                </p>
                <p>
                  <strong>Our Quantum Solution:</strong> Instead of guessing positions on a grid, our system encodes the molecule and pocket into quantum states. The quantum hardware tests the overlap simultaneously using natural interference—locking onto the correct fit in a handful of real-time iterations.
                </p>
              </div>

              {/* Intuitive Value Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="rounded-xl bg-white border border-[#DCD6C8] p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-ink mb-1">
                    <Zap className="h-4 w-4 text-gold-warm" />
                    <span>Real-Time Feedback Loops</span>
                  </div>
                  <p className="text-xs text-slate">
                    Dynamic mid-circuit measurements correct the alignment on the fly until resonance is achieved.
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-[#DCD6C8] p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-ink mb-1">
                    <ShieldCheck className="h-4 w-4 text-gold-warm" />
                    <span>Zero-Knowledge Screening</span>
                  </div>
                  <p className="text-xs text-slate">
                    Verifies whether candidate molecules fit active sites without exposing proprietary chemical structures.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-[#E7E3D8] pt-6 mt-6 text-left">
              <div>
                <div className="text-xs text-slate font-semibold uppercase">Speed Advantage</div>
                <div className="text-xl sm:text-2xl font-extrabold text-ink">1,000×+</div>
                <div className="text-[10px] text-slate font-mono">Vs. Classical Grid Search</div>
              </div>
              <div>
                <div className="text-xs text-slate font-semibold uppercase">Resolution</div>
                <div className="text-xl sm:text-2xl font-extrabold text-gold-warm">&lt; 1.0°</div>
                <div className="text-[10px] text-slate font-mono">Angular Fit Accuracy</div>
              </div>
              <div>
                <div className="text-xs text-slate font-semibold uppercase">Execution</div>
                <div className="text-xl sm:text-2xl font-extrabold text-ink">&lt; 5 Loops</div>
                <div className="text-[10px] text-slate font-mono">To Complete Target Lock</div>
              </div>
            </div>
          </div>

          {/* Right: What This Enables for Enterprises */}
          <div className="lg:col-span-5 rounded-2xl bg-ink text-white p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest font-mono font-bold text-gold-luminous">Commercial Applications</span>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-white/10 text-white border border-white/10">Production Ready</span>
              </div>
              
              <div className="space-y-5 text-sm">
                <div>
                  <h4 className="font-bold text-white text-base mb-1">High-Throughput Drug Screening</h4>
                  <p className="text-xs text-slate-light leading-relaxed">
                    Filter thousands of candidate compounds against disease enzymes in hours rather than months of supercomputer cluster time.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold text-white text-base mb-1">Confidential Compound Evaluation</h4>
                  <p className="text-xs text-slate-light leading-relaxed">
                    Pharma partners can evaluate proprietary intellectual property in joint ventures without sharing atomic coordinate files.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-bold text-white text-base mb-1">Materials & Enzyme Design</h4>
                  <p className="text-xs text-slate-light leading-relaxed">
                    Model complex protein switches, catalysts, and synthetic biology components on state-of-the-art quantum backends.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a 
                href="https://evecount.github.io/quantum_rotation/constellation.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs text-gold-luminous hover:text-white transition-colors font-semibold"
              >
                <span>Explore Live In-Browser Molecular Simulation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

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

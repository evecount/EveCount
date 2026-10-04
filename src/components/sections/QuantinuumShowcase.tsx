'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Cpu, Sparkles, Activity, ArrowRight, Dna, Layers } from 'lucide-react';

const pdbBenchmarks = [
  {
    target: "SARS-CoV-2 Mpro + Nirmatrelvir",
    pdb: "PDB 7VH8",
    field: "Antiviral Therapeutics (Paxlovid)",
    speedup: "3,360×",
    rusLoops: "2 loops",
    hqc: "27.28 HQCs",
    overlap: "1.000",
  },
  {
    target: "COX-2 + Celecoxib",
    pdb: "PDB 3LN1",
    field: "Selective Anti-inflammatories",
    speedup: "2,496×",
    rusLoops: "2 loops",
    hqc: "27.28 HQCs",
    overlap: "0.960",
  },
  {
    target: "11-cis Retinal / Rhodopsin",
    pdb: "PDB 1U19",
    field: "Vision & Optogenetics",
    speedup: "1,920×",
    rusLoops: "2 loops",
    hqc: "27.28 HQCs",
    overlap: "0.980",
  },
  {
    target: "GFP Chromophore",
    pdb: "PDB 1EMA",
    field: "Fluorescence Imaging",
    speedup: "1,056×",
    rusLoops: "4 loops",
    hqc: "54.56 HQCs",
    overlap: "0.990",
  },
];

export function QuantinuumShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 border-b border-[#E7E3D8]">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-wash/50 blur-3xl pointer-events-none" />

      <div className="container max-w-[1280px] mx-auto px-6">
        
        {/* Header Eyebrow & Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCD6C8] bg-mist/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate mb-4">
              <span className="h-2 w-2 rounded-full bg-gold-warm animate-pulse" />
              <span>Quantinuum Singapore Grand Challenge 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              Project Q-Rotate:
              <br />
              <span className="text-ink">Biomolecular Quantum State Overlap</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate leading-relaxed">
              We replaced 40 years of classical $O(N^3)$ Cartesian grid docking with continuous Lie algebra rotations and dynamic mid-circuit Repeat-Until-Success (RUS) loops compiled natively for <strong>Quantinuum trapped-ion H-Series QPUs</strong> in Guppy & TKET.
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
                <span>Launch 3D WebGL Constellation</span>
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
                <span>GitHub Repository</span>
                <ExternalLink className="h-4 w-4 text-gold-warm" />
              </a>
            </Button>
          </div>
        </div>

        {/* 2-Column Overview: Hardware Specs & Mathematical Innovation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left: The Mathematical Breakthrough Card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#FAF9F6] border border-[#E7E3D8] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#DCD6C8]">
                  <Dna className="h-5 w-5 text-gold-warm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Continuous Lie Algebra Resonance</h3>
                  <p className="text-xs text-slate font-mono">Coordinate-Free Blind Parity Interferometry</p>
                </div>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-6">
                Instead of sampling billions of discrete spatial voxels, Q-Rotate maps receptor-ligand pairing to an information-theoretic quantum state overlap. Using a SWAP test with a single ancilla measurement, active site resonance is determined with zero exposure of proprietary coordinates:
              </p>
              
              {/* Formula display block */}
              <div className="rounded-xl bg-white border border-[#DCD6C8] p-4 font-mono text-xs sm:text-sm text-ink mb-6 overflow-x-auto shadow-2xs">
                <div className="text-slate text-[11px] mb-1 font-semibold uppercase tracking-wider">// SWAP-Test Parity Equation</div>
                <div className="text-ink font-bold">P(0) = ½ · ( 1 + |⟨ψ_pocket | ψ_ligand⟩|² )</div>
                <div className="text-slate text-[11px] mt-2 mb-1 font-semibold uppercase tracking-wider">// Continuous Unitary Flow</div>
                <div className="text-ink font-bold">U_tube(τ) = exp( -i τ ( H_rot + H_phase ) )</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-[#E7E3D8] pt-4 text-left">
              <div>
                <div className="text-xs text-slate font-semibold uppercase">Register</div>
                <div className="text-base sm:text-lg font-extrabold text-ink">9–17 Qubits</div>
                <div className="text-[10px] text-slate font-mono">All-to-All Trapped-Ion</div>
              </div>
              <div>
                <div className="text-xs text-slate font-semibold uppercase">Convergence</div>
                <div className="text-base sm:text-lg font-extrabold text-gold-warm">1–5 Loops</div>
                <div className="text-[10px] text-slate font-mono">Guppy RUS mid-circuit</div>
              </div>
              <div>
                <div className="text-xs text-slate font-semibold uppercase">Cost / Circuit</div>
                <div className="text-base sm:text-lg font-extrabold text-ink">≈13.6 HQCs</div>
                <div className="text-[10px] text-slate font-mono">Quantinuum H2 Rebased</div>
              </div>
            </div>
          </div>

          {/* Right: Quantinuum H2 Hardware Resource Profile */}
          <div className="lg:col-span-5 rounded-2xl bg-ink text-white p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-gold-luminous" />
                  <span className="text-xs uppercase tracking-widest font-mono font-bold text-gold-luminous">Quantinuum H2 Profile</span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-white/10 text-white border border-white/10">Zero SWAPs</span>
              </div>
              
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-light">Single-Qubit Rotations (PhasedX):</span>
                  <span className="font-bold text-white">62 Gates</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-light">Two-Qubit Entanglers (ZZPhase):</span>
                  <span className="font-bold text-gold-luminous">32 Gates</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-light">Circuit Depth:</span>
                  <span className="font-bold text-white">68</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-light">Native Compilation:</span>
                  <span className="font-bold text-white">Guppy & Pytket</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-light">Deposited Pose Recovery:</span>
                  <span className="font-bold text-green-400">6 / 6 (100%)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a 
                href="https://evecount.github.io/quantum_rotation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs text-gold-luminous hover:text-white transition-colors font-medium"
              >
                <span>Read Full Project Documentation & Technical Paper</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Real-World Molecular Showdown: 4 PDB Systems Benchmark */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate flex items-center gap-2">
              <Activity className="h-4 w-4 text-gold-warm" />
              <span>Real-World Benchmark Results across Experimental PDB Coordinates</span>
            </h3>
            <span className="text-xs text-slate font-mono hidden sm:inline">100-Shot Trapped-Ion Emulation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pdbBenchmarks.map((bench) => (
              <Card key={bench.target} className="bg-[#FAF9F6] border-[#E7E3D8] hover:border-gold-luminous transition-all duration-200 rounded-2xl shadow-2xs">
                <CardHeader className="p-5 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-wash text-ink">
                      {bench.pdb}
                    </span>
                    <span className="text-xs font-mono font-extrabold text-gold-warm">
                      {bench.speedup} Speedup
                    </span>
                  </div>
                  <CardTitle className="text-sm font-bold text-ink leading-tight">
                    {bench.target}
                  </CardTitle>
                  <p className="text-[11px] text-slate mt-1 line-clamp-1">
                    {bench.field}
                  </p>
                </CardHeader>
                <CardContent className="p-5 pt-0 border-t border-[#E7E3D8] mt-2">
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-3">
                    <div>
                      <span className="text-slate block text-[10px]">Lock Loops:</span>
                      <span className="font-bold text-ink">{bench.rusLoops}</span>
                    </div>
                    <div>
                      <span className="text-slate block text-[10px]">Final Overlap:</span>
                      <span className="font-bold text-ink">{bench.overlap}</span>
                    </div>
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

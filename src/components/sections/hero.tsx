"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Cpu } from "lucide-react";
import { QuantumHeroGraphic } from "./QuantumHeroGraphic";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-[#E7E3D8]">
      {/* Subtle warm ambient wash in background */}
      <div className="absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-gold-wash/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-mist/80 blur-2xl pointer-events-none" />

      <div className="container max-w-[1280px] mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Punchy Headline & Clear Action (PartyRock Style) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#DCD6C8] bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-gold-warm animate-pulse" />
              <span>Quantinuum Grand Challenge '26 // Quantum Systems</span>
            </div>

            {/* Display Heading inspired by PartyRock: punchy, prominent line breaks */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-ink leading-[1.08] lg:leading-[1.04]">
              Eve Count:
              <br />
              <span className="text-ink">where quantum</span>
              <br />
              <span className="relative inline-block text-ink">
                strategy starts
                <svg
                  className="absolute -bottom-2 left-0 w-full text-gold-luminous h-3 overflow-visible pointer-events-none"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C75 3 225 3 298 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Clear-box Value Proposition */}
            <p className="text-lg sm:text-xl text-slate leading-relaxed max-w-[580px] font-normal">
              Eve Count enables enterprise leaders and institutions to navigate the post-quantum shift with certainty. 
              Bridging Post-Quantum Cryptography (PQC), Quantinuum trapped-ion hardware compilation, and sovereign quantum architectures.
            </p>

            {/* Action Buttons: High-Contrast Ink Button + Outline */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button 
                size="lg" 
                asChild
                className="bg-ink hover:bg-ink/90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="/apply" className="inline-flex items-center gap-2.5">
                  <span>Complete Enterprise Diagnostic</span>
                  <ArrowRight className="h-4 w-4 text-gold-luminous" />
                </Link>
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-2 border-[#D8D2C4] bg-white hover:bg-mist text-ink font-semibold px-6 py-6 text-base rounded-xl transition-all"
              >
                <a 
                  href="https://cybrdeck.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <span>Cybrdeck Terminal</span>
                  <ExternalLink className="h-4 w-4 text-gold-warm" />
                </a>
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold uppercase tracking-wider text-slate border-t border-[#E7E3D8] w-full max-w-[580px]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-warm" />
                NIST PQC Standards
              </span>
              <span className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-gold-luminous" />
                Quantinuum & IonQ Benchmarking
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-ink" />
                Zero Lock-In
              </span>
            </div>

          </div>

          {/* Right Column: Architectural Quantum Graphic (PartyRock Stipple Aesthetic) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <QuantumHeroGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}

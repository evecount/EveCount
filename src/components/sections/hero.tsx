"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-border">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-gold-wash/50 blur-3xl pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-6 py-28 md:py-36 lg:py-40">
        <div className="max-w-[760px] flex flex-col items-start text-left space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-mist/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-slate">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-warm" />
            <span>Quantum-Ready Enterprise Systems</span>
          </div>

          {/* Display Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
            Translating complex quantum systems into{" "}
            <span className="relative inline-block text-ink">
              strategic action.
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gold-luminous -z-0" />
            </span>
          </h1>

          {/* Lead Paragraph */}
          <p className="text-lg sm:text-xl text-slate leading-relaxed max-w-[680px]">
            We bridge deep mathematical physics, Post-Quantum Cryptography (PQC), and autonomous architecture with institutional enterprise decision-making. 
          </p>

          {/* Strategic Action Pathways */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button 
              size="lg" 
              asChild
              className="bg-gold-luminous hover:bg-gold-warm text-ink font-semibold px-7 py-3 text-base shadow-sm transition-all"
            >
              <Link href="/apply" className="inline-flex items-center gap-2">
                <span>Enterprise Diagnostic</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-border bg-white hover:bg-mist text-ink font-medium px-6 py-3 text-base transition-all"
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
        </div>
      </div>
    </section>
  );
}

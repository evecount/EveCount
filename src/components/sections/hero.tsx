"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero border-b border-[#E7E3D8]" aria-labelledby="hero-title">
      <div className="page-container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> THE NEXT ERA IS ALREADY HERE
          </div>
          <h1 id="hero-title">
            Eve Count<br />
            <span>Quantum Systems.</span>
          </h1>
          <p className="hero-statement">
            Clarity for the<br />
            <em>post-quantum</em> world.
          </p>
          <p className="hero-description">
            We help institutions navigate the post-quantum shift with certainty—bridging cryptographic security, real quantum hardware, and systems built to evolve.
          </p>
          <div className="hero-actions">
            <Button variant="editorial" asChild className="main-cta">
              <Link href="/apply" className="inline-flex items-center">
                <span>Complete Enterprise Diagnostic</span>
                <ArrowUpRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>
            <a 
              className="text-link" 
              href="https://cybrdeck.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Cybrdeck Terminal</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Architectural illustration representing post-quantum resilience">
          <span className="art-topnote">EC / SYSTEM STUDY NO. 001</span>
          <img 
            src="/images/quantum-architecture.svg" 
            alt="Stippled architectural gateway representing post-quantum resilience" 
            width={760} 
            height={680} 
          />
          <span className="art-bottomnote">ENGINEERING THE TRANSITION →</span>
        </div>
      </div>

      <div className="page-container hero-baseline">
        <div className="baseline-items">
          <span>NIST PQC STANDARDS</span>
          <span className="baseline-dot" />
          <span>QUANTINUUM &amp; IONQ</span>
          <span className="baseline-dot" />
          <span>BUILT FOR AGILITY</span>
        </div>
        <a href="#expertise" aria-label="Explore our expertise" className="scroll-cue">
          <ArrowDown size={15} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

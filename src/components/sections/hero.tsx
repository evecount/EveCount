"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY || 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth dynamic rotation based on scroll (scaling decreased by 20% for optimal proportions)
  const rotationDeg = (scrollY * 0.08) % 360;

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
            A secure future<br />
            <em>without passwords.</em>
          </p>
          <p className="hero-description">
            We eliminate passwords and credential vulnerabilities using NIST-standardized post-quantum cryptography, zero-knowledge verification, and hardware-validated cryptographic agility.
          </p>
          <div className="hero-actions">
            <Button variant="editorial" asChild className="main-cta">
              <Link href="/apply" className="inline-flex items-center">
                <span>Commission Institutional Assessment</span>
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
          <div 
            className="transition-transform duration-75 ease-out flex items-center justify-center pointer-events-none select-none w-full"
            style={{ 
              transform: `scale(1.22) rotate(${rotationDeg}deg)`,
              transformOrigin: "center center"
            }}
          >
            <img 
              src="/images/quantum-architecture.svg" 
              alt="Stippled architectural gateway representing post-quantum resilience" 
              width={760} 
              height={680} 
              className="w-full max-w-[640px] h-auto drop-shadow-md"
            />
          </div>
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

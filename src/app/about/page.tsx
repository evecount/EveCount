'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Terminal, Award, BookOpen, ExternalLink, X } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";

export default function AboutPage() {
  const hero = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [easterEggOpen, setEasterEggOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const tilt = useSpring(useTransform(scrollYProgress, [0, 1], [0, 32]), { stiffness: 70, damping: 24 });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduced ? 0 : 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <div className="new-site about-new flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="about-new-hero" ref={hero}>
          <div className="about-ring-field" aria-hidden="true">
            <motion.div className="about-rings" style={{ rotate: tilt, scale }}>
              <i /><i /><i /><i /><b />
            </motion.div>
          </div>
          <div className="about-new-copy">
            <p className="new-kicker">ABOUT EVE COUNT</p>
            <h1>
              The adversary<br />
              clarifies<br />
              <em>the question.</em>
            </h1>
            <p>
              We named the firm after Eve—the eavesdropper in every cryptography textbook—because security is only meaningful when measured against the person trying to break it.
            </p>
            <p className="about-ring-note text-xs font-mono text-[var(--ghost)] tracking-wider mt-4">
              The rings are not decoration — <Link href="/#proof" className="underline underline-offset-4 text-[var(--ink)]">they are our method</Link>.
            </p>
          </div>
        </section>

        <section className="about-manifesto">
          <motion.p className="chapter" {...reveal()}>
            THE NAME <span>01</span>
          </motion.p>
          <motion.h2 {...reveal(0.08)}>
            Alice and Bob want privacy.<br />
            <em>Eve wants what passes between them.</em>
          </motion.h2>
          <div className="manifesto-grid">
            <motion.p {...reveal(0.12)}>
              Eve is patient. She is well-funded. She may already be recording what cannot yet be read.
            </motion.p>
            <motion.div {...reveal(0.2)}>
              <p>
                That turns post-quantum security from an abstract future into a present question: how long must this information remain secret?
              </p>
              <p>
                Ask what Eve would need—how much time, power and access—and vague risk becomes an arithmetic problem with a deadline.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="about-photo">
          <motion.img 
            style={{ scale }} 
            src="/images/quantum-landscape.jpg" 
            alt="Monumental orbiting architecture in a misty landscape" 
            width={1920} 
            height={1088} 
          />
          <p>Assume the impossible becomes possible.</p>
        </section>

        <section className="beliefs">
          <p className="chapter">WHAT WE REFUSE TO TRADE <span>02</span></p>
          {[
            ['01', 'Rigor', 'If we cannot reproduce the measurement, we do not make the claim.'],
            ['02', 'Discretion', 'Your inventory, benchmarks and roadmap remain yours.'],
            ['03', 'Agility', 'A changing standard should become a configuration—not a rebuild.']
          ].map(([n, t, b], i) => (
            <motion.article {...reveal(i * 0.1)} key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </motion.article>
          ))}
        </section>

        {/* WHO YOU'RE WORKING WITH / FOUNDER DOSSIER */}
        <section className="founder-profile">
          <div className="founder-inner">
            <p className="chapter">WHO YOU’RE WORKING WITH <span>03</span></p>
            <div className="founder-dossier">
              <div className="founder-id">
                <h2>
                  Gwendalynn<br />
                  <em>Lim Wan Ting.</em>
                </h2>
                <div className="flex items-center justify-between cursor-pointer group" onClick={() => setEasterEggOpen(true)}>
                  <span className="group-hover:text-[var(--gold-deep)] transition-colors">
                    FOUNDER &amp; CTO · EVE COUNT
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--gold-deep)] border border-[var(--gold-deep)]/40 px-2 py-0.5 rounded-full hover:bg-[var(--gold-deep)]/10 transition-colors">
                    <Sparkles size={11} /> ARCHITECT DOSSIER
                  </span>
                </div>
                <p>
                  She sets the method and builds the evidence: the diagnostic questions, the Q-Rotate algorithm, and the benchmarks behind what we claim.
                </p>
                <p className="founder-team">
                  <span>WORKING WITH</span>
                  Benjamin Lim, Co-founder &amp; Systems Architect · <a href="https://www.mambapartners.com/" target="_blank" rel="noreferrer">James Sun</a>, Venture Advisor, Mamba Partners
                </p>
              </div>

              <div className="founder-ledger">
                <p className="founder-ledger-label">SELECTED RECORD</p>
                <div className="founder-record">
                  <div>
                    <div>
                      <span>01 / MICROSOFT AICO 2026 IDEATION</span>
                      <h3>Gold winner</h3>
                    </div>
                    <p>A custom dual-agent ecosystem on Microsoft Copilot Studio with HSBC Fund Centre.</p>
                  </div>
                  <div>
                    <div>
                      <span>02 / BUILD VOICE AGENTS WITH SPEECHMATICS</span>
                      <h3>Hackathon winner</h3>
                    </div>
                    <p>Awarded the Golden Ticket for a cognitive overlay and silent technical co-founder for Sovereignty OS / Unity OS, with SGInnovate and The Generative Beings.</p>
                  </div>
                  <div>
                    <div>
                      <span>03 / QDAY SUMMIT LEARNATHON</span>
                      <h3>First place · 5/5</h3>
                    </div>
                    <p>An interactive implementation of Shor’s Algorithm: breaking asymmetric cryptography and defending against harvest-now, decrypt-later threats.</p>
                  </div>
                </div>

                <div className="founder-credentials-group">
                  <p className="founder-ledger-label">ACADEMIC BACKGROUND &amp; CREDENTIALS</p>
                  <div className="founder-credentials">
                    <div>
                      <span>SINGAPORE INSTITUTE OF TECHNOLOGY (SIT)</span>
                      <b>B.Sc. (Hons) Applied Computing</b>
                      <p>Specializing in Applied Machine Learning, Distributed Systems &amp; Algorithmic Foundations.</p>
                    </div>
                    <div>
                      <span>NANYANG TECHNOLOGICAL UNIVERSITY (NTU)</span>
                      <b>Advanced AI / Machine Learning SCTP</b>
                      <p>A specialist certificate track in advanced artificial intelligence and machine learning.</p>
                    </div>
                    <div>
                      <span>IEEE NTU STUDENT BRANCH &amp; NTU WOMEN IN TECH</span>
                      <b>Guest Lecturer &amp; Instructor</b>
                      <p>Coding Nights: Data Structures &amp; Algorithms, scheduled for 12 October 2026.</p>
                    </div>
                    <div>
                      <span>WOMEN IN TECH @ NTU</span>
                      <b>Mentor</b>
                      <p>woMENTORS cohort.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EASTER EGG ARCHITECT DOSSIER MODAL */}
        {easterEggOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[var(--canvas)] border border-[var(--line)] shadow-2xl p-6 md:p-8 rounded-sm overflow-hidden text-[var(--ink)]">
              <button 
                onClick={() => setEasterEggOpen(false)}
                className="absolute top-5 right-5 text-[var(--ghost)] hover:text-[var(--ink)] transition-colors p-1"
                aria-label="Close dossier"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--gold-deep)] tracking-widest uppercase mb-4">
                <Terminal size={14} />
                <span>CLASSIFIED ARCHITECT DOSSIER // GWENDALYNN LIM</span>
              </div>

              <h2 className="font-serif italic text-3xl md:text-4xl leading-tight mb-2">
                "Assume the impossible will become possible."
              </h2>
              <p className="text-sm font-mono text-[var(--moss)] mb-6">
                Operator Node: Gwen · Founder &amp; Enterprise Systems Architect
              </p>

              <div className="space-y-4 text-xs font-mono border-t border-b border-[var(--line)] py-5 my-5 text-[var(--ghost)]">
                <div className="flex items-start gap-3">
                  <Award className="text-[var(--gold-deep)] shrink-0 mt-0.5" size={16} />
                  <div>
                    <strong className="text-[var(--ink)] block">3x DeepTech Hackathon &amp; Ideation Winner:</strong>
                    <span>Microsoft AICO 2026 Gold (Dual-Agent Copilot Studio with HSBC) · Speechmatics Voice Agents (Golden Ticket Winner for Sovereignty OS) · QDay Summit Learnathon (Perfect 5/5 Shor's Algorithm PQC Defense).</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="text-[var(--moss)] shrink-0 mt-0.5" size={16} />
                  <div>
                    <strong className="text-[var(--ink)] block">SIT Applied Computing Honours &amp; NTU Leadership:</strong>
                    <span>B.Sc. (Hons) in Applied Computing from SIT · Guest Lecturer @ IEEE NTU &amp; NTU WIT (Coding Nights: DSA from First Principles) · Mentor at woMENTORS.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4 text-xs font-mono">
                  <a href="https://github.com/evecount" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[var(--ink)] hover:underline">
                    GitHub R&amp;D <ExternalLink size={12} />
                  </a>
                  <a href="https://linkedin.com/in/gwendalynnlim" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[var(--ink)] hover:underline">
                    LinkedIn <ExternalLink size={12} />
                  </a>
                </div>
                <a 
                  href="https://calendar.app.google/FVVsrGQcSa6ZDEuZ8" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="pill pill-dark text-xs py-2 px-4"
                >
                  Book Executive Briefing <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}

        <section className="evidence">
          <div className="evidence-image">
            <video 
              className="cinema-video" 
              src="/images/crypto-material-loop.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="auto" 
              aria-hidden="true" 
            />
            <img 
              src="/images/crypto-material.jpg" 
              alt="Glass, mineral and gold technical sculpture" 
              width={1600} 
              height={1104} 
              loading="lazy" 
            />
          </div>
          <div className="evidence-copy">
            <p className="chapter chapter-light">THE GROUND BENEATH THE IDEA <span>04</span></p>
            <h2>
              Philosophy,<br />
              <em>made measurable.</em>
            </h2>
            {[
              ['NIST PQC standards', 'FIPS 203 · 204 · 205'],
              ['Real quantum hardware', 'Quantinuum · IonQ'],
              ['Hybrid migration', 'TLS · PKI · keys · certificates'],
              ['Crypto inventory', 'discovery · classification · governance']
            ].map(([a, b]) => (
              <div key={a}>
                <strong>{a}</strong>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="speaking" id="speaking">
          <div className="speaking-inner">
            <p className="chapter">SPEAKING &amp; EVENTS <span>05</span></p>
            <div className="speaking-grid">
              <h2>Good questions<br /><em>travel.</em></h2>
              <div className="speaking-aside">
                <p>We hold quantum events and lectures, and are available for speaking engagements. Invite Eve Count to bring the conversation to your audience.</p>
                <a className="pill pill-dark" href={`mailto:gwen@evecount.com?subject=${encodeURIComponent("Speaking engagement enquiry — Eve Count")}&body=${encodeURIComponent("Hi Gwen,\n\nWe would like to invite Eve Count to speak at our event / institution.\n\nEvent Name / Host:\nTarget Audience:\nProposed Date / Format:\nKey Themes (Applied Quantum, PQC, Agentic AI):\nContact Person:\n")}`}>
                  Invite us to speak <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="new-closing">
          <p className="chapter chapter-light">THE QUESTION <span>06</span></p>
          <h2>
            How long must your<br />
            secrets remain secret?
          </h2>
          <Link className="pill pill-signal" href="/apply">
            Find out <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef } from "react";

const questions = [
  { 
    number: "01", 
    ask: "Will we create cures faster?", 
    answer: "High-throughput drug screening", 
    value: "Candidate molecules ranked in seconds, not months on a supercomputer." 
  },
  { 
    number: "02", 
    ask: "How do I protect my ideas?", 
    answer: "Confidential research pipelines", 
    value: "Every query, model and result stays inside your own secured enclave." 
  },
  { 
    number: "03", 
    ask: "Can we design a new future?", 
    answer: "Novel materials & enzyme design", 
    value: "Materials and enzymes that do not exist yet, generated and tested in silico." 
  },
];

const capabilities = [
  { 
    number: "01", 
    thought: "What must remain unknowable?", 
    title: "Post-quantum security", 
    body: "Find every vulnerable key, certificate and protocol. Then move from legacy RSA and ECC to NIST-standardised protection with a migration you can actually execute.", 
    meta: "PQC AUDITS · FIPS 203 / 204 / 205", 
    image: "/images/crypto-material.jpg" 
  },
  { 
    number: "02", 
    thought: "What is possible now—not someday?", 
    title: "Real hardware, measured", 
    body: "We run and optimise circuits on Quantinuum and IonQ systems, replacing speculation with evidence from the machines that exist today.", 
    meta: "QUANTINUUM · IONQ · CIRCUIT FIDELITY", 
    image: "/images/quantum-hardware.jpg" 
  },
  { 
    number: "03", 
    thought: "How do we stay ready for change?", 
    title: "Cryptographic agility", 
    body: "We design modular systems where standards, algorithms and providers can change without forcing the institution to begin again.", 
    meta: "ARCHITECTURE · GOVERNANCE · RESILIENCE", 
    image: "/images/quantum-landscape.jpg" 
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const questionsRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    if (reduced) {
      v.pause();
      v.currentTime = 0;
    } else {
      v.play().catch(() => {});
    }
  }, [reduced]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const { scrollYProgress: qProgressRaw } = useScroll({ target: questionsRef, offset: ["start start", "end end"] });
  const qProgress = useSpring(qProgressRaw, { stiffness: 90, damping: 24 });

  const imageScale = useTransform(heroProgress, [0, 1], [1, 1.16]);
  const imageY = useTransform(heroProgress, [0, 1], [0, 110]);
  const copyY = useTransform(heroProgress, [0, 1], [0, -70]);

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduced ? 0 : 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <div className="new-site flex min-h-screen flex-col">
      <motion.div className="reading-progress" style={{ scaleX: progress }} />
      <Header />
      <main className="flex-1">
        <section className="new-hero" ref={heroRef}>
          <motion.div className="new-hero-copy" style={{ y: copyY }}>
            <p className="new-kicker">EVE COUNT · QUANTUM SYSTEMS</p>
            <h1>
              Security for a world<br />
              that has not<br />
              <em>arrived yet.</em>
            </h1>
            <p className="new-lede">
              We help institutions decide what must remain unknowable—and engineer the systems that keep it that way.
            </p>
            <div className="new-actions">
              <Link className="pill pill-dark" href="/apply">
                Complete enterprise diagnostic <ArrowUpRight size={16} />
              </Link>
              <a className="underlink" href="https://cybrdeck.com" target="_blank" rel="noreferrer">
                Cybrdeck terminal <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
          
          <motion.figure className="hero-cinema" style={{ scale: imageScale, y: imageY }}>
            <img 
              src="/images/quantum-landscape.jpg" 
              alt="A monumental system of glass and metal rings suspended over a misty landscape" 
              width={1920} 
              height={1088} 
            />
            <figcaption>
              Architecture for the next computing era <span>01 / 04</span>
            </figcaption>
          </motion.figure>
          <a href="#questions" className="new-scroll" aria-label="Continue">
            <ArrowDown size={16} />
          </a>
        </section>

        <section className="questions-section" id="questions" ref={questionsRef}>
          <div className="questions-stage">
            <div className="questions-inner">
              <p className="chapter chapter-light">
                THE HUMAN QUESTION <span>01</span>
              </p>
              <p className="questions-overture">
                Technology matters when it changes<br />
                what humanity can ask.
              </p>
              <div className="questions-stack">
                {questions.map((item, index) => (
                  <QuestionFade key={item.number} item={item} index={index} progress={qProgress} />
                ))}
              </div>
              <div className="question-index">01&nbsp;&nbsp;—&nbsp;&nbsp;03</div>
            </div>
          </div>
        </section>

        <ProofSection reduced={!!reduced} />

        <section className="premise" id="premise">
          <motion.p {...reveal()} className="chapter">
            THE PREMISE <span>03</span>
          </motion.p>
          <motion.h2 {...reveal(0.08)}>
            The future will not announce itself.<br />
            <em>It will simply become possible.</em>
          </motion.h2>
          <motion.p {...reveal(0.16)} className="premise-note">
            The question is not whether quantum systems will change security, discovery and computation. The question is whether your architecture can change with them.
          </motion.p>
        </section>

        <section className="capability-stories" id="expertise">
          {capabilities.map((item, index) => (
            <article className={`story story-${index + 1}`} key={item.number}>
              <motion.div className="story-image" {...reveal()}>
                <img 
                  src={item.image} 
                  alt="" 
                  width={1600} 
                  height={1104} 
                  loading="lazy" 
                />
              </motion.div>
              <motion.div className="story-copy" {...reveal(0.1)}>
                <p className="chapter"><span>{item.number}</span> WHAT WE MAKE POSSIBLE</p>
                <p className="story-thought">{item.thought}</p>
                <h3>{item.title}</h3>
                <p className="story-body">{item.body}</p>
                <p className="story-meta">{item.meta}</p>
              </motion.div>
            </article>
          ))}
        </section>

        <section className="method" id="approach">
          <p className="chapter">THE METHOD <span>04</span></p>
          <div className="method-grid">
            <motion.h2 {...reveal()}>
              We do not predict<br />
              the future.<br />
              <em>We prepare for it.</em>
            </motion.h2>
            <div className="method-steps">
              {[
                ['01', 'See clearly', 'Map cryptographic exposure and identify what cannot wait.'],
                ['02', 'Prove it', 'Test assumptions on real quantum hardware.'],
                ['03', 'Build for movement', 'Create architecture that evolves without starting over.']
              ].map(([n, t, b], i) => (
                <motion.div {...reveal(i * 0.1)} key={n}>
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="new-closing">
          <motion.p {...reveal()} className="chapter chapter-light">
            THE FIRST MOVE <span>05</span>
          </motion.p>
          <motion.h2 {...reveal(0.08)}>
            Before certainty,<br />
            there is a better question.
          </motion.h2>
          <motion.div {...reveal(0.16)}>
            <Link className="pill pill-signal" href="/apply">
              Begin the diagnostic <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function QuestionFade({
  item,
  index,
  progress,
}: {
  item: (typeof questions)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = (index / 3) * 0.88;
  const end = ((index + 1) / 3) * 0.88;
  const mid = start + (end - start) * 0.48;

  const qO = useTransform(
    progress,
    index === 0 ? [start, mid - 0.03, mid] : [start, start + 0.04, mid - 0.03, mid],
    index === 0 ? [1, 1, 0] : [0, 1, 1, 0]
  );
  const aO = useTransform(
    progress,
    index === 2 ? [mid, mid + 0.06, end] : [mid, mid + 0.06, end - 0.03, end],
    index === 2 ? [0, 1, 1] : [0, 1, 1, 0]
  );
  const qY = useTransform(progress, [start, mid], [0, -34]);
  const aY = useTransform(progress, [mid, mid + 0.07, end], [34, 0, index === 2 ? 0 : -24]);

  return (
    <div className="qa-item">
      <motion.p className="qa-ask" style={{ opacity: qO, y: qY }}>
        <span>{item.number}</span>
        {item.ask}
      </motion.p>
      <motion.div className="qa-resolve" style={{ opacity: aO, y: aY }}>
        <p>{item.answer}</p>
        <small>{item.value}</small>
      </motion.div>
    </div>
  );
}

function ProofSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const r1 = useTransform(scrollYProgress, [0, 0.55], [reduced ? 0 : -140, 0]);
  const r2 = useTransform(scrollYProgress, [0, 0.55], [reduced ? 0 : 110, 0]);
  const r3 = useTransform(scrollYProgress, [0, 0.55], [reduced ? 0 : -70, 0]);
  const lock = useTransform(scrollYProgress, [0.48, 0.56], [reduced ? 1 : 0, 1]);

  const stats = [
    ["6 / 6", "real protein targets locked", "RCSB PDB & PubChem structures"],
    ["9–17", "qubits per register", "compact, fixed-size"],
    ["0", "SWAP gates", "native Quantinuum H2 compilation"],
  ];

  return (
    <section className="proof" id="proof" ref={ref}>
      <div className="proof-grid">
        <div className="proof-copy">
          <p className="chapter chapter-light">THE PROOF <span>02</span></p>
          <p className="proof-thought">The questions are not hypothetical.</p>
          <h2>
            Project Q-Rotate.<br />
            <em>A drug, turned until it locks.</em>
          </h2>
          <p className="proof-body">
            We turn a drug and its protein target into quantum wave patterns, then rotate one until it resonates with the other. A single readout answers: does it fit? The raw molecular coordinates never have to leave either party.
          </p>
          <div className="proof-stats">
            {stats.map(([n, l, m]) => (
              <div key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
                <small>{m}</small>
              </div>
            ))}
          </div>
          <p className="proof-note">
            Benchmarks are simulations of Quantinuum H-Series circuits with estimated hardware costs, not billed hardware runs. The matching reduces what is shared; it is not a formal zero-knowledge proof.
          </p>
          <div className="proof-actions">
            <a 
              className="pill pill-signal" 
              href="https://github.com/evecount/quantum_rotation" 
              target="_blank" 
              rel="noreferrer"
            >
              Read the research <ArrowUpRight size={16} />
            </a>
            <a 
              className="text-link" 
              href="https://evecount.github.io/quantum_rotation/constellation.html" 
              target="_blank" 
              rel="noreferrer"
            >
              Enter the 3D Constellation <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="proof-rings" aria-hidden="true">
          <motion.i style={{ rotate: r1, rotateX: 62 }} />
          <motion.i style={{ rotate: r2, rotateY: 58 }} />
          <motion.i style={{ rotate: r3 }} />
          <motion.b style={{ opacity: lock, scale: lock }} />
          <motion.em style={{ opacity: lock }}>LOCKED</motion.em>
        </div>
      </div>
      <div className="proof-credits">
        <p>
          Built for the <strong>Quantinuum SG Grand Challenge 2026</strong> · Chemistry & Biomolecular Simulation track
        </p>
        <ul>
          <li>
            <strong>Gwendalynn Lim</strong>
            Founder & CTO · quantum engine & mathematics
          </li>
          <li>
            <strong>Benjamin Lim</strong>
            Co-founder & Systems Architect · Constellation & interfaces
          </li>
          <li>
            <strong>James Sun</strong>
            Venture Advisor · Mamba Partners
          </li>
        </ul>
      </div>
    </section>
  );
}

'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function AboutPage() {
  const hero = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
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

        <section className="evidence">
          <div className="evidence-image">
            <img 
              src="/images/crypto-material.jpg" 
              alt="Glass, mineral and gold technical sculpture" 
              width={1600} 
              height={1104} 
              loading="lazy" 
            />
          </div>
          <div className="evidence-copy">
            <p className="chapter chapter-light">THE GROUND BENEATH THE IDEA <span>03</span></p>
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

        <section className="new-closing">
          <p className="chapter chapter-light">THE QUESTION <span>04</span></p>
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

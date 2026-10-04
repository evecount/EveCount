"use client";

import { Asterisk, MoveUpRight, ArrowRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    label: "SECURE THE PRESENT",
    title: "Post-Quantum Cryptography",
    description: "Know where you stand before the landscape shifts. We audit legacy RSA/ECC infrastructure and map a pragmatic migration to NIST-standardized PQC.",
    detail: "PQC audits · FIPS 203 / 204 / 205",
  },
  {
    number: "02",
    label: "TEST THE POSSIBLE",
    title: "Hardware Benchmarking",
    description: "Move beyond simulations. We benchmark and optimize real circuit execution on Quantinuum and IonQ hardware to understand what works today.",
    detail: "Quantinuum · IonQ · Circuit fidelity",
  },
  {
    number: "03",
    label: "DESIGN FOR CHANGE",
    title: "Cryptographic Agility",
    description: "Build systems that can adapt. Modular cryptographic architecture lets your institution respond as standards, hardware, and threats evolve.",
    detail: "Architecture · Governance · Resilience",
  },
];

export function Engine() {
  return (
    <>
      {/* Expertise Section */}
      <section id="expertise" className="expertise-section" aria-labelledby="expertise-title">
        <div className="page-container">
          <div className="section-intro">
            <div className="section-kicker">
              <Asterisk size={17} strokeWidth={1.3} /> WHAT WE DO <span> / 01</span>
            </div>
            <h2 id="expertise-title">
              Where uncertainty ends,<br />
              <span>engineering begins.</span>
            </h2>
            <p>
              Strategic foresight, backed by technical execution. We turn the complexities of quantum readiness into clear, actionable decisions.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability" key={item.number}>
                <div className="capability-top">
                  <span>{item.number} / 03</span>
                  <MoveUpRight size={17} strokeWidth={1.3} />
                </div>
                <div className="capability-label">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="capability-detail">{item.detail}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="approach-section" aria-labelledby="approach-title">
        <div className="page-container approach-grid">
          <div className="approach-left">
            <div className="section-kicker light-kicker">
              <Asterisk size={17} strokeWidth={1.3} /> THE APPROACH <span> / 02</span>
            </div>
            <h2 id="approach-title">
              From exposure<br />
              to <em>advantage.</em>
            </h2>
          </div>
          <div className="approach-right">
            <p>
              Quantum readiness isn’t a distant research problem. It’s an architectural decision your organization can make today.
            </p>
            <div className="approach-steps">
              <div>
                <span>01</span>
                <strong>Assess the risk</strong>
                <ArrowRight size={16} strokeWidth={1.5} />
              </div>
              <div>
                <span>02</span>
                <strong>Validate on hardware</strong>
                <ArrowRight size={16} strokeWidth={1.5} />
              </div>
              <div>
                <span>03</span>
                <strong>Engineer for what’s next</strong>
                <ArrowRight size={16} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

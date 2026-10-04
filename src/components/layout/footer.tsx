import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const quantumRepos = [
  { 
    href: "https://github.com/evecount/quantum_rotation", 
    label: "Project Q-Rotate (Quantinuum SG Challenge)", 
    isExternal: true,
    badge: "Trapped-Ion"
  },
  { 
    href: "https://evecount.github.io/quantum_rotation/constellation.html", 
    label: "3D Constellation Visualizer", 
    isExternal: true,
    badge: "WebGL / Interactive"
  },
  { 
    href: "https://github.com/evecount/QuantumAdversary", 
    label: "Quantum Adversary (PQC Defense)", 
    isExternal: true,
    badge: "Lattice / ML"
  },
  { 
    href: "/snapdragon", 
    label: "Project Snapdragon (Bridge)", 
    isExternal: false,
    badge: "O(1) Optics"
  },
  { 
    href: "https://github.com/evecount/one", 
    label: "One (Autonomous Co-founder)", 
    isExternal: true,
    badge: "Agentic"
  },
];

const platforms = [
  { href: "https://cybrdeck.com", label: "Cybrdeck Terminal", isExternal: true },
  { href: "/#expertise", label: "Capabilities & Pillars", isExternal: false },
  { href: "/#approach", label: "The Method", isExternal: false },
  { href: "/apply", label: "Enterprise Diagnostic", isExternal: false },
];

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--canvas)] border-t border-[color-mix(in_oklab,var(--canvas)_14%,transparent)]">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-5 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3.5 no-underline group" aria-label="Eve Count Quantum Systems">
              <img 
                src="/icon.png" 
                alt="Eve Count" 
                width={44} 
                height={44} 
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full shrink-0 group-hover:scale-105 transition-transform object-cover ring-1 ring-[var(--signal)]/40" 
              />
              <div className="flex flex-col text-left select-none">
                <span className="text-[17px] sm:text-[18px] font-black tracking-tight text-[var(--canvas)] leading-none uppercase font-sans">
                  EVE COUNT
                </span>
                <span className="text-[8.5px] sm:text-[9px] font-extrabold tracking-[0.24em] text-[var(--signal)] uppercase mt-1 leading-none">
                  QUANTUM SYSTEMS
                </span>
              </div>
            </Link>
            <p className="font-serif italic text-2xl text-[var(--signal)] tracking-tight">
              What must remain unknowable?
            </p>
            <p className="text-sm text-[color-mix(in_oklab,var(--canvas)_70%,transparent)] leading-relaxed max-w-[420px]">
              Eve Count Pte. Ltd., Singapore. Post-quantum cryptographic security, real hardware benchmarking, and cryptographic agility for institutions designing beyond certainty.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono font-medium text-[var(--signal)] tracking-widest uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
                FIPS 203 / 204 / 205 · Trapped-Ion Benchmarking
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-7">
            {/* Quantum Repositories */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[var(--signal)]">
                Quantum Repositories
              </h3>
              <ul className="mt-4 space-y-3.5">
                {quantumRepos.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col text-sm text-[color-mix(in_oklab,var(--canvas)_75%,transparent)] transition-colors hover:text-[var(--canvas)]"
                      >
                        <span className="inline-flex items-center gap-1.5 font-medium">
                          <Github className="h-3.5 w-3.5 text-[color-mix(in_oklab,var(--canvas)_50%,transparent)] group-hover:text-[var(--signal)] transition-colors" />
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-3 w-3 text-[var(--signal)] opacity-70 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <span className="text-[9.5px] font-mono uppercase tracking-wider text-[var(--signal)] pl-5 opacity-80">
                          {link.badge}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="group flex flex-col text-sm text-[color-mix(in_oklab,var(--canvas)_75%,transparent)] transition-colors hover:text-[var(--canvas)]"
                      >
                        <span className="inline-flex items-center gap-1.5 font-medium">
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-3 w-3 text-[var(--signal)] opacity-70" />
                        </span>
                        <span className="text-[9.5px] font-mono uppercase tracking-wider text-[var(--signal)] opacity-80">
                          {link.badge}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Platforms & Company */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[var(--signal)]">
                  Platforms & Access
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {platforms.map((link) => (
                    <li key={link.label}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-[color-mix(in_oklab,var(--canvas)_75%,transparent)] hover:text-[var(--canvas)] transition-colors font-medium"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-3 w-3 text-[var(--signal)]" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-sm text-[color-mix(in_oklab,var(--canvas)_75%,transparent)] hover:text-[var(--canvas)] transition-colors font-medium"
                        >
                          <span>{link.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold text-[var(--signal)]">
                  Direct Inquiries
                </h3>
                <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--canvas)_70%,transparent)]">
                  Foundational advisory & confidential pilots:
                </p>
                <a 
                  href="mailto:gwen@evecount.com" 
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-[var(--signal)] underline underline-offset-4 hover:opacity-85 font-mono"
                >
                  gwen@evecount.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[color-mix(in_oklab,var(--canvas)_12%,transparent)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest uppercase text-[color-mix(in_oklab,var(--canvas)_50%,transparent)]">
          <span>Post-quantum security · Singapore · Eve Count Pte. Ltd.</span>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-[var(--canvas)] transition-colors">About</Link>
            <Link href="/apply" className="hover:text-[var(--canvas)] transition-colors">Diagnostic</Link>
            <a href="https://cybrdeck.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--canvas)] transition-colors">Cybrdeck</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

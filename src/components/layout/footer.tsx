import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const footerSections = {
  company: [
    { href: "/about", label: "About" },
    { href: "/ventures", label: "Ventures" },
    { href: "/research", label: "Foundational Research" },
    { href: "/pricing", label: "Engagement Models" },
    { href: "/apply", label: "Enterprise Diagnostic" },
  ],
  quantumSystems: [
    { 
      href: "https://github.com/evecount/quantum_rotation", 
      label: "Quantinuum Challenge (Q-Rotate)", 
      isExternal: true,
      badge: "Trapped-Ion"
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
      badge: "O(1) Optics"
    },
    { 
      href: "https://github.com/evecount/one", 
      label: "One (Autonomous Co-founder)", 
      isExternal: true,
      badge: "Agentic"
    },
  ],
  platforms: [
    { href: "https://cybrdeck.com", label: "Cybrdeck Terminal", isExternal: true },
    { href: "/#engine", label: "Advisory Framework" },
    { href: "/quantum-minting", label: "Quantum Minting (QUM)" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-white">
      <div className="container max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <circle cx="50" cy="50" r="42" stroke="#D7AF55" strokeWidth="3" fill="none" opacity="0.6" />
                <path d="M15,50 C 35,22 65,78 85,50" />
              </svg>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-white text-base">Eve Count</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-luminous -mt-1">Quantum Systems</span>
              </div>
            </Link>
            <p className="text-sm text-slate-light leading-relaxed max-w-[340px]">
              Eve Count Pte. Ltd., Singapore. Translating complex quantum computational architectures into strategic enterprise infrastructure.
            </p>
            <div className="pt-2 w-full max-w-[280px]">
              <Button asChild className="w-full bg-gold-luminous hover:bg-gold-warm text-ink font-semibold">
                <Link href="/apply">Enterprise Diagnostic</Link>
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:col-span-3">
            {/* Quantum Repositories */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gold-luminous">Quantum Repositories</h3>
              <ul className="mt-4 space-y-3">
                {footerSections.quantumSystems.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col text-sm text-slate-light transition-colors hover:text-white"
                      >
                        <span className="inline-flex items-center gap-1.5 font-medium">
                          <Github className="h-3.5 w-3.5 text-slate-light group-hover:text-gold-luminous" />
                          <span>{link.label}</span>
                          <ExternalLink className="h-3 w-3 text-gold-luminous opacity-60" />
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gold-warm/80 pl-5">
                          {link.badge}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex flex-col text-sm text-slate-light transition-colors hover:text-white"
                      >
                        <span className="font-medium">{link.label}</span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gold-warm/80">
                          {link.badge}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Platforms & Tools */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gold-luminous">Platforms & Tools</h3>
              <ul className="mt-4 space-y-2.5">
                {footerSections.platforms.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-light transition-colors hover:text-white font-medium"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-3 w-3 text-gold-luminous" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-light transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-slate-light/60">Company</h4>
                  <ul className="mt-2 space-y-1.5">
                    {footerSections.company.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-xs text-slate-light transition-colors hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            {/* Governance */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gold-luminous">Governance</h3>
              <ul className="mt-4 space-y-2.5">
                {footerSections.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-light transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded border border-white/10 bg-white/5 p-3">
                <p className="text-[11px] font-mono text-gold-luminous uppercase tracking-wider">Provenance</p>
                <p className="text-[11px] text-slate-light mt-1">Verified Classical-Quantum Architecture Stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-light">
          <p>© {new Date().getFullYear()} Eve Count Pte. Ltd. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[11px] text-slate-light/70">CLEAR-BOX ARCHITECTURE • SINGAPORE</p>
        </div>
      </div>
    </footer>
  );
}

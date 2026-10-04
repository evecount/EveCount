import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

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
    { href: "/#expertise", label: "Expertise & Pillars" },
    { href: "/#approach", label: "Advisory Approach" },
    { href: "/quantum-minting", label: "Quantum Minting (QUM)" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#E7E3D8] bg-[#FAF9F6] text-[#16181D]">
      <div className="page-container py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4 lg:col-span-2">
            <Link href="/" className="brand inline-flex items-center gap-3.5 no-underline group" aria-label="Eve Count Quantum Systems home">
              <img 
                src="/images/evecount-mark.png" 
                alt="Eve Count" 
                width={44} 
                height={44} 
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full shrink-0 group-hover:scale-105 transition-transform shadow-xs object-cover" 
              />
              <div className="flex flex-col text-left select-none">
                <span className="text-[17px] sm:text-[18px] font-black tracking-tight text-[#16181D] leading-none uppercase font-sans">
                  EVE COUNT
                </span>
                <span className="text-[8.5px] sm:text-[9px] font-extrabold tracking-[0.24em] text-[#5B616B] uppercase mt-1 leading-none">
                  QUANTUM SYSTEMS
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#5B616B] leading-relaxed max-w-[340px] mt-2">
              Eve Count Pte. Ltd., Singapore. Translating complex quantum computational architectures into strategic enterprise infrastructure.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#B8872A] tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B8872A]" />
                FIPS 203 / 204 / 205 • Trapped-Ion Benchmarking
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:col-span-3">
            {/* Quantum Repositories */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#B8872A]">Quantum Repositories</h3>
              <ul className="mt-4 space-y-3">
                {footerSections.quantumSystems.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col text-sm text-[#5B616B] transition-colors hover:text-[#16181D]"
                      >
                        <span className="inline-flex items-center gap-1.5 font-medium">
                          <Github className="h-3.5 w-3.5 text-[#5B616B] group-hover:text-[#B8872A]" />
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-3 w-3 text-[#B8872A] opacity-60" />
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8872A] pl-5">
                          {link.badge}
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex flex-col text-sm text-[#5B616B] transition-colors hover:text-[#16181D]"
                      >
                        <span className="font-medium">{link.label}</span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8872A]">
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
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#B8872A]">Platforms & Tools</h3>
              <ul className="mt-4 space-y-2.5">
                {footerSections.platforms.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#5B616B] transition-colors hover:text-[#16181D] font-medium"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 text-[#B8872A]" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#5B616B] transition-colors hover:text-[#16181D]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-[#5B616B]/70">Company</h4>
                  <ul className="mt-2 space-y-1.5">
                    {footerSections.company.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-xs text-[#5B616B] transition-colors hover:text-[#16181D]">
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
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#B8872A]">Governance</h3>
              <ul className="mt-4 space-y-2.5">
                {footerSections.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#5B616B] transition-colors hover:text-[#16181D]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-lg border border-[#E7E3D8] bg-white p-3.5 shadow-2xs">
                <p className="text-[11px] font-mono text-[#B8872A] font-bold uppercase tracking-wider">Provenance</p>
                <p className="text-[11px] text-[#5B616B] mt-1 leading-snug">Clear-Box Classical-Quantum Architecture Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lovable Editorial Baseline Bar */}
      <div className="site-footer">
        <div className="page-container footer-inner">
          <span className="footer-brand">
            EVE COUNT <span>QUANTUM SYSTEMS</span>
          </span>
          <span className="text-xs text-[#5B616B]">
            Engineering confidence in the post-quantum era. © {new Date().getFullYear()} Eve Count Pte. Ltd.
          </span>
          <a href="https://cybrdeck.com" target="_blank" rel="noopener noreferrer">
            CYBRDECK TERMINAL <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

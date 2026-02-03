
import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerSections = {
  company: [
    { href: "/about", label: "About" },
    { href: "/ventures", label: "Ventures" },
    { href: "/incubator", label: "Incubator" },
    { href: "/services", label: "Partners" },
    { href: "/apply", label: "Apply" },
  ],
  explore: [
    { href: "/#engine", label: "Engine" },
    { href: "/pricing", label: "Pricing" },
    { href: "/research", label: "Quantum Research 101" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M10,50 C 30,25 70,75 90,50" />
              </svg>
              <span className="font-bold">Eve Count</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Eve Count Pte Ltd, Singapore.
            </p>
             <Button asChild className="mt-4 w-full bg-foreground text-background hover:bg-foreground/90">
                <Link href="/apply">Apply Here</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerSections.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Explore</h3>
              <ul className="mt-4 space-y-2">
                {footerSections.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                {footerSections.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

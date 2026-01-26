
import Link from "next/link";

const footerSections = {
  company: [
    { href: "/about", label: "About" },
    { href: "/ventures", label: "Ventures" },
    { href: "/incubator", label: "Incubator" },
    { href: "/services", label: "Partners" },
  ],
  explore: [
    { href: "/#engine", label: "Engine" },
    { href: "/pricing", label: "Pricing" },
    { href: "/research", label: "Research" },
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
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="font-bold">Eve Count</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Eve Count Pte Ltd, Singapore.
            </p>
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

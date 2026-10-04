'use client';

import Link from 'next/link';
import { ExternalLink, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/ventures', label: 'Ventures' },
  { href: '/research', label: 'Research' },
  { 
    href: 'https://cybrdeck.com', 
    label: 'Cybrdeck', 
    isExternal: true 
  },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
              stroke="#16181D"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <circle cx="50" cy="50" r="42" stroke="#D7AF55" strokeWidth="3" fill="none" opacity="0.4" />
              <path d="M15,50 C 35,22 65,78 85,50" />
            </svg>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-ink text-base">Eve Count</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate -mt-1">Quantum Systems</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate transition-colors hover:text-ink font-semibold"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-gold-warm opacity-80" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div className="hidden items-center space-x-3 md:flex">
          <Button 
            asChild
            className="bg-gold-luminous hover:bg-gold-warm text-ink font-semibold shadow-sm transition-all duration-200 border-none px-5 py-2 text-sm"
          >
            <Link href="/apply">Enterprise Diagnostic</Link>
          </Button>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-ink">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" onClick={() => setSheetOpen(false)} className="flex items-center space-x-2">
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-ink text-base">Eve Count</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate">Quantum Systems</span>
                  </div>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSheetOpen(false)}
                    className="inline-flex items-center justify-between text-base font-semibold text-slate hover:text-ink"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-4 w-4 text-gold-warm" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="text-base text-slate hover:text-ink"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-border">
                <Button 
                  asChild
                  className="w-full bg-gold-luminous hover:bg-gold-warm text-ink font-semibold"
                >
                  <Link href="/apply" onClick={() => setSheetOpen(false)}>Enterprise Diagnostic</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

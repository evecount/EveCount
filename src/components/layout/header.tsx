'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur">
      <div className="page-container header-inner">
        <Link href="/" className="brand inline-flex items-center gap-3.5 no-underline group" aria-label="Eve Count Quantum Systems home">
          <img 
            src="/images/evecount-logo.png" 
            alt="Eve Count Logo" 
            width={44} 
            height={44} 
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full shrink-0 group-hover:scale-105 transition-transform shadow-xs" 
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

        <nav className="header-nav hidden md:flex" aria-label="Main navigation">
          <a href="#expertise">Expertise</a>
          <a href="#approach">Approach</a>
          <Link href="/about">About</Link>
          <a href="https://cybrdeck.com" target="_blank" rel="noopener noreferrer">
            Cybrdeck <ArrowUpRight size={14} strokeWidth={1.7} />
          </a>
        </nav>

        <div className="hidden md:flex items-center">
          <Button variant="editorial" size="sm" asChild className="header-cta">
            <Link href="/apply" className="inline-flex items-center gap-1.5">
              <span>Commission Assessment</span>
              <ArrowUpRight size={14} />
            </Link>
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden ml-auto flex items-center gap-2">
          <Button variant="editorial" size="sm" asChild className="header-cta">
            <Link href="/apply" aria-label="Commission Assessment">
              <ArrowUpRight size={17} />
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-ink">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#FAF9F6]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setSheetOpen(false)} className="inline-flex items-center gap-3">
                    <img 
                      src="/images/evecount-logo.png" 
                      alt="Eve Count Logo" 
                      width={38} 
                      height={38} 
                      className="h-9 w-9 rounded-full shrink-0" 
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-[16px] font-black tracking-tight text-[#16181D] leading-none uppercase">
                        EVE COUNT
                      </span>
                      <span className="text-[8px] font-extrabold tracking-[0.22em] text-[#5B616B] uppercase mt-1 leading-none">
                        QUANTUM SYSTEMS
                      </span>
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-5">
                <a href="#expertise" onClick={() => setSheetOpen(false)} className="text-base font-semibold text-ink">
                  Expertise
                </a>
                <a href="#approach" onClick={() => setSheetOpen(false)} className="text-base font-semibold text-ink">
                  Approach
                </a>
                <Link href="/about" onClick={() => setSheetOpen(false)} className="text-base font-semibold text-ink">
                  About
                </Link>
                <a href="https://cybrdeck.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-semibold text-ink">
                  <span>Cybrdeck Terminal</span>
                  <ArrowUpRight className="h-4 w-4 text-gold-warm" />
                </a>
                <div className="pt-4 border-t border-[#E7E3D8]">
                  <Button variant="editorial" asChild className="w-full justify-center">
                    <Link href="/apply" onClick={() => setSheetOpen(false)}>
                      Commission Institutional Assessment
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

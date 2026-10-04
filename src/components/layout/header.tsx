'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--canvas)]/95 backdrop-blur border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-[88px] flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-3.5 no-underline group select-none" aria-label="Eve Count Quantum Systems">
          <img 
            src="/icon.png" 
            alt="Eve Count" 
            width={40} 
            height={40} 
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full shrink-0 group-hover:scale-105 transition-transform object-cover ring-1 ring-[var(--line)]" 
          />
          <div className="flex flex-col text-left">
            <span className="text-[16px] sm:text-[17px] font-black tracking-tight text-[var(--ink)] leading-none uppercase font-sans">
              EVE COUNT
            </span>
            <span className="text-[8px] sm:text-[8.5px] font-extrabold tracking-[0.24em] text-[var(--moss)] uppercase mt-1 leading-none">
              QUANTUM SYSTEMS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <Link href="/about" className="text-xs font-semibold tracking-wider text-[var(--ink)] opacity-60 hover:opacity-100 transition-opacity">
            About
          </Link>
          <a href="/#expertise" className="text-xs font-semibold tracking-wider text-[var(--ink)] opacity-60 hover:opacity-100 transition-opacity">
            Work
          </a>
          <a href="/#approach" className="text-xs font-semibold tracking-wider text-[var(--ink)] opacity-60 hover:opacity-100 transition-opacity">
            The Method
          </a>
          <a href="/#proof" className="text-xs font-semibold tracking-wider text-[var(--ink)] opacity-60 hover:opacity-100 transition-opacity">
            Project Q-Rotate
          </a>
          <a href="https://cybrdeck.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-wider text-[var(--ink)] opacity-60 hover:opacity-100 transition-opacity inline-flex items-center gap-1">
            <span>Cybrdeck</span>
            <ArrowUpRight size={12} />
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/apply" 
            className="inline-flex items-center gap-2 text-xs font-bold text-[var(--ink)] border-b border-[var(--ink)] pb-1 hover:opacity-75 transition-opacity"
          >
            <span>Diagnostic</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          <Link 
            href="/apply" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] border-b border-[var(--ink)] pb-0.5"
          >
            <span>Diagnostic</span>
            <ArrowUpRight size={13} />
          </Link>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[var(--ink)] -mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[var(--canvas)] border-r border-[var(--line)]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={() => setSheetOpen(false)} className="inline-flex items-center gap-3">
                    <img 
                      src="/icon.png" 
                      alt="Eve Count" 
                      width={36} 
                      height={36} 
                      className="h-8 w-8 rounded-full shrink-0 object-cover" 
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-[15px] font-black tracking-tight text-[var(--ink)] leading-none uppercase">
                        EVE COUNT
                      </span>
                      <span className="text-[8px] font-extrabold tracking-[0.22em] text-[var(--moss)] uppercase mt-1 leading-none">
                        QUANTUM SYSTEMS
                      </span>
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-5">
                <Link href="/about" onClick={() => setSheetOpen(false)} className="text-sm font-semibold text-[var(--ink)]">
                  About
                </Link>
                <a href="/#expertise" onClick={() => setSheetOpen(false)} className="text-sm font-semibold text-[var(--ink)]">
                  Work
                </a>
                <a href="/#approach" onClick={() => setSheetOpen(false)} className="text-sm font-semibold text-[var(--ink)]">
                  The Method
                </a>
                <a href="/#proof" onClick={() => setSheetOpen(false)} className="text-sm font-semibold text-[var(--ink)]">
                  Project Q-Rotate
                </a>
                <a href="https://cybrdeck.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-[var(--ink)]">
                  <span>Cybrdeck Terminal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <div className="pt-4 border-t border-[var(--line)]">
                  <Link 
                    href="/apply" 
                    onClick={() => setSheetOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 py-3 rounded-full bg-[var(--ink)] text-[var(--canvas)] text-xs font-bold"
                  >
                    <span>Complete Enterprise Diagnostic</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

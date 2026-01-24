'use client';

import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
    const [currentDate, setCurrentDate] = React.useState('');

    React.useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="container max-w-4xl">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Terms & Conditions</h1>
            {currentDate && <p className="mt-4 text-lg text-muted-foreground">Last updated: {currentDate}</p>}

            <div className="mt-8 space-y-6 text-muted-foreground">
                <p>This is a placeholder for your Terms & Conditions. You should replace this content with your own terms.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">1. Acceptance of Terms</h2>
                <p>By accessing or using the Eve Count website, you agree to be bound by these terms and conditions.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">2. Intellectual Property</h2>
                <p>All content on this site, including text, graphics, logos, and software, is the property of Eve Count Pte Ltd or its content suppliers and is protected by international copyright laws.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">3. Limitation of Liability</h2>
                <p>Eve Count will not be liable for any damages of any kind arising from the use of this site or from any information, content, or materials included on it.</p>
                
                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">4. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of Singapore.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  const [currentDate, setCurrentDate] = React.useState('');

  React.useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="container max-w-4xl">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Privacy Policy</h1>
            {currentDate && <p className="mt-4 text-lg text-muted-foreground">Last updated: {currentDate}</p>}

            <div className="mt-8 space-y-6 text-muted-foreground">
                <p>This is a placeholder for your Privacy Policy. You should replace this content with your own terms tailored to your specific data collection and usage practices.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">1. Information We Collect</h2>
                <p>Describe the types of information you collect from users, such as personal data (name, email from submissions) and anonymous usage data (from website analytics).</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">2. How We Use Your Information</h2>
                <p>Explain how you use the collected information. For example, using submission data to evaluate potential partnerships or using analytics to improve the website.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">3. Information Sharing and Disclosure</h2>
                <p>Clarify your policy on sharing user information. Given your model, you likely do not sell data, but you should state how partner submission data is handled internally.</p>
                
                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">4. Contact Us</h2>
                <p>Provide a method for users to contact you with questions about the privacy policy.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

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
                <p>Welcome to EveCount.com. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using the website, you agree to be bound by these Terms.</p>
                <p className="font-bold text-foreground">Note: This is a template and not legal advice. You should consult with a legal professional to finalize these terms for your business.</p>


                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">1. Acceptance of Terms</h2>
                <p>By accessing our Site, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not use this website.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">2. Idea Submissions</h2>
                <p>Our website provides a platform, including an AI-powered chatbot, for you to submit business ideas, pitches, and other information ("Submissions") for consideration for a potential venture partnership.</p>
                <p>By making a Submission, you acknowledge and agree that:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Your Submission is voluntary and unsolicited.</li>
                    <li>No confidential relationship is established by your Submission. The information will be treated as confidential as described in our Privacy Policy, but this does not create a fiduciary duty.</li>
                    <li>We are under no obligation to review, consider, or enter into a business relationship with you or to compensate you for your Submission.</li>
                    <li>Eve Count may already be working on similar ideas or may receive similar ideas from other parties.</li>
                </ul>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">3. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, icons, images, and the compilation thereof, and any software used on the Site, is the property of Eve Count Pte Ltd or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices.</p>
                <p>You retain ownership of the intellectual property in your original Submission. However, by submitting, you grant us a non-exclusive, worldwide, royalty-free license to review and evaluate your Submission for partnership purposes.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">4. Disclaimers and Limitation of Liability</h2>
                <p>The information and services on the site are provided "as is". Eve Count makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                <p>In no event shall Eve Count or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Eve Count's website, even if Eve Count has been notified orally or in writing of the possibility of such damage.</p>
                
                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">5. Governing Law and Jurisdiction</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of the Republic of Singapore, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

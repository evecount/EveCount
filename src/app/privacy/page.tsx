'use client';

import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  const [currentDate, setCurrentDate] = React.useState('');

  React.useEffect(() => {
    document.title = 'Privacy Policy | EveCount.com';
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
                <p>Eve Count Pte Ltd. ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, EveCount.com, and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
                

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">1. Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <p><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you submit an idea through our AI Partner Chat or contact us. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the Site.</p>
                <p><strong>Idea Submissions:</strong> Any information, text, or other materials you provide when you pitch an idea, including your vision, business plan, and any related data.</p>
                <p><strong>Anonymous Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. This information is used for internal analytics and is not linked to personal data.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">2. How We Use Your Information</h2>
                <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Evaluate your idea submission for a potential partnership or venture.</li>
                    <li>Correspond with you regarding a submission or inquiry.</li>
                    <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                    <li>Improve the operation and efficiency of the website.</li>
                </ul>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">3. Information Sharing and Disclosure</h2>
                <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. All submissions are treated as confidential and are only reviewed internally by the Eve Count team and our trusted venture partners under strict non-disclosure agreements for the sole purpose of evaluation.</p>
                <p>We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, or in urgent circumstances to protect the personal safety of users of the Site or the public.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">4. Data Security &amp; Retention</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. For idea submissions, we leverage secure, access-controlled databases (Firestore) where data is encrypted at rest. Submissions are architected to be write-only for clients, preventing any unauthorized read access from the web.</p>
                <p>We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">5. International Data Transfers</h2>
                <p>Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. As we operate in both Singapore and have ties to Canada, we adhere to principles of the Personal Data Protection Act (PDPA) in Singapore and the Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada.</p>
                
                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">6. Your Rights</h2>
                <p>Depending on your jurisdiction, you may have rights regarding your personal information, such as the right to access, correct, or delete your data. If you wish to exercise these rights, please contact us using the contact information provided on our 'About' page.</p>

                <h2 className="font-headline pt-4 text-2xl font-bold text-foreground border-t border-border/40">7. Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us through the information provided on our 'About' page.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

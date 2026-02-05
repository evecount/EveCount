'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Building, Rocket, Send, Check } from "lucide-react";

export default function SponsorPage() {
  React.useEffect(() => {
    document.title = "Sponsor a Build for a Non-Profit | EveCount.com";
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Sponsor a Build <br /> for a Non-Profit
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Amplify your impact. Fund the development of a world-class technology solution for a non-profit organization, built by the expert architects and AI specialists at Eve Count.
              </p>
               <Button size="lg" className="mt-8" asChild>
                <Link href="/apply">
                  <Send className="mr-2 h-5 w-5" />
                  Become a Sponsor
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                        A simple, powerful model for tripartite impact. You provide the funding, we provide the engine, and a non-profit receives a transformative digital asset.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                    <Card className="bg-background/50 text-foreground text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                                <Building className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="mt-4">You, The Sponsor</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Fund a project for a cause you care about. We provide a transparent budget and timeline for the build.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-background/50 text-foreground text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                                <Rocket className="h-8 w-8 text-primary" />
                            </div>
                             <CardTitle className="mt-4">Us, The Builders</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                The Eve Count team acts as the technical co-founder, architecting and building a robust, scalable solution for the non-profit.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-background/50 text-foreground text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                                <Heart className="h-8 w-8 text-primary" />
                            </div>
                             <CardTitle className="mt-4">The Non-Profit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                The non-profit receives a custom-built digital tool—a new website, a data management system, an AI-powered service—at no cost.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="benefits" className="border-t border-border/40 bg-background py-16 md:py-24">
            <div className="container grid max-w-5xl gap-12 md:grid-cols-2">
                <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">Benefits for Sponsors</h3>
                    <p className="mt-4 text-muted-foreground">
                        Your sponsorship is more than a donation; it's a high-leverage investment in social good.
                    </p>
                    <ul className="mt-6 space-y-4 text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                            <span><strong className="text-foreground">Tangible Impact:</strong> Fund a specific, tangible project with clear deliverables, not just operational costs. See exactly where your money goes.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                             <span><strong className="text-foreground">Brand Association:</strong> Align your brand with social innovation and technology for good. We offer co-branding opportunities on the project.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                            <span><strong className="text-foreground">Tax Efficiency:</strong> Depending on your jurisdiction and the non-profit's status, your sponsorship may be tax-deductible.</span>
                        </li>
                    </ul>
                </div>
                <div>
                     <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">Benefits for Non-Profits</h3>
                    <p className="mt-4 text-muted-foreground">
                        Receive a mission-critical digital asset that you might not otherwise have the resources to build.
                    </p>
                    <ul className="mt-6 space-y-4 text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                            <span><strong className="text-foreground">World-Class Tech:</strong> Get access to the same high-end engineering and AI expertise that powers our deep-tech ventures.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                           <span><strong className="text-foreground">Zero Cost:</strong> The entire build is funded by the sponsor. There are no development costs for your organization.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                            <span><strong className="text-foreground">Capacity Building:</strong> A new digital tool can amplify your mission, streamline operations, and increase your reach and impact.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="contact" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
            <div className="container max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Make an Impact?</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                    Whether you are a company looking to sponsor a project or a non-profit with a critical technology need, we want to hear from you.
                </p>
                <Button size="lg" className="mt-8" asChild>
                    <Link href="/apply">
                       Start the Conversation
                    </Link>
                </Button>
                 <p className="mt-4 text-xs text-muted-foreground">
                    On the application form, please select "Partnership Inquiry" and mention your interest in the Sponsorship Program.
                </p>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

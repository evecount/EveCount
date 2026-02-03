'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Code, Share2, Mail, Bot, ShieldCheck, BrainCircuit, Compass, PenSquare, Camera, Radio, Gavel, BadgeCheck as BadgeCheckIcon, Sparkles } from "lucide-react";
import { useChatbot } from "@/hooks/use-chatbot";
import React from "react";

const sovereignEngineCrew = [
    {
        name: "Apex",
        role: "The Strategic Researcher",
        focus: "Monitors 'The Forest' (external pulses) and 'The Trees' (internal performance) to provide the directional vector for action. Autonomously discovers new intelligence sources.",
        icon: Compass,
        cluster: "Intelligence"
    },
    {
        name: "Sentinel",
        role: "The Proposal Architect",
        focus: "Translates raw signals from Apex into high-fidelity, direct action proposals. Crafts the 'Sentient Rationale' that bridges the external pulse with internal resonance.",
        icon: PenSquare,
        cluster: "Voice & Vision"
    },
    {
        name: "Iris",
        role: "The Visual Synthesist",
        focus: "Generates all visual assets, from editorial visuals to data visualizations, ensuring every piece of content has a unique, AI-generated identity.",
        icon: Camera,
        cluster: "Voice & Vision"
    },
    {
        name: "Lyra",
        role: "The Sonic Architect",
        focus: "Translates articles and data into audio briefings and sonic identities, adding another layer of accessibility and engagement to our assets.",
        icon: Radio,
        cluster: "Voice & Vision"
    },
    {
        name: "Clarion",
        role: "The Legal Risk Auditor",
        focus: "The system's automated legal shield. Audits every proposed action against a matrix of legal, regulatory, and reputational risks before it's committed.",
        icon: Gavel,
        cluster: "Governance & Resilience"
    },
    {
        name: "Veritas",
        role: "The Integrity Officer",
        focus: "Ensures system integrity by eradicating 'placeholder' data, preventing logic decay, and maintaining the high-fidelity standards of all generated output.",
        icon: BadgeCheckIcon,
        cluster: "Governance & Resilience"
    },
    {
        name: "Aura",
        role: "The Longevity Architect",
        focus: "Scans the library of finalized decisions and high-fidelity assets to identify and architect long-term partnership or revenue opportunities.",
        icon: Sparkles,
        cluster: "Governance & Resilience"
    },
];

export default function AboutPage() {
  const { setOpen } = useChatbot();

  React.useEffect(() => {
    document.title = "About Eve Count | Our Deep-Tech Focus on Quantum & AI | EveCount.com";
  }, []);


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Growth by Engineering
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Traditional firms chase growth with marketing campaigns. We build it with code. We believe the most powerful form of marketing isn't an ad; it's a category-defining product.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-12">
              <div className="text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  The Eve Count Philosophy
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                  To be clear: we are not a marketing company. We are a venture studio that uses engineering as its primary tool for growth. Our 'creatives' are architects and AI specialists. Our goal isn't a campaign; it's to build a digital asset. A product so effective, built on data and machine learning, that it becomes the engine that builds the entire company.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                 <Card className="flex flex-col bg-secondary/20 text-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Product as the Story</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We don't just tell your story—we build the product that becomes the story. A flawless UX, a game-changing AI feature, a beautifully architected system; these are the narratives that spread.
                    </p>
                  </CardContent>
                </Card>
                 <Card className="flex flex-col bg-secondary/20 text-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Code as the Creative</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our campaigns aren't ads; they are scalable infrastructure, intelligent algorithms, and robust machine learning pipelines. This is the creative work that builds a defensible moat.
                    </p>
                  </CardContent>
                </Card>
                 <Card className="flex flex-col bg-secondary/20 text-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <Share2 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Growth as the Goal</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                     The result is organic, durable growth. A product that markets itself because it's fundamentally better. That's the unfair advantage we build for our partners.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="border-t border-border/40 pt-12">
                <div className="text-center">
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                    Our Deep-Tech Focus
                  </h2>
                  <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                    "Deep tech" isn't just a buzzword for us. It's our foundation. We build ventures rooted in significant scientific and engineering innovation. Our core focus areas are at the frontier of what's possible.
                  </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                  <Card className="flex flex-col bg-secondary/20 text-foreground">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                          <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Post-Quantum Cryptography (PQC)</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        As quantum computers emerge, today's encryption standards will become obsolete. We are building the next generation of cryptographic systems that are secure against attacks from both classical and quantum computers.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col bg-secondary/20 text-foreground">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                          <Share2 className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Quantum Key Distribution (QKD)</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Leveraging the principles of quantum mechanics, we build communication networks where security is guaranteed by the laws of physics. Any attempt to eavesdrop on a QKD channel is instantly detectable.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="flex flex-col bg-secondary/20 text-foreground">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                          <BrainCircuit className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Quantum Machine Learning (QML)</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We explore the intersection of quantum computing and AI. By using quantum algorithms, we aim to solve complex machine learning problems that are intractable for even the most powerful classical supercomputers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

               <div className="border-t border-border/40 pt-12">
                    <div className="text-center">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">The Sovereign Engine Crew</h2>
                        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                            Our engine is powered by a "Consilium Masthead"—a crew of specialized AI agents working in concert to create autonomous, strategic growth.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {sovereignEngineCrew.map((agent) => (
                            <Card key={agent.name} className="flex flex-col bg-secondary/20 text-foreground">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                            <agent.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">{agent.name}</CardTitle>
                                            <CardDescription>{agent.role}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{agent.focus}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>


              <div className="border-t border-border/40 pt-12 text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  What's in a Name?
                </h2>
                 <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                    In cryptography, 'Eve' is the eavesdropper, the observer. In quantum mechanics, the act of observation fundamentally changes the outcome. <span className="font-semibold text-foreground">Eve Count</span> is a nod to this principle. We believe that by intently observing a problem and 'counting' its components, we can build systems—from quantum-secure communications (QKD) to AI—that don't just solve it, but change the landscape entirely. We are the observers who build.
                </p>
              </div>

            </div>

          </div>
        </section>
        <section id="contact" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        We're always open to new ideas and partnerships.
                    </p>
                </div>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                    <Card className="bg-background/50">
                        <CardHeader>
                            <CardTitle>Direct Inquiries</CardTitle>
                            <CardDescription>For general questions or media requests.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <a href="https://www.linkedin.com/in/gwendalynnlim/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-foreground transition-colors hover:text-primary">
                                Gwendalynn Lim Wan Ting
                            </a>
                            <div className="mt-2 space-y-2 text-muted-foreground">
                                <a href="mailto:gwen@evecount.com" className="flex items-center gap-2 transition-colors hover:text-primary">
                                    <Mail className="h-4 w-4" />
                                    <span>gwen@evecount.com</span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-background/50">
                        <CardHeader>
                            <CardTitle>Pitch Your Venture</CardTitle>
                            <CardDescription>Ready to build? Chat with our AI Partner to start.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button size="lg" className="w-full" onClick={() => setOpen(true)}>
                                <Bot className="mr-2 h-4 w-4" />
                                Start the Conversation
                            </Button>
                            <p className="mt-4 text-xs text-muted-foreground">
                                Our AI will guide you through the key questions to structure your pitch and save it for our review.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Send } from "lucide-react";
import { incubatorMembers } from "@/lib/incubator-members";
import Link from "next/link";

export default function IncubatorPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              NTU x Eve Count AI Incubator
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Meet the AI Practitioners from NTU's SCTP Programme for Advanced AI and Machine Learning. Each member combines deep academic knowledge with practical, domain-specific expertise, ready to tackle real-world business challenges.
            </p>
          </div>
        </section>

        {/* Roster Section */}
        <section id="roster" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Cohort</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        A roster of talent ready to transform industries with AI.
                    </p>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {incubatorMembers.map((member) => (
                        <Card key={member.name} className="flex flex-col bg-background/50 text-foreground">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                                        <User className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                      <CardTitle className="text-xl">{member.name}</CardTitle>
                                      <CardDescription>AI Practitioner</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                  <span className="font-semibold text-foreground">Domain Expertise: </span>
                                  {member.expertise}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Problem Statement Submission */}
        <section id="submit-problem" className="border-t border-border/40 py-16 md:py-24">
            <div className="container max-w-3xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Have a Challenge for Us?</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                    Submit your business problem statement. We will connect you with the right expert from our cohort to explore how AI can deliver a solution.
                </p>
                <Button size="lg" className="mt-8" asChild>
                  <Link href="/apply">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Your Challenge
                  </Link>
                </Button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

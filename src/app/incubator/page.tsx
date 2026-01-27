'use client';

import React, { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Send, Lock } from "lucide-react";
import { incubatorMembers } from "@/lib/incubator-members";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// IMPORTANT: This is a simple client-side password protection for demonstration purposes.
// For a production application, you should use a proper authentication system.
const PASSWORD = 'ntusctp';

export default function IncubatorPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    document.title = "NTU x Eve Count AI Incubator | EveCount.com";
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {!isAuthenticated ? (
          <section className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container flex h-full min-h-[calc(100vh-250px)] items-center justify-center">
                <div className="w-full max-w-lg space-y-8">
                    <Card className="bg-card text-card-foreground">
                        <CardHeader className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                                <Lock className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <CardTitle className="mt-4 text-3xl font-bold">Protected Area</CardTitle>
                            <CardDescription className="text-muted-foreground">This content is for NTU SCTP members. Please enter the password.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handlePasswordSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="text"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    autoFocus
                                    className="text-center text-foreground"
                                />
                                {error && <p className="text-sm text-destructive">{error}</p>}
                            </div>
                            <Button type="submit" className="w-full">
                                Unlock Incubator
                            </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="bg-secondary/20">
                        <CardHeader>
                            <CardTitle className="text-center">Our Incubator Partners</CardTitle>
                            <CardDescription className="text-center text-muted-foreground">
                                Proudly supported by industry leaders providing credits, expertise, and GTM support.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4 text-center text-sm font-semibold text-muted-foreground md:grid-cols-4">
                                <div className="rounded-lg bg-background/50 p-4">[SPONSOR LOGO]</div>
                                <div className="rounded-lg bg-background/50 p-4">[SPONSOR LOGO]</div>
                                <div className="rounded-lg bg-background/50 p-4">[SPONSOR LOGO]</div>
                                <div className="rounded-lg bg-background/50 p-4">[SPONSOR LOGO]</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </section>
        ) : (
          <>
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

            {/* Workflow Section */}
            <section id="workflow" className="border-t border-border/40 bg-background py-16 md:py-24">
              <div className="container">
                <div className="mb-12 text-center">
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Incubation Workflow</h2>
                  <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                    From a promising idea to a market-ready venture, here’s a look at our structured, accelerated process.
                  </p>
                </div>
                <Card className="bg-secondary/20">
                  <CardContent className="p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[150px] font-semibold text-foreground">Phase</TableHead>
                          <TableHead className="font-semibold text-foreground">Stage</TableHead>
                          <TableHead className="font-semibold text-foreground">Timeline</TableHead>
                          <TableHead className="text-right font-semibold text-foreground">Key Deliverables</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-foreground align-top pt-4" rowSpan={2}>Phase 1: Foundation<br/>(Weeks 1-2)</TableCell>
                          <TableCell>Submission Review & Alignment</TableCell>
                          <TableCell>Week 1</TableCell>
                          <TableCell className="text-right">Review of your submission. An alignment call to confirm project scope and goals. We'll use "Project Sentient," an AI Lead Scorer, as our example.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>The Foundry Session</TableCell>
                          <TableCell>Week 2</TableCell>
                          <TableCell className="text-right">A 2-day workshop to deconstruct the vision, define the "Enrich-Score-Route" product loop, and design the system architecture (Next.js, Firebase, Genkit). An 8-week technical roadmap is established.</TableCell>
                        </TableRow>
                        <TableRow className="border-t border-border/40">
                          <TableCell className="font-medium text-foreground align-top pt-4" rowSpan={2}>Phase 2: AI-Accelerated Build<br/>(Weeks 3-10)</TableCell>
                          <TableCell>Core MVP Development</TableCell>
                          <TableCell>8 Weeks</TableCell>
                          <TableCell className="text-right">Full-stack MVP build of the "Project Sentient" platform, including a dashboard for lead visualization and backend services for data ingestion. Genkit integration for data enrichment.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Weekly Demos & Iteration</TableCell>
                          <TableCell>Continuous</TableCell>
                          <TableCell className="text-right">Mandatory weekly syncs to demo progress on the lead scoring model and dashboard. Founder feedback is incorporated continuously via a CI/CD pipeline to a staging environment.</TableCell>
                        </TableRow>
                         <TableRow className="border-t border-border/40">
                          <TableCell className="font-medium text-foreground align-top pt-4" rowSpan={2}>Phase 3: Activation<br/>(Weeks 9-12)</TableCell>
                          <TableCell>Corporate & IP Foundation</TableCell>
                          <TableCell>Weeks 9-10 (Parallel)</TableCell>
                          <TableCell className="text-right">"Sentient AI Pte. Ltd." is incorporated in Singapore. IP assignment agreements for the proprietary scoring algorithm are drafted. A clean cap table structure is established.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Go-to-Market (GTM) Launch</TableCell>
                          <TableCell>Weeks 11-12</TableCell>
                          <TableCell className="text-right">Preparation for launch. Brand messaging for "Project Sentient" is finalized, a pre-launch landing page is built to capture early interest, and the investor pitch deck is refined for the seed round.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Problem Statement Submission */}
            <section id="submit-problem" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
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
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

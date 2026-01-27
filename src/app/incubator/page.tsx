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
                <div className="w-full max-w-md">
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
                                    className="text-center"
                                />
                                {error && <p className="text-sm text-destructive">{error}</p>}
                            </div>
                            <Button type="submit" className="w-full">
                                Unlock Incubator
                            </Button>
                            </form>
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
                          <TableCell className="font-medium text-foreground align-top pt-4" rowSpan={2}>Phase 1: Foundation</TableCell>
                          <TableCell>Submission Review</TableCell>
                          <TableCell>1 Week</TableCell>
                          <TableCell className="text-right">Initial screening and partner alignment call.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>The Foundry Session</TableCell>
                          <TableCell>1-2 Weeks</TableCell>
                          <TableCell className="text-right">In-person deep-dive, core architecture design, technical roadmap.</TableCell>
                        </TableRow>
                        <TableRow className="border-t border-border/40">
                          <TableCell className="font-medium text-foreground align-top pt-4" rowSpan={2}>Phase 2: Development</TableCell>
                          <TableCell>AI-Accelerated Build</TableCell>
                          <TableCell>6-8 Weeks</TableCell>
                          <TableCell className="text-right">Full-stack MVP development with integrated AI/ML features.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Weekly Demos</TableCell>
                          <TableCell>Continuous</TableCell>
                          <TableCell className="text-right">Iterative feedback loops, CI/CD, progress tracking.</TableCell>
                        </TableRow>
                         <TableRow className="border-t border-border/40">
                          <TableCell className="font-medium text-foreground align-top pt-4" rowSpan={2}>Phase 3: Activation</TableCell>
                          <TableCell>Corporate & IP Foundation</TableCell>
                          <TableCell>2 Weeks (Parallel)</TableCell>
                          <TableCell className="text-right">Company incorporation, legal setup, IP protection strategy.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Go-to-Market (GTM) Activation</TableCell>
                          <TableCell>2-4 Weeks</TableCell>
                          <TableCell className="text-right">Brand strategy, user acquisition, investor pitch deck refinement.</TableCell>
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

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
                                    type="password"
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

            {/* High-level process */}
            <section id="process" className="border-t border-border/40 bg-background py-16 md:py-24">
              <div className="container">
                <div className="mb-12 text-center">
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Incubation Process</h2>
                  <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                    We turn high-potential AI practitioners into venture-ready founders through a structured, hands-on program.
                  </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                   <Card className="flex flex-col bg-secondary/20 text-foreground text-center">
                    <CardHeader>
                        <CardTitle>1. Challenge Matching</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Practitioners are matched with high-value business problems submitted by our corporate partners.
                        </p>
                    </CardContent>
                   </Card>
                   <Card className="flex flex-col bg-secondary/20 text-foreground text-center">
                    <CardHeader>
                        <CardTitle>2. AI-Accelerated MVP</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Working alongside Eve Count architects, practitioners build a functional MVP to solve the core problem.
                        </p>
                    </CardContent>
                   </Card>
                   <Card className="flex flex-col bg-secondary/20 text-foreground text-center">
                    <CardHeader>
                        <CardTitle>3. Venture Activation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Successful MVPs are spun out into new ventures, with corporate backing and a clear go-to-market strategy.
                        </p>
                    </CardContent>
                   </Card>
                </div>
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

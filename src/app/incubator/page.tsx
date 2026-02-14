
'use client';

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Send, Lock, Loader2, Hand, Lightbulb, Sparkles } from "lucide-react";
import type { IncubatorMember } from "@/lib/incubator-members";
import type { Challenge } from "@/lib/challenges";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useFirestore, useCollection, useMemoFirebase } from "@/firebase";
import { collection } from "firebase/firestore";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { runIncubatorMatcherAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import type { IncubatorMatcherOutput } from "@/lib/schemas";

// IMPORTANT: This is a simple client-side password protection for demonstration purposes.
// For a production application, you should use a proper authentication system.
const PASSWORD = 'ntusctp';

type StatusVariant = "default" | "destructive" | "secondary" | "outline";

function getStatusVariant(status: Challenge['status'] | IncubatorMember['status'] | string): StatusVariant {
    switch (status) {
      case 'Completed':
      case 'Assigned':
        return 'default';
      case 'Open':
      case 'Available':
        return 'secondary';
      default:
        return 'outline';
    }
}


export default function IncubatorPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();
  
  const firestore = useFirestore();

  const membersQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'incubatorMembers');
  }, [firestore]);
  const { data: incubatorMembers, isLoading: membersLoading } = useCollection<IncubatorMember>(membersQuery);

  const challengesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'challenges');
  }, [firestore]);
  const { data: challenges, isLoading: challengesLoading } = useCollection<Challenge>(challengesQuery);

  // New state for the matching feature
  const [isMatcherOpen, setIsMatcherOpen] = useState(false);
  const [matcherLoading, setMatcherLoading] = useState(false);
  const [matchResults, setMatchResults] = useState<IncubatorMatcherOutput | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ type: 'practitioner' | 'challenge'; item: IncubatorMember | Challenge } | null>(null);

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

  const handleFindMatches = async (type: 'practitioner' | 'challenge', item: IncubatorMember | Challenge) => {
    setSelectedItem({ type, item });
    setIsMatcherOpen(true);
    setMatcherLoading(true);
    setMatchResults(null);

    try {
        const result = await runIncubatorMatcherAction({
            matchType: type,
            targetId: item.id,
            practitioners: incubatorMembers || [],
            challenges: challenges || [],
        });

        if (result.success && result.data) {
            setMatchResults(result.data);
        } else {
            toast({
                variant: "destructive",
                title: "Matching Failed",
                description: result.message || "Could not retrieve matches from the AI.",
            });
            setIsMatcherOpen(false); // Close dialog on error
        }
    } catch (error) {
         toast({
            variant: "destructive",
            title: "Matching Failed",
            description: "An unexpected error occurred.",
        });
        setIsMatcherOpen(false); // Close dialog on error
    } finally {
        setMatcherLoading(false);
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
            
            <section id="process" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
              <div className="container">
                <div className="mb-12 text-center">
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Incubation Process</h2>
                  <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                    We turn high-potential AI practitioners into venture-ready founders through a structured, hands-on program.
                  </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                   <Card className="flex flex-col bg-background/50 text-foreground text-center">
                    <CardHeader>
                        <CardTitle>1. Challenge Matching</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Practitioners are matched with high-value business problems submitted by our corporate partners or sourced from the 'open sea'.
                        </p>
                    </CardContent>
                   </Card>
                   <Card className="flex flex-col bg-background/50 text-foreground text-center">
                    <CardHeader>
                        <CardTitle>2. AI-Accelerated MVP</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Working alongside Eve Count architects, practitioners build a functional MVP to solve the core problem.
                        </p>
                    </CardContent>
                   </Card>
                   <Card className="flex flex-col bg-background/50 text-foreground text-center">
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

            <section id="challenges" className="border-t border-border/40 bg-background py-16 md:py-24">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Challenge Board</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                            A board of high-value business problems and venture ideas, ready to be matched with practitioners from the roster.
                        </p>
                    </div>
                     {challengesLoading ? (
                        <div className="flex justify-center">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : !challenges || challenges.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">No challenges available.</p>
                    ) : (
                        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {challenges.map(challenge => (
                                <Card key={challenge.id} className="bg-secondary/20 flex flex-col text-foreground">
                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-4">
                                            <div className="flex items-center gap-4">
                                                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                                    <Lightbulb className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg text-foreground">{challenge.title}</CardTitle>
                                                    <CardDescription>{challenge.domain}</CardDescription>
                                                </div>
                                            </div>
                                            <Badge variant={getStatusVariant(challenge.status)}>{challenge.status}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                                    </CardContent>
                                    <CardFooter className="flex-col items-stretch gap-2">
                                        <Button
                                            onClick={() => handleFindMatches('challenge', challenge)}
                                            disabled={challenge.status !== 'Open'}
                                        >
                                            <Sparkles className="mr-2 h-4 w-4" /> Find Practitioners
                                        </Button>
                                        <Button disabled={challenge.status !== 'Open'} variant="secondary">
                                            <Hand className="mr-2 h-4 w-4" /> Assign Manually
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section id="roster" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Practitioner Roster</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                            The current cohort of elite AI talent from the NTU SCTP Programme, available to take on challenges.
                        </p>
                    </div>
                     {membersLoading ? (
                        <div className="flex justify-center">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : !incubatorMembers || incubatorMembers.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">No members on the roster.</p>
                    ) : (
                        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {incubatorMembers.map((member) => (
                                <Card key={member.id} className="flex flex-col bg-background/50 text-foreground">
                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                                                    <User className="h-8 w-8 text-primary" />
                                                </div>
                                                <div>
                                                <CardTitle className="text-xl">{member.name}</CardTitle>
                                                <CardDescription>AI Practitioner</CardDescription>
                                                </div>
                                            </div>
                                            <Badge variant={getStatusVariant(member.status)}>{member.status}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">
                                        <span className="font-semibold text-foreground">Domain Expertise: </span>
                                        {member.expertise}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className="w-full"
                                            onClick={() => handleFindMatches('practitioner', member)}
                                            disabled={member.status !== 'Available'}
                                        >
                                            <Sparkles className="mr-2 h-4 w-4" /> Find Challenges
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>


            <section id="submit-problem" className="border-t border-border/40 bg-background py-16 md:py-24">
                <div className="container max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Have a Challenge for Us?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        Submit your business problem statement or venture idea. If it's a good fit, we'll add it to our Challenge Board for the community to tackle.
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
      
      <Dialog open={isMatcherOpen} onOpenChange={setIsMatcherOpen}>
        <DialogContent>
            {selectedItem && (
                <>
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Sparkles className="text-primary" />
                        AI-Powered Recommendations
                    </DialogTitle>
                    <DialogDescription>
                        Finding best fits for {selectedItem.type === 'practitioner' ? `practitioner '${(selectedItem.item as IncubatorMember).name}'` : `challenge '${(selectedItem.item as Challenge).title}'`}.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 max-h-[60vh] overflow-y-auto">
                    {matcherLoading ? (
                        <div className="flex items-center justify-center space-x-2 h-40">
                            <Loader2 className="h-6 w-6 animate-spin" />
                            <p className="text-muted-foreground">Analyzing matches...</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {matchResults && matchResults.matches.length > 0 ? (
                                matchResults.matches.map(match => (
                                    <Card key={match.id} className="bg-background/50">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-lg">{match.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground italic">"{match.rationale}"</p>
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                <p className="text-center text-muted-foreground pt-10">No ideal matches found at this time.</p>
                            )}
                        </div>
                    )}
                </div>
                </>
            )}
        </DialogContent>
    </Dialog>

      <Footer />
    </div>
  );
}

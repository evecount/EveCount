
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, Mail } from "lucide-react";
import { incubatorMembers } from "@/lib/incubator-members";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incubator",
  description: "Eve Count Incubator in partnership with NTU's SCTP Programme for Advanced AI and Machine Learning.",
};

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
            <div className="container max-w-3xl">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Have a Challenge for Us?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        Submit your business problem statement. We will connect you with the right expert from our cohort to explore how AI can deliver a solution.
                    </p>
                </div>
                <Card className="bg-secondary/20">
                    <CardHeader>
                        <CardTitle>Problem Statement Submission</CardTitle>
                        <CardDescription>Outline your challenge and we'll be in touch.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="companyName">Company Name</Label>
                                    <Input id="companyName" placeholder="Your Company Inc." />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contactEmail">Contact Email</Label>
                                    <Input id="contactEmail" type="email" placeholder="you@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="problemStatement">Problem Statement</Label>
                                <Textarea id="problemStatement" placeholder="Describe the problem you're trying to solve, the current process, and what a successful outcome would look like." rows={5} />
                            </div>
                            <Button type="submit" className="w-full">
                                <Mail className="mr-2 h-4 w-4" />
                                Submit for Review
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail } from "lucide-react";
import { incubatorMembers } from "@/lib/incubator-members";
import type { Metadata } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { collection } from "firebase/firestore";

const submissionSchema = z.object({
    companyName: z.string().optional(),
    submitterName: z.string().min(1, "Please enter your name."),
    contactEmail: z.string().email("Please enter a valid email address."),
    contactPhone: z.string().optional(),
    visionPitch: z.string().min(10, "Please provide a brief problem statement."),
});

export default function IncubatorPage() {
    const { toast } = useToast();
    const firestore = useFirestore();

    const form = useForm<z.infer<typeof submissionSchema>>({
        resolver: zodResolver(submissionSchema),
        defaultValues: {
            companyName: "",
            submitterName: "",
            contactEmail: "",
            contactPhone: "",
            visionPitch: "",
        },
    });

    async function onSubmit(values: z.infer<typeof submissionSchema>) {
        if (!firestore) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Could not connect to the database. Please try again later.",
            });
            return;
        }

        const submissionData = {
            ...values,
            submissionDate: new Date().toISOString(),
        };
        
        const submissionsCollection = collection(firestore, 'submissions');
        addDocumentNonBlocking(submissionsCollection, submissionData);

        toast({
            title: "Submission Received",
            description: "Thank you! We've received your problem statement and will be in touch shortly.",
        });
        form.reset();
    }


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
                       <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                     <FormField
                                        control={form.control}
                                        name="submitterName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contact Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="companyName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company Name (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your Company Inc." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="contactEmail"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contact Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="you@company.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="contactPhone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contact Phone (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="+1 (555) 123-4567" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="visionPitch"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Problem Statement</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Describe the problem you're trying to solve, the current process, and what a successful outcome would look like."
                                                    rows={5}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                                    <Mail className="mr-2 h-4 w-4" />
                                    {form.formState.isSubmitting ? "Submitting..." : "Submit for Review"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

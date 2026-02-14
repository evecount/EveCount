'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Target, BookOpen, AlertTriangle, Terminal, Grid, Check } from "lucide-react";

const missionObjectives = [
    "Understand the Pandas Library for security log analysis.",
    "Grasp forensic concepts like Triage, Baselining, and IoC hunting.",
    "Load CSV logs into DataFrames and clean attacker data.",
    "Use indexing and filtering to find 'Patient Zero' (malware).",
    "Join Process and Network logs to prove data exfiltration.",
    "Aggregate data to assess total damage and report findings."
];

const caseFiles = [
    { title: "Pre-Class", description: "Setting up your forensic lab (Environment Setup)." },
    { title: "Operation Nightfall (Lesson)", description: "The core investigation workbook." },
    { title: "Sentinel Web App", description: "The interactive Threat Hunting Console." },
    { title: "Post-Class", description: "Further reading and practice." },
    { title: "Bonus: The Human Eye", description: "Manual inspection techniques." },
    { title: "Future Vision: The Grid", description: "A proposal for global decentralized defense." },
];


export default function OperationNightfallPage() {
  React.useEffect(() => {
    document.title = "Operation Nightfall | Pandas for DFIR | EveCount.com";
  }, []);
    
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-background py-16 md:py-24 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                        <p className="font-semibold text-primary">A Workshop by Eve Count</p>
                        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Operation Nightfall
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                            This workshop reimagines the "Introduction to Pandas" curriculum through the lens of a Digital Forensics & Incident Response (DFIR) investigation. Instead of analyzing fruit, you will hunt a hacker.
                        </p>
                        <Button size="lg" className="mt-8" asChild>
                            <Link href="https://github.com/evecount/OperationNightfall" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            Explore the Investigation on GitHub
                            </Link>
                        </Button>
                        </div>
                    </div>
                </section>

                {/* The Vision */}
                <section id="vision" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container grid max-w-5xl items-center gap-12 md:grid-cols-2">
                        <div className="flex justify-center">
                            <Grid className="h-48 w-48 text-primary/50" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Project Nightfall: The Open Source Forensic Grid</h2>
                            <p className="text-muted-foreground md:text-lg">
                                We believe cybersecurity education shouldn't just be about reading logs; it should be about hunting threats. This repository is more than a tutorial—it's a complete forensic simulation where students track a hacker's lateral movement using Data Science.
                            </p>
                            <p className="text-muted-foreground md:text-lg">
                                It culminates in the deployment of <strong className="text-foreground">Sentinel</strong>, a browser-based Threat Console that allows analysts to visualize attack vectors and pledge their findings to a decentralized global intelligence grid.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission Objectives */}
                <section id="objectives" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container max-w-4xl">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Mission Objectives</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                                By the end of this investigation, you will have hands-on experience with industry-standard forensic analysis techniques using Python and Pandas.
                            </p>
                        </div>
                        <Card className="bg-secondary/20">
                            <CardContent className="p-6">
                                <ul className="space-y-4">
                                {missionObjectives.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Case Files */}
                <section id="case-files" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Case Files (Course Structure)</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                                Your briefing is organized into the following sections within the GitHub repository.
                            </p>
                        </div>
                        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {caseFiles.map((file) => (
                                <Card key={file.title} className="flex flex-col bg-background/50 text-foreground">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                                <BookOpen className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">{file.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{file.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sentinel App & Safety */}
                 <section id="sentinel" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container grid max-w-5xl gap-12 md:grid-cols-2">
                        <Card className="bg-secondary/20 text-foreground">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Terminal className="h-6 w-6" /> Operation Sentinel Web App</CardTitle>
                                <CardDescription>Want to run the analysis in a dashboard?</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">The repository includes `app.py`, a Streamlit application that provides an interactive Threat Hunting Console.</p>
                                <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                                    <li>Install requirements: <code className="font-code bg-muted p-1 rounded-sm">pip install -r requirements.txt</code></li>
                                    <li>Run the app: <code className="font-code bg-muted p-1 rounded-sm">streamlit run app.py</code></li>
                                    <li>Upload your evidence files and begin hunting.</li>
                                </ol>
                                <p className="text-sm">Stack: Python, Pandas, Streamlit, Plotly, Jupyter.</p>
                            </CardContent>
                        </Card>
                         <Card className="border-destructive bg-destructive/10 text-destructive-foreground">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><AlertTriangle className="h-6 w-6" /> Data Safety Warning</CardTitle>
                                <CardDescription>A note from your Senior Analyst.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">This course primarily uses <strong className="text-foreground">Synthetic Data</strong> generated securely within the notebook to simulate an attack without risk. However, a sample real-world dataset is also provided. In the security world, downloading and running unverified files is a major risk. Always verify your sources.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="container mt-12 text-center max-w-4xl">
                        <Card className="bg-secondary/20">
                            <CardHeader>
                                <CardTitle className="text-foreground">Powered by Eve Count</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground italic">Co-created by Gwendalynn Lim and Gemini.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

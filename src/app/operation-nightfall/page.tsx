'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Target, BookOpen, AlertTriangle, Terminal, Grid, Check, Upload, Globe, DollarSign, Microscope, Siren, BarChart3, FileCheck, Heart, Bot } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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
                
                 {/* Interactive Mockup */}
                <section id="mockup" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Interactive Sentinel Mockup</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                                Experience a non-functional, high-fidelity mockup of the Sentinel console. This demonstrates the user experience before you dive into the code.
                            </p>
                        </div>

                        <Alert variant="destructive" className="mb-8 max-w-4xl mx-auto border-yellow-500/50 text-yellow-300 [&>svg]:text-yellow-400">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>This is a Mockup, Not a Live App</AlertTitle>
                            <AlertDescription>
                                This interface is a visual simulation to showcase the Sentinel app's design. The buttons and inputs are for display only. The real, functional application is built by you as part of the <Link href="https://github.com/evecount/OperationNightfall" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-foreground">Operation Nightfall workbook</Link>.
                            </AlertDescription>
                        </Alert>

                        <div className="mx-auto max-w-7xl rounded-xl border bg-background shadow-2xl">
                            {/* Header */}
                            <div className="p-4 border-b">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block"><path d="M12 2L2 8.5V15.5L12 22L22 15.5V8.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 8.5L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 8.5L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 5.5L7 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    Sentinel: Forensic Threat Console
                                </h3>
                                <p className="text-sm text-muted-foreground">Powered by Eve Count | Co-created by Gwendalynn Lim and Gemini</p>
                            </div>

                            <div className="flex flex-col md:flex-row">
                                {/* Sidebar Mockup */}
                                <div className="w-full md:w-1/4 lg:w-1/5 p-4 border-r border-border/40 bg-secondary/20">
                                    <div className="space-y-6">
                                        <Card className="bg-background/50">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-base flex items-center gap-2"><Upload className="h-4 w-4"/> Case Evidence</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <Button variant="outline" className="w-full" disabled>Upload `process_log.csv`</Button>
                                            </CardContent>
                                        </Card>

                                        <Separator />

                                        <Card className="bg-background/50">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-base flex items-center gap-2"><Globe className="h-4 w-4"/> Contribute to Grid</CardTitle>
                                                <CardDescription className="text-xs">Join the decentralized forensic network.</CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <Input disabled placeholder="https://github.com/username/repo"/>
                                                <Input disabled placeholder="data/attack_vector.csv"/>
                                                <Button className="w-full" disabled>📝 Sign & Transmit</Button>
                                            </CardContent>
                                        </Card>

                                        <Separator />

                                        <Card className="bg-background/50">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-base flex items-center gap-2"><Heart className="h-4 w-4"/> Sponsor the Grid</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-xs text-muted-foreground mb-2">
                                                    <strong>Sentinel is currently running in Local Mode.</strong> To build the real-time <strong>Cloud Backend</strong> for the Global Grid, we need server resources.
                                                </p>
                                                <Button className="w-full" disabled><DollarSign className="h-4 w-4 mr-2"/> Fund the Backend</Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>

                                {/* Main Content Mockup */}
                                <div className="w-full md:w-3/4 lg:w-4/5 p-6">
                                    <Alert className="bg-green-900/20 border-green-500/50 text-green-300 [&>svg]:text-green-400 mb-6">
                                        <FileCheck className="h-4 w-4" />
                                        <AlertTitle>Evidence Loaded</AlertTitle>
                                        <AlertDescription>process_log.csv (2,845 rows)</AlertDescription>
                                    </Alert>

                                    {/* Triage Section */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold flex items-center gap-2 mb-4"><Microscope/> Triage & Auto-Hunt</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <Card className="bg-secondary/30">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Events</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-2xl font-bold">2,845</p>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-secondary/30">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-sm font-medium text-muted-foreground">Unique Processes</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-2xl font-bold">78</p>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-destructive/10 border-destructive">
                                                <CardHeader className="pb-2">
                                                    <CardTitle className="text-sm font-medium text-destructive">🚨 Threat Hits</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-2xl font-bold">12</p>
                                                    <p className="text-xs text-destructive-foreground font-semibold">CRITICAL</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <Alert variant="destructive" className="mt-4">
                                            <Siren className="h-4 w-4" />
                                            <AlertTitle>Detected Suspicious Processes</AlertTitle>
                                            <AlertDescription>powershell.exe, nmap.exe</AlertDescription>
                                        </Alert>
                                    </div>
                                    
                                    <Separator className="my-8"/>

                                    {/* Visualization Section */}
                                    <div>
                                        <h4 className="text-lg font-semibold flex items-center gap-2 mb-4"><BarChart3/> Threat Hunting Console</h4>
                                        <Card className="bg-secondary/30">
                                            <CardHeader>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div>
                                                        <label className="text-xs font-medium text-muted-foreground">X-Axis</label>
                                                        <Input disabled value="Timestamp" />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-medium text-muted-foreground">Y-Axis</label>
                                                        <Input disabled value="Process_Name" />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-medium text-muted-foreground">Color By (Z-Axis)</label>
                                                        <Input disabled value="Event_ID" />
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="w-full aspect-video bg-background/50 rounded-md flex items-center justify-center relative overflow-hidden">
                                                    <Image src="https://picsum.photos/seed/sentinel1/1200/800" alt="Mockup of a scatter plot for threat analysis" fill className="object-cover" data-ai-hint="data visualization" />
                                                    <p className="absolute text-muted-foreground z-10">Chart Placeholder</p>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Alert className="bg-blue-900/20 border-blue-500/50 text-blue-300 [&>svg]:text-blue-400">
                                                    <Bot className="h-4 w-4" />
                                                    <AlertTitle>The AI Bridge</AlertTitle>
                                                    <AlertDescription>
                                                        What you see above as "clusters" or "lines" are what Machine Learning models use to detect attacks. Vertical lines often indicate scanning, while dense clusters can signify brute force or data exfiltration.
                                                    </AlertDescription>
                                                </Alert>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Sentinel App & Safety */}
                 <section id="sentinel" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container grid max-w-5xl gap-12 md:grid-cols-2">
                        <Card className="bg-background text-foreground">
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
                        <Card className="bg-background">
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

'use client';

import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, BrainCircuit, Target, Github, Layers, ShieldCheck, Share2, Binary, Cpu, Activity, Clock, Trash2, Microscope, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const REPO_URL = "https://github.com/evecount/snapdragon";

const bridgeElements = [
    {
        icon: Zap,
        title: "1. The Snapdragon Bridge",
        subtitle: "High-Performance Intuition",
        concept: "The software equivalent of a 'Fast Inverse Square Root.' It's not about doing more math; it's about doing the right math at the hardware level.",
        pitch: "We've found a way to let a computer 'recognize' a pattern in one step (O(1)) rather than a thousand. It’s silicon-level intuition."
    },
    {
        icon: BrainCircuit,
        title: "2. The DSMF Bridge",
        subtitle: "The Digital Gray Zone",
        concept: "Life isn't black and white. There is a 'vibe' or a 'gut feeling' that sits between a 'Yes' and a 'No.'",
        pitch: "Standard AI only sees 1s and 0s. Our Mencius Function (DSMF) looks at the slope of the decision. It captures the 'how' and the 'why,' allowing us to see correlations standard systems simply flatten."
    },
    {
        icon: Target,
        title: "3. The EPIC Bridge",
        subtitle: "Detecting the Dead End",
        concept: "The Moot State Detector. We've all experienced a 'meeting that could have been an email'—EPIC identifies that moment mathematically.",
        pitch: "By mapping work as 'geometric packing,' we visually show when a system is just spinning its wheels. If the geometry falls apart, the project is 'Moot,' and it's time to move on."
    }
];

const roadmapItems = [
    {
        icon: Cpu,
        title: "1. The Decentralized Decision Layer",
        description: "The future of computational integrity lies at the 'Edge.' The primary logic gate is no longer a central server, but the individual bit-storage of local hardware.",
        points: [
            "Autonomous Integrity: O(1) geometric kernels verify signal integrity locally.",
            "Universal Application: Hardware 'snaps' to truth without waiting for cloud consensus."
        ]
    },
    {
        icon: Activity,
        title: "2. Fractal Contextualization",
        description: "Standard data identifies what is happening. Snapdragon identifies the nature of the transition (The Hidden State).",
        points: [
            "The Nested Logic: DSMF holds a secondary dimension of context within the primary signal.",
            "User Projection: Interpretation belongs to the user—financial sentiment or logistics resilience."
        ]
    },
    {
        icon: Trash2,
        title: "3. Predictive Geometric Efficiency",
        description: "Identifying Systemic Decoherence—the exact moment a process enters a state of futility or 'wasted effort.'",
        points: [
            "Resource Optimization: Triggers a 'Snap' the moment a path becomes mathematically moot.",
            "The Impact: Reallocate resources instantly based on probability of success."
        ]
    },
    {
        icon: Share2,
        title: "4. The Classical-Quantum Bridge",
        description: "The translation layer between deterministic classical bits and probabilistic quantum states.",
        points: [
            "Hardware Agnostic Logic: The geometric manifold is the 'Rosetta Stone.'",
            "Future-Proofing: Securing classical silicon with quantum-inspired awareness today."
        ]
    }
];

export default function SnapdragonPage() {
    React.useEffect(() => {
        document.title = "Project Snapdragon | High-Performance Intuition | EveCount.com";
      }, []);
    
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-background py-16 md:py-24 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20">The Sovereign Engine: Communication Layer</Badge>
                        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Project Snapdragon
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                            Thinks faster. Understands context. Prevents wasted effort. <br />
                            <span className="text-foreground font-semibold">Giving your analysts a 4D periscope to see through the noise of the 2026 missions.</span>
                        </p>
                        <div className="flex justify-center gap-4 mt-8">
                            <Button size="lg" asChild>
                                <Link href="/apply">Request Partner Access</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-5 w-5" /> Explore the Kernel
                                </a>
                            </Button>
                        </div>
                        </div>
                    </div>
                </section>

                {/* The People-First Narrative (The Bridge) */}
                <section id="the-bridge" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">The Bridge to Efficiency</h2>
                            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                                We've built a bridge from complexity to intuition. Instead of implementing a 4-simplex kernel in a vacuum, we've focused on empowering humans to see the solution as inevitable.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                            {bridgeElements.map((element) => (
                                <Card key={element.title} className="bg-background/50 border-border/50 flex flex-col h-full transition-all hover:border-primary/50 shadow-sm">
                                    <CardHeader>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-4">
                                            <element.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{element.title}</CardTitle>
                                        <CardDescription className="text-primary font-semibold">{element.subtitle}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-muted-foreground mb-4 italic">"{element.concept}"</p>
                                        <p className="text-sm text-foreground font-medium">{element.pitch}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The README: Vision & Roadmap */}
                <section id="roadmap" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container max-w-5xl">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Future Vision & Architectural Roadmap</h2>
                            <p className="mx-auto mt-4 text-muted-foreground md:text-lg italic max-w-3xl">
                                "Project Snapdragon provides the Geometric Sovereignty required for a high-velocity world. We provide the hardware-level speed and the recursive contextual depth; the user provides the mission."
                            </p>
                        </div>
                        <div className="space-y-16">
                            {roadmapItems.map((item, index) => (
                                <div key={item.title} className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/50 text-primary border border-border">
                                        <item.icon className="h-10 w-10" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {item.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    <span className="text-muted-foreground">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Provenance & Integrity */}
                <section id="provenance" className="border-t border-border/40 bg-secondary/20 py-16">
                    <div className="container max-w-4xl">
                        <Card className="bg-background border-dashed">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-foreground">
                                    <ShieldCheck className="h-5 w-5 text-primary" />
                                    Provenance & Integrity (v13.0)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 font-mono text-xs">
                                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2">
                                    <span className="text-muted-foreground">Proof of Work (PoW):</span>
                                    <span className="text-foreground break-all">1A3E10C6273953ED2B0470114FC30B807180FEB83F23172E54F8C7D4FCC5701A</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2">
                                    <span className="text-muted-foreground">Timestamp:</span>
                                    <span className="text-foreground">2026-02-19T04:11:27Z</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2">
                                    <span className="text-muted-foreground">Scope:</span>
                                    <span className="text-foreground">Core v13.0 institutional release documentation and kernel specification.</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Resource Hub */}
                <section className="border-t border-border/40 bg-background py-16 text-center">
                    <div className="container">
                        <h2 className="text-2xl font-bold mb-8">Resource Hub</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="outline" className="flex items-center gap-2" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Binary className="h-4 w-4" /> TECHNICAL_README.md
                                </a>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2" asChild>
                                <Link href="/snapdragon/dsmf">
                                    <FileText className="h-4 w-4" /> DSMF Whitepaper
                                </Link>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Layers className="h-4 w-4" /> Lineage Map
                                </a>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Microscope className="h-4 w-4" /> Visual Proof (Simulator)
                                </a>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Clock className="h-4 w-4" /> Executive Overview
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

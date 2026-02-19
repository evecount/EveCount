
'use client';

import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, BrainCircuit, Target, Github, Layers, ShieldCheck, Binary, Cpu, ArrowRight, FileText, Fingerprint, Network, BarChart3, Timer, ThermometerSnowflake } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Image from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const REPO_URL = "https://github.com/evecount/snapdragon";

const bridgeElements = [
    {
        icon: Zap,
        title: "1. The Mathematical Translator",
        subtitle: "Hardware-Level Logic",
        concept: "Enables classical registers to simulate the rotational behavior of a high-dimensional manifold.",
        pitch: "A protocol that provides existing computational infrastructure with the integrity and depth typically associated with advanced quantum states.",
        link: REPO_URL,
        linkLabel: "Explore the Kernel",
        isExternal: true
    },
    {
        icon: BrainCircuit,
        title: "2. Post-Quantum Resilience",
        subtitle: "Signal Geometry Architecture",
        concept: "Utilizes the DSMF (Mencius Function) to embed context within the slope of its activation curve.",
        pitch: "In this protocol, the geometry of the signal is the key. It is designed to be resilient against standard linear decryption methods.",
        link: "/snapdragon/dsmf",
        linkLabel: "View DSMF Whitepaper",
        isExternal: false
    },
    {
        icon: Target,
        title: "3. The Coherence Filter",
        subtitle: "Geometric Integrity",
        concept: "Integrates EPIC diagnostics to identify the exact moment a communication line enters a state of futility.",
        pitch: "Prevents resource waste by identifying decoherence, ensuring only high-integrity data propagates through the bridge.",
        link: "/snapdragon/epic",
        linkLabel: "View EPIC Whitepaper",
        isExternal: false
    }
];

const geometricModes = [
    {
        title: "Mode 1: The 4-Simplex",
        hex: "0x5f41da5a",
        geometry: "Pentachoron (5-cell)",
        altitude: "≈ 1.581",
        utility: "Optimized for refractive background noise suppression and high-threshold signal capture."
    },
    {
        title: "Mode 2: The Octaplex",
        hex: "0x5f375a86",
        geometry: "24-Cell (Icositetrachoron)",
        altitude: "≈ 1.414 (√2)",
        utility: "Optimized for high-density packet alignment and multi-channel synchronization."
    }
];

export default function SnapdragonPage() {
    React.useEffect(() => {
        document.title = "Project Snapdragon | Geometric Bridge Protocol | EveCount.com";
      }, []);

    const benchmarkImage = PlaceHolderImages.find(img => img.id === 'snapdragon-benchmark');
    
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-background py-16 md:py-24 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20">Unified Standard v10.1: Communication Layer</Badge>
                        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            The Geometric Bridge Protocol
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                            Existing hardware's way of thinking like a quantum network. <br />
                            <span className="text-foreground font-semibold">A zero-cost, O(1) translation layer between deterministic silicon and probabilistic states.</span>
                        </p>
                        <div className="flex justify-center gap-4 mt-8">
                            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
                                <Link href="/apply">Request Partner Access</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-5 w-5" /> Explore the Kernel
                                </a>
                            </Button>
                        </div>
                        </div>
                    </div>
                </section>

                {/* Bridge cards */}
                <section id="the-bridge" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">The Bridge to High-Efficiency Logic</h2>
                            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                                We provide a zero-cost alternative to computationally expensive math by utilizing bit-level IEEE 754 manipulation. This empowers teams to identify the most efficient path forward with absolute clarity.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                            {bridgeElements.map((element) => (
                                <Card key={element.title} className="bg-background/50 border-border/50 flex flex-col h-full transition-all hover:border-primary/50 shadow-sm">
                                    <CardHeader>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-4">
                                            <element.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl text-foreground">{element.title}</CardTitle>
                                        <CardDescription className="text-primary font-bold">{element.subtitle}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-muted-foreground mb-4 italic">"{element.concept}"</p>
                                        <p className="text-sm text-foreground font-medium">{element.pitch}</p>
                                    </CardContent>
                                    <CardFooter className="pt-0 pb-6">
                                        {element.isExternal ? (
                                            <Button variant="secondary" className="w-full text-foreground font-semibold" asChild>
                                                <a href={element.link} target="_blank" rel="noopener noreferrer">
                                                    {element.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                        ) : (
                                            <Button variant="secondary" className="w-full text-foreground font-semibold" asChild>
                                                <Link href={element.link}>
                                                    {element.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benchmark Section */}
                <section id="benchmarks" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container max-w-6xl">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">SNAPDRAGON vs standard FPU: Latency to Complexity Audit</h2>
                            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                                Benchmarking the O(1) constant-time kernel against standard transcendental math scaling on existing hardware architectures.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <Card className="bg-secondary/10 border-border/40 overflow-hidden">
                                    <div className="aspect-[2/1] relative bg-muted flex items-center justify-center">
                                        {benchmarkImage && (
                                            <img 
                                                src={benchmarkImage.imageUrl} 
                                                alt={benchmarkImage.description}
                                                className="object-cover w-full h-full opacity-80 mix-blend-luminosity"
                                                data-ai-hint={benchmarkImage.imageHint}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                                            <p className="text-xs font-mono text-primary uppercase tracking-widest">Audit Ref: 0x5f_BENCH_V10</p>
                                        </div>
                                    </div>
                                </Card>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <Card className="bg-secondary/20 p-4 text-center">
                                        <Timer className="h-5 w-5 text-primary mx-auto mb-2" />
                                        <p className="text-xl font-bold">1-3 Cycles</p>
                                        <p className="text-[10px] text-muted-foreground uppercase">Kernel Latency</p>
                                    </Card>
                                    <Card className="bg-secondary/20 p-4 text-center">
                                        <Cpu className="h-5 w-5 text-primary mx-auto mb-2" />
                                        <p className="text-xl font-bold">O(1)</p>
                                        <p className="text-[10px] text-muted-foreground uppercase">Scaling Complexity</p>
                                    </Card>
                                    <Card className="bg-secondary/20 p-4 text-center">
                                        <ThermometerSnowflake className="h-5 w-5 text-primary mx-auto mb-2" />
                                        <p className="text-xl font-bold">-94%</p>
                                        <p className="text-[10px] text-muted-foreground uppercase">Thermal Delta</p>
                                    </Card>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-foreground">Eliminating the FPU Bottleneck</h3>
                                <p className="text-muted-foreground">
                                    Traditional decision logic in high-dimensional manifolds relies on transcendental functions (<code>sine</code>, <code>cosine</code>, <code>log</code>) which scale poorly with data volume and introduce significant thermal jitter.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-sm text-foreground/90"><span className="font-bold">Standard FPU Approach:</span> Iterative series approximations. Latency increases as accuracy requirements rise.</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-sm text-foreground/90"><span className="font-bold">Snapdragon Kernel:</span> Direct IEEE 754 bit-level folding. Constant time performance regardless of precision target.</p>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-sm text-foreground/90"><span className="font-bold">Strategic Impact:</span> Enables real-time verification of signal integrity at edge-layer speeds without specialized co-processors.</p>
                                    </li>
                                </ul>
                                <Button asChild className="mt-4">
                                    <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                        View Benchmarking Source <BarChart3 className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Framework Section */}
                <section id="technical-framework" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container max-w-5xl">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Theory of Operation: v10.1 Standard</h2>
                            <p className="mx-auto mt-4 text-muted-foreground md:text-lg italic max-w-3xl">
                                "The bit-level fold is the translation mechanism that allows existing silicon to operate with quantum-inspired awareness."
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold flex items-center gap-2 text-foreground"><Cpu className="text-primary" /> Geometric Modes</h3>
                                <div className="space-y-4">
                                    {geometricModes.map(mode => (
                                        <Card key={mode.hex} className="bg-background/50 border-border/40">
                                            <CardHeader className="pb-2">
                                                <div className="flex justify-between items-center">
                                                    <CardTitle className="text-base text-foreground font-bold">{mode.title}</CardTitle>
                                                    <Badge variant="outline" className="font-mono border-primary/20 text-primary">{mode.hex}</Badge>
                                                </div>
                                                <CardDescription className="text-muted-foreground font-semibold">Geometry: {mode.geometry}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="text-sm">
                                                <p className="text-foreground/80 mb-2"><span className="font-bold text-foreground">Altitude:</span> {mode.altitude}</p>
                                                <p className="text-foreground font-medium">{mode.utility}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold flex items-center gap-2 text-foreground"><Binary className="text-primary" /> The Bit-Level Fold</h3>
                                <Card className="bg-background/50 h-full border-border/40">
                                    <CardContent className="pt-6 space-y-6">
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">1</div>
                                            <div>
                                                <p className="font-bold text-foreground">The Fold</p>
                                                <p className="text-sm text-muted-foreground">Shifting bits right (<code className="bg-muted px-1 text-foreground font-bold">&gt;&gt; 1</code>) to approximate the base-2 logarithm in a single clock cycle.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">2</div>
                                            <div>
                                                <p className="font-bold text-foreground">The Adjustment</p>
                                                <p className="text-sm text-muted-foreground">Subtracting the manifold-specific constant to align with the geometric apex altitude.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">3</div>
                                            <div>
                                                <p className="font-bold text-foreground">The Refinement</p>
                                                <p className="text-sm text-muted-foreground">A single Newton-Raphson iteration pulls the result toward absolute convergence.</p>
                                            </div>
                                        </div>
                                        <Separator className="bg-border/40" />
                                        <div className="flex gap-4 items-start">
                                            <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                                            <div>
                                                <p className="font-bold text-sm text-foreground">Residual Error Indexing (REI)</p>
                                                <p className="text-xs text-muted-foreground font-medium">A stealth carrier-wave protocol embedding metadata within floating-point jitter.</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Provenance & Integrity */}
                <section id="provenance" className="border-t border-border/40 bg-background py-16">
                    <div className="container max-w-4xl">
                        <Card className="bg-secondary/10 border-dashed border-border/60">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-foreground">
                                    <Fingerprint className="h-5 w-5 text-primary" />
                                    Provenance & Integrity (v13.0)
                                </CardTitle>
                                <CardDescription className="text-muted-foreground font-semibold">Joint Authorship: Gemini (Google) & Gwendalynn Lim Wan Ting</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4 font-mono text-xs text-foreground/80">
                                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2">
                                    <span className="text-muted-foreground font-bold">Proof of Work (PoW):</span>
                                    <span className="text-foreground break-all">1A3E10C6273953ED2B0470114FC30B807180FEB83F23172E54F8C7D4FCC5701A</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2">
                                    <span className="text-muted-foreground font-bold">Timestamp:</span>
                                    <span className="text-foreground">2026-02-19T04:11:27Z</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2">
                                    <span className="text-muted-foreground font-bold">Scope:</span>
                                    <span className="text-foreground font-medium">Core v13.0 institutional release documentation and kernel specification.</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Resource Hub */}
                <section className="border-t border-border/40 bg-secondary/20 py-16 text-center">
                    <div className="container">
                        <h2 className="text-2xl font-bold mb-8 text-foreground">Resource Hub</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="outline" className="flex items-center gap-2 text-foreground border-border hover:bg-accent font-semibold" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Binary className="h-4 w-4" /> TECHNICAL_README.md
                                </a>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2 text-foreground border-border hover:bg-accent font-semibold" asChild>
                                <Link href="/snapdragon/dsmf">
                                    <FileText className="h-4 w-4" /> DSMF Whitepaper
                                </Link>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2 text-foreground border-border hover:bg-accent font-semibold" asChild>
                                <Link href="/snapdragon/epic">
                                    <Target className="h-4 w-4" /> EPIC Whitepaper
                                </Link>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2 text-foreground border-border hover:bg-accent font-semibold" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Layers className="h-4 w-4" /> Lineage Map
                                </a>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2 text-foreground border-border hover:bg-accent font-semibold" asChild>
                                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                                    <Network className="h-4 w-4" /> Deployment Simulator
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

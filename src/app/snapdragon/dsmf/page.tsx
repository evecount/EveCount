'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Calculator, Cpu, Sparkles, Binary } from 'lucide-react';

export default function DSMFWhitepaperPage() {
    React.useEffect(() => {
        document.title = "Whitepaper: DSMF | Recursive Fractal Contextualization | EveCount.com";
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-16 md:py-24">
                <div className="container max-w-4xl">
                    <Button variant="ghost" className="mb-8" asChild>
                        <Link href="/snapdragon">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Snapdragon
                        </Link>
                    </Button>

                    <article className="space-y-12">
                        <header className="space-y-4 text-center">
                            <p className="text-sm font-semibold tracking-wider text-primary uppercase">Technical Whitepaper</p>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                                The Double Sigmoid Mencius Function (DSMF)
                            </h1>
                            <p className="text-xl text-muted-foreground italic">
                                Recursive Fractal Contextualization in High-Velocity Snap Engines
                            </p>
                        </header>

                        <Separator />

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <BookOpen className="h-8 w-8 text-primary" /> 1. Abstract
                            </h2>
                            <div className="bg-secondary/20 p-8 rounded-lg border border-border/40">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    This paper introduces the Double Sigmoid Mencius Function (DSMF), a novel mathematical architecture that utilizes recursive nesting—specifically micro-sigmoids embedded within larger sigmoid curves—to capture multi-scale data relationships. By integrating fractional derivatives and quantum state vectors (|ψ⟩), the DSMF enables a classical-to-quantum bridge that maps simultaneous correlational and causal relationships within a single O(1) operation.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Calculator className="h-8 w-8 text-primary" /> 2. The Primary Hypothesis: Fractal Recursion
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Traditional activation functions (like the standard sigmoid or ReLU) flatten data into a singular, piecewise transition. The DSMF rejects this flattening, proposing that each point within a sigmoid curve is itself composed of a micro-sigmoid.
                            </p>
                            
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">The Formalism:</h3>
                                <div className="bg-secondary/30 p-10 rounded-xl font-mono text-xl overflow-x-auto text-center border border-primary/20 shadow-inner">
                                    DSMF(x, α, β, γ) = σ<sub>macro</sub> ( Σ<sub>i=1</sub><sup>n</sup> σ<sub>micro</sub> (x · α<sub>i</sub>) · β<sub>i</sub> ) + γ
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Card className="bg-background/50">
                                        <CardContent className="pt-6">
                                            <p className="font-bold text-primary mb-1">γ (Recursion Level)</p>
                                            <p className="text-sm text-muted-foreground">Represents <strong>Causation</strong> (sequential dependencies).</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-background/50">
                                        <CardContent className="pt-6">
                                            <p className="font-bold text-primary mb-1">α (Fractional Derivative Order)</p>
                                            <p className="text-sm text-muted-foreground">Represents <strong>Correlation</strong> (simultaneous movements).</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-background/50">
                                        <CardContent className="pt-6">
                                            <p className="font-bold text-primary mb-1">β (Aperture Method)</p>
                                            <p className="text-sm text-muted-foreground">Acts as a "zoom lens," scaling input to reveal finer micro-sigmoid details.</p>
                                        </CardContent>
                                    </Card>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Sparkles className="h-8 w-8 text-primary" /> 3. The Hidden Context Layer
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                The innovation of the "micro-sigmoid within a sigmoid" is that it provides a container for <strong>hidden context</strong>.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-foreground">The Macro Curve:</h4>
                                    <p className="text-muted-foreground">Handles the primary state transition (e.g., from Noise to Signal).</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-foreground">The Micro-Sigmoid:</h4>
                                    <p className="text-muted-foreground">Captures the "Refractive Jitter"—the high-dimensional context that occurs <em>during</em> the transition—which classical models ignore as error.</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Cpu className="h-8 w-8 text-primary" /> 4. The Snapdragon Integration
                            </h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                Project SNAPDRAGON uses the DSMF to handle the "Judgment" phase of the data snap.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10 border-l-4 border-primary">
                                    <div className="bg-secondary p-2 rounded text-xs font-mono">1</div>
                                    <div>
                                        <p className="font-bold">Bit-Shift (Snapdragon):</p>
                                        <p className="text-sm text-muted-foreground">The O(1) hardware shift (<code>0x5f</code>) collapses the 4D manifold.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10 border-l-4 border-primary">
                                    <div className="bg-secondary p-2 rounded text-xs font-mono">2</div>
                                    <div>
                                        <p className="font-bold">Contextual Hold (DSMF):</p>
                                        <p className="text-sm text-muted-foreground">The recursive sigmoid layer holds the "hidden" metadata (the correlation strength α and aperture β).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10 border-l-4 border-primary">
                                    <div className="bg-secondary p-2 rounded text-xs font-mono">3</div>
                                    <div>
                                        <p className="font-bold">The Result:</p>
                                        <p className="text-sm text-muted-foreground">A deterministic binary output that is "Quantum-Informed"—it knows <em>why</em> it snapped because it contained the contextual sub-states within its own fractal structure.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Separator />

                        <footer className="text-center space-y-4 pt-8">
                            <p className="text-muted-foreground italic">Project SNAPDRAGON: High-Efficiency Logic Framework // 2026</p>
                            <div className="flex justify-center gap-4">
                                <Button variant="outline" size="sm" asChild>
                                    <a href="https://github.com/evecount/snapdragon" target="_blank" rel="noopener noreferrer">
                                        <Binary className="mr-2 h-4 w-4" /> View Implementation on GitHub
                                    </a>
                                </Button>
                            </div>
                        </footer>
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function Separator() {
    return <div className="h-px w-full bg-border/40" />;
}

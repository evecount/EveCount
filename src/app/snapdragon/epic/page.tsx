'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Layers, ShieldCheck, Activity, Target, Network } from 'lucide-react';

export default function EPICWhitepaperPage() {
    React.useEffect(() => {
        document.title = "Whitepaper: EPIC | Entropic Packing Configuration | EveCount.com";
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
                                EPIC: Entropic Packing Configuration
                            </h1>
                            <p className="text-xl text-muted-foreground italic">
                                Geometric Analysis of Systemic Coherence and Failure
                            </p>
                        </header>

                        <Separator />

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <BookOpen className="h-8 w-8 text-primary" /> 1. Abstract
                            </h2>
                            <div className="bg-secondary/20 p-8 rounded-lg border border-border/40">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    EPIC (Entropic Packing Configuration) is the diagnostic layer of the Project Snapdragon ecosystem. It analyzes complex dynamics by mapping a system's temporal evolution onto a geometric representation. By converting the "arc length" of a system's state trajectory into a static geometric structure—specifically <strong>circle configurations</strong>—EPIC can identify systemic decoherence and the state of <strong>Systemic Operational Futility</strong>.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Layers className="h-8 w-8 text-primary" /> 2. The Mapping Engine: Integration with DSMF
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                EPIC relies on the Double Sigmoid Mencius Function (DSMF) as its transformation engine to bridge time-series data and geometric state:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">Input:</p>
                                        <p className="text-muted-foreground">The high-velocity rate of state change (Δψ) from the Snapdragon Kernel.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">Transformation:</p>
                                        <p className="text-muted-foreground">The DSMF uses its recursive, fractal structure to translate these dynamics into specific geometric parameters: position (x, y), curvature (r), and tangency (ω).</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">Output:</p>
                                        <p className="text-muted-foreground">A geometric configuration drawing from Spinor geometry and circle packing analogies that represents the operational "health" of the system.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Activity className="h-8 w-8 text-primary" /> 3. The Diagnostic Metric: Coordination Number Distribution
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                EPIC identifies inefficiency by comparing a live system to a baseline of "perfect" order.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="bg-background/50">
                                    <CardHeader>
                                        <CardTitle className="text-lg">Target Sub-Manifold</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">EPIC excludes the primary operational signals to focus on the marginal areas where noise and fragmentation manifest.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-background/50">
                                    <CardHeader>
                                        <CardTitle className="text-lg">The EPIC Metric (η)</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Measured by the Coordination Number (Z) distribution. Deviation from the ideal baseline quantifies entropy or wasted effort.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <ShieldCheck className="h-8 w-8 text-primary" /> 4. Systemic Operational Futility
                            </h2>
                            <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-lg">
                                <h3 className="text-xl font-bold text-foreground mb-4">Predicting Failure Before It Occurs</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    EPIC detects geometric patterns where a task is expending resources in a manner mathematically indistinguishable from circular logic or processing stagnation (behavioral variance). This allows for <strong>real-time resource reallocation</strong> by identifying systemic failure before it manifests as an overt crash or timeout.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Target className="h-8 w-8 text-primary" /> 5. The Diagnostic Interface
                            </h2>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold">5.1. The Isolation Filter</h4>
                                    <p className="text-muted-foreground">Analysis prioritizes the sub-manifold of residual noise to identify early-stage decoherence, excluding primary data clusters.</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold">5.2. Coordination Number (Z) Verification</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <li className="p-4 rounded border border-border/40 bg-background/50">
                                            <p className="font-bold">Ordered State:</p>
                                            <p className="text-sm text-muted-foreground">Sharply peaked distribution (e.g., Z=3 or Z=6), reflecting high-symmetry.</p>
                                        </li>
                                        <li className="p-4 rounded border border-border/40 bg-background/50">
                                            <p className="font-bold">Futility State:</p>
                                            <p className="text-sm text-muted-foreground">Distribution becomes randomized or flat, indicating loss of logical structure.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-semibold">5.3. Reallocation Protocols</h4>
                                    <p className="text-muted-foreground">When thresholds are exceeded, the system triggers:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="p-4 bg-secondary/20 rounded">
                                            <p className="font-bold text-xs uppercase tracking-wider mb-1">Step 1</p>
                                            <p className="text-sm">Process Interruption</p>
                                        </div>
                                        <div className="p-4 bg-secondary/20 rounded">
                                            <p className="font-bold text-xs uppercase tracking-wider mb-1">Step 2</p>
                                            <p className="text-sm">Diagnostic Logging</p>
                                        </div>
                                        <div className="p-4 bg-secondary/20 rounded">
                                            <p className="font-bold text-xs uppercase tracking-wider mb-1">Step 3</p>
                                            <p className="text-sm">Resource Reallocation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Network className="h-8 w-8 text-primary" /> 6. The Unified Pipeline Architecture
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                The integration of EPIC completes the sovereign decision stack:
                            </p>
                            <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                                <li><strong className="text-foreground">Snapdragon (Velocity):</strong> High-speed bit-level signal extraction.</li>
                                <li><strong className="text-foreground">DSMF (Context):</strong> Recursive depth providing causal and contextual framing.</li>
                                <li><strong className="text-foreground">EPIC (Validation):</strong> Geometric observation providing systemic verification.</li>
                            </ol>
                            <p className="text-lg font-semibold text-foreground mt-6">
                                "Without EPIC, the Snapdragon result remains an unverified approximation. With EPIC, it becomes a documented verification of truth."
                            </p>
                        </section>

                        <Separator />

                        <footer className="text-center space-y-4 pt-8">
                            <p className="text-muted-foreground italic">Project SNAPDRAGON: Authorized for Future-State Deployment // v13.0 [Institutional Release]</p>
                            <div className="flex justify-center gap-4">
                                <Button variant="outline" size="sm" asChild>
                                    <a href="https://github.com/evecount/snapdragon" target="_blank" rel="noopener noreferrer">
                                        <Target className="mr-2 h-4 w-4" /> View Implementation on GitHub
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

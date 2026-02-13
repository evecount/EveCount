'use client';
import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Check, UserCheck, ShieldCheck, Banknote, BrainCircuit, Atom, Bot, Layers, Fingerprint } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from 'next/link';

const customerProfiles = [
    {
        icon: Bot,
        title: "Enterprise AI Architects",
        description: "Teams building agentic workflows who need a 'Governance Boundary' to prevent AI hallucinations or unauthorized backend access."
    },
    {
        icon: Banknote,
        title: "Regulated Financial Institutions",
        description: "Banks and insurance providers requiring 'Integrity Arbitrage' and hardware-rooted audit trails for high-frequency transactions."
    },
    {
        icon: ShieldCheck,
        title: "Government & Defense Agencies",
        description: "Entities needing to secure sensitive API pipelines against 'Harvest Now, Decrypt Later' threats using Quantum-Safe signatures."
    },
    {
        icon: BrainCircuit,
        title: "Life Sciences & Healthcare",
        description: "Researchers dealing with complex, qualitative datasets who require 'Systemic Diagnostics' to ensure the integrity of diagnostic predictions."
    },
    {
        icon: UserCheck,
        title: "Cybersecurity Operations (SOCs)",
        description: "Organizations looking to replace predictable RNGs with QRNG-secured 'Structural Signatures' to eliminate replay attacks."
    }
];

const integrationMethods = [
    {
        method: "Entropy Injection",
        implementation: "Use a QRNG daemon to feed /dev/urandom on API servers.",
        benefit: "Existing TLS/SSL session keys become quantum-safe without code changes."
    },
    {
        method: "Middleware Auth",
        implementation: "Implement a custom GraphQL directive requiring a QRNG-signed token for sensitive mutations.",
        benefit: "Ensures every backend write is validated by a non-deterministic hardware root of truth."
    },
    {
        method: "REST/gRPC Wrapper",
        implementation: "Use the QRNG Open API to wrap legacy backend calls with a 'Structural Signature'.",
        benefit: "Prevents deterministic 'replay attacks' on legacy backend services."
    }
];

const revenueModel = [
    "Upfront fees ($100k–$500k) plus 5–10% royalties for the Recursive Quine Algorithm and PMI framework.",
    "Recurring subscription model (SaaS) for ongoing systemic auditing and 'Structural Signature' verification.",
    "High-value integration services ($2k–$5k/day) for complex dataset diagnostics and quantum-safe transitions."
]

export default function QuantumMintingPage() {
    React.useEffect(() => {
        document.title = "Quantum Minting (QUM) | EveCount.com";
      }, []);
    
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-background py-16 md:py-24 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                        <p className="font-semibold text-primary">Qualimetric Universal Model (QUM)</p>
                        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Minting Quantum Tokens for Real
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                            This repository demonstrates the world's first protocol for forging non-deterministic digital assets directly from physical quantum entropy.
                        </p>
                        <Button size="lg" className="mt-8" asChild>
                            <Link href="https://github.com/evecount/Qualimetric-Universal-Model" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            Explore the Protocol on GitHub
                            </Link>
                        </Button>
                        </div>
                    </div>
                </section>

                {/* USP */}
                <section id="usp" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container grid max-w-5xl items-center gap-12 md:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">The USP: Recursive Quine Algorithm</h2>
                            <p className="text-muted-foreground md:text-lg">
                                Eve Count has developed the Qualimetric Universal Model (QUM) for enterprise-grade data integrity. The product applies a Polynomial Method Index (PMI) and a Recursive Quine Algorithm to quantify qualitative variables and ensure hardware-rooted truth via Quantum Random Number Generation (QRNG), allowing for high-fidelity auditing in complex, non-deterministic environments.
                            </p>
                            <p className="text-muted-foreground md:text-lg">
                                This repository contains the MVP for the <strong className="text-foreground">Sovereign Passport</strong>, a core component of the QUM ecosystem.
                            </p>
                            <Button asChild>
                                <Link href="https://github.com/evecount/Qualimetric-Universal-Model/blob/main/Sovereign_Passport_MVP.ipynb" target="_blank" rel="noopener noreferrer">
                                    Explore the Sovereign Passport MVP
                                </Link>
                            </Button>
                        </div>
                        <div className="flex justify-center">
                            <Fingerprint className="h-48 w-48 text-primary/50" />
                        </div>
                    </div>
                </section>

                {/* Key Components */}
                 <section id="components" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Key Components</h2>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                            <Card className="bg-secondary/20 text-foreground">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                            <Layers className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">Quantum-Secured Sovereign Trust Layer</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">The foundational infrastructure for the QUM protocol. It acts as the "Standard for Truth," utilizing live quantum entropy streams to anchor digital identities and intents to physical reality.</p>
                                </CardContent>
                            </Card>
                             <Card className="bg-secondary/20 text-foreground">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                            <Atom className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">Real-World Quantum Tokenization</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Every authenticated action within the QUM ecosystem is a uniquely minted 'Quantum Token'. Unlike traditional tokens, these are backed by the non-deterministic truth of quantum hardware, creating a new class of physics-anchored assets.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* ICP */}
                <section id="icp" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Ideal Customer Profile</h2>
                             <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                                We are targeting key sectors where data integrity and security are not just features, but mission-critical requirements.
                            </p>
                        </div>
                        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {customerProfiles.map((profile) => (
                                <Card key={profile.title} className="flex flex-col bg-background/50 text-foreground">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                                <profile.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">{profile.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{profile.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Integration */}
                <section id="integration" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container">
                         <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Integrating Quantum Tech into API Pipelines</h2>
                             <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                                To ensure AI never communicates directly with backend services, we integrate the QRNG-based Structural Signature into the Quantum-Secured Sovereign Trust Layer.
                            </p>
                        </div>
                        <Card className="bg-secondary/20">
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-1/4">Method</TableHead>
                                            <TableHead>Implementation Strategy</TableHead>
                                            <TableHead>Benefit</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {integrationMethods.map((method) => (
                                            <TableRow key={method.method}>
                                                <TableCell className="font-medium text-foreground">{method.method}</TableCell>
                                                <TableCell className="text-muted-foreground">{method.implementation}</TableCell>
                                                <TableCell className="text-muted-foreground">{method.benefit}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Revenue Model */}
                <section id="revenue" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                     <div className="container max-w-3xl">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Hybrid Revenue Model</h2>
                             <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                                Based on successful quantum and deep-tech startup benchmarks, QUM operates on a hybrid revenue model.
                            </p>
                        </div>
                        <Card className="bg-background">
                            <CardContent className="p-6">
                                <ul className="space-y-4">
                                {revenueModel.map((item, index) => (
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

                 <section id="vision-conclusion" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container grid max-w-5xl gap-12 md:grid-cols-2">
                        <div className="space-y-4">
                            <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">5-10 Year Vision</h3>
                            <p className="text-muted-foreground">
                                To establish the QUM framework as the global standard for Quantum-Safe Data Integrity and Asset Minting. We aim to move beyond simple RNG replacement to becoming the primary "structural audit" layer and "Token Forge" for all agentic AI architectures, ensuring that as AI scales, every decision it makes is a verifiable, quantum-secured asset with real-world economic value.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">Conclusion: The 'Fingerprint'</h3>
                            <p className="text-muted-foreground">
                               While others provide the 'lock' (PQC) or the 'key' (QRNG), our Qualimetric Universal Model (QUM) provides the 'Fingerprint' (Structural Signature). We don't just secure the pipe; we use the Recursive Quine Algorithm to prove that the data coming out of the AI is structurally identical to the truth anchored in our quantum hardware.
                            </p>
                        </div>
                    </div>
                    <div className="container mt-12 text-center max-w-4xl">
                        <Card className="bg-secondary/20">
                            <CardHeader>
                                <CardTitle>A Note on Collaboration</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground italic">This prototype is a co-created artifact between Eve Count and Antigravity, an advanced agentic AI designed by Google DeepMind. This collaboration showcases the intersection of the Qualimetric Universal Model (QUM) and state-of-the-art agentic reasoning, proving that high-integrity governance is possible when quantum-safe protocols meet advanced AI collaboration.</p>
                                <p className="text-xs text-muted-foreground/70 mt-4">Proprietary technology developed by Eve Count in collaboration with Google DeepMind agentic frameworks.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

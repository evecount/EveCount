'use client';

import React from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Check, ShieldCheck, Zap, Share2, Network, Radio, Lock, Binary, Cpu } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from 'next/link';

const communicationFeatures = [
    {
        icon: ShieldCheck,
        title: "Unbreakable QKD",
        description: "Quantum Key Distribution (QKD) ensures that any attempt to intercept data is detected instantly by the laws of quantum mechanics."
    },
    {
        icon: Zap,
        title: "Recursive Wave-Collapse",
        description: "Our proprietary algorithm that monitors the 'Snapdragon' effect—where observation collapses the wave function, triggering an immediate security protocol."
    },
    {
        icon: Share2,
        title: "Entanglement Sync",
        description: "Synchronizing quantum states across distributed nodes to create a unified, hardware-rooted trust layer for global communications."
    }
];

const customerProfiles = [
    {
        icon: Network,
        title: "Critical Infrastructure",
        description: "Power grids and water systems requiring protection against sophisticated nation-state actors."
    },
    {
        icon: Lock,
        title: "Central Banking Systems",
        description: "Financial networks needing to secure inter-bank settlements with zero-trust quantum foundations."
    },
    {
        icon: Radio,
        title: "Aerospace & Defense",
        description: "Securing satellite-to-ground links against 'Harvest Now, Decrypt Later' threats."
    }
];

const implementationStrategies = [
    {
        method: "Snapdragon Connect",
        implementation: "A software wrapper for existing TLS/SSL stacks that injects quantum-generated keys.",
        benefit: "Instant upgrade to quantum-safe communication without changing existing applications."
    },
    {
        method: "Hardware Entanglement",
        implementation: "Physical deployment of QKD nodes at data center points-of-presence (PoP).",
        benefit: "Physical layer security that cannot be bypassed by software exploits."
    }
];

export default function SnapdragonPage() {
    React.useEffect(() => {
        document.title = "Snapdragon: Quantum Communication | EveCount.com";
      }, []);
    
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-background py-16 md:py-24 lg:py-32">
                    <div className="container">
                        <div className="mx-auto max-w-4xl text-center">
                        <p className="font-semibold text-primary">The Snapdragon Protocol</p>
                        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Communication Guaranteed <br /> by the Laws of Physics
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                            Snapdragon is our next-generation communication protocol designed to eliminate the possibility of eavesdropping through the power of quantum entanglement.
                        </p>
                        <Button size="lg" className="mt-8" asChild>
                            <Link href="/apply">
                            <Zap className="mr-2 h-5 w-5" />
                            Secure Your Network
                            </Link>
                        </Button>
                        </div>
                    </div>
                </section>

                {/* Core USP */}
                <section id="usp" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container grid max-w-5xl items-center gap-12 md:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">The Snapdragon Effect</h2>
                            <p className="text-muted-foreground md:text-lg">
                                In classical communication, an eavesdropper can copy data without being noticed. In the Snapdragon Protocol, we utilize **entangled particles**. If an observer attempts to measure the data, the quantum state collapses.
                            </p>
                            <p className="text-muted-foreground md:text-lg">
                                This is not just security; it is a **Sentient Defense**. The protocol knows it is being watched and responds instantly, making it the most robust communication layer in existence.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Binary className="h-48 w-48 text-primary/30" />
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container">
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                            {communicationFeatures.map((feature) => (
                                <Card key={feature.title} className="bg-secondary/20 text-foreground">
                                    <CardHeader>
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                                                <feature.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ICP */}
                <section id="icp" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Ideal Deployment Scenarios</h2>
                             <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                                We are deploying Snapdragon for organizations where data integrity is the only option.
                            </p>
                        </div>
                        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
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
                
                {/* Implementation */}
                <section id="integration" className="border-t border-border/40 bg-background py-16 md:py-24">
                    <div className="container">
                         <div className="mb-12 text-center">
                            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Architecting the Secure Pipe</h2>
                             <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                                Snapdragon integrates into modern architectures as a dedicated security layer.
                            </p>
                        </div>
                        <Card className="bg-secondary/20 max-w-5xl mx-auto">
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-1/4">Method</TableHead>
                                            <TableHead>Implementation</TableHead>
                                            <TableHead>Strategic Benefit</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {implementationStrategies.map((method) => (
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

                 <section id="vision-conclusion" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
                    <div className="container grid max-w-5xl gap-12 md:grid-cols-2">
                        <div className="space-y-4">
                            <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">The Quantum Backbone</h3>
                            <p className="text-muted-foreground">
                                Our goal is to build the world's most secure communication backbone. Snapdragon is not just a product; it's a foundational protocol for the next era of computing, where every bit of data is anchored to physical reality.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">Ready for Integration</h3>
                            <p className="text-muted-foreground">
                                Snapdragon is currently in pilot phase with select government and financial partners. We are now opening the protocol for integration with high-scale enterprise API pipelines.
                            </p>
                            <Button variant="outline" asChild>
                                <Link href="/apply">Request Pilot Access</Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

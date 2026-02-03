import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LayoutGrid, Users, BookOpen, Puzzle, Github, Target, Layers, Atom, BrainCircuit, FlaskConical, TrendingUp, Filter, Truck, Combine, Shield, GaugeCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Training System | Building Quantum Practitioners",
  description: "Eve Count's Quantum Hybrid Training System is designed to solve the talent gap. Explore our open-source workbooks, including how to build your first quantum circuit, and become a quantum practitioner.",
};

const visionElements = [
    {
        icon: LayoutGrid,
        title: "Project Showcase & Discovery",
        description: "A curated showcase of projects from the Quantum Research Workshop. Each project features rich metadata, source code links, and search/filter capabilities to easily discover innovations in QKD, QML, and more.",
    },
    {
        icon: Users,
        title: "Community & Collaboration",
        description: "Optional profiles for researchers and students to highlight their expertise. We foster knowledge exchange through project-specific discussions, with a future vision for collaboration matching.",
    },
    {
        icon: BookOpen,
        title: "Resource & Learning Hub",
        description: "Direct access to our workshop modules (Firebase Speedrun, Quantum Research 101). We provide curated learning paths, tool guides, and a repository of quantum datasets to accelerate learning.",
    },
    {
        icon: Puzzle,
        title: "Workshop Integration",
        description: "A seamless process for workshop participants to submit their projects for showcasing. We aim to integrate peer feedback and impact measurement to track community growth and engagement.",
    },
];


export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                The Quantum Hybrid Training System
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                We are solving the quantum talent gap. Our open-source "Quantum Research 101" repo is a hybrid training system designed to create the next wave of quantum practitioners. Explore our workbooks, like our latest on building your first quantum circuit, and start learning by building.
              </p>
               <Button size="lg" className="mt-8" asChild>
                <Link href="https://github.com/evecount/quantum-research-101" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Explore the Quantum Circuit Workbook
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="vision" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Key Vision Elements</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                        Our platform is built on four core pillars to foster learning, collaboration, and discovery.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                    {visionElements.map((element) => (
                        <Card key={element.title} className="bg-background/50 text-foreground">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                        <element.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{element.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{element.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="ideas" className="border-t border-border/40 bg-background py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Example Tracks & Ideas</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                        Our open-source repo is a launchpad. Here are some project tracks you can explore to start building and learning.
                    </p>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <Atom className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Build a Quantum Circuit</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Our hands-on workbook teaches you how to build a real quantum circuit. Learn the fundamentals of quantum gates, superposition, and entanglement in a practical way. It's the perfect starting point for any aspiring quantum practitioner.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <BrainCircuit className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Quantum Machine Learning</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Explore the intersection of AI and quantum computing. Create a project that uses a quantum algorithm (like a Quantum Support Vector Machine) for a complex classification task. Quantum parallelism can offer speedups for certain machine learning problems by exploring high-dimensional data in ways classical computers can't.</p>
                             <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What Alan Turing would have built.</p>
                        </CardContent>
                    </Card>
                     <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <Combine className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Building a Synthetic Human</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">This track focuses on creating a high-fidelity dataset of human intuition and behavior. This 'synthetic human' data is then broadcast to our agentic systems, providing them with a constant stream of common-sense reasoning, making their decisions more robust and aligned with human values.</p>
                            <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What Daniel Kahneman would have built.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <FlaskConical className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Computational Chemistry</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Simulating molecules is notoriously difficult for classical computers. This project could use quantum algorithms to calculate molecular ground states—a fundamental quantum mechanical problem—which is crucial for drug discovery and materials science. Develop a cloud-native app that models molecular structures.</p>
                            <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What Marie Curie would have built.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Quantum Finance Models</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Use quantum-inspired algorithms for complex financial modeling, like option pricing. Quantum computing's ability to explore vast possibility spaces can help find optimal trading strategies or assess risk in ways that are intractable for classical computers. Connect it to a real-time data feed and visualize risk profiles.</p>
                            <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What John von Neumann would have built.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <Filter className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">AI Lead Scoring Engine</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Build an intelligent lead scoring system. A Quantum Machine Learning (QML) model could identify subtle patterns in vast customer datasets that classical algorithms might miss. Use GenAI to enrich the data, then apply a quantum classifier to predict which prospects are most likely to convert, optimizing the sales pipeline.</p>
                            <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What a Y Combinator founder would build.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <Truck className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Supply Chain Optimization</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Tackle a classic hard problem: the Traveling Salesperson. Build an application that calculates the most efficient route for complex logistics. Quantum annealing concepts are perfectly suited for such optimization problems, finding near-optimal solutions in a vast search space that would overwhelm classical computers.</p>
                            <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What George Dantzig would have built.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <Combine className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Multimodal Diagnostic Assistant</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Build an AI that synthesizes multiple data types—like text-based symptoms, medical images, and audio clips—to form a more holistic preliminary diagnosis. Quantum Machine Learning can be key here. QML algorithms could analyze the incredibly complex, high-dimensional data created by fusing these different inputs, potentially uncovering subtle, non-linear relationships between symptoms that classical models would miss.</p>
                            <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What Rosalind Franklin would have built.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Real-time Anomaly Detection</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Develop a system that processes high-volume data streams, like live video or network traffic, to identify anomalous patterns in real time. This is a classic challenge where speed is critical. Quantum-enhanced perception could process vast amounts of data in parallel, allowing the system to detect faint signals or complex deviations from normal behavior that would be computationally prohibitive for classical systems.</p>
                            <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What Grace Hopper would have built.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20 text-foreground">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <GaugeCircle className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-foreground">Low-Latency Arbitrage Engine</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Create a financial engine that identifies and acts on market arbitrage opportunities in microseconds. This is a high-frequency optimization problem. Quantum algorithms like QAOA excel at rapidly exploring a massive number of potential trading strategies to find the optimal one, enabling execution at speeds impossible for classical computers, capturing value before it vanishes.</p>
                            <p className="mt-4 text-right text-xs italic text-muted-foreground/80">&mdash; What Richard Feynman would have built.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="technical" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
            <div className="container grid max-w-5xl gap-12 md:grid-cols-2">
                <div>
                    <h3 className="font-headline flex items-center gap-3 text-2xl font-bold tracking-tighter sm:text-3xl"><Layers className="h-7 w-7 text-primary"/> Technical Stack</h3>
                    <p className="mt-4 text-muted-foreground">
                        We leverage a modern, scalable tech stack to power our platform. The frontend is built with Next.js and React for a dynamic user experience, while Firebase provides the robust backend for authentication, data storage (Firestore), and serverless functions.
                    </p>
                </div>
                <div>
                    <h3 className="font-headline flex items-center gap-3 text-2xl font-bold tracking-tighter sm:text-3xl"><Target className="h-7 w-7 text-primary"/> Target Audience</h3>
                    <p className="mt-4 text-muted-foreground">
                        Our platform serves quantum computing students, researchers, educators adapting our materials, and industry professionals seeking talent or insights into the latest developments in quantum research and its practical applications.
                    </p>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

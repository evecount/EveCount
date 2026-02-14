import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { LayoutGrid, Users, BookOpen, Puzzle, Github, Target, Layers, Atom, BrainCircuit, FlaskConical, TrendingUp, Filter, Truck, Combine, ShieldCheck, GaugeCircle, Warehouse, Router } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { DynamicBlochSphere } from "@/components/DynamicBlochSphere";
import { IdeaBlueprintChart } from "@/components/IdeaBlueprintChart";

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

const exampleTracks = [
    {
        icon: Atom,
        title: "Build a Quantum Circuit",
        description: "Our hands-on workbook teaches you how to build a real quantum circuit. Learn the fundamentals of quantum gates, superposition, and entanglement in a practical way. It's the perfect starting point for any aspiring quantum practitioner.",
        authorQuote: null,
    },
    {
        icon: BrainCircuit,
        title: "Quantum Machine Learning",
        description: "Explore the intersection of AI and quantum computing. Create a project that uses a quantum algorithm (like a Quantum Support Vector Machine) for a complex classification task. Quantum parallelism can offer speedups for certain machine learning problems by exploring high-dimensional data in ways classical computers can't.",
        authorQuote: "What Alan Turing would have built."
    },
    {
        icon: Combine,
        title: "Building a Synthetic Human",
        description: "This track focuses on creating a high-fidelity dataset of human intuition and behavior. This 'synthetic human' data is then broadcast to our agentic systems via `broadcastpeople.com`, providing them with a constant stream of common-sense reasoning via endpoints like `api.whatwould.work`, making their decisions more robust and aligned with human values.",
        authorQuote: "What Daniel Kahneman would have built."
    },
    {
        icon: FlaskConical,
        title: "Computational Chemistry",
        description: "Simulating molecules is notoriously difficult for classical computers. This project could use quantum algorithms to calculate molecular ground states—a fundamental quantum mechanical problem—which is crucial for drug discovery and materials science. Develop a cloud-native app that models molecular structures.",
        authorQuote: "What Marie Curie would have built."
    },
    {
        icon: TrendingUp,
        title: "Quantum Finance Models",
        description: "Use quantum-inspired algorithms for complex financial modeling, like option pricing. Quantum computing's ability to explore vast possibility spaces can help find optimal trading strategies or assess risk in ways that are intractable for classical computers. Connect it to a real-time data feed and visualize risk profiles.",
        authorQuote: "What John von Neumann would have built."
    },
    {
        icon: Filter,
        title: "AI Lead Scoring Engine",
        description: "Build an intelligent lead scoring system. A Quantum Machine Learning (QML) model could identify subtle patterns in vast customer datasets that classical algorithms might miss. Use GenAI to enrich the data, then apply a quantum classifier to predict which prospects are most likely to convert, optimizing the sales pipeline.",
        authorQuote: "What a Y Combinator founder would have built."
    },
    {
        icon: Truck,
        title: "Supply Chain Optimization",
        description: "Tackle a classic hard problem: the Traveling Salesperson. Build an application that calculates the most efficient route for complex logistics. Quantum annealing concepts are perfectly suited for such optimization problems, finding near-optimal solutions in a vast search space that would overwhelm classical computers.",
        authorQuote: "What George Dantzig would have built."
    },
    {
        icon: Combine,
        title: "Multimodal Diagnostic Assistant",
        description: "Build an AI that synthesizes multiple data types—like text-based symptoms, medical images, and audio clips—to form a more holistic preliminary diagnosis. Quantum Machine Learning can be key here. QML algorithms could analyze the incredibly complex, high-dimensional data created by fusing these different inputs, potentially uncovering subtle, non-linear relationships between symptoms that classical models would miss.",
        authorQuote: "What Rosalind Franklin would have built."
    },
    {
        icon: ShieldCheck,
        title: "Real-time Anomaly Detection",
        description: "Develop a system that processes high-volume data streams, like live video or network traffic, to identify anomalous patterns in real time. This is a classic challenge where speed is critical. Quantum-enhanced perception could process vast amounts of data in parallel, allowing the system to detect faint signals or complex deviations from normal behavior that would be computationally prohibitive for classical systems.",
        authorQuote: "What Grace Hopper would have built."
    },
    {
        icon: GaugeCircle,
        title: "Low-Latency Arbitrage Engine",
        description: "Create a financial engine that identifies and acts on market arbitrage opportunities in microseconds. This is a high-frequency optimization problem. Quantum algorithms like QAOA excel at rapidly exploring a massive number of potential trading strategies to find the optimal one, enabling execution at speeds impossible for classical computers, capturing value before it vanishes.",
        authorQuote: "What Richard Feynman would have built."
    },
    {
        icon: Warehouse,
        title: "Quantum Warehouse Placement",
        description: "Solve a large-scale facility location problem. Given a map of customers and potential warehouse sites, use a quantum optimization algorithm (like QAOA) to determine the optimal placement of a fixed number of warehouses to minimize average delivery distance and cost. This is a classic NP-hard problem where quantum can shine.",
        authorQuote: "What Jeff Bezos would have built."
    },
    {
        icon: Router,
        title: "Quantum Network Routing",
        description: "Design a model for optimizing data flow in a congested telecommunications network. Use quantum annealing to find the most efficient paths for data packets to travel, minimizing latency and maximizing bandwidth utilization under dynamic load conditions. Visualize the network graph and the shifting optimal routes.",
        authorQuote: "What Vint Cerf would have built."
    }
];


export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
            <div className="container grid items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6 text-center lg:text-left">
                    <p className="font-semibold text-primary">A Workshop by Eve Count</p>
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        The Quantum Hybrid Training System
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0">
                        We are solving the quantum talent gap. Our open-source "Quantum Research 101" repo is a hybrid training system designed to create the next wave of quantum practitioners. Explore our workbooks and start building by building.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://github.com/evecount/quantum-research-101" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            Explore the Quantum Circuit Workbook
                        </Link>
                    </Button>
                </div>
                <div className="flex h-full min-h-[300px] w-full items-center justify-center">
                    <DynamicBlochSphere />
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
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Quantum Opportunity Blueprints</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                        Each potential quantum venture has a unique "fingerprint." We visualize these as dynamic opportunity blueprints, representing the structure and potential of each idea based on synthetic data models.
                    </p>
                </div>
                 <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {exampleTracks.map((track, index) => (
                        <Card key={index} className="flex flex-col bg-secondary/20 text-foreground text-center">
                            <CardHeader>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <track.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="pt-2 text-base">{track.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-1 flex-col items-center justify-center p-2">
                               <IdeaBlueprintChart ideaIndex={index} className="w-full max-w-[150px] mx-auto" />
                            </CardContent>
                            <CardContent className="pt-0">
                               <CardDescription className="text-xs">{track.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
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

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LayoutGrid, Users, BookOpen, Puzzle, Github, Target, Layers, Atom, BrainCircuit, FlaskConical } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Research Hub",
  description: "A central hub for quantum research, innovation, and community engagement, amplifying the efforts of the Quantum Research Workshop.",
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
                Quantum Research & Innovation Hub
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                This is our open-source initiative to empower the next generation of builders. We believe in learning by doing, providing a central hub for quantum research, community engagement, and a launchpad for innovation.
              </p>
               <Button size="lg" className="mt-8" asChild>
                <Link href="https://github.com/evecount/quantum-research-101" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View Master Repo on GitHub
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
                        <Card key={element.title} className="bg-background/50">
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
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                    <Card className="bg-secondary/20">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <Atom className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Quantum Simulators</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Build a web-based simulator for core quantum concepts like entanglement or superposition. Use Firebase for real-time state management and Qiskit or Cirq for the backend logic. This is a great way to visualize complex quantum behaviors.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <BrainCircuit className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Quantum Machine Learning</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Explore the intersection of AI and quantum computing. Create a project that uses a quantum algorithm for a machine learning task, like classification. Use Colab notebooks for experimentation and connect your findings to a web interface.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-secondary/20">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <FlaskConical className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Computational Chemistry</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Develop a cloud-native application that models chemical reactions or molecular structures. This could involve creating an API with serverless functions that runs quantum chemistry simulations and displays the results in a user-friendly frontend.</p>
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

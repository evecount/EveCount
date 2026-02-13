import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, BrainCircuit, Users, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const processSteps = [
  {
    icon: Target,
    title: "1. Define The \"Why\": Vision & Success",
    description: "We start by translating your vision into a clear 'Definition of Done.' We'll ask the 'Magic Wand' question—if it was finished tomorrow, what would you do with it?—and define the single most important KPI you want to change."
  },
  {
    icon: BrainCircuit,
    title: "2. Map The \"What\": Data & Inputs",
    description: "We open the 'black box' of your data. We trace its lineage (where does it live?), assess its quality (how 'clean' is it?), and identify sensitive information to ensure security is built-in from day one."
  },
  {
    icon: Users,
    title: "3. Frame The \"How\": User & Environment",
    description: "We build for the person clicking the buttons. We'll define the primary user persona—are they a tech-savvy power user or someone who needs a 'one-click' solution? And we'll consider the environment, from warehouse phones to boardroom monitors."
  },
  {
    icon: Puzzle,
    title: "4. Set The \"Rules\": Constraints & Integration",
    description: "To prevent surprises, we define the boundaries. What other software must this talk to? Who will maintain it after launch? We create a 'No-Go' zone to ensure we're all on the same page before a single line of code is written."
  }
];

export function Engine() {
  return (
    <section id="engine" className="border-t border-b border-border/40 bg-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Engine: The Bridge Document
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            We bridge the gap between "business speak" and "coder speak." Our process is designed to translate your vision into a concrete technical roadmap, ensuring we build exactly what you need. This is how we build the Bridge Document together.
          </p>
        </div>
        
        <div className="mb-12 text-center">
            <Button size="lg" asChild>
                <Link href="/apply">
                    Start Building Your Bridge Document
                </Link>
            </Button>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {processSteps.map((step) => (
            <Card key={step.title} className="bg-secondary/20 text-foreground">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                            <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

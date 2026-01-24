import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Code, Scale, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Users,
    title: "1. The Foundry Session",
    description: "An intensive, in-person deep-dive to forge the core vision, architecture, and roadmap. We align on first principles and define the mission."
  },
  {
    icon: Code,
    title: "2. AI-Accelerated Build",
    description: "We invest our 'Code, AI, and Architecture.' Our team and your vision merge to rapidly construct a market-ready MVP in record time."
  },
  {
    icon: Scale,
    title: "3. Corporate & IP Foundation",
    description: "While we build, our integrated service partners handle incorporation, legal frameworks, and IP protection to prepare you for institutional scale."
  },
  {
    icon: Rocket,
    title: "4. Go-to-Market Activation",
    description: "With a solid product and foundation, we activate your GTM strategy, secure initial users, and position you for a successful seed round."
  }
];

export function Engine() {
  return (
    <section id="engine" className="border-t border-b border-border/40 bg-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Engine: From Vision to Venture
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            Our proprietary process is built for speed and precision. We don't just fund ideas; we build them into market-ready companies. Here's how.
          </p>
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

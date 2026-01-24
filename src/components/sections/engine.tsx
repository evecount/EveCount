import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Code, Scale, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Users,
    title: "1. You Bring the Vision",
    description: "The process begins with you. In an intensive, in-person Foundry Session, you provide the domain expertise and vision. We provide the architects to forge it into a concrete technical roadmap."
  },
  {
    icon: Code,
    title: "2. We Provide the Engine",
    description: "We act as your dedicated technical co-founder. While our team builds the MVP in stealth, you provide critical feedback and guidance, ensuring the product aligns perfectly with your market insight."
  },
  {
    icon: Scale,
    title: "3. You Make the Decisions",
    description: "A product needs a company. As we build, our partners handle the complex legal and corporate setup, but you make the key decisions, ensuring you are in control and ready for institutional scale."
  },
  {
    icon: Rocket,
    title: "4. You Lead the Venture",
    description: "We launch together. We help you activate your GTM strategy and secure initial users, but you are the founder. We position you to lead the company and confidently pitch for your seed round."
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
            Our process is a partnership. We don't just fund ideas; we build them into market-ready companies alongside you. Here's what to expect.
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

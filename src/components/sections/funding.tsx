'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Code, Scale, Rocket, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useChatbot } from "@/hooks/use-chatbot";

const fundingTiers: {
  icon: LucideIcon;
  title: string;
  description: string;
  timeline: string;
  price: string;
  features: string[];
}[] = [
  {
    icon: Users,
    title: "1. The Foundry Session",
    description: "An intensive, in-person deep-dive to forge the core vision, architecture, and roadmap.",
    timeline: "1-2 Weeks",
    price: "$15k - $25k+",
    features: [
      "In-person strategy workshop",
      "Core architecture design",
      "Technical roadmap & milestones",
      "Initial user personas"
    ],
  },
  {
    icon: Code,
    title: "2. AI-Accelerated Build",
    description: "Our core white-label development service to rapidly construct a market-ready MVP in complete stealth.",
    timeline: "8-12 Weeks",
    price: "$100k - $150k+",
    features: [
      "Full-stack development",
      "AI & GenAI integration",
      "Cloud-native architecture",
      "Weekly progress demos"
    ],
  },
  {
    icon: Scale,
    title: "3. Corporate & IP Foundation",
    description: "While we build, our partners handle incorporation, legal frameworks, and IP protection.",
    timeline: "Continuous",
    price: "Varies",
    features: [
      "Company incorporation",
      "IP protection & patents",
      "Cap table management",
      "Financial bookkeeping setup"
    ],
  },
  {
    icon: Rocket,
    title: "4. GTM Activation",
    description: "Activating your GTM strategy, securing initial users, and positioning for a successful seed round.",
    timeline: "4-6 Weeks",
    price: "$30k - $50k+",
    features: [
      "Brand & messaging strategy",
      "Initial user acquisition",
      "PR & media outreach",
      "Investor pitch deck refinement"
    ],
  }
];

export function Funding() {
  const { setOpen } = useChatbot();

  return (
    <section id="funding" className="bg-background py-16 md:py-24 lg:py-32 border-t border-border/40">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Funding Model
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            We operate on a venture-partnership model, typically taking an equity-equivalent stake for our investment of Code, AI, and Architecture. For partners who prefer a fee-for-service arrangement, the market benchmarks below provide transparency on the value we deliver at an accelerated pace.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {fundingTiers.map((tier) => (
            <Card key={tier.title} className="flex flex-col bg-secondary/20 text-foreground">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <tier.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tier.title}</CardTitle>
                </div>
                 <CardDescription className="text-sm text-muted-foreground h-16">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between pt-0">
                <div>
                    <div className="mb-6">
                        <p className="text-4xl font-bold tracking-tighter">{tier.price}</p>
                        <p className="text-sm text-muted-foreground">{tier.timeline}</p>
                    </div>
                    <ul className="space-y-3 text-sm">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Note: The prices above are illustrative market-rate benchmarks. Our preferred method is to operate as a venture partner for an equity equivalent. We also offer introductory one-off strategy sessions starting at $2k for teams looking to refine their vision before committing to a full Foundry Session.
            </p>
          <Button size="lg" className="mt-6" onClick={() => setOpen(true)}>
            Discuss Your Venture
          </Button>
        </div>
      </div>
    </section>
  );
}

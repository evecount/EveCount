import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Code, Scale, Rocket, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const pricingTiers: {
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

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Our Investment Model
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                We invest our 'Code, AI, and Architecture' at highly accelerated timelines. Below are market benchmarks to provide transparency on the value we deliver.
              </p>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pricingTiers.map((tier) => (
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
                    Note: The prices above are illustrative market-rate benchmarks. Eve Count operates on a venture-partnership model, not a fee-for-service basis. Our investment is our expert execution.
                </p>
              <Button size="lg" asChild className="mt-6">
                <Link href="/#partner-up">Discuss Your Venture</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

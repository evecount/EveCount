import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-border/40 bg-gradient-to-b from-background to-background/80">
      <div className="container py-24 text-center md:py-32 lg:py-48">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We don't invest capital.
            <br />
            <span className="steel-gradient bg-clip-text text-transparent">
              We invest Code, AI, and Architecture.
            </span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground sm:text-xl md:max-w-2xl">
            Traditional VCs give you money to hire developers. Eve Count{" "}
            <span className="font-semibold text-foreground">is</span> the
            developer. We take projects from Vision to Market-Ready MVP in
            record time.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="#ventures">Our Ventures</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#partner-up">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

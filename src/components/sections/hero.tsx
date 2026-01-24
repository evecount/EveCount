"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useChatbot } from "@/hooks/use-chatbot";

export function Hero() {
  const { setOpen } = useChatbot();
  return (
    <section className="border-b border-border/40 bg-gradient-to-b from-background to-background/80">
      <div className="container py-32 text-center md:py-40 lg:py-56">
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
              <Link href="/ventures">Our Ventures</Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => setOpen(true)}>
              Chat with our AI Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

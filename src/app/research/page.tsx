
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Quantum Research 101
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                We believe in learning by doing. The Quantum Research 101 program is our open-source initiative to empower the next generation of builders. It's a hands-on guide to our rapid development methodology, designed for anyone to clone, replicate, and create their own learning systems.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Dive in, fork the repository, and start building. This is where the next wave of innovation begins.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <Link href="https://github.com/evecount/quantum-research-101" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

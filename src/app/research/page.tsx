import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { researchProjects } from "@/lib/research-projects";
import { ResearchCard } from "@/components/research-card";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Community Research
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                A gallery of projects from our collaborative research workshops. Built by the community, for the community.
              </p>
              <p className="mx-auto mt-2 max-w-3xl text-base text-muted-foreground">
                Inspired by the{" "}
                <Link href="https://github.com/evecount/quantum-research-101" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                  Quantum Research 101
                </Link>{" "}
                methodology.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {researchProjects.map((project) => (
                <ResearchCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

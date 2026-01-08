import { ventures } from "@/lib/ventures";
import { ProjectCard } from "@/components/project-card";

export function Portfolio() {
  return (
    <section id="ventures" className="bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Holdings
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            A portfolio of AI-accelerated ventures built from the ground up.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture) => (
            <ProjectCard key={venture.name} venture={venture} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, Plus } from "lucide-react";
import { GeminiIcon } from "@/components/icons/gemini-icon";

export function Engine() {
  return (
    <section id="engine" className="border-t border-b border-border/40 bg-secondary/20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Engine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Our proprietary AI-Human synthesis. The practitioner's vision meets the machine's scale.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <Card className="w-full max-w-sm text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <User className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>The Founder</CardTitle>
              <CardDescription>The Visionary</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-foreground">Courage</p>
            </CardContent>
          </Card>

          <Plus className="h-12 w-12 text-muted-foreground shrink-0" />

          <Card className="w-full max-w-sm text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <GeminiIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>The Architect</CardTitle>
              <CardDescription>Gemini</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-foreground">Data</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Rocket } from "lucide-react";

export function VentureSummary() {
  return (
    <section id="venture-summary" className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Portfolio at a Glance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            We are actively building the future with a diverse portfolio of ventures.
          </p>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-5xl font-extrabold text-foreground">48</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium text-muted-foreground">Work in Progress</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-5xl font-extrabold text-foreground">5</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium text-muted-foreground">Live GTM Activations</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { servicePartners } from "@/lib/services";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Our Venture Partners
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                We don't just build ventures; we build ecosystems. Eve Count works with a curated network of best-in-class providers who act as venture partners alongside us, providing our portfolio companies with a critical advantage.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {servicePartners.map((partner) => (
                <Card key={partner.name} className="flex flex-col bg-secondary/20 text-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <partner.Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-grow flex-col justify-between">
                    <CardDescription className="text-base text-muted-foreground">{partner.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <a href="mailto:partnerships@evecount.com">Become a Service Partner</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, Code, Share2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Marketing by Other Means
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Traditional firms market with ads. We market with assets. We believe the most powerful form of marketing isn't a campaign; it's a category-defining product.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-12">
              <div className="text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  The Eve Count Philosophy
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                  Think of us as a marketing company where the "creatives" are engineers and the "campaigns" are machine learning pipelines. Our goal is the same: build a brand that people love. Our method is just different. We build the thing that builds the hype.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                 <Card className="flex flex-col bg-secondary/20 text-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Product as the Story</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We don't just tell your story—we build the product that becomes the story. A flawless UX, a game-changing AI feature, a beautifully architected system; these are the narratives that spread.
                    </p>
                  </CardContent>
                </Card>
                 <Card className="flex flex-col bg-secondary/20 text-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Code as the Creative</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our campaigns aren't ads; they are scalable infrastructure, intelligent algorithms, and robust machine learning pipelines. This is the creative work that builds a defensible moat.
                    </p>
                  </CardContent>
                </Card>
                 <Card className="flex flex-col bg-secondary/20 text-foreground">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        <Share2 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Growth as the Goal</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                     The result is organic, durable growth. A product that markets itself because it's fundamentally better. That's the unfair advantage we build for our partners.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

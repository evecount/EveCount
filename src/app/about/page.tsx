import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Code, Share2, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Contact Eve Count",
  description: "Learn about the Eve Count philosophy and how to get in touch to pitch your venture. We are a venture studio that uses engineering as its primary tool for growth.",
};

export default function AboutPage() {
  const mailtoLink = "mailto:gwen@evecount.com?subject=Venture%20Pitch:%20[Your%20Company%20Name]&body=1.%20What%20is%20your%20vision%3F%0D%0A%0D%0A2.%20What%20problem%20are%20you%20solving%3F%0D%0A%0D%0A3.%20What%20is%20your%20unique%20insight%3F%0D%0A";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Growth by Engineering
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Traditional firms chase growth with marketing campaigns. We build it with code. We believe the most powerful form of marketing isn't an ad; it's a category-defining product.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-12">
              <div className="text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  The Eve Count Philosophy
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                  To be clear: we are not a marketing company. We are a venture studio that uses engineering as its primary tool for growth. Our 'creatives' are architects and AI specialists. Our goal isn't a campaign; it's to build a digital asset. A product so effective, built on data and machine learning, that it becomes the engine that builds the entire company.
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
        <section id="contact" className="border-t border-border/40 bg-secondary/20 py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        We're always open to new ideas and partnerships.
                    </p>
                </div>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                    <Card className="bg-background/50">
                        <CardHeader>
                            <CardTitle>Direct Inquiries</CardTitle>
                            <CardDescription>For general questions or media requests.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-semibold text-foreground">Gwendalynn Lim Wan Ting</p>
                            <div className="mt-2 space-y-2 text-muted-foreground">
                                <a href="mailto:gwen@evecount.com" className="flex items-center gap-2 transition-colors hover:text-primary">
                                    <Mail className="h-4 w-4" />
                                    <span>gwen@evecount.com</span>
                                </a>
                                <a href="tel:+6586081377" className="flex items-center gap-2 transition-colors hover:text-primary">
                                    <Phone className="h-4 w-4" />
                                    <span>+65 8608 1377</span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-background/50">
                        <CardHeader>
                            <CardTitle>Pitch Your Venture</CardTitle>
                            <CardDescription>Ready to build? Send us the outline of your vision.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild size="lg" className="w-full">
                                <a href={mailtoLink}>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Start the Conversation
                                </a>
                            </Button>
                            <p className="mt-4 text-xs text-muted-foreground">
                                Clicking will open your email client with a pre-filled template to guide your pitch.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

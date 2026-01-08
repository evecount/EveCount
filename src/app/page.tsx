import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Engine } from "@/components/sections/engine";
import { LeadIntake } from "@/components/sections/lead-intake";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LeadIntake />
        <Portfolio />
        <Engine />
      </main>
      <Footer />
    </div>
  );
}

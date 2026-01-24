import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Engine } from "@/components/sections/engine";
import { LeadIntake } from "@/components/sections/lead-intake";
import { Chatbot } from "@/components/chatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LeadIntake />
        <Engine />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { QuantinuumShowcase } from "@/components/sections/QuantinuumShowcase";
import { Engine } from "@/components/sections/engine";
import { Funding } from "@/components/sections/funding";
import { Chatbot } from "@/components/chatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <QuantinuumShowcase />
        <Engine />
        <Funding />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

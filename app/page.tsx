import { CreatorShowcase } from "@/components/creator-showcase";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TelegramCta } from "@/components/telegram-cta";

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <CreatorShowcase />
      <TelegramCta />
      <Footer />
    </main>
  );
}

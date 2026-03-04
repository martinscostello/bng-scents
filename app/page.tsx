import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { BnGSection } from "@/components/sections/BnGSection";
import { ScrollStory } from "@/components/sections/ScrollStory";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative">
        <Hero />
        <ProductGrid />
        <BnGSection />
        <ScrollStory />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

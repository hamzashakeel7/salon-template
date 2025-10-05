import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import InstagramReels from "@/components/InstaReels";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Cta />
      <InstagramReels />
      <Footer />
    </main>
  );
}

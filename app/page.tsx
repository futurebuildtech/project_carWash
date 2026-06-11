import { Background } from "@/components/Background";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950">
      {/* Layer 1: Glowing Mesh */}
      <Background /> 
      
      {/* Layer 2: Moving Particles */}
      <ParticleBackground />

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </main>
  );
}

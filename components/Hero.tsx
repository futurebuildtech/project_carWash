"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Play, Sparkles } from "lucide-react";

const washImages = [
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=400",
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=400",
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=400",
  "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=400",
  "https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=400",
  "https://images.unsplash.com/photo-1571188654248-7a89213915f7?q=80&w=400",
];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const textY = useTransform(scrollY, [0, 500], [0, 80]);
  const imageY = useTransform(scrollY, [0, 500], [0, -40]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top } = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full bg-[#080829] overflow-hidden">
      
      {/* Dynamic Gold Spotlight */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          background: `radial-gradient(1000px circle at ${springX}px ${springY}px, rgba(212, 175, 55, 0.12), transparent 80%)`
        }}
      />

      {/* MAIN HERO GRID */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-24 z-10">
        <div className="container mx-auto grid gap-12 grid-cols-1 lg:grid-cols-12 lg:items-center">
          
          {/* Left Content (Smaller) */}
          <motion.div style={{ y: textY }} className="relative z-20 lg:col-span-5">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[9px] font-black tracking-[0.4em] text-gold uppercase">
              <MapPin size={12} className="animate-pulse" />
              <span>Doorstep Detailing • Rajahmundry</span>
            </div>

            {/* <h1 className="mb-4 text-4xl font-black md:text-6xl tracking-tighter text-white uppercase leading-[0.95]">
              EXPRESS <br />
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent italic md:text-7xl">
                WASH 40
              </span>
            </h1> */}

<h1 className="mb-4 text-4xl font-black md:text-6xl tracking-tighter text-white uppercase leading-[1.1] py-1">
  EXPRESS <br />
  <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent italic md:text-7xl inline-block pb-2 pr-4">
    WASH 40
  </span>
</h1>


            <div className="mb-8">
              <p className="text-lg md:text-2xl font-light tracking-widest text-white/80 italic">
                "WE WASH. <span className="text-white font-black not-italic">YOU RELAX.</span>"
              </p>
            </div>

            <p className="mb-10 max-w-sm text-sm md:text-base font-medium text-zinc-500 leading-relaxed border-l border-gold/20 pl-5">
              Rajahmundry's elite mobile detailing studio. 
              Luxury care brought directly to your doorstep.
            </p>

            {/* <div className="flex flex-wrap gap-4 items-center">
              <button className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-gold-dark to-gold px-8 py-4 text-sm font-black text-black shadow-lg transition-all hover:scale-105 active:scale-95">
                <span className="tracking-[0.2em]">BOOK WASH</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="flex items-center gap-2 text-white text-xs font-bold tracking-widest hover:text-gold transition-colors">
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center">
                  <Play size={14} className="fill-white" />
                </div>
                PROCESS
              </button>
            </div> */}
          </motion.div>

          {/* Right Image (Bigger) */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative lg:col-span-7"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] md:rounded-[5rem] border border-white/10 p-2 md:p-4 bg-zinc-900/50 backdrop-blur-3xl shadow-2xl">
              <img 
                src="/images/Home_car.png" 
                className="w-full h-auto rounded-[2.2rem] md:rounded-[4.2rem] object-cover brightness-95 hover:brightness-110 transition-all duration-1000" 
                alt="Express Wash 40 Premium Car & Bike" 
              />
            </div>
            <div className="absolute -inset-10 bg-gold/10 blur-[120px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* SCROLLING PORTFOLIO SECTION */}
      <section className="py-20 bg-black/40 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6 mb-12 text-center">
           <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold/30" />
              <h2 className="text-[10px] font-black tracking-[0.5em] text-gold uppercase">Elite Portfolio</h2>
              <div className="h-px w-12 bg-gold/30" />
           </div>
           <p className="text-2xl font-bold text-white tracking-tight">Recent Masterpieces</p>
        </div>

        <div className="mask-horizontal overflow-hidden">
          <div className="flex animate-marquee gap-6 whitespace-nowrap">
            {[...washImages, ...washImages].map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 0.95, y: -5 }}
                className="w-[280px] shrink-0 group relative overflow-hidden rounded-2xl border border-white/5 aspect-[4/3] bg-zinc-900 shadow-xl"
              >
                <img src={img} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Work" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-5">
                   <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={12} className="text-gold" />
                      <p className="text-gold font-black tracking-[0.2em] text-[8px] uppercase">Pristine</p>
                   </div>
                   <p className="text-white text-sm font-bold">Showroom Finish</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Background Branding */}
      <div className="absolute bottom-0 left-0 w-full text-[20vw] font-black text-white/[0.02] select-none tracking-tighter leading-none translate-y-1/2 z-0 uppercase pointer-events-none">
        Rajahmundry
      </div>
    </div>
  );
};

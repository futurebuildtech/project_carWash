"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Bike, Car, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const bikeServices = [
  { title: "Single Wash", price: "199", time: "30 mins", features: ["Deep pressure wash", "Chain lubrication", "Tire dressing"], icon: Bike, bonus: "" },
  { title: "Gold Plan", price: "599", time: "4 Washes", features: ["3 + 1 Free Service", "Foam cleaning", "Teflon coating", "WhatsApp reminders"], icon: Sparkles, bonus: "Most Popular" },
  { title: "Diamond Plan", price: "1,599", time: "12 Washes", features: ["9 + 3 Free Services", "Full detailing", "Engine degreasing", "Priority booking"], icon: ShieldCheck, bonus: "Best Value" },
  { title: "Platinum Plan", price: "2,999", time: "Unlimited", features: ["Unlimited 1 Year", "Ceramic wash", "Dashboard polish", "VIP support"], icon: CheckCircle2, bonus: "Luxury" }
];

const carServices = [
  { title: "Single Wash", price: "499", time: "45 mins", features: ["Exterior foam wash", "Interior vacuum", "Tire polish"], icon: Car, bonus: "" },
  { title: "Monthly", price: "1,499", time: "4 Washes", features: ["3 + 1 Free Service", "Interior sanitation", "Glass cleaning", "Doorstep service"], icon: Sparkles, bonus: "Recommended" },
  { title: "Quarterly", price: "3,999", time: "12 Washes", features: ["9 + 3 Free Services", "Full body wax", "Engine dressing", "Rain repellent"], icon: ShieldCheck, bonus: "Quarterly Saver" },
  { title: "Half-Yearly", price: "7,499", time: "25 Washes", features: ["20 + 5 Free Services", "Deep detailing", "AC vent cleaning", "Premium wax"], icon: CheckCircle2, bonus: "Elite" }
];

export default function ServicesPage() {
  const [category, setCategory] = useState<"bike" | "car">("bike");
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Spotlight Cursor Logic
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
    // <main 
    //   ref={containerRef}
    //   onMouseMove={handleMouseMove}
    //   className="relative min-h-screen bg-[#050505] text-white overflow-hidden"
    // >
     <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#080829] text-white overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(212, 175, 55, 0.1), transparent 80%)`
        }}
      />
      
      <Background />
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 px-6 py-2 text-[10px] font-black tracking-[0.3em] text-[#D4AF37] uppercase">
            <Sparkles size={14} />
            <span>Premium Detailing Rajahmundry</span>
          </div>

        <h1 className="mb-6 text-7xl font-black md:text-9xl tracking-tighter flex flex-col items-center">
  <span className="text-white opacity-18 leading-none select-none">OUR</span>
  <span className="relative inline-block bg-gradient-to-b from-[#F9E2AF] via-[#D4AF37] to-[#AA8A2E] bg-clip-text text-transparent italic leading-tight -mt-2 md:-mt-5 py-4 px-10">
    SERVICES
  </span>
</h1>


          
          <p className="mx-auto max-w-2xl text-lg font-medium text-zinc-500 tracking-wide mt-4">
            "WE WASH. YOU RELAX." — Luxury care delivered to your doorstep.
          </p>

          {/* Luxury Blinking Toggle */}
          <div className="mt-14 inline-flex rounded-[2rem] bg-zinc-900/90 p-1.5 border border-white/10 backdrop-blur-3xl shadow-2xl">
            <button 
              onClick={() => setCategory("bike")}
              className={`flex items-center gap-3 rounded-[1.5rem] px-14 py-4 transition-all duration-500 ${
                category === "bike" 
                  ? "bg-gradient-to-r from-[#AA8A2E] via-[#D4AF37] to-[#F9E2AF] text-black font-black tracking-[0.2em] animate-pulse-gold" 
                  : "text-white font-bold tracking-widest hover:bg-white/5"
              }`}
            >
              <Bike size={22} />
              <span>BIKE</span>
            </button>

            <button 
              onClick={() => setCategory("car")}
              className={`flex items-center gap-3 rounded-[1.5rem] px-14 py-4 transition-all duration-500 ${
                category === "car" 
                  ? "bg-gradient-to-r from-[#AA8A2E] via-[#D4AF37] to-[#F9E2AF] text-black font-black tracking-[0.2em] animate-pulse-gold" 
                  : "text-white font-bold tracking-widest hover:bg-white/5"
              }`}
            >
              <Car size={22} />
              <span>CAR</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {(category === "bike" ? bikeServices : carServices).map((service, index) => (
              <motion.div
                key={`${category}-${service.title}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative flex flex-col rounded-[3rem] border border-white/5 bg-zinc-900/40 p-10 backdrop-blur-xl hover:border-[#D4AF37]/40 transition-all duration-500 shadow-2xl"
              >
                {service.bonus && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#AA8A2E] to-[#D4AF37] px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-xl">
                    {service.bonus}
                  </div>
                )}

                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800/50 text-[#D4AF37] border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                  <service.icon size={32} />
                </div>
                
                <h3 className="mb-2 text-3xl font-bold text-white tracking-tight">{service.title}</h3>
                
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-sm font-bold text-[#D4AF37]">INR</span>
                  <span className="text-5xl font-black text-white">{service.price}</span>
                  <span className="text-[10px] text-zinc-500 ml-2 font-bold uppercase tracking-widest">/ {service.time}</span>
                </div>

                <ul className="mb-10 flex-grow space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full rounded-2xl bg-white/5 py-4 font-black text-white border border-white/10 transition-all group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37]">
                  <span className="flex items-center justify-center gap-2 tracking-[0.2em]">
                    CHOOSE PLAN <ArrowRight size={16} />
                  </span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </main>
  );
}

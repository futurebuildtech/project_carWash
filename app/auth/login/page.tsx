"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";
import { Phone, User, MapPin, Mail, ArrowRight, Sparkles, ShieldCheck, Globe, Hash } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
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
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#080829] text-white overflow-hidden"
    >
      {/* Dynamic Gold Spotlight */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          background: `radial-gradient(800px circle at ${springX}px ${springY}px, rgba(212, 175, 55, 0.12), transparent 80%)`
        }}
      />
      
      <Background />
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 flex flex-col items-center">
        
        {/* Luxury Title Section - Reduced Size */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[9px] font-black tracking-[0.3em] text-gold uppercase">
            <Sparkles size={12} className="text-gold" />
            <span className="text-white">{isLogin ? "WELCOME BACK" : "JOIN THE ELITE CLUB"}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-white">
            {isLogin ? "USER " : "CREATE "}
            <span className="bg-gradient-to-b from-[#F9E2AF] via-[#D4AF37] to-[#AA8A2E] bg-clip-text text-transparent italic px-2">
              {isLogin ? "LOGIN" : "ACCOUNT"}
            </span>
          </h1>
        </motion.div>

        {/* Auth Glass Card - Optimized Padding */}
        <motion.div 
          layout
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-xl rounded-[2.5rem] border border-gold/20 bg-zinc-900/60 p-8 md:p-10 backdrop-blur-3xl shadow-2xl relative"
        >
          {/* Toggle Switch */}
          <div className="flex bg-black/80 p-1.5 rounded-2xl mb-8 border border-gold/10">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-xl text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${
                isLogin ? "bg-gradient-to-r from-[#AA8A2E] via-[#D4AF37] to-[#F9E2AF] text-black" : "text-white/40 hover:text-white"
              }`}
            >
              LOGIN
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-xl text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${
                !isLogin ? "bg-gradient-to-r from-[#AA8A2E] via-[#D4AF37] to-[#F9E2AF] text-black" : "text-white/40 hover:text-white"
              }`}
            >
              REGISTER
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {isLogin ? (
                /* LOGIN FORM */
                <motion.div 
                  key="login"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-6"
                >
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-3 flex items-center gap-2">
                      <ShieldCheck size={14} /> Mobile Number
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gold" size={18} />
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full bg-black/80 border border-gold/20 rounded-2xl py-4 pl-14 pr-6 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/20"
                      />
                    </div>
                  </div>
                  <p className="text-[9px] text-white/50 font-bold uppercase tracking-[0.2em] text-center">
                    SECURE <span className="text-gold">OTP VERIFICATION</span> REQUIRED
                  </p>
                </motion.div>
              ) : (
                /* REGISTRATION FORM - Expanded Address */
                <motion.div 
                  key="register"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-3">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gold" size={16} />
                        <input type="text" placeholder="Krishna" className="w-full bg-black/80 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/20" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-3">Mobile</label>
                      <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gold" size={16} />
                        <input type="tel" placeholder="+91" className="w-full bg-black/80 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/20" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-3">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gold" size={16} />
                      <input type="email" placeholder="example@mail.com" className="w-full bg-black/80 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/20" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-3">Area / Street</label>
                      <div className="relative">
                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-gold" size={16} />
                        <input type="text" placeholder="Area Name" className="w-full bg-black/80 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/20" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-3">City</label>
                      <div className="relative">
                        <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-gold" size={16} />
                        <input type="text" defaultValue="Rajahmundry" className="w-full bg-black/80 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-gold outline-none transition-all font-bold text-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-3">Pincode</label>
                      <div className="relative">
                        <Hash className="absolute left-5 top-1/2 -translate-y-1/2 text-gold" size={16} />
                        <input type="text" placeholder="533101" className="w-full bg-black/80 border border-gold/20 rounded-xl py-3.5 pl-12 pr-4 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/20" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-3">State</label>
                      <input type="text" defaultValue="Andhra Pradesh" className="w-full bg-black/80 border border-gold/20 rounded-xl py-3.5 px-6 text-white focus:border-gold outline-none transition-all font-bold text-sm" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              className="w-full group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#AA8A2E] via-[#D4AF37] to-[#F9E2AF] py-4 font-black text-black shadow-lg transition-all hover:scale-[1.02] active:scale-95"
            >
              <span className="tracking-[0.3em] uppercase text-xs">{isLogin ? "GET OTP" : "CREATE ACCOUNT"}</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>

        {/* Footer Branding - Reduced Size */}
        <div className="mt-10 flex flex-col items-center gap-2">
            <p className="text-white font-black text-[11px] uppercase tracking-[0.4em]">
              EXPRESS WASH 40 <span className="text-gold italic mx-2">RAJAHMUNDRY</span>
            </p>
            <div className="h-px w-24 bg-gold/30" />
            <p className="text-gold font-bold uppercase tracking-[0.2em] text-[8px]">
              WE WASH. YOU RELAX.
            </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

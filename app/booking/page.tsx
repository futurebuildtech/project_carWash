'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { User, Phone, MapPin, Calendar, MessageSquare, Send, Sparkles, ShieldCheck, Car, Bike } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Background } from '@/components/Background';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    date: '',
    notes: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(`Booking Received! We will contact you on ${formData.mobile} shortly.`);
        // Successfully clears the form for the next booking
        setFormData({ 
          name: '', 
          mobile: '', 
          address: '', 
          date: '', 
          notes: '' 
        });
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to connect to server.");
    }
  };

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#080829] text-white overflow-hidden selection:bg-gold selection:text-black"
    >
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background: `radial-gradient(1000px circle at ${springX}px ${springY}px, rgba(212, 175, 55, 0.12), transparent 80%)`
        }}
      />
      
      <Background />
      <Navbar />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-[3rem] border border-gold/20 bg-zinc-900/60 p-8 md:p-12 backdrop-blur-3xl shadow-2xl"
            >
              <div className="mb-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1 text-[9px] font-black tracking-[0.3em] text-gold uppercase">
                  <Sparkles size={12} />
                  <span>Doorstep Booking</span>
                </div>
                <h1 className="text-5xl font-black tracking-tighter uppercase mb-2">
                  QUICK <span className="bg-gradient-to-b from-[#F9E2AF] via-[#D4AF37] to-[#AA8A2E] bg-clip-text text-transparent italic">BOOKING</span>
                </h1>
                <p className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase">WE WASH. YOU RELAX.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-2">Full Name</label>
                    <input 
                      type="text" required placeholder="Krishna"
                      value={formData.name}
                      className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/10"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-2">Mobile Number</label>
                    <input 
                      type="tel" required placeholder="+91"
                      value={formData.mobile}
                      className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/10"
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-2">Service Address</label>
                  <textarea 
                    required rows={2} placeholder="Street, Area, Landmark in Rajahmundry"
                    value={formData.address}
                    className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all font-bold text-sm resize-none placeholder:text-white/10"
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-2">Preferred Date</label>
                    <input 
                      type="date" required
                      value={formData.date}
                      className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all font-bold text-sm [color-scheme:dark]"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gold uppercase tracking-[0.3em] ml-2">Vehicle Model</label>
                    <input 
                      type="text" placeholder="e.g. Royal Enfield"
                      value={formData.notes}
                      className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-gold outline-none transition-all font-bold text-sm placeholder:text-white/10"
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#AA8A2E] via-[#D4AF37] to-[#F9E2AF] py-5 font-black text-black shadow-lg transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span className="tracking-[0.4em] uppercase text-xs">CONFIRM WASH</span>
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden lg:flex flex-col items-center justify-center relative"
            >
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-md aspect-square rounded-[4rem] border border-gold/20 bg-zinc-900/40 backdrop-blur-2xl flex items-center justify-center overflow-hidden"
              >
                <motion.div 
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-gold/40 to-transparent z-20 pointer-events-none"
                />
                
                <div className="relative flex flex-col items-center gap-8">
                   <Car size={120} strokeWidth={1} className="text-gold/20" />
                   <Bike size={80} strokeWidth={1} className="text-gold" />
                   <div className="text-center">
                      <p className="text-gold font-black tracking-[0.5em] text-[10px] uppercase mb-2">Smart Wash System</p>
                      <p className="text-white/40 text-xs font-medium">Precision Detailing Active</p>
                   </div>
                </div>
              </motion.div>

              <div className="absolute -inset-10 bg-gold/5 blur-[100px] -z-10 animate-pulse" />
              
              <div className="mt-12 grid grid-cols-2 gap-8 w-full max-w-md">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border border-gold/20 flex items-center justify-center text-gold">
                       <ShieldCheck size={20} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">100% Secure</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border border-gold/20 flex items-center justify-center text-gold">
                       <Calendar size={20} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Instant Slots</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

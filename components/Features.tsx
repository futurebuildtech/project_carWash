"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Droplets, Star, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Eco-Friendly",
    desc: "We use 80% less water than home washing with biodegradable soaps.",
    icon: Droplets,
  },
  {
    title: "Quick Service",
    desc: "Our express tunnel gets you in and out in under 10 minutes.",
    icon: Clock,
  },
  {
    title: "Paint Protection",
    desc: "Ceramic infused waxes provide a diamond-hard protective shield.",
    icon: Shield,
  },
  {
    title: "Premium Quality",
    desc: "Voted #1 car wash for 5 consecutive years in the region.",
    icon: Star,
  }
];

export const Features = () => {
  // Animation for the image cards
  const imageHover = {
    hover: { 
      scale: 1.05, 
      rotate: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-premium-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl leading-tight">
              Why Choose Our <br/>
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent">
                Smart Wash System?
              </span>
            </h2>
            <p className="mb-8 text-lg text-slate-400 max-w-xl">
              We use proprietary AI-driven sensors to detect your vehicle size and contour, 
              ensuring every inch is cleaned perfectly without any brush contact.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content: Interactive Image Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Left Column of Grid */}
            <div className="space-y-6 pt-12">
              {/* Image 1: Car Detailing */}
              <motion.div 
                variants={imageHover}
                whileHover="hover"
                className="h-72 rounded-3xl bg-gradient-to-br from-gold/50 to-gold-dark/20 p-[1px] shadow-2xl shadow-gold/5 overflow-hidden"
              >
                <div className="h-full w-full rounded-[23px] bg-slate-950 relative overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    alt="Car Precision Wash"
                   />
                   <div className="absolute bottom-4 left-4 z-10">
                      <div className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-gold/30">
                        <CheckCircle2 size={14} className="text-gold" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">Precision</span>
                      </div>
                   </div>
                </div>
              </motion.div>
              
              {/* Image 3: Bike Wash (New) */}
              <motion.div 
                variants={imageHover}
                whileHover="hover"
                className="h-52 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent p-[1px] shadow-xl"
              >
                <div className="h-full w-full rounded-[23px] bg-slate-950 relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=600" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                    alt="Bike Detailing"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column of Grid */}
            <div className="space-y-6">
              {/* Image 4: Bike Detailing (New) */}
              <motion.div 
                variants={imageHover}
                whileHover="hover"
                className="h-52 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent p-[1px] shadow-xl"
              >
                <div className="h-full w-full rounded-[23px] bg-slate-950 relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=600" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                    alt="Premium Bike Care"
                  />
                </div>
              </motion.div>
              
              {/* Image 2: Car Foam Wash */}
              <motion.div 
                variants={imageHover}
                whileHover="hover"
                className="h-72 rounded-3xl bg-gradient-to-br from-gold/50 to-gold-dark/20 p-[1px] shadow-2xl shadow-gold/5 overflow-hidden"
              >
                <div className="h-full w-full rounded-[23px] bg-slate-950 relative overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=600" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    alt="Car Foam Wash"
                   />
                   <div className="absolute bottom-4 left-4 z-10">
                      <div className="flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 border border-gold/30">
                        <Star size={14} className="text-gold" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">Premium</span>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

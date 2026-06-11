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
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content: Text & Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl leading-tight">
              Why Choose Our <br/>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Smart Wash System?
              </span>
            </h2>
            <p className="mb-8 text-lg text-slate-400 max-w-xl">
              We use proprietary AI-driven sensors to detect your vehicle size and contour, 
              ensuring every inch is cleaned perfectly without any brush contact.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {features.map((f, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-5 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <f.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {f.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content: Advanced Visual Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
            
            <div className="space-y-6 pt-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-72 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-2xl shadow-blue-500/20"
              >
                <div className="h-full w-full rounded-[23px] bg-slate-950 overflow-hidden relative">
                   <img 
                    src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-60 transition-opacity"
                    alt="Car Detail"
                   />
                   <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 rounded-full bg-blue-500/20 backdrop-blur-md px-3 py-1 border border-white/10">
                        <CheckCircle2 size={14} className="text-blue-400" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Precision</span>
                      </div>
                   </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="h-52 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-white/5"
              />
            </div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="h-52 rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-white/5"
              />
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-72 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-2xl shadow-cyan-500/20"
              >
                <div className="h-full w-full rounded-[23px] bg-slate-950 overflow-hidden relative">
                   <img 
                    src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=600" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 hover:opacity-60 transition-opacity"
                    alt="Water System"
                   />
                   <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 rounded-full bg-cyan-500/20 backdrop-blur-md px-3 py-1 border border-white/10">
                        <Star size={14} className="text-cyan-400" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Premium</span>
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

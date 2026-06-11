"use client";
import React from "react";
import { motion } from "framer-motion";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Zap, ShieldCheck, Droplets, Wind, Car, Sparkles } from "lucide-react";

const allServices = [
  {
    title: "Express Exterior",
    price: "USD 15",
    time: "10 mins",
    features: ["Soft cloth wash", "Spot-free rinse", "Power air dry"],
    icon: Zap,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Ceramic Pro",
    price: "USD 45",
    time: "25 mins",
    features: ["Ceramic sealant", "Tire shine", "Underbody blast", "Triple foam"],
    icon: ShieldCheck,
    color: "from-purple-500 to-blue-600"
  },
  {
    title: "Interior Detail",
    price: "USD 85",
    time: "45 mins",
    features: ["Vacuum & Steam", "Dash wipe down", "Window cleaning", "Odor neutralizer"],
    icon: Droplets,
    color: "from-cyan-400 to-emerald-400"
  },
  {
    title: "The Ultimate",
    price: "USD 120",
    time: "90 mins",
    features: ["Full Ceramic", "Engine cleaning", "Leather treatment", "Hand wax"],
    icon: Sparkles,
    color: "from-amber-400 to-orange-500"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen text-white">
      <Background />
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            Our <span className="text-blue-500">Premium</span> Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Choose the perfect treatment for your vehicle. From 10-minute express washes to 
            full-day showroom detailing.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl"
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-3xl font-bold">{service.price}</span>
                <span className="text-sm text-slate-500">/ {service.time}</span>
              </div>

              <ul className="mb-8 flex-grow space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-xl bg-white/5 py-4 font-semibold text-white border border-white/10 transition-all group-hover:bg-blue-600 group-hover:border-blue-500">
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

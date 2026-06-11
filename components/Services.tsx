"use client";
import React from "react";
import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Zap, Wind } from "lucide-react";

const services = [
  {
    title: "Express Wash",
    desc: "Exterior wash and dry in under 15 minutes.",
    icon: Zap,
    price: "USD 15",
  },
  {
    title: "Ceramic Coating",
    desc: "Long-lasting protection and deep gloss finish.",
    icon: ShieldCheck,
    price: "USD 89",
  },
  {
    title: "Interior Detail",
    desc: "Deep steam cleaning and leather conditioning.",
    icon: Droplets,
    price: "USD 45",
  },
  {
    title: "Eco Dry",
    desc: "Waterless wash using biodegradable polymers.",
    icon: Wind,
    price: "USD 25",
  },
];

export const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Our Services</h2>
          <p className="text-slate-400">Professional care for every vehicle type</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all hover:border-blue-500/50 hover:bg-slate-800/60"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mb-6 text-sm text-slate-400 leading-relaxed">
                {service.desc}
              </p>
              <div className="text-2xl font-bold text-white">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Car, ChevronRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            <Sparkles className="h-4 w-4" />
            <span>Premium Auto Detailing</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            The Future of <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Car Care Technology
            </span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-slate-400">
            Experience the ultimate express car wash. We combine advanced water
            reclamation systems with premium ceramic coatings to protect your
            investment.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-500">
              Book Appointment
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-700">
              View Services
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-2 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury Car Wash"
              className="rounded-2xl object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-blue-600/20 blur-2xl" />
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-2xl bg-cyan-600/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

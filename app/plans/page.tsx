"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, Zap, Crown, Star, ShieldCheck } from "lucide-react";

const plans = [
  {
    name: "Basic Wash",
    price: "USD 29",
    period: "month",
    description: "Perfect for keeping your daily driver clean and shiny.",
    features: [
      "2 Premium Washes per month",
      "Spot-free rinse",
      "High-pressure air dry",
      "Self-service vacuum access",
      "10% off detailing services"
    ],
    icon: Star,
    highlight: false,
    color: "from-slate-400 to-slate-600"
  },
  {
    name: "Unlimited Pro",
    price: "USD 59",
    period: "month",
    description: "Our most popular plan for car enthusiasts who love a showroom look.",
    features: [
      "Unlimited Premium Washes",
      "Ceramic Sealant treatment",
      "Tire shine & wheel cleaning",
      "Underbody rust protection",
      "25% off detailing services",
      "Priority 'Fast-Lane' access"
    ],
    icon: Zap,
    highlight: true,
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Elite Fleet",
    price: "USD 149",
    period: "month",
    description: "Premium care for luxury vehicles and multi-car households.",
    features: [
      "Up to 3 vehicles included",
      "Unlimited Ceramic Washes",
      "Monthly interior sanitation",
      "Engine bay cleaning",
      "Free seasonal hand wax",
      "VIP Concierge support"
    ],
    icon: Crown,
    highlight: false,
    color: "from-purple-500 to-blue-600"
  }
];

export default function PlansPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="relative min-h-screen text-white">
      <Background />
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Membership <span className="text-blue-500">Plans</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10">
            Join the club and save. Unlimited washes, exclusive discounts, and 
            priority service for our most valued members.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-slate-500"}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative h-7 w-14 rounded-full bg-slate-800 p-1 transition-colors hover:bg-slate-700"
            >
              <motion.div 
                animate={{ x: isAnnual ? 28 : 0 }}
                className="h-5 w-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-white" : "text-slate-500"}`}>
              Yearly <span className="ml-1 text-xs text-emerald-400 font-bold">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-[2.5rem] border p-8 backdrop-blur-xl transition-all duration-500 ${
                plan.highlight 
                  ? "border-blue-500/50 bg-blue-500/5 shadow-2xl shadow-blue-500/10 scale-105 z-10" 
                  : "border-white/10 bg-slate-900/40 hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8 flex items-center justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.color} text-white shadow-xl`}>
                  <plan.icon size={30} />
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-slate-400">{plan.name}</div>
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-slate-500">/{plan.period}</span>
                  </div>
                </div>
              </div>

              <p className="mb-8 text-sm text-slate-400 leading-relaxed">
                {plan.description}
              </p>

              <div className="mb-10 space-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlight ? "bg-blue-500" : "bg-slate-700"}`}>
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full rounded-2xl py-4 font-bold transition-all active:scale-95 ${
                plan.highlight 
                  ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30" 
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 rounded-3xl border border-white/5 bg-slate-900/20 p-12 text-center backdrop-blur-sm"
        >
          <div className="mb-6 flex justify-center text-blue-500">
            <ShieldCheck size={48} />
          </div>
          <h3 className="mb-4 text-2xl font-bold">Safe & Secure Billing</h3>
          <p className="text-slate-400">
            No long-term contracts. Cancel or upgrade your membership anytime through our 
            customer dashboard. All payments are encrypted and secure.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

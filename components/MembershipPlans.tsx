"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Bike, Car, Sparkles } from "lucide-react";

const bikePlans = [
  { name: "Single Wash", price: "199", washes: "1 Wash", bonus: "", color: "bg-slate-800" },
  { name: "Gold Plan", price: "599", washes: "3 Washes", bonus: "+ 1 Free", color: "bg-gold/10" },
  { name: "Diamond Plan", price: "1,599", washes: "9 Washes", bonus: "+ 3 Free", color: "bg-gold/20" },
  { name: "Platinum Plan", price: "2,999", washes: "Unlimited", bonus: "Best Value", color: "bg-gold" },
];

const carPlans = [
  { name: "Single Wash", price: "499", washes: "1 Wash", bonus: "", color: "bg-slate-800" },
  { name: "Monthly", price: "1,499", washes: "3 Washes", bonus: "+ 1 Free", color: "bg-gold/10" },
  { name: "Quarterly", price: "3,999", washes: "9 Washes", bonus: "+ 3 Free", color: "bg-gold/20" },
  { name: "Half-Yearly", price: "7,499", washes: "20 Washes", bonus: "+ 5 Free", color: "bg-gold" },
];

export const MembershipPlans = () => {
  const [category, setCategory] = useState<"bike" | "car">("bike");

  return (
    <section className="bg-premium-black py-24 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Membership Plans</h2>
          
          {/* Category Toggle */}
          <div className="inline-flex rounded-2xl bg-premium-gray p-1 border border-white/5">
            <button 
              onClick={() => setCategory("bike")}
              className={`flex items-center gap-2 rounded-xl px-8 py-3 font-semibold transition-all ${category === "bike" ? "bg-gold text-black" : "text-slate-400"}`}
            >
              <Bike size={20} /> Bike
            </button>
            <button 
              onClick={() => setCategory("car")}
              className={`flex items-center gap-2 rounded-xl px-8 py-3 font-semibold transition-all ${category === "car" ? "bg-gold text-black" : "text-slate-400"}`}
            >
              <Car size={20} /> Car
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {(category === "bike" ? bikePlans : carPlans).map((plan, i) => (
              <motion.div
                key={`${category}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-white/10 bg-premium-gray p-8 transition-all hover:border-gold/50"
              >
                {plan.bonus && (
                  <div className="absolute top-4 right-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase text-black">
                    {plan.bonus}
                  </div>
                )}
                <h3 className="mb-2 text-xl font-bold text-white">{plan.name}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-sm text-gold">INR</span>
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                
                <div className="mb-8 space-y-4 flex-grow">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Check size={18} className="text-gold" />
                    <span>{plan.washes} Total</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Check size={18} className="text-gold" />
                    <span>Doorstep Service</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Check size={18} className="text-gold" />
                    <span>Rajahmundry Wide</span>
                  </div>
                </div>

                <button className="w-full rounded-xl bg-white/5 py-4 font-bold text-white border border-white/10 transition-all group-hover:bg-gold group-hover:text-black">
                  Book Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

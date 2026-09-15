"use client";
import React from "react";

export const BookingForm = () => {
  return (
    <section className="bg-premium-black py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="rounded-[2.5rem] border border-white/10 bg-premium-gray p-10 backdrop-blur-xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Create Account</h2>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-400">Full Name</label>
                <input type="text" className="w-full rounded-xl bg-black border border-white/10 p-4 text-white focus:border-gold outline-none" placeholder="Krishna" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-400">Mobile Number</label>
                <input type="tel" className="w-full rounded-xl bg-black border border-white/10 p-4 text-white focus:border-gold outline-none" placeholder="+91 00000 00000" />
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-400">Vehicle Type</label>
                <select className="w-full rounded-xl bg-black border border-white/10 p-4 text-white focus:border-gold outline-none">
                  <option>Bike</option>
                  <option>Car</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-400">Vehicle Model</label>
                <input type="text" className="w-full rounded-xl bg-black border border-white/10 p-4 text-white focus:border-gold outline-none" placeholder="e.g. Royal Enfield" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-400">Address in Rajahmundry</label>
              <textarea rows={3} className="w-full rounded-xl bg-black border border-white/10 p-4 text-white focus:border-gold outline-none" placeholder="House No, Street, Landmark..."></textarea>
            </div>

            {/* <button className="w-full rounded-xl bg-gold py-4 font-bold text-black shadow-lg shadow-gold/20 hover:bg-gold-light transition-all">
              Register & Login
            </button> */}
          </form>
        </div>
      </div>
    </section>
  );
};

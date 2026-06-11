import React from "react";
import { Car, Facebook, Twitter, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <Car className="text-blue-500" size={24} />
              <span className="text-xl font-bold text-white">EXPRESSWASH</span>
            </div>
            <p className="text-sm text-slate-400">The next generation of vehicle care technology. Fast, clean, and green.</p>
          </div>
          <div>
            <h4 className="mb-6 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400">Locations</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-semibold text-white">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-semibold text-white">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="w-full rounded-lg bg-slate-900 border border-slate-800 px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-slate-500">
          © 2024 Express Car Wash Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

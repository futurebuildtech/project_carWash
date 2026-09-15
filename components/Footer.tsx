import React from "react";
import { Car, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/expresswash.40?utm_source=qr" },
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
  ];

  return (
    <footer className="border-t border-white/5 bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#AA8A2E] to-[#D4AF37]">
                <Car className="text-black" size={22} />
              </div>
              <span className="text-xl font-black tracking-tighter">
                EXPRESS<span className="text-[#D4AF37] italic">WASH</span>
              </span>
            </div>
            <p className="mb-6 text-sm font-medium leading-relaxed text-zinc-500">
              Premium doorstep bike and car detailing in Rajahmundry. 
              <span className="block mt-2 text-[#D4AF37] font-bold uppercase tracking-widest text-[10px]">WE WASH. YOU RELAX.</span>
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  <link.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold text-zinc-500">
              <li><a href="/" className="transition-colors hover:text-[#D4AF37]">Home</a></li>
              <li><a href="/services" className="transition-colors hover:text-[#D4AF37]">Membership Plans</a></li>
              <li><a href="/booking" className="transition-colors hover:text-[#D4AF37]">Book a Wash</a></li>
              <li><a href="#" className="transition-colors hover:text-[#D4AF37]">Refer a Friend</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm font-bold text-zinc-500">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#D4AF37]" />
                <span>Rajahmundry, Andhra Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4AF37]" />
                <span>+91 9133011188</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#D4AF37]" />
                <span>admin@expresswash40.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">Newsletter</h4>
            <p className="mb-4 text-xs font-medium text-zinc-500">Get festival offers and detailing tips.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full rounded-xl bg-zinc-900 border border-white/5 px-4 py-3 text-sm text-white placeholder-zinc-700 focus:border-[#D4AF37] focus:outline-none transition-all" 
              />
              <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#AA8A2E] to-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 transition-transform hover:scale-105 active:scale-95">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          <div>© 2026 EXPRESSWASH RAJAHMUNDRY. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

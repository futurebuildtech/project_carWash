"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Car } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "BOOKING", href: "/booking" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      <nav className={`transition-all duration-500 ${
        isScrolled || isOpen ? "bg-black/95 backdrop-blur-xl border-b border-gold/20 py-4" : "bg-transparent py-6"
      }`}>
        <div className="container mx-auto flex items-center justify-between px-6">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group relative z-[10001]">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-gold-dark to-gold p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Express Wash" 
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <Car className="text-gold absolute" size={18} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white">
                EXPRESS<span className="text-gold italic">WASH 40</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-gold uppercase leading-none">
                RAJAHMUNDRY
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-[10px] font-black tracking-[0.2em] transition-all hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-white/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <Link 
              href="/auth/login"
              className="bg-gradient-to-r from-[#AA8A2E] via-[#D4AF37] to-[#F9E2AF] text-black"
             >
              LOGIN
            </Link> */}
            {/* <Link 
  href="/auth/login"
  className="group animate-shine relative flex items-center justify-center px-8 py-2.5 rounded-full bg-gradient-to-r from-[#AA8A2E] via-[#D4AF37] to-[#F9E2AF] text-black font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]"
>
  
  <span className="absolute inset-0.5 rounded-full border border-black/10 pointer-events-none" />
  
  <span className="relative z-10">LOGIN</span>
</Link> */}

          </div>

          {/* Mobile Menu Toggle (The 3 Lines) */}
          <div className="flex items-center gap-4 md:hidden relative z-[10001]">
            {!isOpen && (
              <Link 
                href="/auth/login" 
                className="bg-gold text-black px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest"
              >
                LOGIN
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-black z-[10000] md:hidden"
            >
              <nav className="flex flex-col p-8 pt-32 gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className={`text-3xl font-black uppercase tracking-[0.1em] ${
                        pathname === link.href ? "text-gold" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="h-px w-full bg-white/10 my-4" />
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link 
                    href="/auth/login" 
                    className="bg-gradient-to-r from-gold-dark to-gold text-black py-5 rounded-2xl text-center font-black tracking-[0.2em] text-lg block shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
                  >
                    LOGIN TO ACCOUNT
                  </Link>
                </motion.div>

                <div className="mt-auto pb-10 text-center">
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                    WE WASH. YOU RELAX.
                  </p>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

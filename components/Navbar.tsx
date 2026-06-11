"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link for Next.js navigation
import { usePathname } from "next/navigation";
import { Car, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Plans", href: "/plans" },
    { name: "Booking", href: "/booking" },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 transition-transform group-hover:rotate-12">
            <Car className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">EXPRESS<span className="text-blue-500">WASH</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                pathname === link.href ? "text-blue-400" : "text-slate-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/auth/login"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-blue-500 hover:text-white active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg text-slate-300"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/auth/login"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-blue-600 py-3 text-center font-bold text-white"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

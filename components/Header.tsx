'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useUserStore } from '@/lib/store';
import { Menu, X, LogOut, User, BarChart3 } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useUserStore();

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="glass-dark border-b border-gold/10 shadow-glow-gold-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-4xl">🚗</div>
              <div>
                <div className="text-2xl font-bold gradient-gold">EXPRESSWASH40</div>
                <div className="text-xs text-gold">WE WASH. YOU RELAX.</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#home" className="text-gray-300 hover:text-gold transition duration-300">
                Home
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-gold transition duration-300">
                Services
              </Link>
              <Link href="#plans" className="text-gray-300 hover:text-gold transition duration-300">
                Plans
              </Link>

              {isAuthenticated && user ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 text-gray-300 hover:text-gold transition"
                  >
                    <User size={20} />
                    {user.name?.split(' ')[0]}
                  </Link>
                  {user.name === 'Admin' && (
                    <Link
                      href="/admin"
                      className="flex items-center gap-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-darkGold transition"
                    >
                      <BarChart3 size={18} />
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="text-gray-300 hover:text-gold transition"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : null}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              {isAuthenticated && user && (
                <Link href="/dashboard" className="text-gold">
                  <User size={20} />
                </Link>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gold hover:text-gold transition"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-6 animate-slide-up border-t border-gold border-opacity-20">
              <nav className="flex flex-col gap-4 pt-4">
                <Link href="#home" className="text-gray-300 hover:text-gold transition">
                  Home
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-gold transition">
                  Services
                </Link>
                <Link href="#plans" className="text-gray-300 hover:text-gold transition">
                  Plans
                </Link>
                <Link href="#about" className="text-gray-300 hover:text-gold transition">
                  About
                </Link>
                {isAuthenticated && user ? (
                  <>
                    <Link href="/dashboard" className="text-gray-300 hover:text-gold transition">
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="text-left text-gray-300 hover:text-gold transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/auth/login" className="btn-premium text-black px-6 py-2 rounded-lg">
                    Login
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

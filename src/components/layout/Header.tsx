"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Diensten',
    href: '#',
    submenu: [
      { name: 'Grondwerken', href: '/diensten/grondwerken' },
      { name: 'Betonwerken', href: '/diensten/betonwerken' },
      { name: 'Funderingen', href: '/diensten/funderingen' },
      { name: 'Afbraakwerken', href: '/diensten/afbraakwerken' },
      { name: 'Klinkerwerken', href: '/diensten/klinkerwerken' },
      { name: 'Containerverhuur', href: '/diensten/containerverhuur' },
    ]
  },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Vacatures', href: '/vacatures' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDienstenOpen, setIsDienstenOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <img
            src={isScrolled ? "/logo-black.png" : "/logo-white.png"}
            alt="Verhulst Grond- en Betonwerken"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  'font-lexend text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-accent flex items-center gap-1',
                  isScrolled ? 'text-anthracite' : 'text-white'
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown size={12} />}
              </Link>

              {link.submenu && (
                <div className="absolute top-full left-0 mt-4 w-52 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-anthracite hover:bg-muted hover:text-accent transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="tel:0474748141"
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-sm font-lexend text-[10px] font-bold uppercase tracking-widest transition-all",
              isScrolled
                ? "bg-anthracite text-white hover:bg-accent"
                : "bg-white text-anthracite hover:bg-accent hover:text-white"
            )}
          >
            <Phone size={14} />
            <span>0474/74.81.41</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn('md:hidden', isScrolled ? 'text-anthracite' : 'text-white')}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6 md:hidden">
          <button
            className="absolute top-6 right-6 text-anthracite"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <div key={link.name} className="w-full text-center">
              {link.submenu ? (
                <div className="space-y-4">
                  <button
                    onClick={() => setIsDienstenOpen(!isDienstenOpen)}
                    className="font-lexend text-xl font-bold text-anthracite uppercase tracking-widest flex items-center justify-center gap-2 mx-auto"
                  >
                    {link.name} <ChevronDown size={18} className={cn("transition-transform", isDienstenOpen && "rotate-180")} />
                  </button>
                  {isDienstenOpen && (
                    <div className="flex flex-col gap-3 bg-muted py-4">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="font-lexend text-sm font-bold text-muted-foreground uppercase tracking-widest"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="font-lexend text-xl font-bold text-anthracite uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
             href="/contact"
             className="btn-primary mt-4"
             onClick={() => setIsMobileMenuOpen(false)}
          >
            Offerte Aanvragen
          </Link>
        </div>
      )}
    </header>
  );
}

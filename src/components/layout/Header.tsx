"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Diensten', href: '#diensten' },
  { name: 'Projecten', href: '#projecten' },
  { name: 'Over Ons', href: '#over-ons' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-accent p-2 rounded-sm">
             <span className="font-lexend font-bold text-white text-xl tracking-tighter">V</span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-lexend font-bold text-lg leading-tight uppercase tracking-widest",
              isScrolled ? "text-anthracite" : "text-white"
            )}>Verhulst</span>
            <span className={cn(
              "text-[10px] font-medium uppercase tracking-[0.2em]",
              isScrolled ? "text-muted-foreground" : "text-white/80"
            )}>Grond- en Betonwerken</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'font-lexend text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent',
                isScrolled ? 'text-anthracite' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="tel:0474748141"
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-sm font-lexend text-sm font-bold transition-all",
              isScrolled
                ? "bg-anthracite text-white hover:bg-accent"
                : "bg-white text-anthracite hover:bg-accent hover:text-white"
            )}
          >
            <Phone size={16} />
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
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-6 right-6 text-anthracite"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-lexend text-2xl font-bold text-anthracite uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
             href="#contact"
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

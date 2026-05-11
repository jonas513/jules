"use client";

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-anthracite">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Site"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1 bg-accent text-white font-lexend text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Snelheid • Nauwkeurigheid • Flexibiliteit
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white mb-8 leading-[1.1] uppercase tracking-tighter font-bold">
            Vakmanschap onder de <br className="hidden md:block" /> <span className="text-accent">Oppervlakte</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Verhulst is uw gespecialiseerde partner voor complexe grond- en betonwerken. Wij leggen de basis voor uw succes met modern materieel en diepgaande expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Laten we uw project bespreken
            </Link>
            <Link href="#diensten" className="btn-outline border-white text-white hover:bg-white hover:text-anthracite w-full sm:w-auto">
              Onze Expertise
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, opacity: { delay: 1, duration: 1 } }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Scroll</span>
        <ArrowDown size={20} className="opacity-60" />
      </motion.div>
    </section>
  );
}

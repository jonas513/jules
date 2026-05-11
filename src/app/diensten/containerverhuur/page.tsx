"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ContainerverhuurPage() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop"
            alt="Containerverhuur"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Expertise</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Containerverhuur</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                Flexibele Oplossingen <br /><span className="text-accent">voor uw Afval</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Efficiënt afvalbeheer is onmisbaar op elke bouwwerf of bij grote opruimwerken. Verhulst biedt een breed scala aan containers voor diverse afvalstromen, zodat u zich kunt concentreren op het werk zelf.
                </p>
                <p>
                  Wij leveren en halen containers snel op in de regio, met een focus op stiptheid en flexibiliteit. Of u nu nood heeft aan een container voor korte duur of voor een langlopend project, wij bieden een oplossing op maat.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Containers voor bouw- en sloopafval",
                  "Grond- en steenpuin",
                  "Houtafval",
                  "Groenafval",
                  "Snelle levering en ophaling",
                  "Diverse volumes beschikbaar"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="font-lexend text-xs uppercase tracking-wider font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted p-4">
               <div className="w-full aspect-square bg-anthracite-light flex items-center justify-center p-12">
                  <span className="text-white/20 font-lexend font-bold text-6xl text-center uppercase tracking-tighter leading-none">Container <br /> Verhuur</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Container <span className="text-accent">Nodig?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12">
             Wilt u direct een container bestellen of meer informatie over onze tarieven? Wij helpen u graag verder.
           </p>
           <Link href="/contact" className="btn-primary">
             Bestel uw Container <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

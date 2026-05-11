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
            src="/projects/project-4.jpg"
            alt="Containerverhuur Verhulst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Efficiënte Logistiek</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Containerverhuur & Afvoer</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                Logistieke Zorg <br /><span className="text-accent">Uit Uw Handen</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Een georganiseerde werf begint bij een vlekkeloze afvoer van materialen. Verhulst biedt flexibele containeroplossingen voor diverse afvalstromen. Wij zorgen ervoor dat u zich ongestoord kunt focussen op uw kernactiviteiten, terwijl wij de logistiek van uw reststromen beheren.
                </p>
                <p>
                  Onze stiptheid is onze trots. Wij leveren en halen containers op volgens afspraak in de regio West-Vlaanderen. Met diverse volumes en een klantgerichte aanpak bieden wij de ondersteuning die nodig is voor zowel kortlopende opruimwerken als grootschalige bouwprojecten.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Bouw- en sloopafval",
                  "Grond- en steenpuin",
                  "Hout- en groenafval",
                  "Diverse volumes (10m³ - 30m³)",
                  "Snelle levering & stipte ophaling",
                  "Transparante tarieven"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="font-lexend text-[10px] uppercase tracking-wider font-bold text-anthracite">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-muted p-4 shadow-sm"
            >
               <img
                 src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                 alt="Containerverhuur Logistiek"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 lg:py-32 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Direct een <span className="text-accent">Container Bestellen?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12 text-lg">
             Kies voor de snelheid en betrouwbaarheid van Verhulst. Wij regelen de rest.
           </p>
           <Link href="/contact" className="btn-primary">
             Laten we uw project bespreken <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function KlinkerwerkenPage() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1590059132218-10300bf5ec27?q=80&w=2070&auto=format&fit=crop"
            alt="Klinkerwerken Verhulst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Onze Expertise</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Klinkerwerken & Bestrating</h1>
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
                Esthetiek Ontmoet <span className="text-accent">Duurzaamheid</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Na de grond- en betonwerken volgt de finale afwerking van uw terrein. Verhulst is gespecialiseerd in het aanleggen van duurzame bestrating voor zowel industriële als private projecten. Onze klinkerwerken combineren esthetische kwaliteit met de nodige belastbaarheid.
                </p>
                <p>
                  Of het nu gaat om een oprit, parking of bedrijfsterrein, wij zorgen voor een vakkundige uitvoering en een perfecte afwatering. Wij adviseren u graag in de materiaalkeuze die het best past bij de beoogde belasting en uitstraling van uw project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Aanleg van opritten",
                  "Industriële parkings",
                  "Diverse klinkertypes",
                  "Perfecte afwatering",
                  "Boordsteenplaatsing",
                  "Totaalafwerking terrein"
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
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
                 alt="Bestrating Verhulst"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 lg:py-32 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Een duurzame <span className="text-accent">afwerking nodig?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12 text-lg">
             Wij realiseren bestrating die jarenlang meegaat. Vraag een vrijblijvende offerte aan.
           </p>
           <Link href="/contact" className="btn-primary">
             Vraag uw offerte aan <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

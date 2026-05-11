"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function GrondwerkenPage() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://www.grondwerkenverhulst.be/files/banner/1/11/20250508140645_d.jpg"
            alt="Grondwerken"
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
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Grondwerken</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                Precisie van de <br /><span className="text-accent">Eerste Spade</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Of het nu gaat om het bouwrijp maken van terreinen, omvangrijke graafwerkzaamheden of het nauwkeurig nivelleren van de ondergrond: Verhulst biedt een totaaloplossing voor elk grondverzetproject.
                </p>
                <p>
                  Met ons modern machinepark en ervaren team garanderen wij een efficiënte uitvoering. Wij werken met geavanceerde technologieën zoals lasergestuurd materieel om millimetermerk te leveren, essentieel voor de verdere opbouw van uw constructie.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Bouwrijp maken van terreinen",
                  "Graafwerken voor funderingen",
                  "Nivelleringswerken",
                  "Grondverzet & transport",
                  "Aanleg van regenwaterputten",
                  "Plaatsen van keerwanden"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="font-lexend text-xs uppercase tracking-wider font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted p-4">
               <img
                 src="https://www.grondwerkenverhulst.be/files/page/25/9/afbeelding-van-whatsapp-op-2024-06-12-om-222501e1f65b99.jpg"
                 alt="Grondwerken in uitvoering"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Klaar voor de <span className="text-accent">Start?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12">
             Heeft u een project dat grondige aanpak vereist? Neem contact met ons op voor een vrijblijvende offerte op maat van uw behoeften.
           </p>
           <Link href="/contact" className="btn-primary">
             Vraag een Offerte Aan <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

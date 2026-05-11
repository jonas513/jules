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
            alt="Grondwerken Verhulst"
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
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Grondwerken & Grondverzet</h1>
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
                De Ideale <span className="text-accent">Voorbereiding</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Elk bouwproject, groot of klein, valt of staat met de kwaliteit van de ondergrond. Bij Verhulst begrijpen we dat precisie in de voorbereidende fase essentieel is voor de stabiliteit van uw constructie. Wij verzorgen uw grondwerken in West-Vlaanderen met de grootste zorg en technische vakkundigheid.
                </p>
                <p>
                  Dankzij ons modern machinepark, uitgerust met de nieuwste lasergestuurde technologieën, leveren we graafwerk en nivellering op de millimeter nauwkeurig. Of het nu gaat om industriële terreinen of private bouwpercelen, wij bieden de snelheid en nauwkeurigheid die uw project verdient.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Bouwrijp maken van terreinen",
                  "Graafwerken voor funderingen",
                  "Nivelleringswerken met laser",
                  "Grondverzet & logistiek",
                  "Aanleg van infrastructuur",
                  "Plaatsen van keerwanden"
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
                 src="https://www.grondwerkenverhulst.be/files/page/25/9/afbeelding-van-whatsapp-op-2024-06-12-om-222501e1f65b99.jpg"
                 alt="Grondwerken West-Vlaanderen"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 lg:py-32 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Klaar voor een <span className="text-accent">Technische Analyse?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12 text-lg">
             Wij denken graag met u mee vanaf de eerste spadesteek. Laat ons weten wat uw plannen zijn.
           </p>
           <Link href="/contact" className="btn-primary">
             Laten we uw project bespreken <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

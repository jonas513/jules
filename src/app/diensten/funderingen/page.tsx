"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function FunderingenPage() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://www.grondwerkenverhulst.be/files/banner/1/8/afbeelding-van-whatsapp-op-2024-06-12-om-222840f5c58da5_d.jpg"
            alt="Industriële Funderingen Verhulst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Specialisatie</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Industriële Funderingen</h1>
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
                Solide Basis voor <br /><span className="text-accent">Uw Ambities</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  De fundering is het meest kritieke onderdeel van elk bouwwerk. Bij Verhulst hebben we ons gespecialiseerd in het realiseren van complexe funderingen voor industriële gebouwen en grootschalige constructies. Wij zorgen voor een onwankelbaar fundament waarop u met een gerust hart kunt bouwen.
                </p>
                <p>
                  Onze aanpak kenmerkt zich door uiterste precisie. Door het gebruik van geavanceerde meetapparatuur, zoals Leica Total Stations, garanderen we dat elke ankerplaat en elke funderingsbalk exact volgens plan wordt geplaatst. In combinatie met ons modern machinepark resulteert dit in een efficiënte en foutloze uitvoering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Funderingen voor bedrijfsgebouwen",
                  "Algemene funderingsplaten",
                  "Sleuf- en putfunderingen",
                  "Uitzetten met Leica Total Station",
                  "Plaatsen van ankerplaten & bouten",
                  "Gewapende funderingsbalken"
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
                 src="https://www.grondwerkenverhulst.be/files/page/24/7/20240705091405.jpg"
                 alt="Funderingswerken in West-Vlaanderen"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 lg:py-32 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Precisie op het <span className="text-accent">Hoogste Niveau</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12 text-lg">
             Wilt u de zekerheid van een perfect uitgevoerde fundering voor uw volgende project?
           </p>
           <Link href="/contact" className="btn-primary">
             Vraag een technische analyse aan <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

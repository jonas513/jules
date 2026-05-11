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
            alt="Funderingen"
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
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Funderingen</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                De Basis van elk <br /><span className="text-accent">Succesverhaal</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  De basis van elk succesvol bouwproject ligt in de fundering. Bij Verhulst begrijpen we dat structurele integriteit begint bij wat er onder het oppervlak zit. Wij zetten onze diepgaande expertise in om ervoor te zorgen dat uw bedrijfsgebouw op een onwankelbare basis staat.
                </p>
                <p>
                  Wij werken met de nieuwste technologieën, waaronder gerobotiseerde total stations voor uiterst nauwkeurige uitzettingen, om een optimale fundering te garanderen die voldoet aan de strengste technische eisen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Funderingen voor bedrijfsgebouwen",
                  "Algemene funderingsplaten",
                  "Sleuffunderingen",
                  "Uitzetten met Leica Total Station",
                  "Plaatsen van ankerplaten",
                  "Funderingsbalken"
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
                 src="https://www.grondwerkenverhulst.be/files/page/24/7/20240705091405.jpg"
                 alt="Funderingswerken"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Nauwkeurigheid is <span className="text-accent">Cruciaal</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12">
             Wilt u zeker zijn van een solide basis voor uw constructie? Verhulst biedt de technische precisie die uw project verdient.
           </p>
           <Link href="/contact" className="btn-primary">
             Praat met een Expert <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

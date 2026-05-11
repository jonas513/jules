"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function BetonwerkenPage() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://www.grondwerkenverhulst.be/files/banner/1/10/20240826095134_d.jpg"
            alt="Betonwerken"
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
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Betonwerken</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 bg-muted p-4">
               <img
                 src="https://www.grondwerkenverhulst.be/files/page/26/8/afbeelding-van-whatsapp-op-2024-06-12-om-22051950e76006.jpg"
                 alt="Betonwerken in uitvoering"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                Onverwoestbare <br /><span className="text-accent">Constructies</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Beton is het fundament van de moderne bouw. Bij Verhulst combineren we jarenlange expertise met de hoogste kwaliteitsnormen om betonwerken te leveren die generaties lang meegaan.
                </p>
                <p>
                  Van industriële funderingsplaten tot complexe betonnen wanden en vloeren: wij zorgen voor een perfecte uitvoering en een onberispelijke afwerking. Onze focus op precisie garandeert dat elk element voldoet aan de structurele vereisten van uw project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Industriële betonvloeren",
                  "Funderingsplaten",
                  "Betonnen wanden en kolommen",
                  "Gewapend betonconstructies",
                  "Gepolierd beton",
                  "Maatwerk betonoplossingen"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="font-lexend text-xs uppercase tracking-wider font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Bouw op een <span className="text-accent">Sterke Basis</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12">
             Heeft u nood aan hoogwaardig betonwerk voor uw volgende project? Onze experts staan klaar om u te adviseren.
           </p>
           <Link href="/contact" className="btn-primary">
             Vraag een Offerte Aan <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

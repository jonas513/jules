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
            alt="Betonwerken Verhulst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Gespecialiseerde Technieken</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Hoogwaardige Betonwerken</h1>
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
              className="order-2 lg:order-1 bg-muted p-4 shadow-sm"
            >
               <img
                 src="https://www.grondwerkenverhulst.be/files/page/26/8/afbeelding-van-whatsapp-op-2024-06-12-om-22051950e76006.jpg"
                 alt="Betonwerken uitvoering"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                Duurzaamheid in <br /><span className="text-accent">Elk Detail</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Beton vormt de ruggengraat van moderne infrastructuur. Bij Verhulst combineren we vakkennis met een passie voor kwaliteit om betonconstructies te realiseren die voldoen aan de strengste technische eisen. Wij garanderen een structurele integriteit die de tand des tijds doorstaat.
                </p>
                <p>
                  Van gepolierde industriële vloeren tot complexe gewapende betonconstructies en wanden: onze aanpak is altijd resultaatgericht. Met oog voor detail en een efficiënte planning zorgen we voor een vlekkeloze integratie binnen uw totaalproject.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Industriële betonvloeren",
                  "Funderingsplaten op maat",
                  "Betonnen wanden & kolommen",
                  "Gewapend betonconstructies",
                  "Gepolierde afwerkingen",
                  "Beton voor infrastructurele werken"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="font-lexend text-[10px] uppercase tracking-wider font-bold text-anthracite">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 lg:py-32 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Bouw op een <span className="text-accent">Zekere Basis</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12 text-lg">
             Zoekt u een partner die technische uitdagingen omzet in solide oplossingen?
           </p>
           <Link href="/contact" className="btn-primary">
             Vraag een technische analyse aan <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AfbraakwerkenPage() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop"
            alt="Afbraakwerken Verhulst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Gecontroleerde Uitvoering</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Vakkundige Afbraakwerken</h1>
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
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
                 alt="Afbraakwerken uitvoering"
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
                Ruimte voor <br /><span className="text-accent">Nieuwe Projecten</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Afbraak is een vak apart waar veiligheid en precisie centraal staan. Bij Verhulst benaderen we elk afbraakproject met een strategisch plan om de impact op de omgeving te minimaliseren en de site optimaal voor te bereiden op haar nieuwe bestemming.
                </p>
                <p>
                  Met ons gespecialiseerd machinepark voeren wij zowel totale als gedeeltelijke afbraakwerken uit voor private en industriële klanten. Wij garanderen een verantwoorde verwerking van alle reststromen, waarbij recyclage en milieuzorg steeds onze prioriteit zijn.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Totale gebouwafbraak",
                  "Selectieve ontmanteling",
                  "Industriële sloopwerken",
                  "Gecertificeerde afvoer",
                  "Sortering aan de bron",
                  "Bouwklaar maken van terreinen"
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
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Een Schone <span className="text-accent">Lei Nodig?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12 text-lg">
             Wij zorgen voor een vakkundige afbraak en een zorgeloze start van uw nieuwe plannen.
           </p>
           <Link href="/contact" className="btn-primary">
             Laten we uw project bespreken <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

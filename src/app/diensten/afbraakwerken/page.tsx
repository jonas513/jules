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
            alt="Afbraakwerken"
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
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Afbraakwerken</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 bg-muted p-4">
               <img
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
                 alt="Afbraakwerken in uitvoering"
                 className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                Gecontroleerde <br /><span className="text-accent">Vernieuwing</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Afbraak is vaak de eerste stap naar iets nieuws. Bij Verhulst voeren we afbraakwerken uit met de grootste zorg voor veiligheid, omgeving en milieu. Wij zorgen ervoor dat de site snel en vakkundig wordt klaargemaakt voor de volgende fase.
                </p>
                <p>
                  Of het nu gaat om de volledige afbraak van een gebouw of selectieve ontmanteling, wij beschikken over het juiste materieel en de nodige vergunningen om de klus professioneel te klaren. De materialen worden steeds gesorteerd en op verantwoorde wijze afgevoerd voor recyclage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {[
                  "Volledige gebouwafbraak",
                  "Selectieve ontmanteling",
                  "Industriële afbraakwerken",
                  "Sorteren van materialen",
                  "Veilige asbestverwijdering (indien nodig)",
                  "Bouwklaar maken van de site"
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
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Ruimte voor <span className="text-accent">Nieuwe Mogelijkheden</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12">
             Heeft u een gebouw of site die moet worden vrijgemaakt? Neem vandaag nog contact met ons op voor een professionele aanpak.
           </p>
           <Link href="/contact" className="btn-primary">
             Vraag een Offerte Aan <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

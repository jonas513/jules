"use client";

import { motion } from 'framer-motion';
import { ArrowRight, History, Target, Users } from 'lucide-react';
import Link from 'next/link';

export default function OverOnsPage() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
            alt="Over Verhulst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Onze Identiteit</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Vakmanschap met een <br className="hidden md:block" /> Familiaal Karakter</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                De Perfecte <span className="text-accent">Basis</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Bij Verhulst grond- en betonwerken bouwen we op een fundament van jarenlange ervaring en diepgewortelde expertise. Wat begon als een passie voor precisie in grondverzet, is geëvolueerd naar een full-service partner voor complexe infrastructuur- en funderingsprojecten.
                </p>
                <p>
                  Wij geloven dat elk succesvol bouwproject begint bij een perfecte voorbereiding. Daarom investeren we continu in ons eigen modern machinepark en de opleiding van onze vakmensen. Ondanks onze groei behouden we ons familiaal karakter: korte communicatielijnen, eerlijk advies en een onvermoeibare inzet voor elk project.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <img
                 src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop"
                 alt="Verhulst Team"
                 className="w-full h-auto grayscale"
               />
               <div className="absolute -bottom-6 -right-6 bg-accent p-8 text-white hidden md:block shadow-xl">
                  <span className="font-lexend font-bold text-4xl block">15+</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Jaar Ervaring</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-32">
        <div className="section-container">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <History size={32} />, title: "Expertise", desc: "Decennia aan opgebouwde kennis vertaald naar moderne oplossingen." },
                { icon: <Target size={32} />, title: "Eigen Materieel", desc: "Volledige onafhankelijkheid dankzij een modern en uitgebreid machinepark." },
                { icon: <Users size={32} />, title: "Betrouwbaarheid", desc: "Een familiaal team dat afspraken nakomt en streeft naar perfectie." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-10 border-t-4 border-accent shadow-sm"
                >
                   <div className="text-accent mb-6">{item.icon}</div>
                   <h3 className="text-xl uppercase tracking-wider mb-4 font-bold">{item.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 lg:py-32 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Klaar voor de <span className="text-accent">Eerste Stap?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12 text-lg">
             Ontdek hoe onze vakkundigheid de ideale basis vormt voor uw industriële of private bouwplannen.
           </p>
           <Link href="/contact" className="btn-primary">
             Laten we uw project bespreken <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

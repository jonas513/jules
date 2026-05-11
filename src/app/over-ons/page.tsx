"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, History, Target, Users } from 'lucide-react';
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
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Over Ons</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Vakmanschap & Visie</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
                Onze <span className="text-accent">Historie</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Bij Verhulst grond- en betonwerken staan wij al jarenlang garant voor kwaliteit in de bouwsector. Wat begon als een passie voor grondverzet is uitgegroeid tot een gespecialiseerde onderneming met een focus op industriële funderingen en complexe betonconstructies.
                </p>
                <p>
                  Ons team van deskundige vakmensen combineert ervaring met moderne technologie om elk project tot een goed einde te brengen. Snelheid, nauwkeurigheid en flexibiliteit zijn niet alleen onze kernwaarden, het is de manier waarop wij elk project aanpakken.
                </p>
              </div>
            </div>
            <div className="relative">
               <img
                 src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop"
                 alt="Verhulst Team"
                 className="w-full h-auto grayscale"
               />
               <div className="absolute -bottom-6 -right-6 bg-accent p-8 text-white hidden md:block">
                  <span className="font-lexend font-bold text-4xl block">15+</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Jaar Ervaring</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="section-container">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <History size={32} />, title: "Ervaring", desc: "Decennia aan opgebouwde kennis in grond- en betonwerken." },
                { icon: <Target size={32} />, title: "Focus", desc: "Specialisatie in grootschalige industriële funderingen." },
                { icon: <Users size={32} />, title: "Team", desc: "Een hechte ploeg van gedreven en deskundige vakmensen." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-10 border-t-4 border-accent shadow-sm">
                   <div className="text-accent mb-6">{item.icon}</div>
                   <h3 className="text-xl uppercase tracking-wider mb-4 font-bold">{item.title}</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Wilt u meer <span className="text-accent">Weten?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12">
             Ontdek hoe onze expertise de perfecte basis kan vormen voor uw volgende project.
           </p>
           <Link href="/contact" className="btn-primary">
             Neem Contact Op <ArrowRight size={18} className="ml-2" />
           </Link>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    title: "Ervaren Kraanman",
    location: "Werven regio West-Vlaanderen",
    type: "Voltijds",
    desc: "Ben jij een ervaren kraanman die zelfstandig projecten kan coördineren? Wij zoeken een gedreven collega voor onze graafmachines."
  }
];

export default function VacaturesPage() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
            alt="Werken bij Verhulst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Careers</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Bouw mee aan de Toekomst</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl uppercase tracking-tighter text-anthracite mb-8">
              Word deel van ons <span className="text-accent">Team</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Bij Verhulst grond- en betonwerken zijn we altijd op zoek naar gedreven talent om ons team te versterken. Wij bieden een no-nonsense werkomgeving met moderne machines en afwisselende werven.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-muted p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-l-8 border-accent"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 text-accent">
                    <Briefcase size={18} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">{job.type}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl uppercase tracking-wider mb-2 font-bold">{job.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-xl">{job.desc}</p>
                </div>
                <Link href="/contact" className="btn-primary shrink-0">
                  Solliciteer Nu <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="section-container">
           <h2 className="text-2xl md:text-4xl uppercase tracking-tighter text-anthracite mb-12 text-center">Wat wij <span className="text-accent">Bieden</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Loon naar Ervaring", icon: <CheckCircle2 size={24} /> },
                { title: "Modern Machinepark", icon: <CheckCircle2 size={24} /> },
                { title: "Werkzekerheid", icon: <CheckCircle2 size={24} /> },
                { title: "Toffe Werksfeer", icon: <CheckCircle2 size={24} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-sm shadow-sm">
                   <div className="text-accent">{item.icon}</div>
                   <span className="font-lexend text-xs font-bold uppercase tracking-wider">{item.title}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="bg-anthracite py-20 text-white">
        <div className="section-container text-center">
           <h2 className="text-3xl md:text-5xl uppercase tracking-tighter mb-8">Geen passende <span className="text-accent">Vacature?</span></h2>
           <p className="max-w-2xl mx-auto text-white/60 mb-12">
             Spontane sollicitaties zijn altijd welkom. Stuur ons je CV en we bekijken de mogelijkheden.
           </p>
           <Link href="mailto:gregory@grondwerkenverhulst.be" className="btn-outline border-white text-white hover:bg-white hover:text-anthracite">
             Stuur Open Sollicitatie
           </Link>
        </div>
      </section>
    </main>
  );
}

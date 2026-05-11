"use client";

import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: "Industriële Fundering", location: "Oostrozebeke", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", size: "large" },
  { id: 2, title: "Grondverzet Woonwijk", location: "Waregem", image: "https://images.unsplash.com/photo-1531834351336-787595d03328?q=80&w=2071&auto=format&fit=crop", size: "small" },
  { id: 3, title: "Betonwerken Magazijn", location: "Kortrijk", image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop", size: "small" },
  { id: 4, title: "Afbraakwerken Site X", location: "Roeselare", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop", size: "large" },
];

export default function ProjectGallery() {
  return (
    <section id="projecten" className="bg-muted overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl uppercase tracking-tighter text-anthracite leading-none">Gerealiseerde <br /> <span className="text-accent">Projecten</span></h2>
          </div>
          <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
            Onze projecten getuigen van technische precisie en een onvermoeibare inzet voor kwaliteit. Van kleinschalige grondwerken tot complexe industriële fundamenten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden bg-anthracite ${
                project.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-anthracite/20 group-hover:bg-transparent transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between border-b border-white/20 pb-4">
                    <div>
                      <span className="text-accent text-[10px] uppercase tracking-widest font-bold mb-1 block">{project.location}</span>
                      <h4 className="text-white text-xl uppercase tracking-wider">{project.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

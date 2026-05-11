"use client";

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Govar Waregem",
    discipline: "Grondverzet & Nivellering",
    location: "Waregem",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "Lutosa",
    discipline: "Industriële Funderingen",
    location: "Leuze-en-Hainaut",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "Myldes Menen",
    discipline: "Betonwerken & Infrastructuur",
    location: "Menen",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    title: "Beeuwsaert Ledegem",
    discipline: "Funderingen & Grondwerken",
    location: "Ledegem",
    image: "https://images.unsplash.com/photo-1531834351336-787595d03328?q=80&w=2071&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 5,
    title: "Altez Kortrijk",
    discipline: "Grond- en Betonwerken",
    location: "Kortrijk",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 6,
    title: "Verelst Oostakker",
    discipline: "Industriële Afbraakwerken",
    location: "Oostakker",
    image: "https://images.unsplash.com/photo-1541976535096-2855664bc869?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
];

export default function ProjectGallery() {
  return (
    <section id="projecten" className="bg-muted overflow-hidden py-24 lg:py-32">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Onze Realisaties</span>
            <h2 className="text-4xl md:text-5xl uppercase tracking-tighter text-anthracite leading-none">Vakmanschap in <br /> <span className="text-accent">Uitvoering</span></h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md text-muted-foreground text-sm leading-relaxed"
          >
            Onze projecten vormen het bewijs van onze technische precisie en toewijding. Wij realiseren solide fundamenten voor toonaangevende industriële partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden bg-anthracite shadow-2xl ${
                project.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="aspect-[16/10] md:aspect-video relative">
                <img
                  src={project.image}
                  alt={`${project.discipline} - ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-anthracite/40 group-hover:bg-anthracite/10 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="border-b border-white/20 pb-4">
                    <span className="text-accent text-[10px] uppercase tracking-widest font-bold mb-2 block">{project.discipline}</span>
                    <h4 className="text-white text-2xl uppercase tracking-tighter font-bold">{project.title}</h4>
                    <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white/60 text-[10px] uppercase tracking-widest">{project.location}</span>
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

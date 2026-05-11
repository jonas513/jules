"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function ServiceCard({ title, description, image, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-white aspect-[4/5] flex items-end"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/20 to-transparent z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="relative z-20 p-8 w-full transition-transform duration-500 group-hover:-translate-y-4">
        <span className="text-accent font-lexend text-4xl font-bold opacity-30 mb-2 block">0{index + 1}</span>
        <h3 className="text-2xl text-white mb-3 uppercase tracking-wider">{title}</h3>
        <p className="text-white/60 text-sm mb-6 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 text-white font-lexend text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors"
        >
          Ontdek meer <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

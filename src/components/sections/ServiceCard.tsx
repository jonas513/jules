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
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-white aspect-[4/5] flex items-end border-r border-white/10 last:border-r-0"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/40 to-transparent z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
      </div>

      <div className="relative z-20 p-10 w-full transition-transform duration-500 group-hover:-translate-y-4">
        <span className="text-accent font-lexend text-5xl font-bold opacity-10 mb-4 block">0{index + 1}</span>
        <h3 className="text-2xl text-white mb-4 uppercase tracking-tighter font-bold">{title}</h3>
        <p className="text-white/70 text-sm mb-8 line-clamp-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          {description}
        </p>
        <Link
          href={`/diensten/${slug}`}
          className="inline-flex items-center gap-2 text-white font-lexend text-[10px] font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors"
        >
          Bekijk Expertise <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

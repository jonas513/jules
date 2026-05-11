"use client";

import { motion } from 'framer-motion';
import ContactForm from '@/components/sections/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-anthracite">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Verhulst"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Bereikbaarheid</span>
            <h1 className="text-4xl md:text-6xl text-white uppercase tracking-tighter">Contacteer Ons</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
              {[
                { icon: <MapPin size={24} />, title: "Adres", text: "Merelstraat 20, 8780 Oostrozebeke" },
                { icon: <Phone size={24} />, title: "Telefoon", text: "0474/74.81.41" },
                { icon: <Mail size={24} />, title: "E-mail", text: "gregory@grondwerkenverhulst.be" },
                { icon: <Clock size={24} />, title: "Openingsuren", text: "Ma - Vr: 07:00 - 18:00" }
              ].map((item, idx) => (
                <div key={idx} className="bg-muted p-8 flex flex-col items-center text-center">
                   <div className="text-accent mb-4">{item.icon}</div>
                   <h4 className="font-lexend font-bold uppercase tracking-wider mb-2 text-xs">{item.title}</h4>
                   <p className="text-muted-foreground text-sm font-medium">{item.text}</p>
                </div>
              ))}
           </div>

           <div className="w-full h-[450px] bg-muted grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.7932653906946!2d3.340843777025458!3d50.927541171687245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33f2687a2a9eb%3A0xd183e7fd0dae8f0e!2sMerelstraat%2020%2C%208780%20Oostrozebeke!5e0!3m2!1sen!2sbe!4v1717758496942!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
        </div>
      </section>

      <div className="bg-muted">
        <ContactForm />
      </div>
    </main>
  );
}

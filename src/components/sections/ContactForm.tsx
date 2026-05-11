"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Naam is verplicht" }),
  email: z.string().email({ message: "Ongeldig e-mailadres" }),
  phone: z.string().min(10, { message: "Ongeldig telefoonnummer" }),
  service: z.string().min(1, { message: "Kies een dienst" }),
  message: z.string().min(10, { message: "Bericht moet minimaal 10 tekens bevatten" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Simuleer verzending
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Bericht verzonden!");
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-6xl uppercase tracking-tighter text-anthracite leading-[1.1] mb-8">
            Klaar om te <br /> <span className="text-accent">Bouwen?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md">
            Heeft u een project in gedachten of wilt u meer informatie over onze diensten? Vul het formulier in en we nemen zo snel mogelijk contact met u op.
          </p>

          <div className="space-y-8">
             <div className="flex gap-6">
                <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                   <span className="text-accent font-bold">01</span>
                </div>
                <div>
                   <h4 className="font-lexend font-bold uppercase tracking-wider mb-2">Bel ons direct</h4>
                   <p className="text-muted-foreground">0474/74.81.41</p>
                </div>
             </div>
             <div className="flex gap-6">
                <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                   <span className="text-accent font-bold">02</span>
                </div>
                <div>
                   <h4 className="font-lexend font-bold uppercase tracking-wider mb-2">E-mail ons</h4>
                   <p className="text-muted-foreground">gregory@grondwerkenverhulst.be</p>
                </div>
             </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-muted p-8 md:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-anthracite">Naam</label>
                <input
                  {...register("name")}
                  className="w-full bg-white border-b border-border p-4 focus:outline-none focus:border-accent transition-colors"
                />
                {errors.name && <p className="text-red-500 text-[10px] uppercase">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-anthracite">E-mail</label>
                <input
                  {...register("email")}
                  className="w-full bg-white border-b border-border p-4 focus:outline-none focus:border-accent transition-colors"
                />
                {errors.email && <p className="text-red-500 text-[10px] uppercase">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-anthracite">Telefoon</label>
                <input
                  {...register("phone")}
                  className="w-full bg-white border-b border-border p-4 focus:outline-none focus:border-accent transition-colors"
                />
                {errors.phone && <p className="text-red-500 text-[10px] uppercase">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-anthracite">Interesse in</label>
                <select
                  {...register("service")}
                  className="w-full bg-white border-b border-border p-4 focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Selecteer een dienst</option>
                  <option value="grondwerken">Grondwerken</option>
                  <option value="betonwerken">Betonwerken</option>
                  <option value="funderingen">Funderingen</option>
                  <option value="afbraak">Afbraakwerken</option>
                  <option value="container">Containerverhuur</option>
                  <option value="andere">Andere</option>
                </select>
                {errors.service && <p className="text-red-500 text-[10px] uppercase">{errors.service.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-anthracite">Bericht</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full bg-white border-b border-border p-4 focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-[10px] uppercase">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full group"
            >
              {isSubmitting ? "Verzenden..." : "Verstuur Aanvraag"}
              <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

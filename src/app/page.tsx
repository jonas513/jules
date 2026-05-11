import Hero from '@/components/sections/Hero';
import ServiceCard from '@/components/sections/ServiceCard';
import ProjectGallery from '@/components/sections/ProjectGallery';
import ContactForm from '@/components/sections/ContactForm';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Grondwerken",
    description: "Van bouwrijp maken van terreinen tot complexe nivelleringswerken. Wij beschikken over het modernste materieel voor elk type terrein.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Betonwerken",
    description: "Gespecialiseerde betonconstructies voor industriële toepassingen. Wij garanderen structurele integriteit en een onberispelijke afwerking.",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Funderingen",
    description: "De basis van elk succesvol gebouw. Wij verzorgen funderingswerken voor grote bedrijfsgebouwen met uiterste precisie.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Afbraakwerken",
    description: "Gecontroleerde afbraak van constructies met oog voor veiligheid en milieubewuste recyclage van materialen.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop"
  }
];

const usps = [
  {
    icon: <Zap className="text-accent" size={32} />,
    title: "Snelheid",
    text: "Wij begrijpen dat tijd geld is in de bouwsector. Onze strakke planning garandeert een tijdige oplevering."
  },
  {
    icon: <CheckCircle2 className="text-accent" size={32} />,
    title: "Nauwkeurigheid",
    text: "Door gebruik te maken van geavanceerde technologie en lasergestuurd materieel leveren we millimetermerk."
  },
  {
    icon: <ShieldCheck className="text-accent" size={32} />,
    title: "Betrouwbaarheid",
    text: "Jarenlange ervaring en een transparante werkwijze maken ons de partner bij uitstek voor uw project."
  }
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Intro Section */}
      <section id="over-ons" className="bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Welkom bij Verhulst</span>
              <h2 className="text-4xl md:text-6xl uppercase tracking-tighter text-anthracite leading-none mb-8">
                Uw Partner in <br /> <span className="text-accent">Infrastructuur</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Bij Verhulst grond- en betonwerken staan wij garant voor snelheid, nauwkeurigheid en flexibiliteit. Wij zijn gespecialiseerd in het leggen van sterke fundamenten voor de toekomst, met een bijzondere focus op industriële bouwprojecten.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {['Maatwerkoplossingen', 'Innovatieve Technologie', 'Deskundig Team', 'Gecertificeerde Kwaliteit'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <span className="font-lexend text-sm font-semibold uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="#contact" className="btn-outline group">
                Ontdek Onze Aanpak
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
               <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531834351336-787595d03328?q=80&w=2071&auto=format&fit=crop"
                    alt="Verhulst in actie"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-anthracite p-10 hidden md:block">
                  <span className="text-accent text-5xl font-bold block mb-2">15+</span>
                  <span className="text-white text-xs uppercase tracking-widest font-bold">Jaar Ervaring <br /> in de Sector</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="bg-anthracite py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-lexend text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Onze Expertise</span>
              <h2 className="text-4xl md:text-6xl uppercase tracking-tighter text-white leading-none">
                Gespecialiseerde <br /> <span className="text-accent">Diensten</span>
              </h2>
            </div>
            <p className="text-white/60 max-w-sm text-sm">
              Van de eerste spade in de grond tot de laatste betonstort, wij bieden een totaaloplossing voor uw bouwproject.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              index={idx}
              {...service}
            />
          ))}
        </div>
      </section>

      {/* USPs Section */}
      <section className="bg-white">
        <div className="section-container">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {usps.map((usp, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="mb-6 p-6 bg-muted rounded-full group hover:bg-accent transition-colors duration-500">
                    <div className="group-hover:text-white transition-colors duration-500">
                      {usp.icon}
                    </div>
                  </div>
                  <h3 className="text-xl uppercase tracking-wider mb-4">{usp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{usp.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <ProjectGallery />

      <ContactForm />
    </main>
  );
}

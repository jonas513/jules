import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-anthracite text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-accent p-2 rounded-sm">
               <span className="font-lexend font-bold text-white text-xl tracking-tighter">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-lexend font-bold text-lg leading-tight uppercase tracking-widest text-white">Verhulst</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">Grond- en Betonwerken</span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Gespecialiseerd in grond- en betonwerken met een focus op snelheid, nauwkeurigheid en innovatieve technologie. Uw partner voor grootschalige funderingsprojecten.
          </p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" className="bg-white/10 p-2 rounded-sm hover:bg-accent transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-lexend font-bold text-lg uppercase tracking-wider mb-6">Expertise</h4>
          <ul className="space-y-4">
            {['Grondwerken', 'Betonwerken', 'Funderingen', 'Afbraakwerken', 'Containerverhuur'].map((item) => (
              <li key={item}>
                <Link href="#diensten" className="text-white/60 hover:text-accent flex items-center gap-2 group transition-colors">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-lexend font-bold text-lg uppercase tracking-wider mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60">
              <MapPin size={20} className="text-accent shrink-0" />
              <span>Merelstraat 20,<br />8780 Oostrozebeke</span>
            </li>
            <li>
              <Link href="tel:0474748141" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                <Phone size={20} className="text-accent shrink-0" />
                <span>0474/74.81.41</span>
              </Link>
            </li>
            <li>
              <Link href="mailto:gregory@grondwerkenverhulst.be" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm break-all">
                <Mail size={20} className="text-accent shrink-0" />
                <span>gregory@grondwerkenverhulst.be</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-lexend font-bold text-lg uppercase tracking-wider mb-6">Nieuwsbrief</h4>
          <p className="text-white/60 text-sm mb-4">Blijf op de hoogte van onze nieuwste projecten en innovaties.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="E-mailadres"
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent w-full"
            />
            <button className="bg-accent px-4 py-3 hover:bg-opacity-90 transition-colors">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/40">
        <p>© 2024 Verhulst Grond- en Betonwerken. Alle rechten voorbehouden.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

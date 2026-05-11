import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <main className="pt-32 pb-24">
      <div className="section-container">
        <Link href="/" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={16} /> Terug naar Home
        </Link>
        <h1 className="text-4xl md:text-6xl uppercase tracking-tighter text-anthracite font-bold mb-12">Privacy Policy</h1>
        <div className="prose prose-lg max-w-4xl text-muted-foreground">
          <p>Verhulst Grond- en Betonwerken hecht groot belang aan uw privacy. In deze privacyverklaring leggen we uit welke persoonsgegevens we verzamelen en hoe we deze gebruiken.</p>

          <h2 className="text-2xl text-anthracite font-bold mt-8 mb-4">1. Gegevensverzameling</h2>
          <p>Wij verzamelen gegevens die u ons verstrekt via ons contactformulier, zoals uw naam, e-mailadres en telefoonnummer, om uw aanvraag te kunnen behandelen.</p>

          <h2 className="text-2xl text-anthracite font-bold mt-8 mb-4">2. Gebruik van Gegevens</h2>
          <p>Uw gegevens worden uitsluitend gebruikt voor de communicatie betreffende uw offerteaanvraag of project. Wij delen uw gegevens niet met derden voor commerciële doeleinden.</p>

          <h2 className="text-2xl text-anthracite font-bold mt-8 mb-4">3. Uw Rechten</h2>
          <p>U heeft te allen tijde het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via gregory@grondwerkenverhulst.be.</p>
        </div>
      </div>
    </main>
  );
}

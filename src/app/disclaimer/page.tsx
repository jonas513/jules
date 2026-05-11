import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Disclaimer() {
  return (
    <main className="pt-32 pb-24">
      <div className="section-container">
        <Link href="/" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-12 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={16} /> Terug naar Home
        </Link>
        <h1 className="text-4xl md:text-6xl uppercase tracking-tighter text-anthracite font-bold mb-12">Disclaimer</h1>
        <div className="prose prose-lg max-w-4xl text-muted-foreground">
          <p>De informatie op deze website is met de grootst mogelijke zorg samengesteld. Desondanks kunnen er geen rechten worden ontleend aan de inhoud ervan.</p>

          <h2 className="text-2xl text-anthracite font-bold mt-8 mb-4">1. Intellectueel Eigendom</h2>
          <p>Alle teksten, beelden en andere materialen op deze website zijn eigendom van Verhulst Grond- en Betonwerken of worden met toestemming gebruikt. Het is niet toegestaan deze zonder voorafgaande schriftelijke toestemming te kopiëren of te verspreiden.</p>

          <h2 className="text-2xl text-anthracite font-bold mt-8 mb-4">2. Aansprakelijkheid</h2>
          <p>Verhulst is niet aansprakelijk voor eventuele schade die voortvloeit uit het gebruik van de informatie op deze website of uit technische storingen.</p>

          <h2 className="text-2xl text-anthracite font-bold mt-8 mb-4">3. Externe Links</h2>
          <p>Deze website kan links bevatten naar externe websites. Verhulst is niet verantwoordelijk voor de inhoud of het privacybeleid van deze externe sites.</p>
        </div>
      </div>
    </main>
  );
}

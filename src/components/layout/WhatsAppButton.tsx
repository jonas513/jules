import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/32474748141"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
      aria-label="Contacteer ons via WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" className="text-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-lexend font-bold text-sm">
        Stuur een bericht
      </span>
    </Link>
  );
}

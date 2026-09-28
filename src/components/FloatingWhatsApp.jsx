import React from 'react';
import { siteData } from '../data/siteData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <a
        href={siteData.brand.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-[#25D366]/40 transition-all transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-heading font-bold text-xs sm:text-sm tracking-wide hidden sm:inline">
          Chat With Us
        </span>
      </a>
    </aside>
  );
}

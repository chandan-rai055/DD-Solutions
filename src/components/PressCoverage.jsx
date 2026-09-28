import React from 'react';
import { siteData } from '../data/siteData';
import { Newspaper } from 'lucide-react';

export default function PressCoverage() {
  const pressDoubled = [...siteData.press, ...siteData.press];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-slate-500">
          <Newspaper className="w-3.5 h-3.5 text-blue-600" />
          <span>Industry Recognition & Media Mentions</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pause-hover">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max marquee-track animate-marquee-reverse gap-8 items-center">
          {pressDoubled.map((outlet, idx) => (
            <div
              key={`${outlet}-${idx}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-heading font-bold text-sm tracking-wide hover:text-blue-600 hover:border-blue-400 transition-colors cursor-default shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span>{outlet}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

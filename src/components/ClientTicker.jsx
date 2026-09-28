import React from 'react';
import { siteData } from '../data/siteData';
import { Award } from 'lucide-react';

export default function ClientTicker() {
  const clientsList = [...siteData.clients, ...siteData.clients];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600 mb-3 shadow-sm">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>Strategic Brand Alliances</span>
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
          Not just clients, they are <span className="text-blue-600">trusted partners</span>
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
          Powering digital growth, high-converting platforms, and scalable technology for industry leaders.
        </p>
      </div>

      {/* Infinite scrolling ribbon */}
      <div className="relative w-full overflow-hidden pause-hover py-4">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max marquee-track animate-marquee gap-6 sm:gap-8">
          {clientsList.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default select-none shadow-sm group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center font-heading font-extrabold text-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {client.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-sm sm:text-base text-slate-800 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                  {client.industry} • {client.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
